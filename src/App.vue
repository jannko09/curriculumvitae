<template>
  <div id="app">
    <div class="app__container">
      <vue-particles
        color="#dedede"
        class="particles__container"
      ></vue-particles>
      <div class="container_layout">
        <PresentationHero
          class="container_layout__presentation__container"
        ></PresentationHero>
        <ContentHero></ContentHero>
        <SkillsHero></SkillsHero>
      </div>
    </div>
  </div>
</template>


<script>
import ContentHero from "./views/ContentHero.vue";
import PresentationHero from "./views/PresentationHero.vue";
import SkillsHero from "./views/SkillsHero.vue";

export default {
  name: "App",
  components: { ContentHero, PresentationHero, SkillsHero },
};
</script>

<style lang="scss">
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
}
html,
body {
  height: 100%;
  overflow: hidden;
}

body {
  margin: 0;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}

ul,
li {
  list-style-type: none;
}

.app__container {
  width: 100%;
  height: 100%;
  position: relative;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.particles__container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.container_layout {
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.8;
  display: grid;
}

@media only screen and (min-width: 1900px) {
  .container_layout {
    display: grid;
    grid-template-columns: 300px 825px auto;
  }
}
@media only screen and (min-width: 1600px) and (max-width: 1900px) {
  .container_layout {
    display: grid;
    grid-template-columns: 300px auto 650px;
  }
}
@media only screen and (min-width: 1300px) and (max-width: 1600px) {
  .container_layout__presentation__container {
    display: none;
  }
  .container_layout {
    display: grid;
    grid-template-columns: 50% auto;
  }
}
@media only screen and (max-width: 1300px) {
  .container_layout__presentation__container {
    display: none;
  }
  .container_layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
  }
  .work--content__container-content {
    max-height: 100%;
  }
}
</style>
