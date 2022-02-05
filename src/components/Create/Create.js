import * as petService from '../../services/pet';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';


const Create = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const createPetHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get('name').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const type = formData.get('type').trim();

        await petService.create({
            name,
            description,
            imageUrl,
            type
        }, user.accessToken);

        navigate('/dashboard');

    };

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={createPetHandler} method="POST">
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                                <option value="parrot">Parrot</option>
                                <option value="reptile">Reptile</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    );
};

export default Create;