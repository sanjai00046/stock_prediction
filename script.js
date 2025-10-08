document.getElementById('stockForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const stockName = document.getElementById('stockName').value.toUpperCase();
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  if (startDate > endDate) {
    alert("Start date cannot be after end date.");
    return;
  }

  // Display input summary as a placeholder for actual prediction
  document.getElementById('result').textContent = 
    `Predicting stock data for ${stockName} from ${startDate} to ${endDate}... (prediction logic not implemented)`;
});
