var app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handleKeyup(e) {
      console.log(e.target.value);
      this.name = e.target.value;
    },
    handleFormSubmit(e) {
      console.log("Form submitted!");
    },
    handlecardClick(e) {
      console.log(e);
      console.log("card clicked");
    },
    handleviewClick(e) {
      console.log(e);
      // e.stopPropagation();
      console.log("view clicked");
    },
  },
});

app.mount("#app");
