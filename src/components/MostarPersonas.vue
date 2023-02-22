<template>
    <div class="container">
      <h2>Datos</h2>
      
      <button @click="mostrarPersonas">Buscar</button>
      
      <div v-if="this.personasEncontradas.length > 0">
        <div class="scroll">
        <div v-for="(persona, index) in this.personasEncontradas" :key="index" class="listPersonasBuscadas">
            <p><b>Nombre: </b>{{ persona.nombre }}</p>
            <p><b>Apellidos: </b>{{ persona.apellidos }}</p>
            <p><b>Edad: </b>{{ persona.edad }}</p>
        </div>
        </div>
      </div> 
    </div>
</template>
  
<script>
  export default {
    name: 'MostarPersonas',
    data() {
        return {
            personasEncontradas: []
        }
    },
    methods: {
        mostrarPersonas() {
            this.personasEncontradas = []
            this.personasEncontradas = this.$store.getters.personas
            console.log(this.personasEncontradas)
        },
        scrollToEnd() {
            try{
                var container = document.getElementsByClassName('scroll')
                var scrollHeight = container.scrollHeight
                container.scrollTop = scrollHeight
            }catch(error) {
                console.log(error)
            }
           
        }
    },
    mounted() {
        this.scrollToEnd()
    }
  }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
    .listPersonasBuscadas {
        text-align: left;
        margin-top: 5px;
    }
    .scroll {
        width: 300px;
        max-height: 150px;
        overflow: scroll;
        margin-bottom: 20px;
    }
</style>
  