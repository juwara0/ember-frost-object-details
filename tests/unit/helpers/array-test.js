import { expect } from 'chai'
import {
  describe,
  it
} from 'mocha'
import {
  array
} from 'ember-frost-object-details/helpers/array'

const data = [42, 1, 2]

describe('ArrayHelper', function () {
  it('works', function () {
    let result = array(data)
    expect(result).to.be.eq(data)
  })
})
