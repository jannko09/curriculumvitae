<template>
  <div class="presentation__container">
    <div class="presentation__container-nameandimage">
      <div class="presentation__container-name">Janne Kokki</div>
      <img
        src="../assets/Profilepic.jpg"
        class="presentation_container_image"
      />
    </div>
    <div class="presentation_container-content">
      <div class="presentation__container-presentation">
        On a mission to create best user experience with interactiveness in all
        digital. Programming since 2017.
      </div>
      <div class="presentation__container-contact">
        <div class="presentation__container-contact-block">
          <a href="https://github.com/jannko09">
            <font-awesome-icon
              :icon="['fab', 'github']"
              size="2x"
              class="contact-icon"
            ></font-awesome-icon>
          </a>
          <div class="presentation__container-contact-text">GitHub</div>
        </div>
        <div class="presentation__container-contact-block">
          <a href="https://www.google.fi/maps/place/Helsinki/">
            <font-awesome-icon
              :icon="['fa', 'map-marker-alt']"
              size="2x"
              class="contact-icon"
            ></font-awesome-icon>
          </a>
          <div class="presentation__container-contact-text">
            Helsinki, Finland
          </div>
        </div>
        <div class="presentation__container-contact-block">
          <a href="https://www.linkedin.com/in/jannko/" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              size="2x"
              class="contact-icon"
            ></font-awesome-icon>
          </a>
          <div class="presentation__container-contact-text">
            linkedin.com/in/jannko/
          </div>
        </div>
        <div class="presentation__container-contact-block">
          <a href="mailto:jannekokki09@gmail.com">
            <font-awesome-icon
              class="contact-icon"
              :icon="['fa', 'envelope']"
              size="2x"
            ></font-awesome-icon>
          </a>
          <div class="presentation__container-contact-text">
            jannekokki09[at]gmail.com
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>



<style lang="scss">
a {
  text-decoration: none; /* no underline */
}
.contact-icon {
  color: #222244;
  padding:10px;
}

.presentation__container {
  background: grey;
  width: 300px;
  padding-top: 100px;
}

.presentation__container-contact-text {
  font-size: 14px;
}

.presentation_container_image {
  width: 160px;
  height: 150px;
  border-radius: 50%;
}
.presentation_container-content {
  letter-spacing: 2px;
  font-size: 20px;
  padding: 20px;
  display: flex;
  height: 72%;
  font-family: $lato;
  font-style: italic;
  font-weight: 700;
  flex-direction: column;
}
.presentation__container-nameandimage {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-evenly;
}

.presentation__container-name {
  font-size: 20px;
  color: #222244;
  margin-bottom: 10px;
  font-family: $roboto;
}

.presentation__container-presentation {
  padding: 20px 0px;
  align-items: center;
}
.presentation__container-contact {
  display: grid;
  grid-template-rows: 80px auto;
}

/* @media only screen and (max-width: 1300px) {
  .presentation__container-contact {
    display: flex;
  }
  .presentation__container-contact-text {
    display:none;
  }
} */
</style>    