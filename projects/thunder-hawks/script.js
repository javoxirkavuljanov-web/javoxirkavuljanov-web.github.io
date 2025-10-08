// Thunder Hawks Team Website JavaScript

// Global Variables
let currentGameTime = 78 * 60 + 45; // 78:45 in seconds
let gameTimer;
let homeScore = 2;
let awayScore = 1;

// Sample Data
const playersData = [
    {
        id: 1,
        name: "Marcus Thunder",
        position: "forward",
        number: 10,
        goals: 15,
        assists: 8,
        matches: 18,
        image: "player1.jpg",
        age: 25,
        nationality: "USA",
        height: "6'2\"",
        weight: "180 lbs"
    },
    {
        id: 2,
        name: "Jake Lightning",
        position: "midfielder",
        number: 8,
        goals: 7,
        assists: 12,
        matches: 18,
        image: "player2.jpg",
        age: 23,
        nationality: "Canada",
        height: "5'11\"",
        weight: "175 lbs"
    },
    {
        id: 3,
        name: "Alex Storm",
        position: "defender",
        number: 4,
        goals: 2,
        assists: 3,
        matches: 17,
        image: "player3.jpg",
        age: 27,
        nationality: "USA",
        height: "6'1\"",
        weight: "185 lbs"
    },
    {
        id: 4,
        name: "Ryan Hawk",
        position: "goalkeeper",
        number: 1,
        goals: 0,
        assists: 1,
        matches: 18,
        saves: 45,
        cleanSheets: 12,
        image: "player4.jpg",
        age: 29,
        nationality: "USA",
        height: "6'3\"",
        weight: "190 lbs"
    },
    {
        id: 5,
        name: "Chris Bolt",
        position: "forward",
        number: 11,
        goals: 12,
        assists: 6,
        matches: 16,
        image: "player5.jpg",
        age: 24,
        nationality: "Mexico",
        height: "5'10\"",
        weight: "170 lbs"
    },
    {
        id: 6,
        name: "Sam Eagle",
        position: "midfielder",
        number: 6,
        goals: 4,
        assists: 9,
        matches: 18,
        image: "player6.jpg",
        age: 26,
        nationality: "USA",
        height: "5'9\"",
        weight: "165 lbs"
    }
];

const gamesData = {
    upcoming: [
        {
            id: 1,
            opponent: "Storm Eagles",
            date: "2024-12-15",
            time: "19:00",
            venue: "Thunder Stadium",
            isHome: true,
            logo: "fas fa-bolt"
        },
        {
            id: 2,
            opponent: "Lightning Bolts",
            date: "2024-12-22",
            time: "15:00",
            venue: "Bolt Arena",
            isHome: false,
            logo: "fas fa-flash"
        },
        {
            id: 3,
            opponent: "Fire Dragons",
            date: "2024-12-29",
            time: "18:30",
            venue: "Thunder Stadium",
            isHome: true,
            logo: "fas fa-dragon"
        }
    ],
    results: [
        {
            id: 4,
            opponent: "Ice Wolves",
            date: "2024-12-01",
            time: "16:00",
            venue: "Wolf Den",
            isHome: false,
            homeScore: 3,
            awayScore: 1,
            result: "W",
            logo: "fas fa-snowflake"
        },
        {
            id: 5,
            opponent: "Wind Riders",
            date: "2024-11-24",
            time: "19:30",
            venue: "Thunder Stadium",
            isHome: true,
            homeScore: 2,
            awayScore: 2,
            result: "D",
            logo: "fas fa-wind"
        }
    ]
};

