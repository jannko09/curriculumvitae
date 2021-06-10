<template>
  <div class="skillshero-content-skill-card" @click="changeIsDetailsOpen()">
    <div class="skillshero-content-skill-card-title">
      <div class="skillshero-content-skill-card-iconandtopic">
        <font-awesome-icon
          class="arrowright-icon"
          :icon="['fa', `angle-${isDetailsOpen ? 'down' : 'right'}`]"
          size="2x"
        >
        </font-awesome-icon>
        <div class="skillshero-content-skill-card-name">
          {{ getTopic }}
        </div>
      </div>
      <div class="skillshero-content-skill-card-name-intro">
        {{ getIntro }}
      </div>
      <div class="skillshero-content-skill-card-bar">
        <progress-bar :options="options" :value="getAverageOfValues" />
      </div>
    </div>

    <div class="skillshero-content-skill-card-details" v-if="isDetailsOpen">
      <div class="skillshero-content-skill-card-detail-description">
        {{ getDescription }}
      </div>

      <div class="skillshero-content-skill-card-detail-list">
        <div
          v-for="(fws, index) in getFrameworks"
          :key="index"
          class="skillshero-content-skill-card-detail-list-item"
        >
          <div>{{ fws.framework_topic }}</div>
          <div>{{ fws.framework_value }} %</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topic: {
      default: null,
    },
    description: {
      default: null,
    },
    intro: {
      default: null,
    },
    frameworks: Array,
  },
  methods: {
    changeIsDetailsOpen() {
      this.isDetailsOpen = !this.isDetailsOpen;
    },
  },
  computed: {
    getTopic() {
      return this.topic;
    },
    getIntro() {
      return this.intro;
    },
    getDescription() {
      return this.description;
    },
    getAverageOfValues() {
      const values = [];
      const averageValue = (framework) => {
        values.push(framework.framework_value);
      };

      this.frameworks.forEach((fw) => averageValue(fw));
      return Math.round(values.reduce((a, b) => a + b) / values.length);
    },

    getFrameworks() {
      return this.frameworks;
    },
  },
  data() {
    return {
      isDetailsOpen: false,
      options: {
        text: {
          color: "#AACCFF",
        },
        progress: {
          color: "white",
          backgroundColor: "transparent",
        },
        layout: {
          width: 250,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.skillshero-content-skill-card-name {
  display: inline-block;
  position: relative;
  align-self: center;
  font-family: $lato;
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  border-radius: 3px;
  color: grey;
  cursor: pointer;

  &:before {
    content: "";
    height: 2px;
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease-in-out;
    width: 100%;
  }
  &:hover {
    &:before {
      width: 0;
      background-color: #add8e6;
    }
  }
}

.skillshero-content-skill-card-detail-list {
  margin-right: 30px;
  color: white;
}
.skillshero-content-skill-card-detail-list-item {
  display: flex;
  width: 70%;
  justify-content: space-between;
}
.skillshero-content-skill-card-name-intro {
  align-self: center;
  color: #aaccff;
}
.skillshero-content-skill-card-iconandtopic {
  display: flex;
}
.skillshero-content-skill-card-title {
  width: 70%;
  display: grid;
  grid-template-columns: 200px 200px auto;
}
.skillshero-content-skill-card-descriptionandbar {
  display: flex;
  justify-content: space-between;
}

.skillshero-content-skill-card-detail-description {
  padding: 20px;
  color: #aaccff;
}

.skillshero-content-skill-card {
  border-radius: 10px;
  font-family: $lato;
}
.skillshero-content-skill-card-bar {
  justify-content: center;
  align-self: center;
}
.skillshero-content-skill-card-details {
  display: grid;
  grid-template-columns: 70% auto;
}
.skillshero-content-skill-card-detail-bar {
  display: flex;
  flex-direction: column;
}

.skillshero-content-skill-card-name {
  display: flex;
  letter-spacing: 1.5px;
  padding: 2px;
  font-weight: 600;
  font-size: 18px;
  justify-content: space-between;
  margin-left: 20px;
  color: #aaccff;
  flex-direction: row;
}
.arrowright-icon {
  color: #aaccff;
  transform: translate(5px, 5px);
}
.skillshero-content-skill-card-textandicon {
  display: flex;
  justify-content: flex-start;
  justify-content: space-between;
}
.skillshero-content-skill-card-text {
  width: 60%;
}

@media only screen and (max-width: 700px) {
  .skillshero-content-skill-card-detail-list {
    display: none;
  }
  #progress-bar-line {
    display: none;
  }
  .skillshero-content-skill-card-details {
    display: flex;
  }
  .skillshero-content-skill-card-title {
    width: 100%;
    display: block;
  }
}
</style>