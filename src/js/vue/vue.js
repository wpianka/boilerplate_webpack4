import { Counter } from './components/counter'
import RoundedButton from './components/RoundedButton.vue'


new Vue({
    el: '#app',
    components: {
        "edu-counter": Counter,
        "btn-ronded": RoundedButton 
     }
    
});