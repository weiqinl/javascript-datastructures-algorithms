链表中的每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。

现实中，有一些链表的例子。
第一个就是寻宝的游戏。你有一条线索，这条线索是指向寻找下一条线索的地点的指针。你顺着这条链接去下一个地点，得到另一条指向下一处的线索。得到列表中间的线索的唯一办法，就是从起点（第一条线索）顺着列表寻找。
第二个例子是火车。一列火车是由一些车厢组成的。每节车厢都是相互连接。你很容易分离一节车皮，改变它的位置，添加或移除它。每节车厢都是列表的元素，车厢间的连接就是指针。

JavaScript 中链表与数组的区别：

链表中的元素是不连续的，而数组中的元素是连续的。
链表添加或移除元素的时候不需要移动其他元素，而数组需要。
链表需要指针，而数组不需要。
链表需要从表头开始迭代列表直到找到所需要的元素。数组则可以直接访问任何位置的任何元素。
两者都具有动态性。关于数组动态性。数组在 js 中是一个可以修改的对象，添加移除元素，它会动态的变化，但是成本很高，需要移动元素。在大多数语言中（比如 C 和 Java），数组的大小是固定的，想添加元素就要创建一个全新的数组，不能简单地往其中添加所需的元素。

链表分为单项链表，双向链表，循环链表