var app = Vue.createApp({
  data() {
    return {
      aboutMe: {
        name: "Hossain",
        nickName: "Aboul",
        age: 24,
        website: "www.google.com"
      },
      skills: [
        { name: "HTML",experience: 10 },
        { name: "CSS",experience: 20},
        { name: "Javascript",experience: 15},
        { name: "Vue",experience: 12},

      ]
    };
  },
  methods: {

  }
});

app.mount("#app");
