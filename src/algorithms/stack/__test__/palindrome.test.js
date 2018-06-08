import palindrome from '../palindrome'

describe('judge palindrome', () => {
  it('judge palindrome', () => {
    expect(palindrome('abcba')).toBeTruthy()
    expect(palindrome(' a b b a ')).toBeTruthy()
    expect(palindrome('12321')).toBeTruthy()
    expect(palindrome('ab，ba')).toBeTruthy()

    expect(palindrome('aB，ba')).toBeTruthy()

    expect(palindrome(' 中国 国中 ')).toBeTruthy()
    expect(palindrome('abcd')).toBeFalsy()
    expect(palindrome('12312')).toBeFalsy()
  })

  it('judge palindrome for null/undefined/""', () => {
    expect(palindrome(null)).toBeFalsy()
    expect(palindrome(undefined)).toBeFalsy()
    expect(palindrome()).toBeFalsy()
    expect(palindrome('')).toBeFalsy()
  })

  it('judge palindrome not string', () => {
    let obj = {
      a: 'b',
      b: 'a',
    }
    expect(palindrome(obj)).toBeFalsy()

  })
})