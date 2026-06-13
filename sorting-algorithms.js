(function () {
  "use strict";

  async function insertionSort(values, animation) {
    for (let i = 1; i < values.length; i++) {
      const key = values[i];
      let j = i - 1;

      await animation.showStep(values, [j, i], animation.getIndexRange(0, i - 1));

      while (j >= 0 && values[j] > key) {
        values[j + 1] = values[j];
        await animation.showStep(values, [j, j + 1], animation.getIndexRange(0, i - 1));
        j--;
      }

      values[j + 1] = key;
      await animation.showStep(values, [j + 1], animation.getIndexRange(0, i));
    }
  }

  async function selectionSort(values, animation) {
    for (let i = 0; i < values.length; i++) {
      let minIndex = i;

      await animation.showStep(values, [i], animation.getIndexRange(0, i - 1));

      for (let j = i + 1; j < values.length; j++) {
        await animation.showStep(values, [minIndex, j], animation.getIndexRange(0, i - 1));

        if (values[j] < values[minIndex]) {
          minIndex = j;
          await animation.showStep(values, [minIndex], animation.getIndexRange(0, i - 1));
        }
      }

      if (minIndex !== i) {
        [values[i], values[minIndex]] = [values[minIndex], values[i]];
        await animation.showStep(values, [i, minIndex], animation.getIndexRange(0, i - 1));
      }

      await animation.showStep(values, [], animation.getIndexRange(0, i));
    }
  }

  window.SortingAlgorithms = {
    insertion: insertionSort,
    selection: selectionSort,
  };
})();
