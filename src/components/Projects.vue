<template>
  <div class="projects--content__container-content">
    <div
      v-for="(edu, index) in educations"
      :key="'education' + index"
      class="projects--content__container-content-card"
    >
      <div class="projects--content__container-content-card-titleanddesc">
        <div
          class="projects--content__container-content-card-title"
          v-if="edu.title"
        >
          {{ edu.title }}
        </div>
        <div
          class="projects--content__container-content-card-desc"
          v-if="edu.description"
        >
          {{ edu.description }}
        </div>
      </div>
      <img
        :src="getImgUrl(edu.image)"
        class="icon-education"
        v-if="edu.image"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getImgUrl(pic) {
      console.log(pic);
      return require("../assets/" + pic);
    },
  },
  data() {
    return {
      educations: [
        {
          title: "Professional Projects:",
        },
        {
          title: "Warehouse management system",
          description:
            "Worked on .NET/vue/SQL/Azure stacked WMS system from start to customer.",
          image: "rocla.png",
        },
         {
          title: "SaaS Feedback application",
          description:
            "Overseeing all development efforts on PHP/Vue/SQL/AWS/GraphQl/Cordova stacked SaaS application with mobile app and web UI. Application is in real use in few mid sized companies",
          image: "devcore.png",
        },
         {
          title: "SSR website with CMS",
          description:
            "Created Nuxt SSR website with storyblok CMS running on Vercel.",
          image: "freelance.png",
        },
        {
          title: "Hobby Projects:",
        },
        {
          title: ".NETCore API",
          description:
            ".NETCore Api with repository pattern. Repository patterned CRUD Api with Sql database. Open API and EFCore ORM. Project created to fast scaffold CRUD api for hobby projects.",
          image: "Swag.jpg",
        },
        {
          title: "ESP32 Flutter App",
          description:
            "ESP32 with DHT11 sensor to measure Sauna temperature. Serverless Flutter app using Firebase realtime database and authentication. Project created to remotely monitor sauna temperature at summer cabin.",
          image: "FlutterDashboard.jpg",
        },
        {
          title: "Arduino projects",
          description:
            "Multiple different projects using different Arduino microcontrollers, Espressif microcontrollers, sensors and lcd displays.",
          image: "MicroControllers.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.icon-education {
  width: 180px;
  flex-basis: 20%;
  flex-shrink: 1;
  height: 200px;
}
.projects--content__container-content {
  width: 100%;
  height: 100%;
  font-size: 40px;
  color: white;
  height: 100%;
  overflow-y: auto;
  background: #222244;
  max-height: 40%;
}
.projects--content__container-content-card {
  display: flex;
  border-top: 10px solid grey;
  border-bottom: 10px solid grey;
  justify-content: space-between;
}
.projects--content__container-content-card:nth-child(odd) {
  flex-direction: row-reverse;
}
.projects--content__container-content::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.projects--content__container-content {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.projects--content__container-content-card-titleanddesc {
  color: #aaccff;

  flex-grow: 1;
}
.projects--content__container-content-card-title {
  letter-spacing: 1.5px;
  padding: 3%;
  font-weight: 800;
  font-size: 18px;
  color: #aaccff;
  font-family: "Lato", sans-serif;
}
.projects--content__container-content-card-desc {
  padding: 4px;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-family: "Lato", sans-serif;
  padding: 20px;

  font-size: 16px;
  color: #aaccff;
}
</style>