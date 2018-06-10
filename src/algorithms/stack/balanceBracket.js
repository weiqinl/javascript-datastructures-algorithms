import Stack from '../../data-structures/stack/stack-array'
/**
 * 判断括号序列是否平衡,空序列也算是平衡
 * @param {String} brackets 括号序列
 */
export default function balanceBracket(brackets) {

  if (typeof (brackets) !== 'string') {
    return false
  }

  let left = '([{'
  let right = ')]}'
  let num = 0 // 括号的对数
  let stack = new Stack()

  for (let i = 0; i < brackets.length; i++) {

    if (right.indexOf(brackets[0]) > -1) {
      return false
    }
    if (left.indexOf(brackets[i]) > -1) {
      stack.push(brackets[i])
      num++
    } else {
      if (right.indexOf(brackets[i]) > -1) {
        let topBracket = stack.pop()
        let rightSort = right.indexOf(brackets[i])
        let leftSort = left.indexOf(topBracket)

        if (rightSort !== leftSort) {
          return false
        }

      }
    }
  }

  return `是平衡括号序列。有${num}对括号`
}