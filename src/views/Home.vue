<template>
  <h1 class="l-24 top-24">
    A<sup>3</sup>: assistive application for accessibility
  </h1>
  <div class="content-wrapper">
    <div class="project">
      <h3>The project</h3>
      <p>
        The A3 project explores the idea of interacting with a website using
        your own body movements.
      </p>
      <p>
        Using your device's webcam, the system can recognize postures or
        gestures of your choice.
      </p>
      <p>
        An action is associated for each of these gestures, such as performing a scroll
        up, down, or zoom in.
      </p>
    </div>
    <div class="info">
      <h3>How does it work</h3>
      <div class="cards">
        <p class="card">
          <svg><use href="#brain"></use></svg>
          A convolutional neural network pre-trained on a large dataset is used
          to perform image recognition from images taken from the webcam video
          stream.
        </p>
        <p class="card">
          <svg><use href="#image"></use></svg>
          Capture 5-8 images for each action in order to optimize the
          reliability of the recognition.
        </p>
        <p class="card">
          <svg><use href="#interact"></use></svg>
          As you have taken enough images, click on 'proceed to test' to test
          how you can interact with an example text using your recorded postures
          or gestures.
        </p>
      </div>
    </div>
  </div>

  <Btn class="play-btn" @click="$router.push('/playground')">Go to playground</Btn>

  <h5 class="author">
    <a href="mailto:nicolo.cavalli95@gmail.com">Nicolò Cavalli (2020)</a>
  </h5>
</template>

<script setup>
//=======================
// Import
//=======================
import Btn from "@/components/Btn.vue";
</script>

<style lang="scss" scoped>
.content-wrapper {
  width: calc(100% - 88px);
  margin: 44px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 22px;
  .project {
    display: flex;
    flex-direction: column;
    p {
      max-width: 400px;
      margin-top: 22px;
      @media screen and (max-width: 992px) {
          max-width: 100%;
      }
    }
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-gap: 12px;
    align-items: center;
    justify-items: center;

    .card {
      margin-top: 22px;
      height: 320px;
      padding: 24px;
      box-sizing: border-box;
      border-radius: 22px;
      background-color: #222;
      svg {
        width: 100%;
        font-size: 44px;
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

h3 {
  color: var(--white);
}
p {
  color: #bbb;
  font-size: 15px;
}

.play-btn {
  position: fixed;
  bottom: 52px;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
