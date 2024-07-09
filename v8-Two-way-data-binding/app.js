var app = Vue.createApp({
  data() {
    return {
      name: "",
      result: ""
    };
  },
  methods: {
    // handleInput(e){
    //   this.name = e.target.value;
    // },

    handleGetDouble(){
      this.result = this.name * 2;
    },

    handleGetSquare(){
      this.result = this.name * this.name;
    },

    reset(){
      this.name = "";
      this.result = "";
    }

  },
});

app.mount("#app");
