import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'hi, how are you?'
  },
  template: '<div id="app">{{ hello }}</div>'
})

export { app }
