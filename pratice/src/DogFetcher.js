import { useState, useEffect } from "react";

const DogFetcher = () => {
  const [dogImage, setDogImage] = useState(null);

  const fetchDogImage = async () => {

      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    
  };
  useEffect(() => {
    fetchDogImage();
  }, []);


  
  return (
    <div>
      <h1 className="text-xl font-bold">Random Dog </h1>
       <img src={dogImage}/>
      <button onClick={fetchDogImage}>
        Fetch New Dog
      </button>
    </div>
  );
};

export default DogFetcher;
