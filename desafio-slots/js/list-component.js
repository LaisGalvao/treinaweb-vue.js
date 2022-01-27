Vue.component("my-list", {
  template: `
  <li class="poke-list-item">
      <img :src="'//serebii.net/pokedex-xy/icon/'+ pokemon.number +'.png'" />
      <span>{{pokemon.number}} - {{pokemon.name}}</span>
    </li>
`,
  props: ["pokemon"],
  name: "my-list"
});
