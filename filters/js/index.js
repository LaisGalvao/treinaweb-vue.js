var app = new Vue({
  el: "#app",
  data() {
    return {
      title: "paralelepípedo",
    };
  },
  filters: {
    upperCase: function (params) {
      return params.toUpperCase();
    },
    reverse: function (params) {
      return params.split("").reverse().join("");
    },
    cut: function (params, index1, index2) {
      return params.substring(index1, index2);
    },
  },
});
