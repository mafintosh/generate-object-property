const isProperty = require('is-property')

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
