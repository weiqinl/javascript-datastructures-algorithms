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

  it('hanoiStackArray moves steps', () => {
    let towers = ['A', 'B', 'C']

    expect(hanoiStackArray(1, ...towers)).toEqual(
      Array('第 1 步，将圆盘 1 从 A 移至 C; A: [],B: [],C: [1]')
    )
    expect(hanoiStackArray(2, ...towers)).toEqual(
      Array(
        '第 1 步，将圆盘 1 从 A 移至 B; A: [2],C: [],B: [1]',
        '第 2 步，将圆盘 2 从 A 移至 C; A: [],B: [1],C: [2]',
        '第 3 步，将圆盘 1 从 B 移至 C; B: [],A: [],C: [2,1]'
      )
    )

    expect(hanoiStackArray(3, ...towers)).toEqual(
      Array(
        '第 1 步，将圆盘 1 从 A 移至 C; A: [3,2],B: [],C: [1]',
        '第 2 步，将圆盘 2 从 A 移至 B; A: [3],C: [1],B: [2]',
        '第 3 步，将圆盘 1 从 C 移至 B; C: [],A: [3],B: [2,1]',
        '第 4 步，将圆盘 3 从 A 移至 C; A: [],B: [2,1],C: [3]',
        '第 5 步，将圆盘 1 从 B 移至 A; B: [2],C: [3],A: [1]',
        '第 6 步，将圆盘 2 从 B 移至 C; B: [],A: [1],C: [3,2]',
        '第 7 步，将圆盘 1 从 A 移至 C; A: [],B: [],C: [3,2,1]'
      )
    )
  })
})
