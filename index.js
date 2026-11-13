const PROPERTY = /^[\p{ID_Start}$_][\p{ID_Continue}$\u200c\u200d]*$/u

gen.valid = isProperty

gen.property = function (prop) {
  return isProperty(prop) ? prop : JSON.stringify(prop)
}

gen.optional = function (obj, prop) {
  return isProperty(prop) ? obj + '?.' + prop : obj + '?.[' + JSON.stringify(prop) + ']'
}

module.exports = gen

function gen (obj, prop) {
  return isProperty(prop) ? obj + '.' + prop : obj + '[' + JSON.stringify(prop) + ']'
}

function isProperty (prop) {
  return typeof prop === 'string' &&PROPERTY.test(prop)
}
