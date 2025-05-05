// Mock data for trips
const trips = [
    {
        id: 1,
        destination: "Bali, Indonesia",
        description: "Experience the beauty of Bali with its pristine beaches and rich culture",
        price: 1200,
        duration: "7 days",
        image: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg",
        available_seats: 20,
        departure_date: "2024-03-15"
    },
    {
        id: 2,
        destination: "Tokyo, Japan",
        description: "Explore the vibrant city of Tokyo, mixing modern technology with traditional culture",
        price: 1800,
        duration: "8 days",
        image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg",
        available_seats: 15,
        departure_date: "2024-04-01"
    },
    {
        id: 3,
        destination: "Paris, France",
        description: "Discover the city of love with its iconic landmarks and exquisite cuisine",
        price: 1500,
        duration: "6 days",
        image: "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg",
        available_seats: 25,
        departure_date: "2024-03-20"
    }
];

// Get all trips
exports.getAllTrips = (req, res) => {
    try {
        res.json(trips);
    } catch (error) {
        res.status(500).json({ message: "Error fetching trips", error: error.message });
    }
};

// Get single trip by ID
exports.getTripById = (req, res) => {
    try {
        const trip = trips.find(t => t.id === parseInt(req.params.id));
        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        res.json(trip);
    } catch (error) {
        res.status(500).json({ message: "Error fetching trip", error: error.message });
    }
};

// Search trips by destination
exports.searchTrips = (req, res) => {
    try {
        const destination = req.params.destination.toLowerCase();
        const filteredTrips = trips.filter(trip => 
            trip.destination.toLowerCase().includes(destination)
        );
        res.json(filteredTrips);
    } catch (error) {
        res.status(500).json({ message: "Error searching trips", error: error.message });
    }
};
