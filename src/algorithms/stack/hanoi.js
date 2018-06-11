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
  // sum = number === 1 ? 1 : 2 ** number - 1

  return sum
}

/**
 * 记录每一次圆盘移动之后，各个柱子上的圆盘排放顺序，完成汉诺塔。
 * 
 * 这里的思路，一直在循环做一件事情。
 * 把原始柱子上的圆盘分为两部分。最大和其它。
 * 第一回合，将其它移动到辅助柱子上，将最大的移动到目标柱子上，再将其它移动到目标柱子上去
 * 第二回合，将其它移动到辅助柱子上去，将最大的移动到目标柱子上，再将其它移动到目标柱子上去
 * ...
 * 第2 ** n - 1回合，将其它移动到辅助柱子上去，将最大的移动到目标柱子上，再将其它移动到目标柱子上去
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
  }

  if (plates === 1) { // 只有一个圆盘的情况
    dest.push(source.pop())
    const move = {}
    move[sourceName] = source.toString()
    move[helperName] = helper.toString()
    move[destName] = dest.toString()
    moves.push(move)
  } else {
    // 先将其他盘移动到辅助柱子上
    towerOfHanoi(plates - 1, source, dest, helper, sourceName, destName, helperName, num, moves)
    // 源柱子上剩下最大的圆盘，将其压入目标柱子
    dest.push(source.pop())
    const move = {}
    move[sourceName] = source.toString()
    move[helperName] = helper.toString()
    move[destName] = dest.toString()
    moves.push(move)
    // 再将其他盘中移动到目标柱子上去
    towerOfHanoi(plates - 1, helper, source, dest, helperName, sourceName, destName, num, moves)
  }
  return moves
}

/**
 * 汉诺塔
 * @param {Int32Array} plates 圆盘的个数
 * @param {String} towerA 源柱子的名称
 * @param {String} towerB 辅助柱子的名称
 * @param {String} towerC 目标柱子的名称
 */
export function hanoiStack(plates, towerA, towerB, towerC) {
  const source = new Stack() // 源
  const dest = new Stack() // 目的地
  const helper = new Stack() // 辅助

  for (let i = plates; i > 0; i--) {
    source.push(i)
  }

  return towerOfHanoi(plates, source, helper, dest, towerA, towerB, towerC)
}
/**
 * 汉诺塔
 * @param {Int32Array} plates 圆盘的个数
 * @param {String} towerA 源柱子的名称
 * @param {String} towerB 辅助柱子的名称
 * @param {String} towerC 目标柱子的名称
 */
export function hanoiStackArray(plates, towerA, towerB, towerC) {

}