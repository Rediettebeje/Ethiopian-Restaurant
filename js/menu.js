// JavaScript to populate the menu table

const itemNames = ["Sanbusa", "Tebes", "Shero", "Dorowet", "Beyeayent"];
const prices = [5, 25, 15, 35, 30];
const imageFiles = ["sanbusa.jpg", "tebes .jpg", "shero.jpg", "dorowet.jpeg", "beyeayent.jpeg"];

// Get table body
const tbody = document.querySelector('#menu-table tbody');

// Populate the table
for (let i = 0; i < itemNames.length; i++) {
    const tr = document.createElement('tr');

    // Create table cells
    const imageCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = `../images/${imageFiles[i]}`;
    img.alt = itemNames[i];
    imageCell.appendChild(img);

    const nameCell = document.createElement('td');
    nameCell.textContent = itemNames[i];

    const priceCell = document.createElement('td');
    priceCell.textContent = `$${prices[i]}`;

    // Append cells to the row
    tr.appendChild(imageCell);
    tr.appendChild(nameCell);
    tr.appendChild(priceCell);

    // Append row to table body
    tbody.appendChild(tr);
}

