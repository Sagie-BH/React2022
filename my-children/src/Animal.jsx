import React from "react";
import { AnimalHeader } from "./AnimalHeader";
import { AnimalImage } from "./AnimalImage";

const Animal = ({ name, id, imgLink }) => {
  return (
    <div>
      <AnimalHeader>
        <>{name}</>
        <>{id}</>
        <>Something</>
      </AnimalHeader>
      <AnimalImage imgLink={imgLink}/>
    </div>
  );
};

export default Animal;
