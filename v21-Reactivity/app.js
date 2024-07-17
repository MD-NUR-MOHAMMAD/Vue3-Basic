// var app = Vue.createApp({
//   data() {
//     return {
//       name: "",
//     };
//   },

//   methods: {
//     clear() {
//       this.name = "";
//     },
//   },
// });

// app.mount("#app");

var date = {
  name: "",
  age: 24,
};

var handler = {
  // proxyData.name set method call hobe
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
    if (key === "name") {
      var outputElement = document.querySelector("#outputname");
      outputElement.innerHTML = value;
    }


  },
};

var proxyData = new Proxy(date, handler);
proxyData.name = "Hossain";

// data.name = "Hossain";
