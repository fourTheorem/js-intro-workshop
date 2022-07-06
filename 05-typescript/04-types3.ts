/* eslint "no-unused-vars": "off" */

type Employee = {
    name: string
    age: number
}

type CEO = Employee & {
    company: string
}

type PublicProfile = Pick<CEO, 'name' | 'company'>
