document.getElementById('stockForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const stockName = document.getElementById('stockName').value.toUpperCase().trim();
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const resultDiv = document.getElementById('result');

  if (startDate > endDate) {
    alert("Start date cannot be after end date.");
    return;
  }

  resultDiv.style.display = 'block';
  resultDiv.textContent = 
    `Predicting stock data for ${stockName} from ${startDate} to ${endDate}... (prediction logic not implemented)`;
});
