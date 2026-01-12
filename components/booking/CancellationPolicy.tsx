import React from 'react';

const CancellationPolicy = () => (
  <div className="mt-6 p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Cancellation Policy & Ground Rules</h2>
    
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-700">Cancellation Policy</h3>
      <p className="mt-2 text-gray-600 text-sm">
        Free cancellation before **Aug 23**. Cancel before check-in on Aug 24 for a partial refund.
      </p>
    </div>

    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-700">Ground Rules</h3>
      <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1 text-sm">
        <li>Follow the house rules</li>
        <li>Treat your Host’s home like your own</li>
        <li>Be mindful of quiet hours after 10 PM</li>
      </ul>
    </div>
  </div>
);

export default CancellationPolicy;