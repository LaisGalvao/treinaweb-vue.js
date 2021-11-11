var app = new Vue({
    el: "#app",
    methods: {
        myEvent() {
            app2.$emit("myEvent", "Hello!")
        }
    },
});

var app2 = new Vue({
  el: "#app2",
  data() {
    return {
      value: "",
    };
  },
});

app2.$on("myEvent", function (value) {
    this.value = value
});