const newsData = [
    {
        id: 1,
        title: "Thunder Hawks Secure Championship Victory",
        excerpt: "In a thrilling final match, the Thunder Hawks claimed their first championship title with a spectacular 3-1 victory over the Storm Eagles.",
        category: "Match Report",
        date: "2024-12-10",
        author: "Sports Reporter",
        image: "news1.jpg"
    },
    {
        id: 2,
        title: "New Stadium Renovations Complete",
        excerpt: "Thunder Stadium unveils state-of-the-art facilities including enhanced seating, improved lighting, and cutting-edge technology for fans.",
        category: "Stadium News",
        date: "2024-12-08",
        author: "Stadium Manager",
        image: "news2.jpg"
    },
    {
        id: 3,
        title: "Marcus Thunder Named Player of the Month",
        excerpt: "Star forward Marcus Thunder receives recognition for outstanding performance with 8 goals and 4 assists in November matches.",
        category: "Player News",
        date: "2024-12-05",
        author: "Team Reporter",
        image: "news3.jpg"
    }
];

const productsData = [
    {
        id: 1,
        name: "Thunder Hawks Home Jersey",
        description: "Official home jersey with moisture-wicking fabric",
        price: 89.99,
        category: "jerseys",
        badge: "Popular",
        image: "jersey1.jpg"
    },
    {
        id: 2,
        name: "Thunder Hawks Away Jersey",
        description: "Official away jersey in striking orange design",
        price: 89.99,
        category: "jerseys",
        badge: "New",
        image: "jersey2.jpg"
    },
    {
        id: 3,
        name: "Team Scarf",
        description: "Premium knitted scarf in team colors",
        price: 24.99,
        category: "accessories",
        badge: "",
        image: "scarf.jpg"
    },
    {
        id: 4,
        name: "Championship Trophy Replica",
        description: "Limited edition championship trophy replica",
        price: 149.99,
        category: "collectibles",
        badge: "Limited",
        image: "trophy.jpg"
    }
];

const galleryData = [
    {
        id: 1,
        title: "Championship Victory Celebration",
        description: "Team celebrates historic championship win",
        category: "celebrations",
        image: "gallery1.jpg"
    },
    {
        id: 2,
        title: "Intense Training Session",
        description: "Players prepare for upcoming matches",
        category: "training",
        image: "gallery2.jpg"
    },
    {
        id: 3,
        title: "Game Winning Goal",
        description: "Marcus Thunder scores the decisive goal",
        category: "games",
        image: "gallery3.jpg"
    },
    {
        id: 4,
        title: "Fan Zone Excitement",
        description: "Fans show their Thunder Hawks pride",
        category: "celebrations",
        image: "gallery4.jpg"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize Website
function initializeWebsite() {
    // Show loading screen
    setTimeout(() => {
        hideLoadingScreen();
    }, 3000);

    // Initialize components
    initializeNavigation();
    initializeLiveScore();
    initializeHeroAnimations();
    loadRosterData();
    loadScheduleData();
    loadNewsData();
    loadGalleryData();
    loadProductsData();
    initializeScrollAnimations();
    initializeCounters();
    initializeNewsletterForm();
    
    // Start live score simulation
    startLiveScoreSimulation();
}

// Hide Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// Navigation Functions
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active link
                updateActiveNavLink(link);
                
                // Close mobile menu
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLinkOnScroll);
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function updateActiveNavLinkOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Live Score Functions
function initializeLiveScore() {
    const liveScoreBanner = document.getElementById('live-score');
    
    // Show live score banner after 5 seconds
    setTimeout(() => {
        liveScoreBanner.classList.add('active');
    }, 5000);
}

function startLiveScoreSimulation() {
    gameTimer = setInterval(() => {
        currentGameTime++;
        updateGameTime();
        
        // Simulate random score changes
        if (Math.random() < 0.001) { // Very low probability
            if (Math.random() < 0.7) {
                homeScore++;
                document.getElementById('home-score').textContent = homeScore;
                showScoreNotification('GOAL! Thunder Hawks score!');
            } else {
                awayScore++;
                document.getElementById('away-score').textContent = awayScore;
                showScoreNotification('Goal for Storm Eagles');
            }
        }
        
        // End game after 90 minutes
        if (currentGameTime >= 90 * 60) {
            clearInterval(gameTimer);
            showScoreNotification('Full Time!');
        }
    }, 1000);
}

function updateGameTime() {
    const minutes = Math.floor(currentGameTime / 60);
    const seconds = currentGameTime % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('game-time').textContent = timeString;
}

function showScoreNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'score-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--gradient-primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 700;
        font-size: 1.2rem;
        z-index: 10001;
        animation: scoreNotification 3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Hero Animations
function initializeHeroAnimations() {
    // Animate hero stats counters
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        animateCounter(stat, target, 2000);
    });
}

