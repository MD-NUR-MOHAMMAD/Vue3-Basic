var app = Vue.createApp({
  data() {
    return {
        name: ""
    };
  },
  methods: {
    handleKeyup(e) {
      console.log(e.target.value);
      this.name = e.target.value
    }
  },
});

app.mount("#app");
