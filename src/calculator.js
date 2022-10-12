const submitButtonElement = document.querySelector('.calculator__form');
const resultElement = document.querySelector('.calculator__result');

const getResult = (evt) => {
  evt.preventDefault();
  const tasksCount = document.querySelector('#calculator__input--tasks-count').value;
  const mistakesCount = document.querySelector('#calculator__input--mistakes-count').value;
  const maxGrade = document.querySelector('#calculator__input--max-grade').value;
  resultElement.textContent = (maxGrade / tasksCount) * (tasksCount - mistakesCount);
};

const setGradeCalculator = () => {
  submitButtonElement.addEventListener('submit', getResult);
};

export { setGradeCalculator };
