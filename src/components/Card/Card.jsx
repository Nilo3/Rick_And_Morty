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
   }, [myFavorites]);

   return (
      <div className={style.cardcontainer}>
         <div className={style.cardbackgroung} >
           <div className={style.carframe} >
               
               <Link to={`/detail/${id}`} className={style.frameheade}>
                  <h2 className={style.name}>{name}</h2>
               </Link>
            
            <img src={image} alt={name} className={style.frameart} />
            <div className={style.description} >
               <h2>Specie: {species}</h2>
               <h2>Gender: {gender}</h2>
            </div>

            <div className={style.btn}>
               <button onClick={() => onClose(id)}>X</button>
            </div>
            <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
            /</div>
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