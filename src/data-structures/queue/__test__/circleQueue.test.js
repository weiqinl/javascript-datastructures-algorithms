import CircleQueue from "../circleQueue";

describe('circle queue', () => {

  it('hotpotato', () => {
    let cicleQueue = new CircleQueue()
    let names = ['John', 'Jack', 'Wei', 'Qin', 'China']
    let winner = cicleQueue.hotPotato(names, 7)
    expect(winner).toBe('John')

  })

  it('hotpotato', () => {
    let cicleQueue = new CircleQueue()
    let names = ['John', 'Jack', 'Wei', 'Qin', 'China', 'David']
    let winner = cicleQueue.hotPotato(names, 7)
    expect(winner).toBe('Wei')

  })

})