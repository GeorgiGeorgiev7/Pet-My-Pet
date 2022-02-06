import { useEffect, useState } from 'react';
import * as petService from '../../services/pet';
import { Routes, Route } from 'react-router-dom';
import PetList from '../PetList/PetList';
import { useAuthContext } from '../../contexts/AuthContext';

const MyPets = () => {
  const [myPets, setMyPets] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    petService.getMine(user._id)
      .then(pets => setMyPets(pets));
  }, []);

  return (
    <section id="my-pets-page" className="my-pets">
      <h1>My Pets</h1>
      {myPets
        ? (
          <ul>
            <Routes>
              <Route path="/" element={<PetList pets={myPets} />} />
            </Routes>
          </ul>
        )
        : <p className="no-pets">No pets in database!</p>
      }
    </section>
  );
};

export default MyPets;