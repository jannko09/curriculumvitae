<template>
  <div class="education--content__container-content">
    <div v-for="(edu, index) in educations" :key="'education' + index"
      class="education--content__container-content-card">
      <div class="education--content__container-content-card-uniandtime">
        <div class="education--content__container-content-card-uni">
          {{ edu.university }}
        </div>
        <div class="education--content__container-content-card-time">
          {{ edu.time }}
        </div>
      </div>
      <div class="education--content__container-content-card-titleanddesc">
        <div class="education--content__container-content-card-title">
          {{ edu.title }}
        </div>
        <div class="education--content__container-content-card-desc">
          {{ edu.description }}
        </div>
      </div>
      <img :src="getImgUrl(edu.image)" class="icon-education" />
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
          title: "Accelerated Learning Program ",
          university: "Academy Campus",
          time: "2019-2019",
          description:
            "Academy's Accelerated Learning Program - Javascript Spring 2019. Very intense bootcamp for learning JavaScript and the core concepts of programming. 4 months of full-time studying with weekly coding challenges.",
          image: "AcceleratedProgram.jpg",
        },
        {
          title: "MSc in Economics",
          university: "University of Eastern Finland",
          time: "2016-2018",
          description:
            "Master of Science in Service Management. GPA ~4. Thesis about Sustainable performance through employee vitality in sales. Minor in global business development.",
          image: "uef.jpg",
        },
        {
          title: "BSc in Economics",
          university: "University of Eastern Finland",
          time: "2013-2016",
          description:
            "Bachelor of Science in Service Management. Thesis about employee wellbeing in organizational structural change. Minor in taxation.",
          image: "uef.jpg",
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

@media only screen and (max-width: 1600px) {
  .icon-education {
    display: none;
  }
}

.education--content__container-content {
  width: 100%;
  height: 100%;
  font-size: 40px;
  color: white;
  height: 100%;
  overflow-y: auto;
  background: #222244;
  max-height: 75%;
}

.education--content__container-content-card {
  display: flex;
  border-top: 10px solid grey;
  border-bottom: 10px solid grey;
  justify-content: space-between;
}

.education--content__container-content-card:nth-child(odd) {
  flex-direction: row-reverse;
}

.education--content__container-content::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}

.education--content__container-content {
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  scrollbar-width: none;
  /* Firefox */
}

.education--content__container-content-card-uniandtime {
  font-size: 18px;
  align-self: center;
  padding: 40px;
  flex-basis: 20%;
  flex-shrink: 1;
  color: #aaccff;
}

.education--content__container-content-card-time {
  font-size: 18px;
  align-self: center;
  padding: 2px;
  font-family: "Lato", sans-serif;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-size: 14px;
  color: #aaccff;
  color: #aaccff;
}

.education--content__container-content-card-uni {
  letter-spacing: 1.5px;
  padding: 2px;
  font-weight: 600;
  font-size: 18px;
  color: #aaccff;
  font-family: "Lato", sans-serif;
}

.education--content__container-content-card-titleanddesc {
  color: #aaccff;

  flex-grow: 1;
}

.education--content__container-content-card-title {
  letter-spacing: 1.5px;
  padding: 3%;
  font-weight: 800;
  font-size: 18px;
  color: #aaccff;
  font-family: "Lato", sans-serif;
}

.education--content__container-content-card-desc {
  padding: 4px;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-family: "Lato", sans-serif;
  padding: 20px;
  font-size: 16px;
  color: #aaccff;
}
</style>