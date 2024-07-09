var app = Vue.createApp({
  data() {
    return {
      skills: [
        { name: "HTML",experience: 10 },
        { name: "CSS",experience: 20},
        { name: "Javascript",experience: 15},
        { name: "Vue",experience: 12},

      ],
      newSkill: {}
    };
  },
  methods: {
    addSkill() {
      this.skills.push({name: this.newSkill.name ,experience: this.newSkill.experience});
      this.newSkill = {};
    },
    removeSkill(i) {
      this.skills.splice(i, 1);
    },
  }
});

app.mount("#app");
