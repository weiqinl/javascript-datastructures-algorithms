import Stack from '../../data-structures/stack/stack-array'

/**
 * 判断字符串是否为回文
 * @param {String} str 要判断的字符串
 */
export default function palindrome(str) {
  // 非string类型的 或者  空字符串  直接判断不是回文
  if (typeof (str) !== 'string' || str.length === 0) {
    return false
  }

  let stack = new Stack()
  let oStr = str.toLocaleLowerCase()
  let nStr = ''

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i])
  }

  while (!stack.isEmpty()) {
    nStr += stack.pop().toLocaleLowerCase()
  }

  if (nStr === oStr) {
    // return `输入的字符串【{$oStr}】是回文`
    return true
  } else {
    // return `输入的字符串【{$oStr}】不是回文`
    return false
  }
}