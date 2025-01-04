function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => section.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}

function addUser() {
  const userList = document.getElementById('userList');
  const newUser = prompt('Enter new user details:');
  if (newUser) {
    const li = document.createElement('li');
    li.textContent = newUser;
    userList.appendChild(li);
  }
}

function addProduct() {
  const productList = document.getElementById('productList');
  const newProduct = prompt('Enter new product details:');
  if (newProduct) {
    const li = document.createElement('li');
    li.textContent = newProduct;
    productList.appendChild(li);
  }
}
