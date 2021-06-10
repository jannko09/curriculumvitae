<template>
  <div class="content__container-contenthero">
    <ul class="content__container_navigation-items">
      <router-link to="/work" class="content__container_navigation-item"
        >Work</router-link
      >
      <router-link to="/edu" class="content__container_navigation-item"
        >Education</router-link
      >
      <router-link to="/projects" class="content__container_navigation-item"
        >Projects</router-link
      >
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content__container_navigation-item.router-link-active {
  background: #222244;
  color: white;
  outline: none;
  font-size: 40px;
  margin-bottom: 24px;
}

.content__container_navigation-item:hover {
  color: #aaccff;
}
.content__container_navigation-item {
  display: inline-block;
  position: relative;
  align-self: center;
  font-family: $roboto;
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  border-radius: 3px;
  color: grey;
  cursor: pointer;
  &.router-link-active {
    color: #aaccff;
    &:before {
      background-color: #aaccff;
    }
  }
  &:before {
    background-color: grey;
    content: "";
    height: 2px;
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease-in-out;
    width: 100%;
  }
  &:hover:not(.router-link-active) {
    &:before {
      width: 0;
      background-color: #add8e6;
    }
  }
}

.content__container-contenthero {
  background: #222244;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  color: white;
}
.content__container_navigation-items {
  display: flex;
  width: 40%;
}
</style>