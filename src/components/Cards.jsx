import Card from './Card';

export default function Cards(props) {
   const personajes = props.characters;

   return <div className='Cards'> {personajes.map(pj => {
      return <Card 
      key={pj.id}
      id={pj.id}
      name={pj.name}
      species={pj.species}
      onClose={props.onClose}
      gender={pj.gender}
      status={pj.status}
      image={pj.image}
      origin={pj.origin.name}
      />
   })}
   </div>;
}
