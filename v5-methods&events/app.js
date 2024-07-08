var app = Vue.createApp({
    data() {
        return {
            count: 0
        };
    },
    methods: {
        getCurretntTime() {
           let ct = new Date();
           return ct
        },
        increase() {
            // this.count = this.count + 1;
            this.count++;
        },
        decrease() {
            this.count--;
        }
    }
});

app.mount('#app')