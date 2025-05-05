// Mock data for bookings
let bookings = [
    {
        id: 1,
        trip_id: 1,
        user_name: "John Doe",
        email: "john@example.com",
        number_of_people: 2,
        total_price: 2400,
        status: "confirmed",
        booking_date: "2024-01-15",
        trip_date: "2024-03-15"
    }
];

// Get all bookings
exports.getAllBookings = (req, res) => {
    try {
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching bookings", error: error.message });
    }
};

// Get booking by ID
exports.getBookingById = (req, res) => {
    try {
        const booking = bookings.find(b => b.id === parseInt(req.params.id));
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: "Error fetching booking", error: error.message });
    }
};

// Create new booking
exports.createBooking = (req, res) => {
    try {
        const {
            trip_id,
            user_name,
            email,
            number_of_people,
            total_price,
            trip_date
        } = req.body;

        // Validate required fields
        if (!trip_id || !user_name || !email || !number_of_people || !total_price || !trip_date) {
            return res.status(400).json({ message: "Missing required booking information" });
        }

        const newBooking = {
            id: bookings.length + 1,
            trip_id,
            user_name,
            email,
            number_of_people,
            total_price,
            status: "pending",
            booking_date: new Date().toISOString().split('T')[0],
            trip_date
        };

        bookings.push(newBooking);
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ message: "Error creating booking", error: error.message });
    }
};

// Update booking status
exports.updateBookingStatus = (req, res) => {
    try {
        const { status } = req.body;
        const bookingId = parseInt(req.params.id);

        if (!status) {
            return res.status(400).json({ message: "Status is required" });
        }

        const booking = bookings.find(b => b.id === bookingId);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        booking.status = status;
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: "Error updating booking status", error: error.message });
    }
};
