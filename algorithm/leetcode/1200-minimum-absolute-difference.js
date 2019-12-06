var minimumAbsDifference = function(arr = [0, 0]) {
  arr = arr.sort((pre, next) => pre - next)
  let result = []
  let anchor = arr[1] - arr[0]
  arr.reduce((pre, next) => {
    if (anchor < next - pre) return next
    if (anchor > next - pre) {
      result = []
      anchor = next - pre
    }
    result.push([pre, next])
    return next
  })
  return result
}

console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]))
