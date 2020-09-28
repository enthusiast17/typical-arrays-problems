
exports.min = function min (array = []) {
  return array.reduce((min, element) => Math.min(min, element), 0)
}

exports.max = function max (array = []) {
  return array.reduce((max, element) => Math.max(max, element), 0)
}

exports.avg = function avg (array = []) {
  return array.reduce((sum, element) => sum + element, 0) / array.length || 0
}
