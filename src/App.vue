<template>
  <nav>
    <div class="l-24 top-12">
      <router-link to="/"><span>Home</span></router-link>
      <router-link to="/pdf"><span class="l-24">PDF interaction</span></router-link>
    </div>
    <Btn class="r-12 top-24 bottom-24">
      <a :href="THESIS_LINK" download>Download thesis (ITA only)</a>
    </Btn>
  </nav>
  <router-view />
</template>

<script setup>
//=======================
// Import
//=======================
import Btn from "./components/Btn.vue";

//=======================
// Consts
//=======================
const THESIS_LINK = 'https://drive.google.com/file/d/1zW1oOIlpmA-HwpxBu0umrwDrfyw7w1J_/view?usp=sharing';

</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #222;
}
</style>
