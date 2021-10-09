import React from "react";
import './App.css';


interface PetsProps{
    SName: string;
    CName: string;
    Race: string;
    Zone:string;
    Image: string;
}

export const Pets:React.FC<PetsProps> = ({SName, CName, Race, Zone, Image}) =>{
    return <div>
        <ul>
        <li>Scientific Name:{SName}</li>
        <li>Common Name:{CName}</li>
        <li>Race:{Race}</li>
        <li>Geographic Zone:{Zone}</li>
        <li>Image:{Image}<img src={'descarga2.jpg'} alt={'DOG'} /> </li>
        

        </ul>
    </div>
}