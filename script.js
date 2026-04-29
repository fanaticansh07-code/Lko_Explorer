const lkoData = [
    // --- HERITAGE ---
    {
        name: "Bara Imambara",
        category: "heritage",
        description: "An 18th-century architectural marvel famous for its 'Bhulbhulaiya' (labyrinth) and the massive pillar-less hall.",
        image: "images/imambara.jfif",
        significance: "Engineering Wonder",
        timings: "6:00 AM - 5:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Bara+Imambara+Lucknow" 
    },
    {
        name: "Rumi Darwaza",
        category: "heritage",
        description: "The 'Turkish Gate' of Lucknow. Built by Nawab Asaf-ud-Daula, it stands sixty feet tall and is the city's signature landmark.",
        image: "images/rumi.jfif",
        significance: "City Icon",
        timings: "Open 24/7",
        map: "https://www.google.com/maps/search/?api=1&query=Rumi+Darwaza+Lucknow"
    },
    {
        name: "The Residency",
        category: "heritage",
        description: "Preserved ruins of a British residential complex, central to the Siege of Lucknow in 1857.",
        image: "images/residency.jfif",
        significance: "History of 1857",
        timings: "10:00 AM - 5:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=The+Residency+Lucknow"
    },
    {
        name: "Clock Tower (Husainabad)",
        category: "heritage",
        description: "The tallest clock tower in India, reflecting Victorian and Gothic style architecture.",
        image: "images/clock-tower.jfif",
        significance: "Tallest in India",
        timings: "Open 24/7",
        map: "https://www.google.com/maps/search/?api=1&query=Husainabad+Clock+Tower"
    },
    {
        name: "La Martiniere College",
        category: "heritage",
        description: "One of the oldest and most prestigious schools in India, known for its unique French-architectural 'Constantia' building.",
        image: "images/lamartiniere.jfif",
        significance: "Architectural Grandeur",
        timings: "By Appointment/Outside View",
        map: "https://www.google.com/maps/search/?api=1&query=La+Martiniere+College+Lucknow"
    },
    {
        name: "Chattar Manzil",
        category: "heritage",
        description: "The 'Umbrella Palace' which served as a residence for the Nawabs of Awadh and their wives.",
        image: "images/chattar-manzil.jfif",
        significance: "Nawabi Palace",
        timings: "10:00 AM - 5:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Chattar+Manzil+Lucknow"
    },

    // --- CULINARY (FOOD) ---
    {
        name: "Tunday Kababi",
        category: "culinary",
        description: "The world-famous outlet in Aminabad known for its soft 'Galouti' kebabs made with over 160 spices.",
        image: "images/tunday.jfif",
        significance: "Awadhi Signature",
        timings: "11:00 AM - 11:30 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Tunday+Kababi+Aminabad"
    },
    {
        name: "Sharma Tea Stall",
        category: "culinary",
        description: "Famous for Bun-Makkhan and Samosas. The most iconic morning spot in Hazratganj.",
        image: "images/sharma-tea.jfif",
        significance: "Local Cultural Hub",
        timings: "9:00 AM - 7:30 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Sharma+Tea+Stall+Lucknow"
    },
    {
        name: "Prakash ki Kulfi",
        category: "culinary",
        description: "Famous for its creamy 'Kulfi Falooda'. It is the ultimate dessert stop in the heart of Aminabad.",
        image: "images/prakash-kulfi.jfif",
        significance: "Best Dessert",
        timings: "10:00 AM - 11:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Prakash+ki+Kulfi+Aminabad"
    },
    {
        name: "Idrees Biryani",
        category: "culinary",
        description: "Considered the gold standard for authentic Awadhi Biryani, cooked on slow charcoal heat in Chowk.",
        image: "images/idrees-biryani.jfif",
        significance: "Authentic Biryani",
        timings: "12:00 PM - 10:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Idrees+Biryani+Lucknow"
    },
    {
        name: "Royal Café",
        category: "culinary",
        description: "Home of the famous 'Basket Chaat'. A must-visit spot in Hazratganj for food lovers.",
        image: "images/royal-cafe.jfif",
        significance: "Famous Basket Chaat",
        timings: "11:00 AM - 11:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Royal+Cafe+Hazratganj"
    },

    // --- HIDDEN GEMS / MODERN ---
    {
        name: "Dilkusha Kothi",
        category: "hidden",
        description: "The ruins of an 18th-century English-style summer house, surrounded by lush gardens.",
        image: "images/dilkusha.jfif",
        significance: "Quiet English Architecture",
        timings: "8:00 AM - 6:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Dilkusha+Kothi+Lucknow"
    },
    {
        name: "Janeshwar Mishra Park",
        category: "hidden",
        description: "Asia’s largest park, inspired by London's Hyde Park. Features long jogging tracks and a lake.",
        image: "images/jmpark.jpg",
        significance: "Asia's Largest Park",
        timings: "5:00 AM - 9:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Janeshwar+Mishra+Park+Lucknow"
    },
    {
        name: "Lucknow Zoo",
        category: "hidden",
        description: "Officially Nawab Wajid Ali Shah Zoological Garden, home to the Royal Bengal Tiger.",
        image: "images/zoo.jfif",
        significance: "Wildlife & Family Fun",
        timings: "8:30 AM - 5:30 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Lucknow+Zoo"
    },
    {
        name: "Ambedkar Memorial Park",
        category: "hidden",
        description: "A massive, stunning park built entirely of red sandstone. Looks magical at night.",
        image: "images/ambedkar-park.jfif",
        significance: "Modern Architectural Feat",
        timings: "11:00 AM - 9:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Ambedkar+Memorial+Park+Lucknow"
    },
    {
        name: "Gomti Riverfront",
        category: "hidden",
        description: "A beautiful riverfront park with musical fountains and cycling tracks.",
        image: "images/riverfront.jfif",
        significance: "Scenic Evening Spot",
        timings: "6:00 AM - 9:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Gomti+Riverfront+Park"
    },
    {
        name: "Lulu Mall",
        category: "hidden",
        description: "One of the largest malls in India, offering international brands and a massive food court.",
        image: "images/lulu.jfif",
        significance: "Shopping & Lifestyle",
        timings: "10:00 AM - 11:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Lulu+Mall+Lucknow"
    },
    {
        name: "Phoenix Palassio",
        category: "hidden",
        description: "An incredibly aesthetic mall with European-style architecture and luxury shopping.",
        image: "images/palassio.jfif",
        significance: "Luxury Shopping",
        timings: "10:30 AM - 10:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Phoenix+Palassio+Lucknow"
    },
    {
        name: "Ekana Stadium",
        category: "hidden",
        description: "An international standard cricket stadium, home to the Lucknow Super Giants (IPL).",
        image: "images/ekana.jfif",
        significance: "Sports Hub",
        timings: "During Match Hours",
        map: "https://www.google.com/maps/search/?api=1&query=Ekana+Cricket+Stadium+Lucknow"
    },
    {
        name: "Indira Gandhi Planetarium",
        category: "hidden",
        description: "A Saturn-shaped building that offers fascinating space shows and astronomical displays.",
        image: "images/planetarium.jfif",
        significance: "Science & Education",
        timings: "1:00 PM - 5:00 PM (Closed Mondays)",
        map: "https://www.google.com/maps/search/?api=1&query=Indira+Gandhi+Planetarium+Lucknow"
    }
];
function renderLucknow(filter = 'all') {
    const container = document.getElementById('main-gallery');
    container.innerHTML = ""; 

    lkoData.forEach(item => {
        if (filter === 'all' || item.category === filter) {
            const card = `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm border-0">
                        <img src="${item.image}" class="card-img-top" alt="${item.name}" 
                             style="height: 200px; object-fit: cover;"
                             onerror="this.src='https://placehold.co/600x400?text=${item.name}'">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="badge bg-warning text-dark">${item.category.toUpperCase()}</span>
                                <small class="text-muted"><i class="bi bi-clock"></i> ${item.timings}</small>
                            </div>
                            <h5 class="card-title font-playfair text-primary">${item.name}</h5>
                            <p class="card-text small text-secondary">${item.description}</p>
                            <hr>
                            <p class="small"><strong>Significance:</strong> ${item.significance}</p>
                            <a href="${item.map}" target="_blank" class="btn btn-outline-primary btn-sm w-100">View Map</a>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => renderLucknow('all'));

function searchLocation() {
    let input = document.getElementById('citySearch').value.toLowerCase();
    let cards = document.getElementsByClassName('col-md-6'); // Selects the card columns

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-title").innerText.toLowerCase();
        let desc = cards[i].querySelector(".card-text").innerText.toLowerCase();
        
        if (title.includes(input) || desc.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}