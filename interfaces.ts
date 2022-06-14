interface IAnimal {

}

interface IChicken extends IAnimal {

}

// SAME as

type IAnimal {

}

type IChicken = IAnimal & {

}
