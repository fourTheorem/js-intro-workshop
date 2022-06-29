import tap from 'tap'

import personSolution from './01-person.solution.js'
import personTpl from './01-person.js'

const Person = process.env.TEST_SOLUTIONS ? personSolution : personTpl

tap.test('Person full name', async (t) => {
    const firstName = 'Jeff'
    const lastName = 'Bezos'

    const person = new Person(firstName, lastName)

    const result = person.fullName();
    const expected = `${firstName} ${lastName}`

    t.equal(result, expected)
})