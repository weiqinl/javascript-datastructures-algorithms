import Stack from '../../data-structures/stack/stack-array'

/**
 * 判断字符串是否为回文
 * @param {String} str 要判断的字符串
 */
export default function palindrome(str) {
  if (typeof (str) !== 'string') {
    return false
  }

  let stack = new Stack()
  let oStr = str;
  let nStr = '';

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i])
  }

  while (!stack.isEmpty()) {
    nStr += stack.pop().toString()
  }

  if (nStr === oStr) {
    // return `输入的字符串【{$oStr}】是回文`
    return true
  } else {
    // return `输入的字符串【{$oStr}】不是回文`
    return false
  }
}