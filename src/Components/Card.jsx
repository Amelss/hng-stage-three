import axios from "axios";
import { useEffect, useState, useRef} from "react";

import { useParams } from "react-router-dom";

import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";




export default function Card() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [photos, setPhotos] = useState([]);
  const { id } = useParams();

  const getPhotos = async () => {
    await axios
      .get(`https://api.unsplash.com/photos?page=1&w=200&client_id=${apiKey}`)
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  useEffect(() => {
    getPhotos();
    // getMockPhotos();
  }, []);

  // }

  // function onChange(sourceId, sourceIndex, targetIndex) {
  //   const nextState = swap(photos, sourceIndex, targetIndex);
  //   setPhotos(nextState);
  // }
  const imageKeysRef = useRef({});
  

 const handlePhotoOrderChange = (draggedPhoto, updatedOrder) => {
   const updatedPhotos = [...photos];
   const draggedPhotoIndex = updatedPhotos.findIndex(
     (photo) => photo.id === draggedPhoto.id
   );
   updatedPhotos.splice(draggedPhotoIndex, 1); // Remove the dragged photo
   updatedPhotos.splice(draggedPhotoIndex, 0, ...updatedOrder); // Insert it at the new position
   setPhotos(updatedPhotos);
 };
  
  
  
  const onLayoutChange = (newLayout) => {
    // The 'newLayout' parameter is an array containing the new layout information.
    // You can access and use this array to update the order of your photos.

    // Example: Printing the new layout to the console.
    console.log("New Layout:", newLayout);

    // Now you can update the order of your photos based on the new layout.
    // You'll need to map the newLayout to your photos and extract the order information.
    // Here's a simplified example of how you can do it:

    const newPhotoOrder = newLayout.map((layoutItem) => {
      // 'layoutItem' contains information about each grid item, including its 'i' property.
      // You can use this 'i' property to identify the corresponding photo.

      // In this example, we assume that the 'i' property of each layout item corresponds to the photo index.
      const photoIndex = parseInt(layoutItem.i, 10);

      // Use the photoIndex to retrieve the photo from the 'photos' array.
      return photos[photoIndex];
    });

    // Now 'newPhotoOrder' contains the updated order of photos based on the new layout.
    // You can set this new order in your component's state or perform any other desired actions.

    // Example: Updating the state with the new photo order.
    setPhotos(newPhotoOrder);
  };



 return (
   <div className="text-center">
     <div style={{ display: "inline-block" }}>
       <GridLayout
         className="mx-auto -ml-96 "
         layout={photos.map((_, index) => ({
           i: `${index}`,
           x: index % 2, // Place items in columns
           y: Math.floor(index / 2), // Place items in rows
           w: 1, // Adjust item width as needed
           h: 1, // Adjust item height as needed
         }))}
         cols={2} // Set the number of columns here
         rowHeight={200} // Adjust the row height as needed
         width={800} // Adjust the width as needed
         onLayoutChange={onLayoutChange}
       >
         {photos.map((photo, index) => (
           <div key={`${index}`} className="">
             <img
               src={photo.urls?.small || ""}
               alt="image"
               className="w-[300px] h-[200px] md:w-full md:h-full object-cover"
             />
           </div>
         ))}
       </GridLayout>
     </div>
   </div>
 );
}
