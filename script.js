// Show/hide topics when subject is clicked
function toggleTopics(id) {
    const allTopics = document.querySelectorAll('.topics');

    allTopics.forEach(topicList => {
        // Toggle the clicked subject's topics, hide others
        if (topicList.id === id) {
            topicList.style.display = topicList.style.display === 'block' ? 'none' : 'block';
        } else {
            topicList.style.display = 'none';
        }
    });
}

// Ensure homepage is clean when loaded or returned to
function resetHomepage() {
    const topics = document.querySelectorAll('.topics');
    topics.forEach(topicList => {
        topicList.style.display = 'none';
    });
}

// Call resetHomepage when the page loads
window.onload = resetHomepage;
