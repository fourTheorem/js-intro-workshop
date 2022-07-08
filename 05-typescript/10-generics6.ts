/* eslint "no-unused-vars": "off" */

/*

TypeScript offers a set of Utility types.

These are generic types that can be use to construct types from other existing types.

An example is the `Pick` utility type that allows us to create a type by "picking" a set of properties from an existing type.

*/

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}
