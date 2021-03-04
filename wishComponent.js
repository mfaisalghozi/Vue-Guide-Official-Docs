Vue.component("wish-list", {
  props: ["wish"],
  template: "<li>{{wish.text}}</li>",
});

var app = new Vue({
  el: "#app",
  data: {
    wishList: [
      { id: 0, text: "College Graduate" },
      { id: 1, text: "Invisible Super Power" },
      { id: 2, text: "flying" },
      { id: 3, text: "swimming" },
    ],
  },
});
