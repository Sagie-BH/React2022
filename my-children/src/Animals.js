import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Animal from './Animal';

const Example = ({ children }) => {
  return (
    <div>
      <div>{children.length}</div>
      {children}
    </div>
  );
};

const ExampleContainer = () =>{
    return(
        <div>
            <Example>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            </Example>
        </div>
    )
}


const Animals = () => {
    const [animals, setAnimals] = useState([]);

    const getData = async() => {
        const result = await axios("https://zoo-animal-api.herokuapp.com/animals/rand/10");
        console.log(result.data)
        setAnimals(result.data);
    }

    useEffect(() => {
        getData();
    },[])

  return (
    <div>
      {animals.map(a => 
        <Animal 
        name={a.name}
        imgLink={a.image_link}
        id={a.id}/>
      )}
      {/* <ExampleContainer/> */}
    </div>
  );
}

export default Animals