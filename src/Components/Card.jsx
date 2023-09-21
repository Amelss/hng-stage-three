import axios from "axios";
import { useEffect, useState} from "react";

import { useParams } from "react-router-dom";

import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

export default function Card() {
  const [photos, setPhotos] = useState([]);
  const { id } = useParams();

  const getPhotos = async () => {
    await axios
      .get(
        `https://api.unsplash.com/photos?page=1&per_page=12&w=200&client_id=S1cxIj1tN-b1dhGC_sbKViumMipvBRv53qT8RrEtfP8`
      )
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
    const newPhotoOrder = newLayout.map((layoutItem) => {
      const photoIndex = parseInt(layoutItem.i, 10);

      return photos[photoIndex];
    });

    setPhotos(newPhotoOrder);
  };

  const getColsForScreenSize = () => {
    if (window.innerWidth >= 1200) {
      return 4; // 2 columns for large screens
    } else {
      return 1; // 1 column for smaller screens
    }
  };

  const getWidthForScreenSize = () => {
    if (window.innerWidth >= 1200) {
      return 800; // Width for large screens
    } else {
      return window.innerWidth - 150; // Adjust the width as needed for smaller screens
    }
  };

  return (
    <div className="ml-20 md:ml-0 mx-auto md:text-center">
      <div style={{ display: "inline-block" }}>
        <GridLayout
          className="mx-auto md:-ml-96"
          layout={photos.map((_, index) => ({
            i: `${index}`,
            x: index % getColsForScreenSize(),
            y: Math.floor(index / getColsForScreenSize()),
            w: 1,
            h: 1,
          }))}
          cols={getColsForScreenSize()}
          rowHeight={250}
          width={getWidthForScreenSize()} // Dynamically adjust width
          onLayoutChange={onLayoutChange}
        >
          {photos.map((photo, index) => (
            <div key={`${index}`} className="text-center mx-auto">
              <img
                src={photo.urls?.small || ""}
                alt="image"
                className="w-[300px] h-[200px] md:w-full md:h-full object-cover py-7 md:py-10 text-center mx-auto"
              />
              <p className="text-xs text-center pb-4">
                {photo.alt_description}
              </p>
            </div>
          ))}
        </GridLayout>
      </div>
    </div>
  );
}
