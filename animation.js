(function () {
  "use strict";

  const SORT_DELAY = 100;

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  function getIndexRange(start, end) {
    if (end < start) {
      return [];
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }

  async function showStep(values, comparingIndexes = [], sortedIndexes = []) {
    window.SortingUI.renderArray(values, comparingIndexes, sortedIndexes);
    await delay(SORT_DELAY);
  }

  window.SortingAnimation = {
    getIndexRange,
    showStep,
  };
})();
