(function () {
  "use strict";

  const MIN_DELAY = 10;
  const MAX_DELAY = 500;

  let currentDelay = 100;

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
    await delay(currentDelay);
  }

  function setDelay(delayValue) {
    currentDelay = Math.min(MAX_DELAY, Math.max(MIN_DELAY, Number(delayValue)));
  }

  window.SortingAnimation = {
    getIndexRange,
    setDelay,
    showStep,
  };
})();
