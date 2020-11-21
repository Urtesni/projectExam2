<template>
  <div class="container">
    <div class="row">
      <div
        v-for="game in games"
        :key="game.id"
        class="col-xs-12 col-sm-6 col-md-4"
      >
        <div class="card">
          <img :src="game.background_image" class="card-img-top" />
          <h4 class="name">{{ game.name }}</h4>
          <div class="card-body">
            <h6>Rating: {{ game.rating_top }}</h6>
            <h6>Released: {{ game.released }}</h6>
            <router-link :to="'/game/' + game.id" class="link"
              >More Info
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      games: null
    };
  },
  async mounted() {
    const response = await axios.get("https://api.rawg.io/api/games");
    console.log(response.data.results);
    this.games = response.data.results;
  }
};
</script>

<style scoped>
.card-img-top {
  min-height: 9rem;
}
.name {
  text-transform: uppercase;
  margin-top: 0.5rem;
}
.card {
  min-height: 23rem;
  background-color: rgb(224, 220, 213);
  color: rgb(82, 38, 47);
  margin: 2rem;
  border: 0.25rem solid rgba(0, 0, 0, 0.125);
}
.link {
  text-decoration: underline;
  color: rgb(145, 119, 119);
}
link:hover {
  color: wheat;
}
</style>
