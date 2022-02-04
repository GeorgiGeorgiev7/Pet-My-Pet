import { Routes, Route } from 'react-router-dom';
import PetList from '../PetList/PetList';


const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <section>
                <Routes>
                    <Route path="/" element={<PetList />} />
                </Routes>
            </section>
        </section>
    );
};


export default Dashboard;