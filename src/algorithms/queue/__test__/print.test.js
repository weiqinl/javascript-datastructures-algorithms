import print from '../print'
describe('print queue array', () => {

  it('print element', () => {

    expect(print([1, 2, 3])).toBe('1, 2, 3')
    expect(print(['wei','qin','l'])).toBe('wei, qin, l')

  })

})