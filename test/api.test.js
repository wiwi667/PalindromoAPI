const request = require('supertest')
var expect = require('chai').expect
const app = require('../src/app')

describe('GET /iecho?text=Esto es una prueba', () => {
  it('Respuesta normal con los parámetros correctos', (done) => {
    request(app)
      .get('/iecho?text=Esto es una prueba')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})

describe('GET /iecho?texto=prueba', () => {
  it('validar parámetros', (done) => {
    request(app)
      .get('/iecho?texto=qazaq')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done)
  })
})

describe('GET /iecho?text=qaz123', () => {
  it('Verificar respuesta', async  () => {
    const response = await request(app)
      .get('/iecho?text=qaz123')
      .set('Accept', 'application/json')
    expect(response.body.text).to.eql('321zaq')
  })
})

describe('GET /iecho?text=qazaq', () => {
  it('Verificar palindromo', (done) => {
    request(app)
      .get('/iecho?text=qazaq')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})