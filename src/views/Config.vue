<template>
  <div class="main-wrapper">
    <video autoplay playsinline muted ref="webcam_ref" :class="{ 'min-video' : show_pdf }" width="420" height="420" />
    <div v-show="!show_pdf" class="btns">
      <div>
        <template v-for="val, key in classes" :key="val.class_id">
          <Btn class="top-12" :def="false" :disabled="!show_stream" @click="onClick( key )">
            Add {{ key }} example ({{ classes[ key ].tot_acquired }})
          </Btn>
        </template>
        <h2 v-show="show_stream && prediction.label" class="l-24 top-24">
          Prediction: {{ prediction.label }} ({{ prediction.confidences?.toFixed(2) }}%)
        </h2>
      </div>
    </div>
  </div>

  <template v-if="show_pdf">
    <div class="pdf-test" ref="test_ref" :class="{ 'zoomed' : zoom_in }">
      <h1>Lorem ipsum</h1>
      <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quidem! Reiciendis blanditiis ducimus quae suscipit sint eius enim placeat tempora obcaecati voluptatibus, unde eos cupiditate nam, quaerat nisi, velit tenetur.
      Non natus nam ad, voluptas, voluptatibus explicabo illo, exercitationem adipisci modi at vitae enim quia minus animi temporibus dolores numquam atque maiores aperiam. Culpa, voluptatibus itaque corrupti excepturi ipsam modi.
      Beatae laboriosam fugit maxime magnam perferendis ut enim nisi. Similique ad dolores quam odio, fuga earum explicabo quasi temporibus laborum! Facilis dicta voluptate mollitia voluptates. Ipsam suscipit laborum voluptatum hic?
      Itaque, ipsa. Minima doloremque sed rerum temporibus quae repudiandae assumenda adipisci nam! Esse accusamus saepe mollitia consequatur officiis quisquam expedita maxime doloremque voluptatum! Laudantium illo voluptates expedita odit, porro ea!
      Impedit, expedita odio eius, aliquam animi sed eos excepturi dolore adipisci deserunt blanditiis veritatis omnis? Quasi inventore ab, culpa rem aperiam dolorem in assumenda voluptatum quibusdam laudantium facilis explicabo magni?
      Placeat quo porro maxime asperiores, officia repellendus aspernatur facere illo non impedit at iure dicta inventore dolorum debitis dolores quis perspiciatis eligendi itaque rem cumque quam? Illum repudiandae fuga officia.
      Vel eum eaque doloremque vitae tempore nesciunt nisi ratione! Consequuntur quibusdam, quisquam quam dignissimos modi facilis maxime fugiat vel laboriosam facere beatae, porro perferendis laborum sed sapiente deserunt tempore natus.
      Alias rerum nemo dolor magnam est repellendus? Dolorem ipsam, ducimus quae praesentium vero ratione voluptate alias dicta, numquam natus vitae dignissimos labore atque aperiam? Excepturi delectus laudantium adipisci qui sint?
      Qui voluptate blanditiis suscipit! Eveniet, eius velit. Quas consequuntur, ea ipsum laudantium enim, nostrum hic ipsam omnis ducimus, iste eaque placeat laborum explicabo eum aperiam. Delectus deserunt nostrum minus sed.
      Ut deserunt voluptate doloremque modi exercitationem, quisquam ad sequi cum corporis incidunt dolorem ipsum nostrum, consectetur officia qui perferendis maxime eum, fuga necessitatibus quo vel hic praesentium porro! Cumque, veniam.
      Eaque nulla nihil ea? Quae quo eos quisquam facere quia nam maxime, est ratione iure voluptates dolore tempore vero nesciunt quibusdam ad dignissimos suscipit aliquam laborum mollitia delectus? Neque, ipsam.
      Similique aliquam sint sequi, necessitatibus cum facere tempore rem vitae odio accusantium error. Doloremque beatae voluptas dignissimos quidem, at ea cumque reiciendis facere nemo natus, alias laborum. Autem, ea dolore.
      Ipsum earum, enim tempore dolorem excepturi minus repudiandae dicta saepe vero repellat sit, unde libero nesciunt ratione quas tenetur velit culpa quasi, inventore natus. Vel eos quod distinctio! Illo, et?
      Voluptatum dolor odit laudantium unde earum in facere voluptatibus quisquam, itaque fugiat sequi ea sunt qui perspiciatis nostrum cum sed consectetur pariatur reiciendis nemo dignissimos! Natus quibusdam soluta ipsum aspernatur.
      Ipsa voluptatum accusantium porro laboriosam corporis veniam beatae fugit quam mollitia inventore officiis fuga labore, optio nisi modi fugiat excepturi ducimus iusto obcaecati! Atque perspiciatis eligendi est laborum sequi quaerat!
      Tempore porro cum totam delectus, iure minima iusto. Nostrum eos voluptatum vel at impedit quis numquam asperiores provident aliquid. Recusandae non assumenda tenetur deserunt id veniam esse, nostrum in beatae?
      Veritatis aliquid unde, sapiente eligendi repellendus voluptate deserunt cumque architecto perferendis. Sequi rem ut modi expedita inventore nisi repellat quis. Perferendis corporis cupiditate deserunt recusandae molestias similique. Quidem, dignissimos tenetur.
      Eveniet praesentium est, labore quam ut ipsam totam neque nostrum eos perferendis fugiat error ex animi deleniti doloremque libero ad? Eveniet nam neque eaque a odio minus quae debitis veritatis?
      Nemo saepe consequatur eaque, iusto error, nobis expedita reprehenderit quas nostrum harum eius adipisci magni. Dolor nam debitis aut dolorem accusantium accusamus possimus quaerat officiis, impedit, autem sapiente modi nihil.
      Fugiat repellendus dolore totam, facere sunt, eius ullam asperiores, soluta omnis magni minima molestiae ducimus sequi dolor architecto. Veniam, necessitatibus at quasi architecto alias nisi repellendus similique non cupiditate ipsum.
      Et sequi fugiat est non blanditiis harum excepturi esse perferendis aperiam ad voluptate dolorem nam obcaecati, impedit nobis unde iure delectus. Blanditiis rerum asperiores quae fugit dolores magni soluta sequi?
      Neque blanditiis nobis fugiat quas dolorum sequi esse eligendi beatae. Omnis perspiciatis quisquam delectus officiis? Blanditiis doloremque autem, alias fugit quibusdam vero, sapiente, ex ducimus ad modi beatae cupiditate magni.</h2>
   </div>
  </template>


  <Btn :def="false" class="fix-bottom-center" @click="show_pdf = !show_pdf"> {{ show_pdf ? 'close test' : 'proceed to test' }}</Btn>
  <Btn class="fix-bottom-right" @click="show_stream = !show_stream">{{ show_stream ? 'stop' : 'play' }}</Btn>
