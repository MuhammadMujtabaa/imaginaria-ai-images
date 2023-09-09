import React, { useState, useEffect } from "react";
import ImageComponent from "../imageComponent";

const distributeArrayIntoSubArrays = (array) => {
  // Calculate the number of items per subarray (excluding the last one)
  const itemsPerSubarray = Math.floor(array.length / 3);

  // Initialize an array of arrays to store subarrays
  const subarrays = [];

  // Distribute the items into subarrays
  for (let i = 0; i < array.length; i += itemsPerSubarray) {
    const subarray = array.slice(i, i + itemsPerSubarray);
    subarrays.push(subarray);
  }

  // If there are remaining items, add them to the last subarray
  const remainingItems = array.slice(subarrays.length * itemsPerSubarray);
  if (remainingItems.length > 0) {
    subarrays[subarrays.length - 1] =
      subarrays[subarrays.length - 1].concat(remainingItems);
  }

  // Return the subarrays
  return subarrays;
};

const ImageAlbum = () => {
  const [images, setImages] = useState([]);
  const [debutedImages, setDistributedImages] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=39291190-efc7c3948d39e6f435d5e4a03&page=${page}`
      );
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data.hits]);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
    // Replace 'YOUR_PIXABAY_API_KEY' with your actual Pixabay API key
  }, []);
  useEffect(() => {
    setDistributedImages(distributeArrayIntoSubArrays(images));
  }, [images]);

  // Example usage:
  const originalArray = [
    /* Your array elements here */
  ];
  const subarrays = distributeArrayIntoSubArrays(originalArray);

  // Print the subarrays
  for (let i = 0; i < subarrays.length; i++) {
    console.log(`Subarray ${i + 1}:`, subarrays[i]);
  }

  return (
    <div className="lg:mx-32 md:mx-10 mx-3 my-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {debutedImages?.map((item) => (
          <div className="grid gap-4">
            {item?.map((imageDataItem) => {
              return <ImageComponent imageDataItem={imageDataItem} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageAlbum;
