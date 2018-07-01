import { Node } from './linkednode'

/**
 * 链表类
 */
export default class LinkedList {
  constructor() {
    this.length = 0 // 存储链表中列表项的数量
    this.head = null // 存储链表中第一个节点的引用
  }

  /**
   * 向列表尾部添加一个新的项
   * @param {*} element 需要添加至链表中的节点项
   */
  append(element) {
    let node = new Node(element) // 将新项创建为符合链表结构的列表项
    if (this.head === null) {
      // 链表中的元素为空
      this.head = node
    } else {
      let current = this.head // 将第一个节点的引用赋值给当前项
      // 循环列表，直到找到最后一项
      while (current.next) {
        current = current.next
      }
      // 找到最后一项，将其next赋为node，建立链接
      current.next = node
    }
    this.length++ // 更新链表的长度
  }

  /**
   * 向列表的特定位置插入一个新的项
   * @param {*} position 插入链表中的位置
   * @param {*} element 需要添加的节点
   */
  insert(position, element) {
    let node = new Node(element)
    // 检查越界
    if (position > -1 && position <= this.length) {
      let current = this.head
      let previous
      let index = 0

      // 在第一个位子添加
      if (position === 0) {
        node.next = current
        this.head = node
      } else {
        // 需要找到特定的位子，将想要插入的元素放在previous节点和current节点之间
        while (index++ < position) {
          // previous 将是对想要插入新元素的位置之前一个元素的引用
          previous = current
          // current 对想要插入新元素的位置之后一个元素的引用
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      this.length++
      return true
    } else {
      return false
    }
  }
  /**
   * 移除指定位置的节点元素,并返回移除的项
   * 如果超出了链表的范围，则返回null
   * @param {Int32Array} position 链表中的位置
   */
  removeAt(position) {
    // 检查越界
    if (position > -1 && position < this.length) {
      let current = this.head
      let previous // 先前一个节点
      let index = 0 // 当前节点的位子

      // 移除第一项
      if (position === 0) {
        this.head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        // 将previous 与 current 的下一项链接起来：跳过current，从而移除它
        // 当前元素会丢弃在计算机内存中，等待GC清除
        previous.next = current.next
      }
      this.length-- // 链表元素数量减1
      return current.element // 返回移除的项
    } else {
      return null // 如果超出了链表的范围，则返回null
    }
  }

  /**
   * 从列表中移除一项
   * 先找出元素的索引项，再根据索引移除元素
   * @param {*} element 列表中的元素
   */
  remove(element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  /**
   * 返回元素在列表中的索引。如果列表中没有该元素则返回-1
   * @param {*} element 元素
   */
  indexOf(element) {
    let current = this.head
    let index = 0 // 计算位置数
    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  /**
   * 判断是否为空链表
   * 空链表返回true，非空(链表长度大于0)返回false
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * 返回链表包含的元素个数。与数组的length属性类似
   */
  size() {
    return this.length
  }

  /**
   * 获取链表的表头节点
   * head变量是LinkedList类的私有变量。
   * 但是，我们需要实现在类的外部循环访问列表。
   * 此时，就需要提供获取类的第一个元素的方法
   */
  getHead() {
    return this.head
  }

  /**
   * 由于列表项使用了Node类，需要重写toString方法，让其只输出元素的值。
   */
  toString() {
    let current = this.head
    let string = ''
    while (current) {
      string += current.element + (current.next ? '-->' : '')
      current = current.next
    }
    return string
  }
}
