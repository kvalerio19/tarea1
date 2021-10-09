import React from "react";
import './App.css';

interface PetsClassProps{
    SName: string;
    CName: string;
    Race: string;
    Zone:string;
    Image: string;
}

export class PetsClass extends React.Component<PetsClassProps>{
    
    render(){
        const {SName, CName, Race, Zone, Image} = this.props;
        return <div>
             <ul>
            <li>Scientific Name:{SName}</li>
            <li>Common Name:{CName}</li>
            <li>Race:{Race}</li>
            <li>Geographic Zone:{Zone}</li>
            <li>Image:{Image} <img src={'descarga.jpg'} alt={'CAT'} /></li>

        </ul>
    </div>
    }
    
}