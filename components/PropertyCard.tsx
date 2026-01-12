import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { name, address, price, rating, image, discount } = property;

  const discountedPrice = discount
    ? price * (1 - parseInt(discount) / 100)
    : price;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer">
      
      {/* Property Image */}
      <div className="relative h-60 w-full">
        <Image
          src={image || "/placeholder.jpg"}
          alt={name}
          fill
          className="object-cover"
        />

        {discount && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {discount}% OFF
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 truncate">
            {name}
          </h3>

          <div className="flex items-center space-x-1 text-yellow-500">
            ⭐
            <span className="text-sm font-semibold text-gray-700">
              {rating.toFixed(2)}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          {address.city}, {address.country}
        </p>

        {/* Price Section */}
        <div className="flex items-center mt-2">
          {discount ? (
            <>
              <span className="text-lg font-bold text-red-600 mr-2">
                ${discountedPrice.toFixed(0)}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ${price}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900">
              ${price}
            </span>
          )}
          <span className="text-sm text-gray-500 ml-1">/ night</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