function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Roster Functions
function loadRosterData() {
    const rosterGrid = document.getElementById('roster-grid');
    const filterBtns = document.querySelectorAll('.roster-filters .filter-btn');
    
    // Load all players initially
    displayPlayers(playersData);
    
    // Add filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const position = btn.getAttribute('data-position');
            
            // Update active filter
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter players
            const filteredPlayers = position === 'all' 
                ? playersData 
                : playersData.filter(player => player.position === position);
            
            displayPlayers(filteredPlayers);
        });
    });
}

function displayPlayers(players) {
    const rosterGrid = document.getElementById('roster-grid');
    rosterGrid.innerHTML = '';
    
    players.forEach(player => {
        const playerCard = createPlayerCard(player);
        rosterGrid.appendChild(playerCard);
    });
}

function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.setAttribute('data-position', player.position);
    
    card.innerHTML = `
        <div class="player-image">
            <div class="player-number">${player.number}</div>
        </div>
        <div class="player-info">
            <h3 class="player-name">${player.name}</h3>
            <p class="player-position">${player.position}</p>
            <div class="player-stats">
                <div class="stat">
                    <span class="stat-value">${player.goals}</span>
                    <span class="stat-name">Goals</span>
                </div>
                <div class="stat">
                    <span class="stat-value">${player.assists}</span>
                    <span class="stat-name">Assists</span>
                </div>
                <div class="stat">
                    <span class="stat-value">${player.matches}</span>
                    <span class="stat-name">Matches</span>
                </div>
            </div>
        </div>
    `;
    
    // Add click event to open player modal
    card.addEventListener('click', () => {
        openPlayerModal(player);
    });
    
    return card;
}

function openPlayerModal(player) {
    const modal = document.getElementById('player-modal');
    const playerProfile = document.getElementById('player-profile');
    
    playerProfile.innerHTML = `
        <div class="player-profile-image">
            <span>${player.number}</span>
        </div>
        <h2>${player.name}</h2>
        <p class="position">${player.position}</p>
        <div class="player-bio">
            <p><strong>Age:</strong> ${player.age}</p>
            <p><strong>Nationality:</strong> ${player.nationality}</p>
            <p><strong>Height:</strong> ${player.height}</p>
            <p><strong>Weight:</strong> ${player.weight}</p>
        </div>
        <div class="player-detailed-stats">
            <div class="detailed-stat">
                <span class="detailed-stat-value">${player.goals}</span>
                <span class="detailed-stat-name">Goals</span>
            </div>
            <div class="detailed-stat">
                <span class="detailed-stat-value">${player.assists}</span>
                <span class="detailed-stat-name">Assists</span>
            </div>
            <div class="detailed-stat">
                <span class="detailed-stat-value">${player.matches}</span>
                <span class="detailed-stat-name">Matches</span>
            </div>
            ${player.saves ? `
                <div class="detailed-stat">
                    <span class="detailed-stat-value">${player.saves}</span>
                    <span class="detailed-stat-name">Saves</span>
                </div>
            ` : ''}
            ${player.cleanSheets ? `
                <div class="detailed-stat">
                    <span class="detailed-stat-value">${player.cleanSheets}</span>
                    <span class="detailed-stat-name">Clean Sheets</span>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.classList.add('active');
}

