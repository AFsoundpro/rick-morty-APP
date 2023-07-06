import {Link} from 'react-router-dom';

export default function Card({
   id,
   name,
   status,
   species,
   gender,
   origin,
   image,
   onClose
}) {
   return (
      <div className="Card">
            <button onClick={() => onClose(id)}>X</button>
         <div className="card-text">
            <h4>{id}</h4>
            <h4>{name}</h4>
            <h5>{status}</h5>
            <h5>{species}</h5>
            <h6>{gender}</h6>
            <h4>{origin}</h4>
         </div>
         <div className="cardimg">
            <Link to={`/Detail/${id}`}>
               <img src={image} alt='' />
            </Link>
         </div>
      </div>
   );
}
