/**
 * 优先队列中的元素，包含元素和优先级
 */
export default class QueueElement {
  /**
   * 
   * @param {*} element 队列的元素
   * @param {*} priority 优先级
   */
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}