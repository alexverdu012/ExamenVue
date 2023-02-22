<template>

  <BuscarPersona />
  <InsertarDatos />
  <MostarPersonas />

</template>

<script>
import BuscarPersona from './components/BuscarPersona.vue';
import InsertarDatos from './components/InsertarDatos.vue';
import MostarPersonas from './components/MostarPersonas.vue';

export default {
  name: 'App',
  components: {
    BuscarPersona,
    InsertarDatos,
    MostarPersonas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
      margin-top: 10px;
      border: 1px black solid;
      padding: 10px;
    }
    form {
        display: flex;
        flex-wrap: wrap;
    }
    input {
        box-sizing: border-box;
        font-size: 18px;
        height: 60%;
        padding: 20px;
        width: 100%;
        margin-top: 10px;   
    }
    input[type=text] {
        border: 1px black solid;
    }

    input[type=button] {
        background: rgb(245, 147, 66);
    }

    input[type=button]:hover {
        background: rgb(252, 189, 138);
    }
    button {
        box-sizing: border-box;
        font-size: 18px;
        height: 60%;
        padding: 20px;
        width: 100%;
        margin-top: 10px;
        background: rgb(245, 147, 66);
    }

</style>
