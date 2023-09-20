import axios from "axios";
import { useEffect, useState } from "react";

import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
import { useParams } from "react-router-dom";


export default function Card() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [photos, setPhotos] = useState([]);
  // const [photoOrder, setPhotoOrder] = useState([]);
  const { id } = useParams();
  // const [mockPhotos, setMockPhotos] = useState(mockData);

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

  // const getMockPhotos = async () => {
  //   await axios
  //     .get(`./mockData.json`)
  //     .then((res) => {
  //       setMockPhotos(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    getPhotos();
    // getMockPhotos();
  }, []);

  // }

  function onChange(sourceId, sourceIndex, targetIndex) {
    const nextState = swap(photos, sourceIndex, targetIndex);
    setPhotos(nextState);
  }

  return (
    <div className="">
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id="photos"
          boxesPerRow={4}
          rowHeight={550}
          style={{ height: "400px" }}
        >
          {photos.map((photo) => (
            <GridItem key={photo} className="">
              <div
                key={id}
                style={{
                  width: "400px",
                  height: "400px",
                }}
              >
                <img src={photo.urls.small} alt="" />
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>
    </div>
  );
}
