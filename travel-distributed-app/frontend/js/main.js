// DOM Elements
const tripsContainer = document.getElementById('tripsContainer');
const bookingModal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');
const searchInput = document.getElementById('searchInput');

// Current trip being booked
let currentTrip = null;

// Load trips when the page loads
document.addEventListener('DOMContentLoaded', loadTrips);

// Load all trips
async function loadTrips() {
    try {
        const trips = await tripApi.getAllTrips();
        displayTrips(trips);
    } catch (error) {
        showError('Failed to load trips');
    }
}

// Display trips in the UI
function displayTrips(trips) {
    tripsContainer.innerHTML = trips.map(trip => {
        const tripJson = JSON.stringify(trip).replace(/'/g, "\\'").replace(/"/g, '\\"');
        return `
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <div class="h-48 bg-gray-300 relative">
                    <img src="${trip.image}" alt="${trip.destination}" 
                         class="w-full h-full object-cover">
                    <div class="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full">
                        $${trip.price}
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">${trip.destination}</h3>
                    <p class="text-gray-600 mb-4">${trip.description}</p>
                    <div class="flex justify-between items-center text-sm text-gray-500 mb-4">
                        <span><i class="far fa-clock mr-1"></i> ${trip.duration}</span>
                        <span><i class="far fa-calendar mr-1"></i> ${trip.departure_date}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500">
                            <i class="fas fa-users mr-1"></i> ${trip.available_seats} seats left
                        </span>
                        <button onclick="openBookingModal('${tripJson}')" 
                                class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Search trips
async function searchTrips() {
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) {
        loadTrips();
        return;
    }

    try {
        const trips = await tripApi.searchTrips(searchTerm);
        displayTrips(trips);
    } catch (error) {
        showError('Failed to search trips');
    }
}

// Open booking modal
function openBookingModal(tripData) {
    try {
        currentTrip = typeof tripData === 'string' ? JSON.parse(tripData) : tripData;
        bookingModal.classList.remove('hidden');
        document.getElementById('tripId').value = currentTrip.id;
    } catch (error) {
        console.error('Error opening booking modal:', error);
        showError('Failed to open booking form');
    }
}

// Close booking modal
function closeBookingModal() {
    bookingModal.classList.add('hidden');
    bookingForm.reset();
    currentTrip = null;
}

// Handle booking form submission
bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!currentTrip) return;

    const bookingData = {
        trip_id: currentTrip.id,
        user_name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        number_of_people: parseInt(document.getElementById('numberOfPeople').value),
        total_price: currentTrip.price * parseInt(document.getElementById('numberOfPeople').value),
        trip_date: currentTrip.departure_date
    };

    try {
        const booking = await bookingApi.createBooking(bookingData);
        showSuccess('Booking created successfully!');
        closeBookingModal();
    } catch (error) {
        showError('Failed to create booking');
    }
});

// Show error message
function showError(message) {
    alert(message); // In a real app, use a better notification system
}

// Show success message
function showSuccess(message) {
    alert(message); // In a real app, use a better notification system
}

// Close modal when clicking outside
bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        closeBookingModal();
    }
});
