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

  while (decNumber > 0) {
    rem = Math.floor(decNumber % hex)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / hex)
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()] // 将栈中的数据取出
  }

  return baseString
}