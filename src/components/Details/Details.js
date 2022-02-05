import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import * as petService from '../../services/pet';
import { AuthContext } from '../../contexts/AuthContext';


const Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [pet, setPet] = useState({});
    const { petId } = useParams();

    useEffect(() => {
        petService.getById(petId)
            .then(petData => setPet(petData));
    }, [petId]);

    const deleteHandler = async (e) => {
        e.preventDefault();
        await petService.destroy(petId, user.accessToken);
        navigate('/');
    };

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${pet._id}`}>Edit</Link>
            <Link className="button" to={`#`} onClick={deleteHandler}>Delete</Link>
        </>
    );

    const nonOwnerButtons = (
        <>
            <Link className="button" to={`/like/${pet._id}`}>Like</Link>
        </>
    );

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} /></p>
                <div className="actions">
                    {user._id && (user._id === pet._ownerId
                        ? ownerButtons
                        : nonOwnerButtons)}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: {pet.likes?.length}</span>
                    </div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section >
    );
};

export default Details;