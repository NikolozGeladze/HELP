// YouTube Replica JS

// Search bar functionality
document.addEventListener('DOMContentLoaded', function() {
	const searchInput = document.querySelector('input[placeholder="Search"]');
	if (searchInput) {
		searchInput.addEventListener('keydown', function(e) {
			if (e.key === 'Enter') {
				alert('You searched for: ' + searchInput.value);
			}
		});
	}

	// Sidebar toggle (if you add a button for it)
	const sidebar = document.querySelector('nav');
	const toggleBtn = document.getElementById('sidebar-toggle');
	if (sidebar && toggleBtn) {
		toggleBtn.addEventListener('click', function() {
			sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
		});
	}

	// Video card click event
	const videoCards = document.querySelectorAll('main div[style*="border:"]');
	videoCards.forEach(function(card) {
		card.addEventListener('click', function() {
			alert('Video clicked!');
		});
	});
});
