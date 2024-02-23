let buffer = [];

async function getData() {
    let api = await fetch('http://localhost:4000/Doners', { method: 'GET' });
    let data = await api.json();
    buffer = data.data.doners;
    console.log(buffer);
    show();
}

getData();

// function redirectToHospital(url) {
//     // Use replaceState to change the URL without adding a new entry to the browser's history
//     history.replaceState({}, '', url);
// }

function show() {
    const tableBody = document.querySelector('tbody');
    let tableRows = '';

    buffer.forEach((item, index) => {
        tableRows += `
        <tr>
            <td>#${index + 1}</td>
            <td>${buffer[index].fullName}</td>
            <td>${buffer[index].age}</td>
            <td>${buffer[index].city}</td>
            <td>${buffer[index].bloodAmount}</td>
            <td>${buffer[index].bloodType}</td>
            <td>${buffer[index].hospital}</td>
            <td>${buffer[index].gender}</td>
            <td>${buffer[index].date}</td>
            <td>
        <div class="btn-group">
            <button type="button" class="btn btn-danger btn-sm d-flex flex-center">Delete</button>
            <button type="button" class="btn btn-primary btn-sm">Update</button>
        </div>
        </td>
        </tr>
        `;

    //     if (buffer[index].hospitals ==="hospital a") {
    //         redirectToHospital('donor.html');
    //     } else if (buffer[index].hospitals ==='hospital b') {
    //         redirectToHospital('donorb.html');
    //     } else if (buffer[index].hospitals === 'hospital c') {
    //         redirectToHospital('donorc.html');
    //     }
     });

    tableBody.innerHTML = tableRows;
}

// api.js

// document.addEventListener('DOMContentLoaded', function () {
//     // Call the function to fetch data when the document is ready
//     getData();
// });

// function getData() {
//     const tableBody = document.getElementById('tableBody');

//     // Replace this URL with your actual API endpoint
//     const apiUrl = 'http://localhost:4000/Doners';

//     fetch(apiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Populate the table with the retrieved data
//             populateTable(data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             tableBody.innerHTML = '<tr><td colspan="10">Error fetching data. Please try again.</td></tr>';
//         });
// }

// function populateTable(data) {
//     const tableBody = document.getElementById('tableBody');

//     // Clear existing rows
//     tableBody.innerHTML = '';

//     // Iterate through the data and create table rows
//     data.forEach((item, index) => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${index + 1}</td>
//             <td>${item.fullName}</td>
//             <td>${item.age}</td>
//             <td>${item.city}</td>
//             <td>${item.bloodAmount}</td>
//             <td>${item.bloodType}</td>
//             <td>${item.hospital}</td>
//             <td>${item.gender}</td>
//             <td>${new Date(item.date).toLocaleDateString()}</td>
//             <td><button onclick="deleteData(${item.id})">Delete</button></td>
//         `;

//         tableBody.appendChild(row);
//     });
// }

// function deleteData(id) {
//     // Implement logic to delete data based on the ID
//     // You can make a DELETE request to your API endpoint
//     console.log(`Delete data with ID: ${id}`);
// }

