<template>
  <div class="content__container-skillshero">
    <div class="content__container-skillshero-header">
      <div class="content__container-skillshero-title">Knowledge</div>
    </div>

    <div class="content__container-skillshero-content">
      <div class="content__container-skillshero-content-category">
        Buzzwords
      </div>
      <SkillCard
        v-for="(language, index) in languages"
        :key="'language' + index"
        :topic="language.topic"
        :description="language.description"
        :intro="language.intro"
        :frameworks="language.frameworks"
      >
      </SkillCard>

      <div class="content__container-skillshero-content-category">DevOps</div>
      <SkillCard
        v-for="(cloud, index) in clouds"
        :key="'cloud' + index"
        :topic="cloud.topic"
        :description="cloud.description"
        :intro="cloud.intro"
        :frameworks="cloud.frameworks"
      >
      </SkillCard>
      <!-- <div class="content__container-skillshero-content-category">Other</div>
      <SkillCard
        v-for="(item, index) in other"
        :key="'other' + index"
        :topic="item.topic"
        :description="item.description"
        :intro="item.intro"
        :frameworks="item.frameworks"
      >
      </SkillCard> -->
    </div>
  </div>
</template>

<script>
import SkillCard from "../components/SkillCard.vue";
export default {
  components: {
    SkillCard,
  },
  data() {
    return {
      other: [
   
      ],
      clouds: [
        {
          topic: "Cloud",
          intro: "CI/CD",
          description:
            "Experienced with cloud engineering in AWS, GCM, AZURE. Sufficient with the big picture of build pipelines, user management, hosting services, VMs and load balancing.",
          frameworks: [
            {
              framework_topic: "Azure",
              framework_value: 70,
            },
            {
              framework_topic: "GCM",
              framework_value: 60,
            },
            {
              framework_topic: "AWS",
              framework_value: 60,
            },
          ],
        },
        {
          topic: "Distribution",
          intro: "GIT/Jira/Bitbucket",
          description: "Capable with collaboration tools in agile development",
          frameworks: [
            {
              framework_topic: "GIT",
              framework_value: 80,
            },
          ],
        },
        {
          topic: "OS",
          intro: "Windows, Linux, Android",
          description:
            "Somewhat familiar with the common operating systems. Used windows WSL with Ubuntu to flash bootloaders in microcontrollers. Android development in flutter projects",
          frameworks: [
            {
              framework_topic: "Windows",
              framework_value: 80,
            },
            {
              framework_topic: "Ubuntu",
              framework_value: 60,
            },
            {
              framework_topic: "Android",
              framework_value: 60,
            },
          ],
        },
      ],
      languages: [
        {
          topic: "JavaScript",
          intro: "Interactive UI",
          description:
            "Very confident with modern client-side development using JavaScript Frameworks & NodeJS.",
          frameworks: [
            {
              framework_topic: "Vue",
              framework_value: 100,
            },
            {
              framework_topic: "React",
              framework_value: 80,
            },
            {
              framework_topic: "Angular",
              framework_value: 60,
            },
          ],
        },
        {
          topic: "API",
          intro: "API development",
          description:
            "Confident with architecturing secure APIs using REST/GraphQL/WebSockets.",
          frameworks: [
            {
              framework_topic: "GraphQL",
              framework_value: 80,
            },
            {
              framework_topic: "REST",
              framework_value: 80,
            },
            {
              framework_topic: "WebSocket",
              framework_value: 60,
            },
          ],
        },
        {
          topic: "PHP",
          intro: "Backend",
          description:
            "Confident with backend development using the latest frameworks of PHP .",
          frameworks: [
            {
              framework_topic: "Laravel",
              framework_value: 80,
            },
          ],
        },

        {
          topic: "C#",
          intro: "Backend",
          description:
            "Somewhat confident with modern backend development with C#.",
          frameworks: [
            {
              framework_topic: ".NETCore",
              framework_value: 80,
            },
            {
              framework_topic: "EFCore",
              framework_value: 80,
            },
            {
              framework_topic: ".NET",
              framework_value: 60,
            },
          ],
        },
        {
          topic: "Python",
          intro: "Test development",
          description:
            "Used python mostly for supportive scripting and test development. Mocking HTTP requests on server being developed. Occasional test development tasks with selenium library in Robot Framework.",
          frameworks: [
            {
              framework_topic: "Selenium",
              framework_value: 60,
            },
            {
              framework_topic: "MicroPython",
              framework_value: 60,
            },
          ],
        },
        {
          topic: "C++",
          intro: "IoT devices",
          description:
            "Mostly used for hobby projects with different IoT microcontrollers. Knowledgeable with ESP32, Arduino boards, and variety of sensors.",
          frameworks: [
            {
              framework_topic: "Arduino",
              framework_value: 55,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content__container-skillshero-content-category {
  display: flex;
  font-style: italic;
  padding: 20px;
  color: white;
  font-size: 20px;
}
.content__container-skillshero-content-languages {
  display: flex;
  font-family: $roboto;
  letter-spacing: 1.5px;
  padding: 2px;
  font-weight: 600;
  font-size: 18px;
  justify-content: space-between;
  margin-left: 20px;
  color: grey;
  flex-direction: row;
}
.content__container-skillshero {
  width: 100%;
  height: 100%;
  display: flex;
  background: linear-gradient(0deg, grey 30%, #222244 75%);
  border-left: 10px solid grey;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 150px;
  display: flex;
}

.content__container-skillshero-title {
  color: white;
  font-size: 40px;
  align-self: center;
  color: #aaccff;
  font-family: $roboto;
}
.content__container-skillshero-content {
  height: 100%;
  margin: 40px;
  display: flex;
  max-height: 600px;
  overflow-y: auto;
  flex-direction: column;
  align-content: space-around;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.content__container-skillshero-content::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.skillshero-content-skill-card {
  font-family: $lato;
  color: white;
}
</style>