import { Routes, Route } from 'react-router-dom';
import PetList from '../PetList/PetList';
import { useState, useEffect } from 'react';
import * as petService from '../../services/pet';


const Dashboard = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(allPets => setPets(allPets))
            .catch(err => console.log(`Error occurred: ${err}`));
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <section>
                <Routes>
                    <Route path="/" element={<PetList pets={pets} />} />
                </Routes>
            </section>
        </section>
    );
};


export default Dashboard;