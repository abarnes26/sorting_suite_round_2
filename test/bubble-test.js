const assert = require('chai').assert
const bubble = require('../bubble')

describe('bubble sort functionality', function() {
  it('it can sort an array of 5', function(){
    assert.deepEqual(bubble([4,2,5,1,3]), [1,2,3,4,5])
  })

  it('it can sort an array of 10', function(){
    assert.deepEqual(bubble([3,2,4,6,5,9,8,1,7,0]), [0,1,2,3,4,5,6,7,8,9])
  })
})
