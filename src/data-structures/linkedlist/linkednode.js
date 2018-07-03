/**
 * 链表节点，链表中的项，链表中的节点
 */
export class Node {
  constructor(element, next = null) {
    this.element = element // 链表中节点的值
    this.next = next // 指向列表中下一个节点项的指针
  }
}

export class DoublyNode extends Node {
  constructor(element, next = null, prev = null) {
    super(element, next)
    this.prev = prev
  }
}