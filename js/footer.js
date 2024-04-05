// Fetch and insert footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.body.innerHTML += data;
    })
    .catch(error => console.error('Error fetching footer:', error));
