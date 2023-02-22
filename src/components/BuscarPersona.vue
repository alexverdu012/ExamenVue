<template>
    <div class="container">
      <h2>Buscar Persona</h2>
      <form action="submit">
        <input type="text" v-model="filtroPersona" placeholder="Nombre, apellidos o edad">
        <input type="button" @click="buscarPersona()" value="Buscar">
      </form>
      <div v-if="this.mostrarPersonas">
        <div v-for="(persona, index) in this.personasBuscadas" :key="index" class="listPersonasBuscadas">
            <p><b>Nombre: </b>{{ persona.nombre }}</p>
            <p><b>Apellidos: </b>{{ persona.apellidos }}</p>
            <p><b>Edad: </b>{{ persona.edad }}</p>
        </div>
      </div>
      <div v-if="!this.mostrarPersonas">
        <p><b>No se ha encontrado ninguna persona</b></p>
      </div>
    
    </div>
</template>
  
<script>
  export default {
    name: 'BuscarPersona',
    data() {
        return {
            filtroPersona: null,
            personasBuscadas: [],
            mostrarPersonas: true 
        }
    },
    methods: {
        buscarPersona() {
            
            this.personasBuscadas = this.$store.getters.personas.filter(p => p.nombre == this.filtroPersona ||
            p.edad == this.filtroPersona || p.apellidos == this.filtroPersona)
            if (this.personasBuscadas.length == 0) {
                this.mostrarPersonas = false
            } else {
                this.mostrarPersonas = true
            }
            this.filtroPersona = ''
        }
    }
  }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .listPersonasBuscadas {
        text-align: left;
        margin-top: 5px;
    }
</style>
  