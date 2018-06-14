/**
 * 队列
 * 我们使用数组来存储队列中的元素
 * 
 *=====队列的入队、出队示意图========
 *
 *  出队 ----------------- 入队
 *   <--- A1,A2,A3,...,An <---
 *      -----------------
 *
 *================================
*/
export default class Queue {

  constructor() {
    this.items = [];
  }

  /**
   * 向队尾添加一个（或多个）新的元素
   * @param {*} element 新元素
   */
  enqueue(element) {
    this.items.push(element)
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