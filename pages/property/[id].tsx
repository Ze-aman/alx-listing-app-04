import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces";

const PropertyDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (err) {
        console.error("Error fetching property details:", err);
        setError("Failed to load property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  /* ---------- States ---------- */

  if (loading) {
    return <p className="text-center mt-10">Loading property details...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (!property) {
    return <p className="text-center mt-10">Property not found</p>;
  }

  /* ---------- Render ---------- */

  return <PropertyDetail property={property} />;
};

export default PropertyDetailPage;
