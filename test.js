const test = require('brittle')
const gen = require('./')

test('valid', function (t) {
  t.is(gen('a', 'b'), 'a.b')
})

test('invalid', function (t) {
  t.is(gen('a', '-b'), 'a["-b"]')
})

test('valid (optional)', function (t) {
  t.is(gen.optional('a', 'b'), 'a?.b')
})

test('invalid (optional)', function (t) {
  t.is(gen.optional('a', '-b'), 'a?.["-b"]')
})
