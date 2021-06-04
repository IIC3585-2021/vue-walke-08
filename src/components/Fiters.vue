<template>
    <div class="container" :class="{'loading': loading}">
        <div class="row">
            <div class="col-lg-3 mb-4">
                <h1 class="mt-4">Filtros</h1>

                <h3 class="mt-2">Ingredientes</h3>
                <div class="form-check" v-for="(ingredient, index) in ingredients">
                    <input class="form-check-input" type="checkbox" :value="ingredient" :id="'ingredient'+index" v-model="selected.ingredients">
                    <label class="form-check-label" :for="'ingredient' + index">
                        {{ ingredient.name }} 
                    </label>
                </div>

                <h3 class="mt-2">Calorias</h3>
                <div class="form-check" v-for="(caloria, index) in calorias">
                    <input class="form-check-input" type="checkbox" :value="caloria" :id="'caloria'+index" v-model="selected.calorias">
                    <label class="form-check-label" :for="'caloria' + index">
                        {{ caloria.name }} 
                    </label>
                </div>

                <h3 class="mt-2">Nutrientes</h3>
                <div class="form-check" v-for="(nutriente, index) in nutrientes">
                    <input class="form-check-input" type="checkbox" :value="nutriente" :id="'nutriente'+index" v-model="selected.nutrientes">
                    <label class="form-check-label" :for="'nutriente' + index">
                        {{ nutriente.name }} 
                    </label>
                </div>
            </div>
        </div>
    </div>
    <button @click="youState">Ver estado</button>
</template>

<script>
    export default {
        data: function () {
            return {
                ingredients: [{id: 0, name: "pollo"}, {id: 1, name: "carne"}, {id: 2, name:"pescado"}],
                nutrientes: [{id: 0, name:"calcio"}, {id: 2, name:"potasio"}, {id: 3, name:"vitamina k"}],
                calorias: [{id: 0, name:"14000"}, {id: 1, name:"1203901293912"}, {id: 2, name:"3499943"}],
                loading: true,
                selected: {
                    ingredients: [],
                    nutrientes: [],
                    calorias: []
                }
            }
        },
        watch: {
            selected: {
                handler: function () {
                    console.log("ingredients: ", this.selected.ingredients);
                    console.log("nutrientes: ", this.selected.nutrientes);
                    console.log("calorias: ", this.selected.calorias)
                    this.$store.dispatch("saveFilters", this.selected)
                },
                deep: true
            }
        },
        methods: {
            youState(){
                console.log(this.$store.state.filters)
            }
        }
    }
/* Código extraído y levemente modificado de: https://github.com/LaravelDaily/Laravel-Vue-Sidebar-Filters/blob/master/resources/js/components/Front.vue
Además de la explicación del video en Youtube de: https://www.youtube.com/watch?v=ZZkROqT83t8 */
</script>
