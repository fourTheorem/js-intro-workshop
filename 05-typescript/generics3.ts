interface Sized {
    length: number
}

function countSized<T extends Sized> (list: T): number {
  return list.length
}

// SO

class ChickenFlock implements Sized {
  chikens: string[]

  add (chicken: string) {
    this.chikens.push(chicken)
  }

  get length (): number {
    return this.chikens.length
  }
}

const myFlock = new ChickenFlock()
countSized(myFlock)

// AND ALSO

const letters = ['A', 'B', 'C']
countSized(letters)
