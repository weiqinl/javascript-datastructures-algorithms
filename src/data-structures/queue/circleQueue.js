import Queue from "./queue-array";

export default class CircleQueue {

  constructor() {}

  hotPotato(nameList, num) {

    let queue = new Queue()

    for (let i = 0; i < nameList.length; i++) {
      queue.enqueue(nameList[i])
    }

    let eliminated = '';
    while (queue.size() > 1) {
      for (let i = 0; i < num; i++) {
        queue.enqueue(queue.dequeue());
      }
      eliminated = queue.dequeue();
      console.log(eliminated + '在击鼓传花游戏中被淘汰')
    }

    return queue.dequeue()
    
  }

}