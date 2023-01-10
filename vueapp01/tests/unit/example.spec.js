import vizin from '../../src/svc/vizinhos'

const mtz = [
  [0,0,0],
  [1,0,0],
  [0,0,0],
]

const mtz2 = [
  [0,1,0],
  [1,1,0],
  [0,0,0],
]

let posicao_1 = vizin.verificaVizinhos(mtz, 1, 2)
let posicao_2 = vizin.verificaVizinhos(mtz2, 0, 0)


test('numero de vizinhos', () => {
  expect(posicao_1).toBe(0);
  expect(posicao_2).toBe(3);
});