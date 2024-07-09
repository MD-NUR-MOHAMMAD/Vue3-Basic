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
    },

    addTen(){
      this.result = this.name + 10;
    }

  },
});

app.mount("#app");
