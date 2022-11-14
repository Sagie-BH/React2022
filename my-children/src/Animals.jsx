import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';


const Animals = () => {
    const [animals, setAnimals] = useState([]);


    const getData = async() => {
        const result = await axios("https://zoo-animal-api.herokuapp.com/animals/rand/10");
        console.log(result.data);

    }
    useEffect(() => {
        getData();
    },[])

  return (
    <div>Animals</div>
  )
}

export default Animals