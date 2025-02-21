import { useState, useEffect } from "react";

const DogFetcher = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDogImage = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (err) {
      setError("Failed to fetch dog image.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-xl font-bold">Random Dog Image</h1>
      {dogImage && <img src={dogImage} alt="A Random Dog" className="w-64 h-64 rounded-lg shadow-lg" />}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={fetchDogImage}
      >
        Fetch New Dog
      </button>
    </div>
  );
};

export default DogFetcher;
