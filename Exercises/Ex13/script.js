function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K';
    } else {
        return views.toString();
    }
}

function addCard(title, channelName, views, duration, months, imgSrc) {
    const formattedViews = formatViews(views);

    const cardContainer = document.getElementById('cards-container');
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="thumbnail">
            <img src="${imgSrc}" alt="Thumbnail">
            <div class="duration">${duration}</div>
        </div>
        <div class="details">
            <div class="title" title="${title}">${title}</div>
            <div class="meta">
                <span>${channelName}</span>
                <span class="dot">•</span>
                <span>${formattedViews} views</span>
                <span class="dot">•</span>
                <span>${months} months ago</span>
            </div>
        </div>
    `;

    cardContainer.appendChild(card);
}

// Example usage:
addCard('This is First Card Title', 'Fist Channel Name', 100000, '12:00', 1, 'https://img.freepik.com/free-vector/fox-family-illustration_114360-9688.jpg?semt=ais_hybrid');
addCard('Another Card Title', 'Another Channel', 5000, '8:30', 2, 'https://img.freepik.com/premium-vector/mountain-bike-isolated-cartoon-vector-illustrations_107173-75192.jpg?semt=ais_hybrid');
addCard('Third Card Title', 'Third Channel', 500, '15:20', 3, 'https://img.freepik.com/free-vector/hand-drawn-adventure-background_23-2149048449.jpg?semt=ais_hybrid');