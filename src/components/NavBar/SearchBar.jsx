import React, {useState} from "react";

export default function SearchBar(props) {

   function handleChange (evento) {
      console.log('Esta cambiando el imput', evento.target.value)
      setId(evento.target.value)
   }


   const [id, setId] = useState("");


   return (
      <div className="Search">
         <span>ESCRIBE UN NUMERO DE 0-999 "======="</span>
         <input type='search' onChange={handleChange} value={id} placeholder="Buscar Personaje"/>
         <button onClick={function nueva() {props.onSearch(id)}}>AGREGAR PERSONAJE</button>
      </div>
   );
}
