import Stack from '../../data-structures/stack/stack-array'

/**
 * 完成汉诺塔，需要移动的步数
 * @param {Int32Array} number 汉诺塔的层数
 */
export function hanoi(number) {
  // 1个      1次
  // 2个      3次
  // 3个      7次
  // 4个      15次
  // 5个      31次

  // f(n) = 2 * f(n-1) + 1
  let sum = 0 // 移动的步数0次
  if (number < 1) {
    return 0
  }
  if (number === 1) {
    sum = 1
  } else {
    sum = 2 * hanoi(number - 1) + 1
  }

  // 2的n次方减1
  // sum = 2 ** number - 1

  return sum
}

/**
 * 记录每一次圆盘移动之后，各个柱子上的圆盘排放顺序，完成汉诺塔。
 *
 * 这里的思路，一直在循环做一件事情。
 * 把原始柱子上的圆盘分为两部分，最大和其它。
 * 第一回合，将其它移动到辅助柱子上，将最大的移动到目标柱子上，再将其它移动到目标柱子上
 * 第二回合，将其它移动到辅助柱子上，将最大的移动到目标柱子上，再将其它移动到目标柱子上
 * ...
 * 第2 ** n - 1回合，将其它移动到辅助柱子上，将最大的移动到目标柱子上，再将其它移动到目标柱子上
 *
 * 但是，这里源柱子、辅助柱子和目标柱子会随着其它盘而变动。
 * 其它盘在哪个柱子上，哪根柱子就是源柱子。
 *
 * @param {Int32Array} plates 圆盘个数
 * @param {Array} source 源柱子
 * @param {Array} helper 辅助柱子
 * @param {Array} dest 目的地柱子
 * @param {String} sourceName 源柱子的名字
 * @param {String} helperName 辅助柱子的名字
 * @param {String} destName 目的地柱子的名字
 * @param {Array} moves 步骤存储器，存储各个柱子上的圆盘排放顺序
 */
function towerOfHanoi(
  plates,
  source,
  helper,
  dest,
  sourceName,
  helperName,
  destName,
  num = 0,
  moves = []
) {
  if (plates <= 0) {
    return moves
  } else {
    // 先将其他盘移动到辅助柱子上
    towerOfHanoi(
      plates - 1,
      source,
      dest,
      helper,
      sourceName,
      destName,
      helperName,
      num,
      moves
    )
    // 弹出源柱子上剩下的最大圆盘，并将其压入目标柱子
    dest.push(source.pop())
    const move = {}
    move[sourceName] = source.toString()
    move[helperName] = helper.toString()
    move[destName] = dest.toString()
    moves.push(move)
    // 再将其他盘中移动到目标柱子上去
    towerOfHanoi(
      plates - 1,
      helper,
      source,
      dest,
      helperName,
      sourceName,
      destName,
      num,
      moves
    )
  }
  return moves
}

/**
 * 汉诺塔
 * 记录每一次圆盘移动之后，各个柱子上的圆盘排放顺序，完成汉诺塔。
 * @param {Int32Array} plates 圆盘的个数
 * @param {String} sourceName 源柱子的名称
 * @param {String} helperName 辅助柱子的名称
 * @param {String} destName 目标柱子的名称
 */
export function hanoiStack(plates, sourceName, helperName, destName) {
  const source = new Stack() // 源
  const dest = new Stack() // 目的地
  const helper = new Stack() // 辅助

  for (let i = plates; i > 0; i--) {
    source.push(i)
  }

  return towerOfHanoi(
    plates,
    source,
    helper,
    dest,
    sourceName,
    helperName,
    destName
  )
}

/**
 * 记录圆盘移动的过程
 *
 * @param {Int32Array} plates 圆盘个数
 * @param {Array} source 源柱子
 * @param {Array} helper 辅助柱子
 * @param {Array} dest 目的地柱子
 * @param {String} sourceName 源柱子的名字
 * @param {String} helperName 辅助柱子的名字
 * @param {String} destName 目的地柱子的名字
 * @param {Array} moves 步骤存储器，存储每一步的流程
 */
function moveOfHanoi(
  plates,
  source,
  helper,
  dest,
  sourceName,
  helperName,
  destName,
  moves = []
) {
  if (plates <= 0) {
    return moves
  } else if (plates === 1) {
    // 弹出源柱子上剩下的最大圆盘，并将其压入目标柱子
    dest.push(source.pop())
    num++
    let sourceArr = source.toString()
    let helperArr = helper.toString()
    let destArr = dest.toString()
    let movestr = `第 ${num} 步，将圆盘 ${plates} 从 ${sourceName} 移至 ${destName}; ${sourceName}: [${sourceArr}],${helperName}: [${helperArr}],${destName}: [${destArr}]`
    moves.push(movestr)
  } else {
    moveOfHanoi(
      plates - 1,
      source,
      dest,
      helper,
      sourceName,
      destName,
      helperName,
      moves
    )

    // 弹出源柱子上剩下的最大圆盘，并将其压入目标柱子
    dest.push(source.pop())
    num++
    let sourceArr = source.toString()
    let helperArr = helper.toString()
    let destArr = dest.toString()
    let movestr = `第 ${num} 步，将圆盘 ${plates} 从 ${sourceName} 移至 ${destName}; ${sourceName}: [${sourceArr}],${helperName}: [${helperArr}],${destName}: [${destArr}]`
    moves.push(movestr)

    moveOfHanoi(
      plates - 1,
      helper,
      source,
      dest,
      helperName,
      sourceName,
      destName,
      moves
    )
  }
  return moves
}

let num = 0 // 记录移动的次数
/**
 * 汉诺塔
 * 记录每一次圆盘移动的动作。从${源柱子}到${目标柱子}
 * @param {Int32Array} plates 圆盘的个数
 * @param {String} sourceName 源柱子的名称
 * @param {String} helperName 辅助柱子的名称
 * @param {String} destName 目标柱子的名称
 */
export function hanoiStackArray(plates, sourceName, helperName, destName) {
  let source = new Stack()
  let helper = new Stack()
  let dest = new Stack()

  for (let i = plates; i > 0; i--) {
    source.push(i)
  }
  num = 0
  return moveOfHanoi(
    plates,
    source,
    helper,
    dest,
    sourceName,
    helperName,
    destName
  )
}
