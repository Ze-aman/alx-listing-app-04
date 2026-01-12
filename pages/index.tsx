import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

import Pill from "@/components/Pill";
import PropertyCard from "@/components/PropertyCard";
import { FILTER_LABELS, HERO_BACKGROUND_IMAGE_URL } from "@/constants";
import { PropertyProps } from "@/interfaces";

const Home: React.FC = () => {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <>
      <Head>
        <title>Responsive Property Listing Page</title>
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE_URL})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-white z-10 p-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl sm:text-2xl font-light">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Quick Filters 🧭
        </h2>
        <div className="flex space-x-3 overflow-x-auto pb-4 custom-scrollbar">
          {FILTER_LABELS.map((label, index) => (
            <Pill
              key={label}
              label={label}
              isActive={index === 0}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Featured Listings ({properties.length}) 🏘️
        </h2>

        {/* States */}
        {loading && <p className="text-center">Loading properties...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {properties.map((property) => (
              <PropertyCard
                key={property.name}
                property={property}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
