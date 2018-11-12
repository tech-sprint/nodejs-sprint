
function seperateIp(ipStr) {
  console.log('')
  console.log('--- start ---')
  console.log(ipStr)
  const length = ipStr.length
  // 如果确定是个ip串的话，可以不用这句防御代码。
  if (length <= 3 || length > 12) console.error('太长或太短无法分成ip地址')

  const spePoints = [1, 2, 3]  // 初始化分隔点的位置。
  const maxSpePoints = [3, Math.min(6, length - 2), Math.min(9, length - 1)]  //每个点的最大位置

  function printResult() {
    let result = []
    for (let i = 0; i <= 3; i++) {
      result.push(ipStr.slice(spePoints[i - 1] || 0, spePoints[i] || length))
    }
    return result.join('.')
  }

  // 检查局部解
  function check(p) {
    const start = spePoints[p - 1] || 0
    const end = spePoints[p]
    const ipNum = Number(ipStr.slice(start, end))  // 局部位置的ip十进制值
    if (p === 2) {
      // 检查最后一个位置
      const lastIpNum = Number(ipStr.slice(end, length))
      return (ipNum >= 0 && ipNum <= 255) && (lastIpNum >= 0 && lastIpNum <= 255)
    } else {
      return ipNum >= 0 && ipNum <= 255
    }
  }

  function backtrack(p) {
    const initP = spePoints[p - 1] || 0
    for (let i = initP + 1; i <= maxSpePoints[p]; i++) {
      spePoints[p] = i
      const checkResult = check(p)
      if (checkResult && p === 2) {
        console.log(printResult())
      } else if (checkResult) {
        backtrack(p + 1)
      }
    }
  }

  backtrack(0)

  console.log('--- end ---')
}

seperateIp('142537593')
seperateIp('01273743874')
seperateIp('1234352')
