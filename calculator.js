document.addEventListener("DOMContentLoaded", () => {
  // Select all buttons
  document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      const value = button.getAttribute('data-value');

      // Ignore buttons without a data-value attribute
      if (!value) return;

      const display = document.getElementById('display');

      if (value === '=') {
        // Evaluate the expression in the display
        try {
          display.textContent = eval(display.textContent);
        } catch (error) {
          display.textContent = 'Error'; // Display "Error" for invalid expressions
        }
      } else if (value === 'AC') {
        // Clear the display
        display.textContent = '0';
      } else {
        // Append the value to the display
        if (display.textContent === '0') {
          display.textContent = value;
        } else {
          display.textContent += value;
        }
      }
    });
  });

  // MathJax Rendering for Equations
  window.MathJax.startup.promise.then(() => {
    console.log("MathJax has finished rendering equations.");
  });
});