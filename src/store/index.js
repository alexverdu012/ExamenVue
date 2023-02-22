import { createStore } from 'vuex'

export default createStore({
  state: {
    personasArray: [],
    personaInsertar: null
  },
  getters: {
    personas(state) {
      return state.personasArray
    }
  },
  mutations: {
    addPersona( state ) {
      state.personasArray = [state.personaInsertar,...state.personasArray]
    }
  },
  actions: {
    addPersonaAction( context ) {
      context.commit('addPersona')
    }
  },
  modules: {
  }
})
