import Queue from '../queue-array.js'

describe('queue-array ', () => {

  let queue

  beforeEach(() => {
    queue = new Queue()
  })

  it('is Empty', () => {
    expect(queue.isEmpty()).toBeTruthy()
    expect(queue.size()).toBe(0)
  })

  it('enqueue function push element', () => {

    expect(queue.size()).toBe(0)
    queue.enqueue('liu')
    expect(queue.size()).toBe(1)
    queue.enqueue('wei')
    expect(queue.size()).toBe(2)
    queue.enqueue('qin')
    expect(queue.size()).toBe(3)

    expect(queue.isEmpty()).toBeFalsy()

    // 特殊元素的处理
    queue.enqueue('') // 非占位空字符串
    expect(queue.toString()).toBe('liu,wei,qin,')

    queue.enqueue(' ') // 占位空字符串
    expect(queue.toString()).toBe('liu,wei,qin,, ')

    queue.enqueue('undefined')
    expect(queue.toString()).toBe('liu,wei,qin,, ,undefined')

    queue.enqueue(undefined)
    expect(queue.toString()).toBe('liu,wei,qin,, ,undefined,')

    queue.enqueue(null)
    expect(queue.toString()).toBe('liu,wei,qin,, ,undefined,,')

  })

  it('dequeue function remove element', () => {
    expect(queue.size()).toBe(0)

    queue.enqueue('liu')
    queue.enqueue('wei')
    queue.enqueue('qin')

    expect(queue.size()).toBe(3)

    expect(queue.dequeue()).toBe('liu')
    expect(queue.size()).toBe(2)
    expect(queue.dequeue()).toBe('wei')
    expect(queue.size()).toBe(1)
    expect(queue.dequeue()).toBe('qin')
    expect(queue.size()).toBe(0)

    expect(queue.isEmpty()).toBeTruthy()

    expect(queue.dequeue()).toBe(undefined)

  })

  it('front function return first element', () => {
    expect(queue.size()).toBe(0)

    queue.enqueue('liu')
    queue.enqueue('wei')
    queue.enqueue('qin')

    expect(queue.size()).toBe(3)

    expect(queue.front()).toBe('liu')
    expect(queue.size()).toBe(3)
    expect(queue.front()).toBe('liu')
  })


  it('clears the queue', () => {
    queue.clear();
    expect(queue.isEmpty()).toBeTruthy()

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).toBeFalsy()

    queue.clear();
    expect(queue.isEmpty()).toBeTruthy()
  });

  it('toString function return stringify', () => {
    expect(queue.size()).toBe(0)

    queue.enqueue('liu')
    queue.enqueue('wei')
    queue.enqueue('qin')

    expect(queue.size()).toBe(3)

    expect(queue.toString()).toBe('liu,wei,qin')
  })
})