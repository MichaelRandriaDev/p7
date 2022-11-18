import React from "react";
import HomeBanner from '../components/HomeBanner';
import Card from "../components/Card";
import Data from '../data/logements.json'; 

const Home = () => {    
    return (
        <main className="main">
            <HomeBanner />
            <div className="locationContent">
                {Data.map((locationData) => (
                    <Card locationData={locationData} key={locationData.id}/>
                ))}
            </div>
        </main>
    );
};

export default Home;