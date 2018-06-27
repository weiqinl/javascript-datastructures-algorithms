import QueueElement from "./queueElement";

/**
 * 最小优先队列
 */
export default class PriorityQueue {
  constructor() {
    this.items = []
  }

  /**
   * 在正确的位置添加元素
   * @param {*} element 要添加的元素
   * @param {Int32Array} priority 优先级
   */
  enqueue(element, priority) {
    let queueElement = new QueueElement(element, priority)
    let added = false
    for (let i = 0; i < this.items.length; i++) {
      // 当找到一个比要添加的元素的优先级更高的项时，将新元素插入到它之前。
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement) // 插入新元素
        added = true
        break // 终止队列循环
      }
    }
    // 当需要添加的元素优先级大于队列中的任何一个元素的时候，把该元素添加到队尾。
    if (!added) {
      this.items.push(queueElement)
    }
  }

  /**
   * 打印队列中的元素
   */
  print() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`${i + 1} - ${this.items[i].element} - ${this.items[i].priority}`)
    }
  }



  /**
   * 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
   */
  dequeue() {
    // 根据队列的先进先出原则，使用shift方法
    // shift方法会从数组中移除存储在索引为0的元素
    return this.items.shift()
  }

  /**
   * 返回队列中的第一个元素--最先被添加，也将是最先被移除的元素。
   * 队列不做任何变动（不移除元素，只返回元素信息）
   */
  front() {
    return this.items[0]
  }

  /**
   * 清除队列中的所有元素
   */
  clear() {
    this.items = []
  }

  /**
   * 如果队列中不包含任何元素，返回true，否则返回false
   */
  isEmpty() {
    return this.items.length === 0
  }

  /**
   * 返回队列包含的元素个数，与数组length属性类似
   */
  size() {
    return this.items.length
  }

  /**
   * 队列内容字符串化
   */
  toString() {
    return this.items.toString()
  }

}