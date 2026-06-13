const ARRAY_SIZE = 30;
const MIN_VALUE = 10;
const MAX_VALUE = 100;

let currentArray = [];
let isSorting = false;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArray() {
  return Array.from({ length: ARRAY_SIZE }, () => getRandomNumber(MIN_VALUE, MAX_VALUE));
}

function refreshArray() {
  if (isSorting) {
    return;
  }

  currentArray = generateArray();
  window.SortingUI.renderArray(currentArray);
}

async function startSort() {
  if (isSorting) {
    return;
  }

  isSorting = true;
  window.SortingUI.setControlsDisabled(true);

  const values = [...currentArray];
  const selectedAlgorithm = window.SortingUI.getSelectedAlgorithm();
  const sortAlgorithm = window.SortingAlgorithms[selectedAlgorithm];

  if (sortAlgorithm) {
    await sortAlgorithm(values, window.SortingAnimation);
  }

  currentArray = values;
  window.SortingUI.renderArray(
    currentArray,
    [],
    window.SortingAnimation.getIndexRange(0, currentArray.length - 1)
  );
  isSorting = false;
  window.SortingUI.setControlsDisabled(false);
}

window.SortingUI.onGenerate(refreshArray);
window.SortingUI.onSort(startSort);

refreshArray();
