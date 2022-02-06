import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from '../../services/pet';
import { useAuthContext } from '../../contexts/AuthContext';

const Edit = () => {
  const [pet, setPet] = useState({});
  const { petId } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(async () => {
    const petData = await petService.getById(petId);

    setPet(petData);
  }, []);

  const commitChanges = async (e) => {
    e.preventDefault();

    const { name, description, imageUrl, type } =
      Object.fromEntries(new FormData(e.currentTarget));

    const updatedPetData = {
      name,
      description,
      imageUrl,
      type
    };

    await petService.update(petId, updatedPetData, user.accessToken);
    navigate('/details/' + petId);

  };

  return (
    <section id="edit-page" className="edit">
      <form id="edit-form" onSubmit={commitChanges}>
        <fieldset>
          <legend>Edit my Pet</legend>
          <p className="field">
            <label htmlFor="name">Name</label>
            <span className="input">
              <input type="text" name="name" id="name" defaultValue={pet.name} />
            </span>
          </p>
          <p className="field">
            <label htmlFor="description">Description</label>
            <span className="input">
              <textarea name="description"
                id="description" defaultValue={pet.description}></textarea>
            </span>
          </p>
          <p className="field">
            <label htmlFor="image">Image</label>
            <span className="input">
              <input type="text" name="imageUrl" id="image" defaultValue={pet.imageUrl} />
            </span>
          </p>
          <p className="field">
            <label htmlFor="type">Type</label>
            <span className="input">
              <select id="type" name="type" defaultValue={pet.type}>
                <option value="cat" selected={pet.type == "cat"}>Cat</option>
                <option value="dog" selected={pet.type == "dog"}>Dog</option>
                <option value="parrot" selected={pet.type == "parrot"}>Parrot</option>
                <option value="reptile" selected={pet.type == "reptile"}>Reptile</option>
                <option value="other" selected={pet.type == "other"}>Other</option>
              </select>
            </span>
          </p>
          <input className="button submit" type="submit" value="Save" />
        </fieldset>
      </form>
    </section>
  );
};

export default Edit;