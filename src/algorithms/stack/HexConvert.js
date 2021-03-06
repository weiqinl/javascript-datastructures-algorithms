import Stack from '../../data-structures/stack/stack-array'

/**
 * 10进制数转换为其他16进制以内进制的数
 * @param {*} decNumber 需要转换的数
 * @param {Int32Array} hex 进制数
 */
export default function hexConverter(decNumber, hex) {
  let remStack = new Stack()
  let rem = 0
  let baseString = ''
  let digits = '0123456789ABCDEF' //进制取数


  if (hex < 2 || hex > 16) {
    return '只转换大于二进制小于十六进制之间的进制'
  }

  while (decNumber > 0) {
    rem = Math.floor(decNumber % hex)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / hex)
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()] // 取出栈中的数据对应于进制数的表示数
  }

  return baseString
}