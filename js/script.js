const {createApp} = Vue;

createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
            currentPosition: 0,
            setIntervalTime: 3000,
        };
    },
    methods: {
        nextSlide: function() {
            if (this.currentPosition < this.slides.length - 1) {
                this.currentPosition++;
            } else {
                this.currentPosition = 0;
            }
        },
        prevSlide: function() {
            if (this.currentPosition > 0) {
                this.currentPosition--; 
            } else {
                this.currentPosition = this.slides.length - 1;
            }
        },
        showSlide(activeThumb) {
            this.currentPosition = activeThumb;
        },
        setAutoPlay: function () {
            setInterval(this.nextSlide, this.setIntervalTime);
        }
    },
    created: function() {
        this.setAutoPlay();
    }
}).mount("#app");