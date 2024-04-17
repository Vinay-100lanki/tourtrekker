import React from "react";
import Card from "./Card";
import './Tour.css';

export default function Tour({removeTour,tours}){

    return(
        <div className="container">
            <div className="heading">
                <h2 className="title">TourTrekker</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour)=>{
                        return (
                        <Card key={tour.id} {...tour} removeTour={removeTour} />
                    )
                    })
                }
            </div>
        </div>
    );
}
