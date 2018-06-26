import PriorityQueue from "../priorityQueue";

describe('priority queue', () => {
  let pq
  beforeEach(() => {
    pq = new PriorityQueue()
  })

  it('init queue', () => {
    expect(pq.isEmpty()).toBeTruthy()
    expect(pq.size()).toBe(0)
  })

  it('push element to queue', () => {
    expect(pq.isEmpty()).toBeTruthy()

    expect(pq.enqueue('l', 3))
    expect(pq.enqueue('wei', 1))
    expect(pq.enqueue('qin', 2))
    expect(pq.enqueue('2018', 2))

    expect(pq.print())

  })

})