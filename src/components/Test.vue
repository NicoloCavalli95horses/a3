<template>
  <section id="test">
    <h1 class="left">Carica un file PDF</h1>

    <div class="flex center" id="load">
      <label for="pdf" class="custom-file-upload"
        >Scegli file
        <input type="file" id="pdf" accept="pdf" />
      </label>
      <p>Nessun file selezionato</p>
    </div>

    <div id="pdf-render" class="flex center column"></div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  mounted() {
    let canvasContainer = document.querySelector("#pdf-render");

    document.querySelector("#pdf").onchange = function (event) {
      // listen to user input

      document.querySelector("#load").style.display = "none"; // hide the initial screen

      var file = event.target.files[0]; // read the file using file reader
      var fileReader = new FileReader();

      fileReader.onload = function () {
        var typedarray = new Uint8Array(this.result); // turn array buffer into typed array
        const loadingTask = pdfjsLib.getDocument(typedarray);

        loadingTask.promise.then((pdf) => {
          // load PDF then render every page
          for (let i = 1; i <= pdf.numPages; i++) {
            pdf.getPage(i).then((page) => {
              let viewport = page.getViewport({ scale: 2 });

              let newCanvas = document.createElement("canvas"); // each page is rendered in a different html canvas
              newCanvas.className = "canvas"; // with class canvas
              let ctx = newCanvas.getContext("2d");
              canvasContainer.appendChild(newCanvas); // append every canvas in the container
              newCanvas.height = viewport.height;
              newCanvas.width = viewport.width;
              page.render({ canvasContext: ctx, viewport });
            });
          }
        });
      };

      fileReader.readAsArrayBuffer(file); // Read the file as ArrayBuffer
    };
  },
};
</script>

<style>
#test {
  position: relative;
  top: 120px;
}

input[type="file"] {
  display: none;
}

.custom-file-upload {
  color: white;
  font-family: var(--mainFont);
  border: none;
  padding: 10px;
  background-color: var(--orange);
  border-radius: 3px;
  cursor: pointer;
}

#pdf-render {
  position: absolute;
  width: 100%;
  top: 0;
  background: var(--light-blue);
}

.canvas {
  margin-bottom: 20px;
}

#load {
  height: 50vh;
}

.video-test {
  position: absolute;
  border-radius: 50%;
  z-index: 11;
  margin-left: -200px;
}
</style>
