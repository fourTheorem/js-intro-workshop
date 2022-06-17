interface Lengthwise {
    length: number
}

function count<T extends Lengthwise>(list: T): number {
    return list.length;
}

// SO

class ChickenFlock implements Lengthwise {
    chikens: string[]

    add(chicken: string) {
        this.chikens.push(chicken);
    }

    get length(): number {
        return this.chikens.length;
    }
}

const myFlock = new ChickenFlock()
count(myFlock)

// AND ALSO

const myList = ['A', 'B', 'C']
count(myList)