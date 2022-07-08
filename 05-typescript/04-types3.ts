/* eslint "no-unused-vars": "off" */

/*

Types can also be defined using type unions (`|` operator) and type intersections (`&` operator).

*/

type Employee = {
  name: string
  age: number
}

type CEO = Employee & {
  company: string
}

type PublicProfile = Pick<CEO, 'name' | 'company'>
