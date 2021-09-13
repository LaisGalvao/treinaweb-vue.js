var app = new Vue({
  el: "#app",
  data: {
    msg: "Pokemon List",
    visible: true,
    pokemonList: [
      { name: "Charizard", number: "006" },
      { name: "Squirtle", number: "007" },
      { name: "Pikachu", number: "025" },
      { name: "Celebi", number: "251" },
      { name: "Lucario", number: "448" },
      { name: "Delphox", number: "655" },
    ],
    htmlInsert: "<p>Volte sempre!  &#128512;</p>",
  },
});
