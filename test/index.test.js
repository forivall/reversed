import test from 'ava'

import reversed from '../index'

test('it works', t => {
  let expected = 8
  for (const n of reversed([6, 7, 8])) {
    t.true(n === expected)
    expected--
  }
  t.pass()
})
