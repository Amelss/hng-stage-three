import axios from 'axios'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

export default function Card() {

    // const options = {
    //     method: "GET",
    //     url: "https://api.unsplash.com/photos?page=1",
    //     params: {},
    //     headers: {
    //         accept: "application/json"
            
    //     }
    // }
    const apiKey = import.meta.env.VITE_API_KEY;
    const [photos, setPhotos] = useState([])
    const {id} = useParams

    const getPhotos = async () => {
        await axios
          .get(`https://api.unsplash.com/photos?page=1&w=200&client_id=${apiKey}`)
          .then((res) => {
            setPhotos(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    useEffect(() => {
        getPhotos()
    }, [])




  return (
      <div>
          
          Card
          {photos.map((photo) => (
              <div key={id}>
                  <img src={photo.urls.raw + "&w=400&h=400"} alt="images" />
              </div>
          ))}

          
    </div>
  )
}
