var app = Vue.createApp({
  data() {
    return {
      review: "",
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

  computed: {
    totalCount2() {
      console.log("Count from computed");// call method
      return this.skills.length;
    },


    experienceSkills() {
      let es = this.skills.filter((item) => { 
        return item.experience > 10;
      });
      return es;
    }

  },
  methods: {
    removeSkill(i) {
      this.skills.splice(i, 1);
    },
    totalCount() {
      console.log(this.skills.length);// call method
      return this.skills.length;
    }
  }

});

app.mount("#app");
