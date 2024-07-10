var app = Vue.createApp({
    data() {
      return {
        skills: [
          { name: "HTML",experience: 10,education: "BSC", institution: "IDB",languange: "English" },
          { name: "CSS",experience: 20,education: "MCA", institution: "IUBAT",languange: "Bangla" },
          { name: "Javascript",experience: 15,education: "BCA", institution: "IDB",languange: "Hindi" },
          { name: "Vue",experience: 12,education: "MCA", institution: "IUBAT",languange: "Latin" },
  
        ],
        newSkill: {
          name: "",
          experience: "",
          education: "",
          institution: "",
          languange: "",
        }
      };
    },
    methods: {
      addSkill() {
        this.skills.push(this.newSkill);
        this.newSkill = { name: "", experience: "", education: "", institution: "", languange: "" };
      },
      removeSkill(i) {
        this.skills.splice(i, 1);
      },
    }
  });
  
  app.mount("#app");