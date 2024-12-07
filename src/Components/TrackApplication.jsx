import React, { useState, useEffect } from 'react';
import './TrackApplication.css';

const TrackApplication = () => {
  const [donorData, setDonorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("email");
        const fetchResponse = await fetch(
          `https://donor.dns.army/fetch-donor?email=${encodeURIComponent(email)}`,
          {
            method: 'GET',
          }
        );
        const fetchResponseData = await fetchResponse.json();
        setDonorData(fetchResponseData.message || []);
        console.log(fetchResponseData); // Updated to log fetchResponseData instead of donorData
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Function to handle "Mark as Done" click
  const handleMarkAsDone = async (donorId) => {
    try {
      const response = await fetch(`https://donor.dns.army/update-donor-status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          donorId, // Assuming you send an ID to update status
          status: 'Inactive',
        }),
      });

      if (response.ok) {
        // Update donorData to reflect the status change
        setDonorData((prevDonors) =>
          prevDonors.map((donor) =>
            donor._id === donorId ? { ...donor, status: 'inactive' } : donor
          )
        );
      } else {
        console.log('Failed to update donor status');
      }
    } catch (error) {
      console.log('Error updating status:', error);
    }
  };

  return (
    <>
      <div id="application">
        {donorData &&
          donorData
            .filter((item) => item.status === 'Active') // Only display active donors
            .map((item) => {
              return (
                <div className="card" key={item._id}>
                  <div className="card-body">
                    <div className="info">
                      <p>
                        <strong>NAME:</strong> {item.userName.toUpperCase()}
                      </p>
                      <p>
                        <strong>DONOR AGE:</strong> {item.userAge}
                      </p>
                      <p>
                        <strong>BLOOD GROUP:</strong> {item.BloodGroup}
                      </p>
                      <p>
                        <strong>ADDRESS:</strong> {item.userAddress}
                      </p>
                    
                     
                      <p>
                        <strong>STATUS:</strong>
                        <span
                          style={{
                            color: 'green',
                            fontWeight: 'bold',
                            display: 'inline-block',
                          }}
                        >
                          {item.status}
                        </span>
                      </p>
                    </div>
                    <button
                      className="btn btn-success"
                      onClick={() => handleMarkAsDone(item._id)} // Pass the donorId
                    >
                      Mark as Done
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default TrackApplication;
