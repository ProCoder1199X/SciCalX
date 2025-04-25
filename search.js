document.getElementById('search-btn').addEventListener('click', () => {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const equations = document.querySelectorAll('.equation');
  equations.forEach((equation) => {
    if (equation.textContent.toLowerCase().includes(query)) {
      equation.style.backgroundColor = '#ffff00'; // Highlight matching equations
    } else {
      equation.style.backgroundColor = ''; // Reset non-matching equations
    }
  });
});