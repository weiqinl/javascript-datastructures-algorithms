import bb from '../balanceBracket'

describe('checket bracket and bracket num ', () => {


  it('checket balance bracket', () => {

    expect(bb('')).toBe('是平衡括号序列。有0对括号')
    
    expect(bb('[]')).toBe('是平衡括号序列。有1对括号')
    expect(bb('[{}]')).toBe('是平衡括号序列。有2对括号')
    expect(bb('([()]{}{})')).toBe('是平衡括号序列。有5对括号')

    expect(bb(')[]')).toBeFalsy()
    expect(bb('}[]')).toBeFalsy()
    expect(bb('(({}))[]}')).toBeFalsy()
    expect(bb('(()[)]')).toBeFalsy()
  })
})