import palindrome from '../palindrome'

describe('judge palindrome', () => {

  it('not string type', () => {
    let a
    expect(palindrome(a)).toBeFalsy() // undefined
    expect(palindrome()).toBeFalsy() // undefined

    let b = null
    expect(palindrome(b)).toBeFalsy() // null


    expect(palindrome(12321)).toBeFalsy()
    expect(palindrome(123521)).toBeFalsy()

    let obj = {
      a: 'b',
      b: 'a',
    }
    expect(palindrome(obj)).toBeFalsy()
    
    let s = Symbol('abba')
    expect(palindrome(s)).toBeFalsy()

  })

  it('judge palindrome', () => {

    expect(palindrome('')).toBeFalsy() // 空字符串

    expect(palindrome('abcba')).toBeTruthy()
    expect(palindrome(' a b b a ')).toBeTruthy()
    expect(palindrome('12321')).toBeTruthy()
    expect(palindrome('ab，ba')).toBeTruthy()

    expect(palindrome('aB，ba')).toBeTruthy()

    expect(palindrome(' 中国 国中 ')).toBeTruthy()
    expect(palindrome('abcd')).toBeFalsy()
    expect(palindrome('12312')).toBeFalsy()

  })
})