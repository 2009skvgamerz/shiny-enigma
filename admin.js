document.addEventListener('DOMContentLoaded', function() {
    const linkForm = document.getElementById('link-form');
    const titleInput = document.getElementById('title');
    const urlInput = document.getElementById('url');
    const linksList = document.getElementById('links-list');

    let links = JSON.parse(localStorage.getItem('links')) || [];

    function displayLinks() {
        linksList.innerHTML = '';
        links.forEach((link, index) => {
            const linkElement = document.createElement('div');
            linkElement.className = 'p-4 bg-white rounded shadow mb-4 flex justify-between items-center';
            linkElement.innerHTML = `
                <div>
                    <h2 class="text-xl font-semibold">${link.title}</h2>
                    <p class="text-blue-600">${link.url}</p>
                </div>
                <div>
                    <button class="bg-red-500 text-white px-4 py-2 rounded delete-button" data-index="${index}">Delete</button>
                </div>
            `;
            linksList.appendChild(linkElement);
        });
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', deleteLink);
        });
    }

    function deleteLink(event) {
        const index = event.target.getAttribute('data-index');
        links.splice(index, 1);
        localStorage.setItem('links', JSON.stringify(links));
        displayLinks();
    }

    linkForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newLink = {
            title: titleInput.value,
            url: urlInput.value
        };
        links.push(newLink);
        localStorage.setItem('links', JSON.stringify(links));
        displayLinks();
        titleInput.value = '';
        urlInput.value = '';
    });

    displayLinks();
});
