(function () {
  "use strict";

  const arrayContainer = document.getElementById("arrayContainer");
  const algorithmSelect = document.getElementById("algorithmSelect");
  const speedSlider = document.getElementById("speedSlider");
  const speedValue = document.getElementById("speedValue");
  const generateBtn = document.getElementById("generateBtn");
  const sortBtn = document.getElementById("sortBtn");

  function renderArray(values, comparingIndexes = [], sortedIndexes = []) {
    const comparingSet = new Set(comparingIndexes);
    const sortedSet = new Set(sortedIndexes);

    arrayContainer.innerHTML = "";

    values.forEach((value, index) => {
      const bar = document.createElement("div");
      bar.className = "bar";

      if (sortedSet.has(index)) {
        bar.classList.add("sorted");
      }

      if (comparingSet.has(index)) {
        bar.classList.add("comparing");
      }

      bar.style.height = `${value}%`;
      bar.textContent = value;
      bar.setAttribute("aria-label", `Value ${value}`);
      arrayContainer.appendChild(bar);
    });
  }

  function setControlsDisabled(disabled) {
    algorithmSelect.disabled = disabled;
    generateBtn.disabled = disabled;
    sortBtn.disabled = disabled;
  }

  function getSelectedAlgorithm() {
    return algorithmSelect.value;
  }

  function getSpeedDelay() {
    return Number(speedSlider.value);
  }

  function updateSpeedValue() {
    speedValue.textContent = `${getSpeedDelay()}ms`;
  }

  function onGenerate(callback) {
    generateBtn.addEventListener("click", callback);
  }

  function onSort(callback) {
    sortBtn.addEventListener("click", callback);
  }

  function onSpeedChange(callback) {
    speedSlider.addEventListener("input", () => {
      updateSpeedValue();
      callback(getSpeedDelay());
    });
  }

  updateSpeedValue();

  window.SortingUI = {
    getSelectedAlgorithm,
    getSpeedDelay,
    onGenerate,
    onSort,
    onSpeedChange,
    renderArray,
    setControlsDisabled,
  };
})();
