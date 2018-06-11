import { hanoi, hanoiStack, hanoiStackArray } from '../hanoi'

describe('hanoi', () => {
  it('moves number', () => {
    expect(hanoi(1)).toEqual(1)
    expect(hanoi(2)).toEqual(3)
    expect(hanoi(3)).toEqual(7)
    expect(hanoi(4)).toEqual(15)
    expect(hanoi(5)).toEqual(31)
    expect(hanoi(15)).toEqual(32767)
  })

  it(' hanoiStack store sort', () => {
    let towers = ['A', 'B', 'C']
    expect(hanoiStack(1, ...towers)).toEqual(
      JSON.parse('[{"A": "", "B": "", "C": "1"}]')
    )
    expect(hanoiStack(2, ...towers)).toEqual(
      JSON.parse(
        '[{"A": "2", "B": "1", "C": ""}, {"A": "", "B": "1", "C": "2"}, {"A": "", "B": "", "C": "2,1"}]'
      )
    )
    expect(hanoiStack(3, ...towers)).toEqual(
      JSON.parse(
        '[{"A": "3,2", "B": "", "C": "1"}, {"A": "3", "B": "2", "C": "1"}, {"A": "3", "B": "2,1", "C": ""}, {"A": "", "B": "2,1", "C": "3"}, {"A": "1", "B": "2", "C": "3"}, {"A": "1", "B": "", "C": "3,2"}, {"A": "", "B": "", "C": "3,2,1"}]'
      )
    )
    expect(hanoi(4)).toEqual(15)
    expect(hanoi(5)).toEqual(31)
    expect(hanoi(15)).toEqual(32767)
  })
})
