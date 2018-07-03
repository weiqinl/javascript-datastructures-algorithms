import {
  DoublyLinkedList
} from "../doublylinkedlist";

describe('dobuly-linked-list', () => {

  let doublyll
  beforeEach(() => {
    doublyll = new DoublyLinkedList()
  })

  it('init doublylinkedlist', () => {
    expect(doublyll.isEmpty()).toBeTruthy()
    expect(doublyll.size()).toBe(0)
  })

  it('push element to linked list', () => {
    expect(doublyll.append('wei')).toBeTruthy()
    expect(doublyll.append(2018)).toBeTruthy()
    expect(doublyll.append('qin')).toBeTruthy()

    expect(doublyll.isEmpty()).toBeFalsy()
    expect(doublyll.size()).toBe(3)

    expect(doublyll.toString()).toEqual('null<--->wei<--->2018<--->qin<--->null')
  })


  it('insert element  to linked list everywhere', () => {
    expect(doublyll.size()).toBe(0)

    expect(doublyll.insert(0, 'wei')).toBeTruthy()
    expect(doublyll.size()).toBe(1)
    expect(doublyll.toString()).toEqual('null<--->wei<--->null')

    expect(doublyll.insert(1, 'notice')).toBeTruthy()
    expect(doublyll.size()).toBe(2)
    expect(doublyll.toString()).toEqual('null<--->wei<--->notice<--->null')


    expect(doublyll.insert(1, 'qin')).toBeTruthy()
    expect(doublyll.size()).toBe(3)
    expect(doublyll.toString()).toEqual('null<--->wei<--->qin<--->notice<--->null')

    expect(doublyll.insert(3, '伟勤')).toBeTruthy()
    expect(doublyll.size()).toBe(4)
    expect(doublyll.toString()).toEqual('null<--->wei<--->qin<--->notice<--->伟勤<--->null')

    expect(doublyll.isEmpty()).toBeFalsy()
  })


  it('insert_up element  to linked list everywhere', () => {
    expect(doublyll.insert_up(0, 'wei')).toBeTruthy()
    expect(doublyll.size()).toBe(1)
    expect(doublyll.toString()).toEqual('null<--->wei<--->null')

    expect(doublyll.insert_up(2, 2018)).toBeTruthy()
    expect(doublyll.size()).toBe(2)
    expect(doublyll.toString()).toEqual('null<--->wei<--->2018<--->null')


    expect(doublyll.insert_up(1, 'qin')).toBeTruthy()
    expect(doublyll.size()).toBe(3)
    expect(doublyll.toString()).toEqual('null<--->wei<--->qin<--->2018<--->null')

    expect(doublyll.insert_up(3, '伟勤')).toBeTruthy()
    expect(doublyll.size()).toBe(4)
    expect(doublyll.toString()).toEqual('null<--->wei<--->qin<--->2018<--->伟勤<--->null')

    expect(doublyll.isEmpty()).toBeFalsy()
  })

  it('remove element', () => {
    expect(doublyll.size()).toBe(0)

    expect(doublyll.insert_up(0, 'wei')).toBeTruthy()
    expect(doublyll.insert_up(1, 'qin')).toBeTruthy()
    expect(doublyll.insert_up(2, 'l')).toBeTruthy()
    expect(doublyll.insert_up(3, '2018')).toBeTruthy()
    expect(doublyll.insert_up(4, '07')).toBeTruthy()
    expect(doublyll.insert_up(5, '伟勤')).toBeTruthy()
    expect(doublyll.toString()).toEqual('null<--->wei<--->qin<--->l<--->2018<--->07<--->伟勤<--->null')
    expect(doublyll.size()).toBe(6)

    expect(doublyll.removeAt(100)).toEqual('伟勤')
    expect(doublyll.size()).toBe(5)
    expect(doublyll.toString()).toEqual('null<--->wei<--->qin<--->l<--->2018<--->07<--->null')

    expect(doublyll.removeAt(3)).toEqual('2018')
    expect(doublyll.size()).toBe(4)
    expect(doublyll.toString()).toEqual('null<--->wei<--->qin<--->l<--->07<--->null')

    expect(doublyll.removeAt(-100)).toEqual('07')
    expect(doublyll.size()).toBe(3)
    expect(doublyll.toString()).toEqual('null<--->wei<--->qin<--->l<--->null')

    expect(doublyll.removeAt(1)).toEqual('qin')
    expect(doublyll.size()).toBe(2)
    expect(doublyll.toString()).toEqual('null<--->wei<--->l<--->null')

    expect(doublyll.removeAt(0)).toEqual('wei')
    expect(doublyll.size()).toBe(1)
    expect(doublyll.toString()).toEqual('null<--->l<--->null')

    expect(doublyll.removeAt("a")).toEqual(null)
    expect(doublyll.size()).toBe(1)
    expect(doublyll.toString()).toEqual('null<--->l<--->null')

    expect(doublyll.removeAt(0)).toEqual('l')
    expect(doublyll.size()).toBe(0)
    expect(doublyll.toString()).toEqual('null')

    expect(doublyll.removeAt(0)).toEqual(null)
    expect(doublyll.toString()).toEqual('null')
    expect(doublyll.size()).toBe(0)
  })

  it('index of linked list', () => {
    expect(doublyll.isEmpty()).toBeTruthy()

    expect(doublyll.insert_up(0, 'wei')).toBeTruthy()
    expect(doublyll.insert_up(1, 'qin')).toBeTruthy()
    expect(doublyll.insert_up(2, 'l')).toBeTruthy()
    expect(doublyll.toString()).toEqual('null<--->wei<--->qin<--->l<--->null')
    expect(doublyll.size()).toBe(3)

    expect(doublyll.indexOf('wei')).toBe(0)
    expect(doublyll.indexOf('qin')).toBe(1)
    expect(doublyll.indexOf('l')).toBe(2)
    expect(doublyll.size()).toBe(3)

  })


  it('get head of linked list', () => {
    expect(doublyll.isEmpty()).toBeTruthy()

    expect(doublyll.insert_up(0, 'wei')).toBeTruthy()
    expect(doublyll.insert_up(1, 'qin')).toBeTruthy()
    expect(doublyll.insert_up(2, 'l')).toBeTruthy()
    expect(doublyll.toString()).toEqual('null<--->wei<--->qin<--->l<--->null')
    expect(doublyll.size()).toBe(3)


    expect(doublyll.getHead().element).toEqual('wei')

    expect(doublyll.size()).toBe(3)

  })

  it('get tail of linked list', () => {
    expect(doublyll.isEmpty()).toBeTruthy()

    expect(doublyll.insert_up(0, 'wei')).toBeTruthy()
    expect(doublyll.insert_up(1, 'qin')).toBeTruthy()
    expect(doublyll.insert_up(2, 'l')).toBeTruthy()
    expect(doublyll.toString()).toEqual('null<--->wei<--->qin<--->l<--->null')
    expect(doublyll.size()).toBe(3)


    expect(doublyll.getTail().element).toEqual('l')
    expect(doublyll.size()).toBe(3)

  })

})