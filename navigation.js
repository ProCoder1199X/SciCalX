document.addEventListener('DOMContentLoaded', () => {
  // Attach event listener for the "Scientific Notation" button
  const scientificNotationButton = document.getElementById('open-scientific-notation');
  if (scientificNotationButton) {
    scientificNotationButton.addEventListener('click', () => {
      window.electronAPI.send('open-scientific-notation');
    });
  }

  // Attach event listener for the "Unit Converter" button
  const unitConverterButton = document.getElementById('open-unit-converter');
  if (unitConverterButton) {
    unitConverterButton.addEventListener('click', () => {
      window.electronAPI.send('open-unit-converter');
    });
  }
});