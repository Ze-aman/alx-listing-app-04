import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy"; // Import the new component

// Define the component structure for the booking page
export default function BookingPage() {
  // Static data for the order summary
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    // Note: The price is per night for better calculation in OrderSummary
    price: 750, 
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
        Secure Your Booking
      </h1>
      
      {/* Main Grid Layout - Responsive for Desktop and Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Form and Policy (2/3 width on desktop) */}
        <div className="lg:col-span-2 space-y-8">
          <BookingForm />
          <CancellationPolicy />
        </div>
        
        {/* Right Column: Order Summary (1/3 width on desktop) */}
        <div className="lg:col-span-1">
          <OrderSummary bookingDetails={bookingDetails} />
        </div>
      </div>
    </div>
  );
}