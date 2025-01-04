function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => section.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}

function addTransaction(type) {
  const transactionList = document.getElementById('transactionList');
  const transactionDetails = prompt(`Enter details for ${type} transaction:`);
  if (transactionDetails) {
    const li = document.createElement('li');
    li.textContent = `${type.toUpperCase()}: ${transactionDetails}`;
    transactionList.appendChild(li);
  }
}
