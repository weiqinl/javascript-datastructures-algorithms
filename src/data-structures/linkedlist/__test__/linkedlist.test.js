import LinkedList from "../linkedlist";

describe('linkedlist', () => {
  let ll

  beforeEach(() => {
    ll = new LinkedList()
  })

  it('is empty', () => {
    expect(ll.isEmpty()).toBeTruthy()
    expect(ll.size()).toBe(0)
  })

  it('append element to linedlist last', () => {
    expect(ll.isEmpty()).toBeTruthy()

    expect(ll.append(1))
    expect(ll.append('wei'))
    expect(ll.append(true))

    expect(ll.isEmpty()).toBeFalsy()
    expect(ll.size()).toBe(3)
    expect(ll.toString()).toBe('1-->wei-->true')


  })

  it('insert element to linkedlist everywhere', () => {
    expect(ll.isEmpty()).toBeTruthy()

    expect(ll.insert(1, 1)).toBeFalsy()
    expect(ll.insert(0, 1)).toBeTruthy()
    expect(ll.insert(3, 'wei')).toBeFalsy()
    expect(ll.insert(1, 'wei')).toBeTruthy()
    expect(ll.insert(2, true)).toBeTruthy()

    expect(ll.isEmpty()).toBeFalsy()
    expect(ll.size()).toBe(3)
    expect(ll.toString()).toBe('1-->wei-->true')

  })

  it('remove one element at position', () => {
    expect(ll.isEmpty()).toBeTruthy()

    expect(ll.append(1))
    expect(ll.append('wei'))
    expect(ll.append(true))

    expect(ll.isEmpty()).toBeFalsy()
    expect(ll.size()).toBe(3)
    expect(ll.toString()).toBe('1-->wei-->true')

    expect(ll.removeAt(1)).toBe('wei')
    expect(ll.removeAt(1)).toBe(true)
    expect(ll.removeAt(1)).toBe(null)
    expect(ll.removeAt(0)).toBe(1)
    expect(ll.removeAt(0)).toBe(null)

    expect(ll.size()).toBe(0)
    expect(ll.isEmpty()).toBeTruthy()

  })

  it('find element position', () => {
    expect(ll.isEmpty()).toBeTruthy()

    expect(ll.append(1))
    expect(ll.getHead()).toEqual(Object({
      "element": 1,
      "next": null
    }))
    expect(ll.append('wei'))
    expect(ll.append(true))


    expect(ll.isEmpty()).toBeFalsy()
    expect(ll.size()).toBe(3)
    expect(ll.toString()).toBe('1-->wei-->true')

    expect(ll.indexOf('wei')).toBe(1)
    expect(ll.indexOf(true)).toBe(2)
    expect(ll.indexOf(1)).toBe(0)

  })

  it('remove one element by element', () => {
    expect(ll.isEmpty()).toBeTruthy()

    expect(ll.append(1))
    expect(ll.append('wei'))
    expect(ll.append(true))

    expect(ll.isEmpty()).toBeFalsy()
    expect(ll.size()).toBe(3)
    expect(ll.toString()).toBe('1-->wei-->true')

    expect(ll.remove(2)).toBe(null)
    expect(ll.remove('wei')).toBe('wei')
    expect(ll.remove(true)).toBe(true)
    expect(ll.remove(1)).toBe(1)
    expect(ll.remove(0)).toBe(null)

    expect(ll.size()).toBe(0)
    expect(ll.isEmpty()).toBeTruthy()

  })


  it('get head element', () => {
    expect(ll.isEmpty()).toBeTruthy()
    expect(ll.getHead()).toEqual(null)

    
    expect(ll.append(1))
    expect(ll.getHead()).toEqual(Object({
      "element": 1,
      "next": null
    }))

    expect(ll.append('wei'))
    expect(ll.getHead()).toEqual(Object({
      "element": 1,
      "next": {
        "element": "wei",
        "next": null
      }
    }))

    expect(ll.append(true))
    expect(ll.getHead()).toEqual(Object({
      "element": 1,
      "next": {
        "element": "wei",
        "next": {
          "element": true,
          "next": null
        }
      }
    }))

  })

})