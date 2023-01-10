function verificaVizinhos(matriz, x, y){
  let testVizinho = [
    {x: -1,y: -1}, {x: -1,y: 0}, {x: -1,y: 1}, 
    {x: 0,y: -1}, {x: 0,y: 1},
    {x: 1,y: -1}, {x: 1,y: 0}, {x: 1,y: 1}, 
  ]
  let vizinhos = []
  testVizinho.forEach((i)=>{
    if ((i['x'] + x >= 0 && i['y'] + y >= 0) && (i['x'] + x < matriz.length && i['y'] + y < matriz[0].length)){
      vizinhos.push({x: i['x']+x, y: i['y']+y})
    }
  })
  let vizinhosVivos = 0
  vizinhos.forEach((i)=>{
    if (matriz[i['x']][i['y']] == 1){
      vizinhosVivos+=1
    }
  })
  return vizinhosVivos
}

function morreOuVive(matrizs, evento) {
  if (evento[2] == 0) {
    matrizs[evento[0]][evento[1]] = 1
  } else {
    matrizs[evento[0]][evento[1]] = 0
  } 
  return matrizs }
  
export default { verificaVizinhos, morreOuVive }