</template>

<script setup>
//=======================
// Import
//=======================
import {
  ref,
  watch,
  onMounted,
  reactive,
} from "vue";

import Btn from "@/components/Btn.vue";



//=======================
// Consts
//=======================
let net;
let interval;

const ZOOM_VAL = 30;

const classifier  = knnClassifier.create(); // pre-trained KNN classifier model from lib
const webcam      = ref( undefined );
const webcam_ref  = ref( undefined );
const test_ref    = ref( undefined );
const show_stream = ref( false );
const show_pdf    = ref( false );
const zoom_in     = ref( false );

const classes = reactive({
  default: {
    class_id: 0,
    label: 'idle (default)',
    tot_acquired: 0,
  },
  up: {
    class_id: 1,
    label: 'scroll up',
    tot_acquired: 0,
  },
  down: {
    class_id: 2,
    label: 'scroll down',
    tot_acquired: 0,
  },
  zoom: {
    class_id: 3,
    label: 'zoom in',
    tot_acquired: 0,
  },
});

const prediction = reactive({
  class_id: undefined,
  label: undefined,
  confidences: undefined,
})

const scroll = ref( 0 );

//=======================
// Functions
//=======================
function onClick( key ) {
  addNewExample(classes[key].class_id);
  classes[key].tot_acquired++;
}

function setPrediction( result ) {
  prediction.class_id = result.label;
  prediction.label = getPredictionLabel( result.label );
  prediction.confidences = result.confidences[ result.label ] * 100;
}

function getPredictionLabel( class_id ) {
  for (const key in classes) {
    if (classes[key].class_id == class_id ) {
      return key;
    }
  }
}

async function addNewExample( class_id ) {
  const img = await webcam.value.capture();          // Store webcam input
  const activation = net.infer(img, true);     // Activate the model with the img input
  classifier.addExample(activation, class_id); // User input provides examples
  img.dispose();                               // Optimize memory allocation
}

async function stream() {
  if (classifier.getNumClasses() > 0) {
    const img = await webcam.value.capture();
    const activation = net.infer(img, "conv_preds");
    const result = await classifier.predictClass(activation);
    setPrediction( result );
    img.dispose();
    if ( show_pdf.value ) {
      setTargetStyle();
    } 
  }
  await tf.nextFrame();
}

function setTargetStyle() {
  switch( prediction.label ) {
    case 'zoom':
      zoom_in.value = true;
      break;
    case 'down':
      test_ref.value.scrollTop += ZOOM_VAL;
      zoom_in.value = false;
      break;
    case 'up':
      test_ref.value.scrollTop -= ZOOM_VAL;
      zoom_in.value = false;
      break;
    case 'default':
      zoom_in.value = false;
      break;
  }
}

//=======================
// Watch
//=======================
watch( show_stream, (NEW_show_stream) => {
  if ( NEW_show_stream ){
   interval = setInterval(stream, 50);
  } else {
    clearInterval( interval );
  }
});

//=======================
// Life cycle
//=======================
onMounted( async () => {
  net = await mobilenet.load();
  webcam.value = await tf.data.webcam(webcam_ref.value); // Store webcam data
});


</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100%;
  position: relative;
  height: 600px;
  display: flex;
  align-items:center;
  justify-content: center;
  video {
    background-color: #222;
    transition-duration: 400ms;
    margin: 12px;
    &.min-video {
      position: fixed;
      z-index: 2;
      bottom: 22px;
      left: 22px;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      transition-duration: 400ms;
    }
  }
  .btns {
    margin-left: 12px;
    width: 400px;
  }
}
 .pdf-test {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 50%;
   height: 50%;
   overflow-y: scroll;
   padding: 22px;
   transition-duration: 400ms;
   scroll-behavior: smooth;
   &.zoomed {
    h1 {
      font-size: 44px;
      transition-duration: 400ms;
    }
    h2 {
      font-size: 26px;
      transition-duration: 400ms;
    }
   }
 }
</style>
