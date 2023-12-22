<template>
  <div class="text-wrapper">
    <h1 class="l-24 top-24">Welcome to A<sup>3</sup></h1>
    <div class="cards">
      <div class="card">
        <h3>The project</h3>
        <p>
          The A3 project offers an accessibility tool making it easier to
          interact with a local document such as a PDF
        </p>
      </div>
      <div class="card">
        <h3>How does it work?</h3>
        <p>
          Using your device's webcam, the system can record movements or
          gestures of your choice, allowing you to interact with the content of
          the page.
        </p>
      </div>
      <div class="card">
        <h3>title</h3>
        <p>
          To set up the system, you will need to select some initial images. The
          content of the image will be associated with a specific navigation
          command. For example, moving closer to the screen can be associated
          with enlarging the font.
        </p>
      </div>
      <div class="card">
        <h3>title</h3>
        <p>
          A convolutional neural network pre-trained on a large dataset is used
          to perform image recognition with high reliability
        </p>
      </div>
    </div>
  </div>

  <h5 class="author">
    <a href="mailto:nicolo.cavalli95@gmail.com">Nicolò Cavalli © (2019)</a>
  </h5>
</template>

<script setup></script>

<style lang="scss" scoped>
.text-wrapper {
  .cards {
    display: grid;
    grid-gap: 12px;
    width: calc(100% - 24px);
    height: 100%;
    margin-top: 24px;
    padding: 0 12px;
    align-items: center;
    justify-items: center;
    height: 600px;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));

    .card {
      width: 300px;
      height: 250px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: #fff;

      h3 {
        color: #333;
        margin-bottom: 10px;
      }
      p {
        color: #666;
      }
    }
  }
}
.author {
  position: fixed;
  letter-spacing: 1px;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: rgba(0, 0, 0, 0.1);
}
</style>
