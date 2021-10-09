import React from "react";
import { Pets } from "./Pets";
import { PetsClass } from "./PetsClass";


export const Box:React.FC =()=>{
    return <div>
        <h1>List of Animals</h1>
        <Pets SName={'Canis'} CName={'Dog'} Race={'BullDog'} Zone={'CR'} Image={''} />
        <PetsClass SName={'Felis'} CName={'Cat'} Race={'Bengala'} Zone={'AS'} Image={''} />
    </div>
}

// const App:React.FC = () =>{
//     return <div>
//       <Pets SName={'Canis'} CName={'Dog'} Race={'BullDog'} Zone={'CR'} Image={'href='} />
//       <PetsClass SName={''} CName={'Cat'} Race={'Bengala'} Zone={'AS'} Image={'href'} />
//     </div>
//   }