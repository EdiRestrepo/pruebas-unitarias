import { Jugador } from "./clases"

describe('Pruebas de clase', ()=>{

  const results = [...Array.from({length: 100})].map((_,i)=>({
    hp: i+1,
    damage: 100 - (i+1),
  }))

  results.forEach(item =>
    it(`Debe retornar ${item.hp} de hp, si recibe ${item.damage}`,()=>{
      const jugador = new Jugador();
      const resp = jugador.recibeDanio(item.damage);
      expect(resp).toBe(item.hp)
    })
  )

})
