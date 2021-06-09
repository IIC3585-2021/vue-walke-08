<template>
    <div class="container" :class="{'loading': loading}">
        <div class="row">
            <div class="col-lg-3 mb-4">
                <h1 class="mt-4">Filters</h1>

                <h3 class="mt-2">Diet Type</h3>
                <div class="form-check" v-for="(diet, index) in diets">
                    <label class="container2" :for="'diet' + index">
                    <input class="form-check-input" type="checkbox" :value="diet" :id="'diet'+index" v-model="selected.diets">
                        {{ diet.name }} 
                    <span class="checkmark"></span>
                    </label>
                </div>

                <h3 class="mt-2">Calories</h3>
                <div class="form-check">
                    <div>Minimum
                       <input type="range" min="0" max="5000" step="50" v-model="selected.min">
                       <span v-text="minimo"></span>
                    </div>
                    <div>
                       Maximum
                       <input type="range" min="0" max="5000" step="50" v-model="selected.max"> 
                       <span v-text="maximo"></span>
                    </div>  
                </div>

                <h3 class="mt-2">Meal Type</h3>
                <div class="form-check" v-for="(meal, index) in mealType">
                    <label class="container2" :for="'meal' + index">
                    <input class="form-check-input" type="checkbox" :value="meal" :id="'meal'+index" v-model="selected.mealType">
                        {{ meal.name }} 
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                diets: [{id: 0, name: "balanced"}, {id: 1, name: "high-protein"}, {id: 2, name:"high-fiber"},
                {id: 3, name:"low-fat"}, {id: 4, name:"low_carb"},{id: 5, name:"low_sodium"}],
                mealType: [{id: 0, name:"lunch"}, {id: 2, name:"dinner"}, {id: 3, name:"breakfast"},{id: 3, name:"snack"}],
                loading: true,
                selected: {
                    diets: [],
                    mealType: [],
                    min: 0,
                    max: 5000,
                },
            }
        },
        mounted(){
            this.$store.dispatch("saveFilters", this.selected)
        },
        watch: {
            selected: {
                handler: function () {
                    this.$store.dispatch("saveFilters", this.selected)
                },
                deep: true
            }
        },
        methods: {
            youState(){
                console.log(this.$store.state.filters)
            }
        },
        computed: {
            minimo: function(){
                return this.selected.min
            },
            maximo: function(){
                return this.selected.max
            }
        }
    }
/* Código extraído y levemente modificado de: https://github.com/LaravelDaily/Laravel-Vue-Sidebar-Filters/blob/master/resources/js/components/Front.vue
Además de la explicación del video en Youtube de: https://www.youtube.com/watch?v=ZZkROqT83t8 */
</script>
<style>
.container {
    text-align: left;
    margin-left: 10px;
}
/* Customize the label (the container) */
.container2 {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container2 input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container2:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container2 input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container2 input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container2 .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

</style>
