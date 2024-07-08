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
        increase(evt, amount) {
             this.count = this.count + amount;
             console.log(evt);
            
        },
        decrease(amount) {
            this.count = this.count - amount;
        },
        reset(ev) {
            console.log('reset');
            console.log(ev);
        }
    }
});

app.mount('#app')