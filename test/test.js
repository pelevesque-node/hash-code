/* global describe, it */
'use strict'

const expect = require('chai').expect
const hashCode = require('../index')

describe('#hashcode()', () => {
  it('should return an integer hash', () => {
    const result = Number.isInteger(hashCode('cat'))
    const expected = true
    expect(result).to.equal(expected)
  })

  it('should return a unique hash 1', () => {
    const result = hashCode('rabbit')
    const expected = -938645478
    expect(result).to.equal(expected)
  })

  it('should return a unique hash 2', () => {
    const result = hashCode('dog')
    const expected = 99644
    expect(result).to.equal(expected)
  })

  it('should return a unique hash 3', () => {
    const result = hashCode('horse')
    const expected = 99466205
    expect(result).to.equal(expected)
  })
})
