import Stack from "../stack-array";

describe('test stack-array', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  })

  it('create empty stack', () => {
    expect(stack.size()).toEqual(0)
    expect(stack.isEmpty).toBeTruthy()
  })

  it('push elements to stack', () => {
    stack.push(1)
    expect(stack.size()).toEqual(1)

    stack.push(2)
    expect(stack.size()).toEqual(2)

    stack.push(3)
    expect(stack.size()).toEqual(3)

    expect(stack.toString()).toBe('1,2,3')
    expect(stack.isEmpty()).toBeFalsy()
  })

  it('pop elements from stack, implements LIFO logic', () => {

    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.pop()).toBe(3)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBeUndefined()
    expect(stack.isEmpty()).toBeTruthy()

  })

  it('allows to peek at the top element in he stack without popping it', () => {
    expect(stack.peek()).toBeUndefined()

    stack.push(1);
    expect(stack.peek()).toEqual(1)

    stack.push(2);
    expect(stack.peek()).toEqual(2)

    stack.push(3);
    expect(stack.peek()).toEqual(3)

    stack.pop();
    expect(stack.peek()).toEqual(2)
  })

  it('clears the stack', () => {
    stack.clear();
    expect(stack.isEmpty()).toBeTruthy()

    stack.push(1)
    stack.push(2)
    expect(stack.isEmpty()).toBeFalsy()

    stack.clear()
    expect(stack.isEmpty()).toBeTruthy()
  })

  it('returns the correct size', () => {
    expect(stack.size()).toEqual(0)

    stack.push(1)
    expect(stack.size()).toEqual(1)

    stack.push(2)
    expect(stack.size()).toEqual(2)

    stack.push(3)
    expect(stack.size()).toEqual(3)

    stack.clear()
    expect(stack.isEmpty()).toBeTruthy()

    stack.push(1)
    stack.push(2)
    stack.push(3)

    stack.pop();
    expect(stack.size()).toEqual(2);
    stack.pop();
    expect(stack.size()).toEqual(1);
    stack.pop();
    expect(stack.size()).toEqual(0);
    stack.pop();
    expect(stack.size()).toEqual(0);

  })

  it('returns if it is empty', () => {
    expect(stack.isEmpty()).toBeTruthy()
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy()
    stack.push(2);
    expect(stack.isEmpty()).toBeFalsy()
    stack.push(3);
    expect(stack.isEmpty()).toBeFalsy()

    stack.clear();
    expect(stack.isEmpty()).toBeTruthy()

    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.isEmpty()).toBeFalsy()
    stack.pop();
    expect(stack.isEmpty()).toBeFalsy()
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy()
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy()
  })


  it('returns an Array', () => {
    let stackArray = stack.toArray();
    expect(stackArray.length).toEqual(0);

    stack.push(1);
    stack.push(2);

    stackArray = stack.toArray();
    expect(stackArray.length).toEqual(2);

    let i = 1;
    stackArray.forEach(e => {
      expect(e).toEqual(i);
      i++;
    });
  });

  it('returns toString primitive types', () => {
    expect(stack.toString()).toEqual('');

    stack.push(1);
    expect(stack.toString()).toEqual('1');

    stack.push(2);
    expect(stack.toString()).toEqual('1,2');

    stack.clear();
    expect(stack.toString()).toEqual('');

    stack.push('el1');
    expect(stack.toString()).toEqual('el1');

    stack.push('el2');
    expect(stack.toString()).toEqual('el1,el2');
  });

  it('returns toString objects', () => {
    class MyObj {
      constructor(el1, el2) {
        this.el1 = el1;
        this.el2 = el2;
      }
      toString() {
        return `${this.el1.toString()}|${this.el2.toString()}`;
      }
    }
    expect(stack.toString()).toEqual('');

    stack.push(new MyObj(1, 2));
    expect(stack.toString()).toEqual('1|2');

    stack.push(new MyObj(3, 4));
    expect(stack.toString()).toEqual('1|2,3|4');
  });

})