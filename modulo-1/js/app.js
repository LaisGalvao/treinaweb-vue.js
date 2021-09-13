var app = new Vue({
  el: "#app",
  data: {
    msg: "Barraca de frutas!",
    visible: true,
    list: [
      { fruit: "banana" },
      { fruit: "apple" },
      { fruit: "peach" },
      { fruit: "pear" },
      { fruit: "avocado" },
      { fruit: "papaya" },
      { fruit: "watermelon" },
      ,
    ],
    htmlInsert: "<p>Volte sempre!  &#128512;</p>",
  },
});
