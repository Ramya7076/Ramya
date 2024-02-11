document.getElementById('home-link').addEventListener('click', function() {
    loadContent('home.html');
});

document.getElementById('about-link').addEventListener('click', function() {
    loadContent('about.html');
});

// Function to load content dynamically
function loadContent(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('content').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', page, true);
    xhttp.send();
}