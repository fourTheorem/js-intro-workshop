type Person = {
    name: string
    age: number
}

type CEO = Person & {
    company: string
}

type PublicProfile = Pick<CEO, 'name' | 'company'>
