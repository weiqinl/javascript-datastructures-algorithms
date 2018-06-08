import hexConvert from '../hexConvert'

describe('less hex convert', () => {
  it('hex convert', () => {
    expect(hexConvert(100, 2)).toBe('1100100')
    expect(hexConvert(100, 3)).toBe('10201') // 100  33  11  3  1 0
    expect(hexConvert(100, 8)).toBe('144') // 100 12 1 0
    expect(hexConvert(100, 10)).toBe('100') // 100 10 1 0
    expect(hexConvert(100, 16)).toBe('64') // 100 6 0
    expect(hexConvert(1000, 16)).toBe('3E8') // 100 62 3 0

    // 100 / 2 == 50 rem = 0
    // 50 / 2 == 25 rem = 0
    // 25 / 2 == 12 rem = 1
    // 12 / 2 == 6 rem = 0
    // 6 / 2 == 3 rem = 0
    // 3 / 2 == 1 rem = 1
    // 1 / 2 == 0 rem = 1

    // 100/3 == 33 rem = 1
    // 33/3 == 11 rem = 0
    // 11/3 == 3 rem = 2
    // 3/3 == 1 rem = 0
    // 1/3 == 0 rem = 1

    // 100 / 8 == 12 rem = 4
    // 12 / 8 == 1 rem = 4
    // 1 / 8 == 0 rem = 1

    // 100 / 16 == 6 rem = 4
    // 6 / 16 == 0 rem = 6

    // 1000 / 16 == 62 rem = 8
    // 62 / 16 == 3 rem = 14  //对应于16进制中的E
    // 3 / 16 == 0 rem = 3

  })
})