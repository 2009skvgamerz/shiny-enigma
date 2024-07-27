document.addEventListener('DOMContentLoaded', function() {
    const linksContainer = document.getElementById('links-container');

    const storedLinks = JSON.parse(localStorage.getItem('links')) || [
        { title: 'YouTube', url: 'https://m.youtube.com/channel/UC1uU0sXucXtOvSwIAGBCnyQ' },
        { title: 'Twitter', url: 'https://twitter.com/yourprofile' },
        { title: 'Instagram', url: 'https://www.instagram.com/_itz._.me._.vasann/' },
        // Add more links here
    ];

    storedLinks.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.target = '_blank';
        linkElement.className = 'block p-4 bg-white rounded shadow hover:bg-gray-100 transition';
        linkElement.innerHTML = `
            <h2 class="text-xl font-semibold">${link.title}</h2>
            <p class="text-blue-600">${link.url}</p>
        `;
        linksContainer.appendChild(linkElement);
    });
});
