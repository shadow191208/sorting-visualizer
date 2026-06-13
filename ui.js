(function () {
  "use strict";

  const arrayContainer = document.getElementById("arrayContainer");
  const algorithmSelect = document.getElementById("algorithmSelect");
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

  function onGenerate(callback) {
    generateBtn.addEventListener("click", callback);
  }

  function onSort(callback) {
    sortBtn.addEventListener("click", callback);
  }

  window.SortingUI = {
    getSelectedAlgorithm,
    onGenerate,
    onSort,
    renderArray,
    setControlsDisabled,
  };
})();
