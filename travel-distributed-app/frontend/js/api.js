// API configuration
const API_BASE_URL = 'http://localhost:3000/api';

// API endpoints for trips
const tripApi = {
    // Get all trips
    getAllTrips: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/trips`);
            if (!response.ok) throw new Error('Failed to fetch trips');
            return await response.json();
        } catch (error) {
            console.error('Error fetching trips:', error);
            throw error;
        }
    },

    // Get trip by ID
    getTripById: async (tripId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/trips/${tripId}`);
            if (!response.ok) throw new Error('Failed to fetch trip');
            return await response.json();
        } catch (error) {
            console.error('Error fetching trip:', error);
            throw error;
        }
    },

    // Search trips by destination
    searchTrips: async (destination) => {
        try {
            const response = await fetch(`${API_BASE_URL}/trips/search/${destination}`);
            if (!response.ok) throw new Error('Failed to search trips');
            return await response.json();
        } catch (error) {
            console.error('Error searching trips:', error);
            throw error;
        }
    }
};

// API endpoints for bookings
const bookingApi = {
    // Create new booking
    createBooking: async (bookingData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData)
            });
            if (!response.ok) throw new Error('Failed to create booking');
            return await response.json();
        } catch (error) {
            console.error('Error creating booking:', error);
            throw error;
        }
    },

    // Get all bookings
    getAllBookings: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/bookings`);
            if (!response.ok) throw new Error('Failed to fetch bookings');
            return await response.json();
        } catch (error) {
            console.error('Error fetching bookings:', error);
            throw error;
        }
    },

    // Get booking by ID
    getBookingById: async (bookingId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`);
            if (!response.ok) throw new Error('Failed to fetch booking');
            return await response.json();
        } catch (error) {
            console.error('Error fetching booking:', error);
            throw error;
        }
    },

    // Update booking status
    updateBookingStatus: async (bookingId, status) => {
        try {
            const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status })
            });
            if (!response.ok) throw new Error('Failed to update booking status');
            return await response.json();
        } catch (error) {
            console.error('Error updating booking status:', error);
            throw error;
        }
    }
};
