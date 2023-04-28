import style from "./Card.module.css";
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,id]);

   return (
      <div className={style.cardcontainer}>
         <div className={style.cardbackground} >
           <div className={style.carframe} >
           <div className={style.buttons}>
                  
                  <button className={style.button} onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
                  <button className={style.close} onClick={() => onClose(id)}>X</button>
                  </div>
               
               <Link to={`/detail/${id}`} className={style.link}>
                  <h2 className={style.name}>{name}</h2>
               </Link>
               
            
            <img src={image} alt={name} className={style.image} />
            <div className={style.description} >
               <h2>Specie: {species}</h2>
               <h2>Gender: {gender}</h2>
            </div>

            

            </div>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);