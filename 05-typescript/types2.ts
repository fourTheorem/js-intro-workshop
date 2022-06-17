// Type aliases
type Text = string

let companyName: Text = 'Tesla' // Aliasing doesn’t actually create a new type - it creates a new name to refer to that type


// We can also have a type alias refer to itself in a property:
type Tree<T> = {
    value: T;
    left?: Tree<T>;
    right?: Tree<T>;
};

interface Person {
    name: string;
}

const people: Tree<Person> = {
    value: {
        name: 'Elon Musk'
    }
}