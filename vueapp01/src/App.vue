<template>
  <div id="app">
    <div>
      <HelloWorld/>
      <div v-for="linha,index_row in matriz" :key="index_row" class="flex">
        <div v-for="item, index_col in linha" :key="index_col">
          <CelulaLife :row="index_row" :col="index_col" @update-life="updateCelula($event)" :state="item" :teste="teste" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import CelulaLife from './components/CelulaLife'
import vizin from './svc/vizinhos'
export default {
  name: 'App',
  components: {
    HelloWorld,
    CelulaLife
  },
  data() {
    return {
      teste:"aa",
      cols: 4,
      rows: 4,
      matriz: [
        [1,0,0,0,0,1],
        [0,0,1,0,0,0],
        [0,1,0,1,0,0],
        [0,0,1,0,0,0],
        [0,0,0,0,0,1],
        [0,0,0,1,0,1]
    ],
      novaMatriz: [],
      alive: false
    }
  },
  created() {
    this.inicia()
  },
  methods: {
    inicia(){
      this.matriz = this.geraNovaMatriz(this.matriz)
      this.exec(this.matriz)
    },
    exec(matriz){
      this.matriz = this.geraNovaMatriz(matriz)
      setTimeout(()=>{
        this.exec(this.matriz)
      }, 300)
    },
    updateCelula(event){
      this.matriz = vizin.morreOuVive(this.matriz, event)
    },
    geraNovaMatriz(matriz){
      this.novaMatriz = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
      ]
      for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
          const vizinhosVivos = vizin.verificaVizinhos(matriz, i, j)
          if (matriz[i][j] == 1){
            if (vizinhosVivos < 2 || vizinhosVivos > 3){
              this.novaMatriz[i][j] = 0
            }
            else {
              this.novaMatriz[i][j] = 1
            }
          }
          else {
            if (vizinhosVivos == 3){
              this.novaMatriz[i][j] = 1
            }
            else {
              this.novaMatriz[i][j] = 0
            }
          }
        }
      }
      return this.novaMatriz
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #201616;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
.flex {
  display: flex;
}
</style>