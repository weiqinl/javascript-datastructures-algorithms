import Queue from '../../data-structures/queue/queue-array'

/**
 * 打印队列的内容
 * @param {Array} queueArr 需要打印的数组
 */
export default function print(queueArr) {
  let queue = new Queue()
  let s = ''
  /**
   * 检查参数类型是否为数组
   */
  if (queueArr instanceof Array) {
    /**
     * 将需要打印内容添加到队列
     */
    for (let i = 0; i < queueArr.length; i++) {
      queue.enqueue(queueArr[i])
    }

    /**
     * 将队头的数据取出
     */
    while (!queue.isEmpty()) {
      s += queue.dequeue() + ', '
    }

    s = s.substr(0, s.length - 2)

  }
  return s;
}