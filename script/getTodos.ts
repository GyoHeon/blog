const createNum = () => 65 + Math.random() * 26;

const createElement = () => ({
  text: String.fromCharCode(
    createNum(),
    createNum(),
    createNum(),
    createNum(),
    createNum()
  ),
  completed: Math.round(Math.random()),
});

const repeat = (elementFactory: Function, number: number) => {
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push(elementFactory());
  }

  return array;
};

const getTodos = () => {
  return repeat(createElement, 10);
};

export default getTodos;
