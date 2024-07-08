var app = Vue.createApp({
    data() {
        return {
            tutorialinfo: {
                name: 'Bangla Tutorials',
                link: 'https://www.youtube.com',
                github: 'https://github.com/MD-NUR-MOHAMMAD'        
            },
            htmlcode: '<a href="https://www.youtube.com">Youtube</a>', 

        }
    }
});

app.mount('#app')