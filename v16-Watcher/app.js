var app = Vue.createApp({
  data() {
    return {
      mobile: "",
      name: {
        firstName: "",
        lastName: "",
      }
    };
  },
  watch: {
    mobile(newValue, oldValue) { 
      // console.log(newValue);
      if (isNaN (newValue)) {
        alert("Enter 11 digit mobile number");
        this.mobile = oldValue;
      }

      if (newValue.length == 11) {
        alert("OTP has been sent");
      }
    },
    
    // "name.firstName": function(newValue, oldValue) {
    //    console.log(newValue, oldValue);
    // },
    name: {
      deep: true,
      handler: function(newValue, oldValue) {
        console.log(newValue, oldValue);
      }
    }

  },

});

app.mount("#app");
