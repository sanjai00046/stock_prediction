const form = document.getElementById('stockForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const stockName = document.getElementById('stockName').value.toUpperCase().trim();
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  if (startDate > endDate) {
    alert("Start date cannot be after end date.");
    resultDiv.style.display = 'none';
    return;
  }

  resultDiv.textContent = `Predicting stock data for ${stockName} from ${startDate} to ${endDate}... (prediction logic not implemented)`;
  resultDiv.style.display = 'block';
  resultDiv.classList.remove('hide');
  resultDiv.classList.add('show');
});
