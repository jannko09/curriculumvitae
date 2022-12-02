<template>
  <div class="work--content__container-content">
    <div class="content__container-content-topics">
      <div class="work--content__container-content-card" v-for="(item, index) in topics" :key="'work' + index">
        <div class="work--content__container-content-sidebar">
          <div class="work--content__container-content-company">
            {{ item.company }}
          </div>
          <div class="work--content__container-content-locationandtime">
            <div class="work--content__container-content-location">
              {{ item.location }}
            </div>
            <div class="work--content__container-content-time">
              {{ item.time }}
            </div>
          </div>
        </div>
        <div class="work--content__container-content-main">
          <div class="work--content__container-content-title">
            {{ item.title }}
          </div>
          <div class="work--content__container-content-description">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
      {
          title: "Software Engineer (Freelance)",
          company: "Freelancer",
          location: "Helsinki, Finland",
          time: "09/2021 - present",
          description:
            "Freelancing as a software engineer. I have worked with a variety of clients, from startups to large companies. I have worked with a variety of technologies, from React to AWS using NodeJS lambdas.",
        },
        {
          title: "Software Engineer",
          company: "Solita",
          location: "Helsinki, Finland",
          time: "06/2021 - 09/2021",
          description:
            "Project to develop a heavy traffic API for a large Finnish company in hospitality industry. Used technologies: Azure, Optimizely, .NET, CosmosDB"
        },
        {
          title: "Software Engineer",
          company: "Mitsubishi Logisnext Europe",
          location: "Järvenpää, Finland",
          time: "01/2019 - 06/2021",
          description:
            "Full-stack software development with various technologies (ASP.NETcore, Vue, SQL..). Cloud engineering Azure (hosting, authentication, analytics...). Test strategy planning with E2E and NFR testing frameworks. Implementation of testing strategy with frameworks e,g Robot Framework. Agile with scrum framework",
        },
        {
          title: "Digital Specialist",
          company: "Liana Technologies",
          location: "Hong Kong",
          time: "08/2017 - 05/2018",
          description:
            "Digital solutions consultant. Website optimizations, digital lead generation, A/B testing & newsletter development",
        },
        {
          title: "Digital Specialist",
          company: "Tokyo Tourism Office",
          location: "Tokyo, Japan",
          time: "03/2016 - 08/2016",
          description:
            "Consulting small handicraft businesses to reach tourists. Tourism accelerator. Digital marketing. Market research & analysis",
        },
        {
          title: "Warehouse operative",
          company: "Atoy Automotive",
          location: "Espoo, Finland",
          time: "09/2012 - 09/2015",
          description:
            "Customer service. Responsibilities as a superior and educating new employees. In-depth knowledge of automotive industry.",
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.work--content__container-content-main {
  padding: 3% 12%;
}

.work--content__container-content-sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.work--content__container-content-title {
  letter-spacing: 1.5px;
  padding: 4px;
  font-weight: 800;
  font-size: 18px;
  color: #aaccff;
  font-family: $lato;
}

.work--content__container-content-company {
  letter-spacing: 1.5px;
  padding: 2px;
  font-weight: 600;
  font-size: 18px;
  color: #aaccff;
  font-family: $lato;
}

.work--content__container-content-locationandtime {
  padding: 2px;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-size: 14px;
  color: #aaccff;
  font-family: $lato;
}

.work--content__container-content-time {
  padding: 2px;
  font-family: $lato;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-size: 14px;
  color: #aaccff;
}

.work--content__container-content-description {
  padding: 4px;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-family: $lato;
  font-size: 16px;
  color: #aaccff;
}

.work--content__container-content-card {
  display: grid;
  padding: 0 20px;
  grid-template-columns: 20% auto;
  border-top: 10px solid grey;
  border-bottom: 10px solid grey;
}

@media only screen and (max-width: 600px) {
  .work--content__container-content-card {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

.work--content__container-content {
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  scrollbar-width: none;
  /* Firefox */
}

.work--content__container-content {
  overflow-y: auto;
  background: #222244;
}

.work--content__container-content::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}

.content__container-content-topics {
  max-height: 700px;
}
</style>