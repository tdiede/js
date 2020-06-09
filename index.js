/*
 * Immutable data cannot be changed once created.
 *
 * Write a simple wrapper function `immutableArray` that takes a `String` or
 * `Number` array and returns a new immutable array. Your immutable array must
 * have the following methods or properties:
 *
 * 1. `push(value)`: Add an element to the end of the array and returns a new
 *                   immutable array
 * 2. `pop()`: Remove the last element from the array and returns a new
 *             immutable array
 * 3. `get(index)`: Get the value at an index
 * 4. `length()`: Return the number of elements in the array
 */

function ImmutableArray(array) {

  function push(value) {
    var clone = array.slice()
    clone.push(value)
    return new ImmutableArray(clone)
  }

  function pop() {
    // shallow clone (no copy of array of arrays)
    var clone = array.slice()
    clone.pop()
    return new ImmutableArray(clone)
  }

  function get(index) {
    return array[index]
  }

  function length() {
    return array.length
  }

  return {push, pop, get, length}
}


const originalArr = [1,2,3,4]
const immutableArr = new ImmutableArray(originalArr)

// console.log(immutableArr)
console.log(immutableArr.length(), typeof immutableArr.length() == 'number')
console.log(immutableArr.push(5), typeof immutableArr.push(5) == 'object')
console.log(immutableArr.push(6).length() == 5)
console.log(originalArr)
console.log(JSON.stringify(originalArr) == JSON.stringify([1,2,3,4]))
console.log(immutableArr.pop(), typeof immutableArr.pop() == 'object')
console.log(immutableArr.pop().get(0) == 1)
console.log(immutableArr.pop().get(3) == undefined)
console.log(immutableArr.pop().push(10).get(3) == 10)
console.log(immutableArr.pop().pop().pop().length() == 1)
console.log(JSON.stringify(originalArr) == JSON.stringify([1,2,3,4]))