// Schedule Functions
function loadScheduleData() {
    const tabBtns = document.querySelectorAll('.schedule-tabs .tab-btn');
    const upcomingGames = document.getElementById('upcoming-games');
    const pastGames = document.getElementById('past-games');
    
    // Load upcoming games
    displayGames(gamesData.upcoming, upcomingGames, true);
    
    // Load past games
    displayGames(gamesData.results, pastGames, false);
    
    // Add tab functionality
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            
            // Update active tab
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show corresponding content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tab).classList.add('active');
        });
    });
}

function displayGames(games, container, isUpcoming) {
    container.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = createGameCard(game, isUpcoming);
        container.appendChild(gameCard);
    });
}

function createGameCard(game, isUpcoming) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    const gameDate = new Date(game.date + 'T' + game.time);
    const formattedDate = gameDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });
    
    card.innerHTML = `
        <div class="team-info">
            <div class="team-logo">
                <i class="fas fa-bolt"></i>
            </div>
            <div class="team-details">
                <h3>Thunder Hawks</h3>
                <p>${game.isHome ? 'Home' : 'Away'}</p>
            </div>
        </div>
        
        <div class="game-info">
            <div class="game-date">${formattedDate}</div>
            <div class="game-time">${game.time}</div>
            <div class="game-venue">${game.venue}</div>
            ${isUpcoming ? `
                <div class="countdown-timer" data-date="${game.date}T${game.time}">
                    Loading...
                </div>
            ` : `
                <div class="game-result ${game.result}">
                    ${game.homeScore} - ${game.awayScore}
                </div>
            `}
        </div>
        
        <div class="team-info">
            <div class="team-logo">
                <i class="${game.logo}"></i>
            </div>
            <div class="team-details">
                <h3>${game.opponent}</h3>
                <p>${!game.isHome ? 'Home' : 'Away'}</p>
            </div>
        </div>
    `;
    
    return card;
}

// Initialize countdown timers
function initializeCountdownTimers() {
    const timers = document.querySelectorAll('.countdown-timer');
    
    timers.forEach(timer => {
        const gameDate = new Date(timer.getAttribute('data-date'));
        updateCountdown(timer, gameDate);
        
        setInterval(() => {
            updateCountdown(timer, gameDate);
        }, 1000);
    });
}

function updateCountdown(element, targetDate) {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;
    
    if (distance < 0) {
        element.textContent = 'Game Started';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    element.textContent = `${days}d ${hours}h ${minutes}m`;
}

// News Functions
function loadNewsData() {
    const newsGrid = document.getElementById('news-grid');
    
    newsData.forEach(article => {
        const newsCard = createNewsCard(article);
        newsGrid.appendChild(newsCard);
    });
}

function createNewsCard(article) {
    const card = document.createElement('div');
    card.className = 'news-card';
    
    const articleDate = new Date(article.date);
    const formattedDate = articleDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    
    card.innerHTML = `
        <div class="news-image"></div>
        <div class="news-content">
            <span class="news-category">${article.category}</span>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <div class="news-meta">
                <span>By ${article.author}</span>
                <span>${formattedDate}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Gallery Functions
function loadGalleryData() {
    const galleryGrid = document.getElementById('gallery-grid');
    const filterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
    
    // Load all photos initially
    displayGalleryItems(galleryData);
    
    // Add filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            // Update active filter
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter gallery items
            const filteredItems = category === 'all' 
                ? galleryData 
                : galleryData.filter(item => item.category === category);
            
            displayGalleryItems(filteredItems);
        });
    });
}

function displayGalleryItems(items) {
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = '';
    
    items.forEach(item => {
        const galleryItem = createGalleryItem(item);
        galleryGrid.appendChild(galleryItem);
    });
}

function createGalleryItem(item) {
    const element = document.createElement('div');
    element.className = 'gallery-item';
    element.setAttribute('data-category', item.category);
    
    element.innerHTML = `
        <div class="gallery-overlay">
            <h4 class="gallery-title">${item.title}</h4>
            <p class="gallery-description">${item.description}</p>
        </div>
    `;
    
    return element;
}

// Products Functions
function loadProductsData() {
    const productsGrid = document.getElementById('products-grid');
    const categoryBtns = document.querySelectorAll('.store-categories .category-btn');
    
    // Load all products initially
    displayProducts(productsData);
    
    // Add category filter functionality
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            // Update active category
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter products
            const filteredProducts = category === 'all' 
                ? productsData 
                : productsData.filter(product => product.category === category);
            
            displayProducts(filteredProducts);
        });
    });
}

function displayProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    card.innerHTML = `
        <div class="product-image">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">$${product.price}</div>
            <div class="product-actions">
                <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        showNotification(`${product.name} added to cart!`);
    }
}

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openTicketModal() {
    openModal('ticket-modal');
}

