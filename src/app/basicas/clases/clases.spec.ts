import { Jugador } from "./clases"

describe('Pruebas de clase v2', ()=>{

  let jugador = new Jugador();

  beforeAll(()=>{
    // console.log('BeforeAll')
  });
  beforeEach(()=>{
    // console.log('BeforeEach')
    // jugador.hp = 100;
    jugador = new Jugador();
  });
  afterAll(()=>{
    // console.log('afterAll')
  });
  afterEach(()=>{
    // console.log('afterEach')
    // jugador.hp = 100;
  });


  it('Debe de retornar 80 de hp, si recibe 20 de daño', ()=>{
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });

  it('Debe de retornar 50 de hp, si recibe 50 de daño', ()=>{
    const resp = jugador.recibeDanio(50);
    expect(resp).toBe(50);
  });

  it('Debe de retornar 0 de hp, si recibe 100 de daño ó mas', ()=>{
    const resp = jugador.recibeDanio(101);
    expect(resp).toBe(0);
  });


})
