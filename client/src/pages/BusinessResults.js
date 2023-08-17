import React from "react";
import "./BusinessResults.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_BUSINESS } from "../api/userApi";
import BussinessCard from "../components/shared/BussinessCard";
function BusinessResults() {
  const { data, loading, error } = useQuery(GET_ALL_BUSINESS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="BusinessResults">
      <div className="header bg-secondary">
        <h2>Businesses</h2>
      </div>
      <div className="result-container">
        {data.getAllBusiness.map((b) => {
          return (
            <BussinessCard
              _id={b._id}
              title={b.business_name}
              description={b.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BusinessResults;
