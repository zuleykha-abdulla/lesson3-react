import axios from "axios";
import { useEffect, useState } from "react";



const Gallery = () => {
    const [data, setData] = useState([])

    useEffect (() => { 
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
            setData(response.data);
            setLoading(false);
          })

     }, 
     [ ] 
    ); 
  return (
    <div>Gallery</div>
  )
}

export default Gallery