function openHighlightsModal() {
    openModal('highlights-modal');
    const video = document.getElementById('highlights-video');
    video.play();
}

function openFantasyBuilder() {
    openModal('fantasy-modal');
    initializeFantasyBuilder();
}

// Fantasy Team Builder
function initializeFantasyBuilder() {
    const availablePlayersContainer = document.getElementById('available-players');
    const playerSlots = document.querySelectorAll('.player-slot');
    
    // Load available players
    playersData.forEach(player => {
        const playerElement = document.createElement('div');
        playerElement.className = 'available-player';
        playerElement.setAttribute('data-player-id', player.id);
        playerElement.innerHTML = `
            <div>${player.name}</div>
            <div>${player.position.toUpperCase()}</div>
        `;
        
        playerElement.addEventListener('click', () => {
            selectPlayerForFantasy(player);
        });
        
        availablePlayersContainer.appendChild(playerElement);
    });
    
    // Make player slots droppable
    playerSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            if (slot.classList.contains('filled')) {
                removePlayerFromSlot(slot);
            }
        });
    });
}

function selectPlayerForFantasy(player) {
    const positionSlots = document.querySelectorAll(`[data-slot*="${getFantasyPosition(player.position)}"]`);
    const emptySlot = Array.from(positionSlots).find(slot => !slot.classList.contains('filled'));
    
    if (emptySlot) {
        emptySlot.textContent = player.name;
        emptySlot.classList.add('filled');
        emptySlot.setAttribute('data-player-id', player.id);
    } else {
        showNotification('No available slots for this position');
    }
}

function getFantasyPosition(position) {
    const positionMap = {
        'goalkeeper': 'gk',
        'defender': 'def',
        'midfielder': 'mid',
        'forward': 'fwd'
    };
    return positionMap[position] || position;
}

function removePlayerFromSlot(slot) {
    slot.textContent = '';
    slot.classList.remove('filled');
    slot.removeAttribute('data-player-id');
}

// Fan Zone Functions
function openPolls() {
    showNotification('Fan polls feature coming soon!');
}

function startTrivia() {
    showNotification('Trivia challenge feature coming soon!');
}

function openSocialHub() {
    showNotification('Social hub feature coming soon!');
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--gradient-primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-weight: 600;
        z-index: 10001;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
}

// Initialize Counters
function initializeCounters() {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-value');
                counters.forEach(counter => {
                    const target = parseInt(counter.textContent.replace(/\D/g, ''));
                    if (target && !counter.classList.contains('animated')) {
                        counter.classList.add('animated');
                        animateCounter(counter, target, 2000);
                    }
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stats-grid').forEach(grid => {
        counterObserver.observe(grid);
    });
}

// Newsletter Form
function initializeNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        if (validateEmail(email)) {
            showNotification('Thank you for subscribing to Thunder Hawks newsletter!');
            form.reset();
        } else {
            showNotification('Please enter a valid email address');
        }
    });
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Close modals when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        const modalId = e.target.id;
        closeModal(modalId);
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    updateActiveNavLinkOnScroll();
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes scoreNotification {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        20% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        80% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize countdown timers after DOM is loaded
setTimeout(() => {
    initializeCountdownTimers();
}, 1000);

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}