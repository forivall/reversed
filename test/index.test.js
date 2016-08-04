import test from 'ava'

import reversed from '../index'

test('iterator', (t) => {
  let expected = 8
  for (const n of reversed([6, 7, 8])) {
    t.true(n === expected)
    expected--
  }
  t.pass()
})

test('entries', (t) => {
  let expected = 8
  let expectedIndex = 2
  for (const [i, n] of reversed([6, 7, 8]).entries()) {
    t.true(n === expected)
    expected--
    t.true(i === expectedIndex)
    expectedIndex--
  }
  t.pass()
})

test('keys', (t) => {
  let expectedIndex = 2
  for (const i of reversed([6, 7, 8]).keys()) {
    t.true(i === expectedIndex)
    expectedIndex--
  }
  t.pass()
})

test('values', (t) => {
  let expected = 8
  for (const n of reversed([6, 7, 8]).values()) {
    t.true(n === expected)
    expected--
  }
  t.pass()
})
