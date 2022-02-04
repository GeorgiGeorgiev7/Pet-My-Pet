import { useEffect, useState } from 'react';

import PetCard from "./PetCard/PetCard";
import * as petService from '../../services/pet';

const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(async () => {
        const allPets = await petService.getAll();
        setPets(allPets);
    }, []);

    return (
        <>
            {pets.length > 0
                ? (
                    <ul className="other-pets-list">
                        {pets.map(pet =>
                            <PetCard key={pet._id} pet={pet} />)}
                    </ul>
                )
                : <p className="no-pets">No pets in database!</p>}
        </>
    );
};

export default PetList;