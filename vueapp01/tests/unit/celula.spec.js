import vizin from '../../src/svc/vizinhos'

const mtz = [
  [0,0,0],
  [1,0,0],
  [0,0,0],
]

let posicao_1 = vizin.morreOuVive(mtz,[0,0,0])
let posicao_2 = vizin.morreOuVive(mtz,[1,0,1])



test('ao clicar posicao 1 morre e posicao 2 vive', () => {
  expect(posicao_1[0][0]).toBe(1);
  expect(posicao_2[1][0]).toBe(0);
});