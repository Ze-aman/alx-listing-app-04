import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const { name, address, price, rating, image, discount, description } = property;

  const discountedPrice = discount
    ? price * (1 - parseInt(discount) / 100)
    : price;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden mb-6">
        <Image
          src={image || "/placeholder.jpg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="text-yellow-500 font-semibold">
          ⭐ {rating.toFixed(2)}
        </div>
      </div>

      <p className="text-gray-600 mb-6">
        {address.city}, {address.country}
      </p>

      {/* Price */}
      <div className="mb-6">
        {discount ? (
          <>
            <span className="text-2xl font-bold text-red-600 mr-3">
              ${discountedPrice.toFixed(0)}
            </span>
            <span className="line-through text-gray-400">
              ${price}
            </span>
          </>
        ) : (
          <span className="text-2xl font-bold">${price}</span>
        )}
        <span className="text-gray-500 ml-2">/ night</span>
      </div>

      {/* Description */}
      {description && (
        <p className="text-gray-700 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default PropertyDetail;
