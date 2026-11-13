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

test('unicode', function (t) {
  t.is(gen('a', 'æøå'), 'a.æøå')
  t.is(gen('a', '𝑥'), 'a.𝑥')
  t.is(gen('a', '1b'), 'a["1b"]')
  t.is(gen('a', 'b c'), 'a["b c"]')
})
