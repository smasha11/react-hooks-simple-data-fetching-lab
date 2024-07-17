// create your App component here
// Import necessary libraries
import React, { useState, useEffect } from "react";

// Define the App component
const App = () => {
  // State to store the image URL and loading status
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Fetch a random dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update the image URL and loading status
        setImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array to run the effect only once

  // Render the component
  return (
    <div>
      {loading ? (
        // Show loading message while fetching data
        <p>Loading...</p>
      ) : (
        // Show the dog image once fetched
        <img src={image} alt="A Random Dog" />
      )}
    </div>
  );
};

// Export the App component as the default export
export default App;
