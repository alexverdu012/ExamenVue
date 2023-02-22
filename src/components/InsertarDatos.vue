<template>
    <div class="container">
      <h2>Insertar Datos</h2>
      <form action="submit">
        <input type="text" v-model="nombre" placeholder="Nombre">
        <input type="text" v-model="apellidos" placeholder="Apellidos">
        <input type="number" v-model="edad" placeholder="Edad">

        <input type="button" @click="insertarPersona()" value="Insertar Datos">
      </form>
    
    </div>
</template>
  
<script>
  export default {
    name: 'InsertarDatos',
    data() {
        return {
            nombre: '',
            apellidos: '',
            edad: null
        }
    },
    methods: {
        insertarPersona() {
            var personaBuild = {nombre:this.nombre, apellidos:this.apellidos, edad:this.edad}
            this.$store.state.personaInsertar = personaBuild
            this.$store.dispatch('addPersonaAction')
            this.nombre = '',
            this.apellidos = '',
            this.edad = null,
            console.log(personaBuild)
            
        }
    }
  }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  