export const Counter = {
    template:`
    <div>
    <div v-show="!inProgress" class="toast toast-primary text-center">Wciśnij <strong>Start</strong>, aby rozpocząć odliczanie.</div>
    <br>
    <div class="text-center">
     <h1>{{ counter }}</h1>
     <button class="btn btn-primary" @click="start" :disabled="inProgress">Start</button>
    </div>
    </div>
    `,
    data: function() {
        return {
            counter: 10,
            inProgress: false
        }
    },
    methods: {
        start(){
            this.inProgress = true;
            this.countdown();
        },
        countdown(){
            this.counter--;

            if(this.counter > 0) {
                setTimeout(this.countdown, 1000);
            } else {
                setTimeout(() => {
                    this.counter = 10;
                    this.inProgress = false;
                }, 1000)
            }
        }
    }
};

