var app = Vue.createApp({
  data() {
    return {
      show: false,
      skills: [
        { name: "HTML",experience: 10 },
        { name: "CSS",experience: 20},
        { name: "Javascript",experience: 15},
        { name: "Vue",experience: 12},
        { name: "Node",experience: 8},
        { name: "MongoDB",experience: 5},
        { name: "Express",experience: 3},
        { name: "React",experience: 2},
        { name: "Angular",experience: 1},
        { name: "Next",experience: 0},

      ]
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
  }
  }
});

app.mount("#app");
