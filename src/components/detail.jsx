import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
    const { id } = useParams();
    console.log(id);

    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                 setCharacter(data);
                console.log("ok", data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({id});
    }, [id]);

    return (
        <div className='details'>
            <h3>{character.name && character.name}</h3>
            <h4>{character.status ? character.status : "Nohay STATUS"}</h4>

            <img src={character.image} alt={character} />
            <section>
                <h3>{character.species}</h3>
                <h4>{character.gender}</h4>
                <h4>{character.origin?.name}</h4>
            </section>
        </div>
    );
}
