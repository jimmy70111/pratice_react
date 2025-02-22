import { useState, useEffect } from "react";

const DogFetcher = () => {
  const [dogImage, setDogImage] = useState(null);
  const [prevdogImage, prevsetDogImage] = useState(null);

  

  const fetchDogImage = async () => {

      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      if(dogImage != null){
        prevsetDogImage(dogImage);
      }
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
      <img src={prevdogImage}/>
    

    </div>
  );
};

export default DogFetcher;
