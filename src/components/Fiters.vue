<template>
    <div class="container" :class="{'loading': loading}">
        <div class="row">
            <div class="col-lg-3 mb-4">
                <h1 class="mt-4">Filtros</h1>

                <h3 class="mt-2">Ingredientes</h3>
                <div class="form-check" v-for="(ingredient, index) in ingredients">
                    <input class="form-check-input" type="checkbox" :value="index" :id="'ingredient'+index" v-model="selected.ingredients">
                    <label class="form-check-label" :for="'ingredient' + index">
                        {{ ingredient.name }} 
                    </label>
                </div>

                <h3 class="mt-2">Calorias</h3>
                <div class="form-check" v-for="(caloria, index) in calorias">
                    <input class="form-check-input" type="checkbox" :value="caloria.id" :id="'caloria'+index" v-model="selected.calorias">
                    <label class="form-check-label" :for="'caloria' + index">
                        {{ caloria.name }} 
                    </label>
                </div>

                <h3 class="mt-2">Nutrientes</h3>
                <div class="form-check" v-for="(nutriente, index) in nutrientes">
                    <input class="form-check-input" type="checkbox" :value="nutriente.id" :id="'nutriente'+index" v-model="selected.nutrientes">
                    <label class="form-check-label" :for="'nutriente' + index">
                        {{ nutriente.name }} 
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
                ingredients: [],
                nutrientes: [],
                calorias: [],
                loading: true,
                selected: {
                    ingredients: [],
                    nutrientes: [],
                    calorias: []
                }
            }
        },
        mounted() {
            this.loadIngredients();
            this.loadNutrientes();
            this.loadCalorias();
        },
        watch: {
            selected: {
                handler: function () {
                    this.loadIngredients();
                    this.loadNutrientes();
                    this.loadCalorias();
                },
                deep: true
            }
        },
        methods: {
            loadIngredients: function () {
                axios.get('/api/categories', {
                        params: _.omit(this.selected, 'categories')
                    })
                    .then((response) => {
                        this.categories = response.data.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            loadNutrientes: function () {
                axios.get('/api/manufacturers', {
                        params: _.omit(this.selected, 'manufacturers')
                    })
                    .then((response) => {
                        this.manufacturers = response.data.data;
                        this.loading = false;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            loadCalorias: function () {
                axios.get('/api/prices', {
                        params: _.omit(this.selected, 'prices')
                    })
                    .then((response) => {
                        this.prices = response.data;
                        this.loading = false;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>