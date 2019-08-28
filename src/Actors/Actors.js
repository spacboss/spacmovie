import React from "react";
import "./Actors.css";
import { thisExpression } from "@babel/types";

function Actors({ actors }) {
  console.log("actors", actors);
  return (
    <div className="actors">
      <ul className="movie-actors">
        {actors &&
          actors.map((actor, index) => {
            console.log("actor", actor);
            return (
              <li key={index} className="actor-details">
                {actor.image ? (
                  <img className="actor-image" src={actor.image} alt="/" />
                ) : (
                  <img
                    className="no-actor-image"
                    src="https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available-250x417.png"
                  />
                )}

                <div className="names">
                  <p className="actor-name">{actor.name}</p>
                  <p className="actor-role">{actor.role}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

// function Actors(){
// return(

// <div>
//     <div className="actors-section">
//     <p className="actors-introduction">Actors</p>
//     <div className="movie-actors">
//       <div className="individual-actor">
//         <img
//           className="actor-image"
//           src="http://www.gstatic.com/tv/thumb/persons/299302/299302_v9_ba.jpg"
//           alt=""
//         />
//         <div className="text-actor">
//           <p className="actor-name">Peter Dinklage</p>
//           <p className="actor-role">Tyrion Lannister</p>
//         </div>
//       </div>
//       <div className="individual-actor">
//         <img
//           className="actor-image"
//           src="http://www.gstatic.com/tv/thumb/persons/73830/73830_v9_ba.jpg"
//           alt=""
//         />
//         <div className="text-actor">
//           <p className="actor-name">Lena Headey</p>
//           <p className="actor-role">Cersei Lannister</p>
//         </div>
//       </div>
//       <div className="individual-actor">
//         <img
//           className="actor-image"
//           src="http://www.gstatic.com/tv/thumb/persons/613076/613076_v9_ba.jpg"
//           alt=""
//         />
//         <div className="text-actor">
//           <p className="actor-name">Kit Harington</p>
//           <p className="actor-role">Jon Snow</p>
//         </div>
//       </div>

//       <div className="individual-actor">
//         <img
//           className="actor-image"
//           src="https://vignette.wikia.nocookie.net/gameofthrones/images/9/92/Maisie_Williams_2018.jpg/revision/latest?cb=20190513151042"
//           alt=""
//         />
//         <div className="text-actor">
//           <p className="actor-name">Maisie Williams</p>
//           <p className="actor-role">Arya Stark</p>
//         </div>
//       </div>
//       <div className="individual-actor">
//         <img
//           className="actor-image"
//           src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Sophie_Turner_%2840553145603%29_%28cropped%29.jpg"
//           alt=""
//         />
//         <div className="text-actor">
//           <p className="actor-name">Sophie Turner</p>
//           <p className="actor-role">Sansa Stark</p>
//         </div>
//       </div>
//       <div className="individual-actor">
//         <img
//           className="actor-image"
//           src="https://m.media-amazon.com/images/M/MV5BMTkzMzc4MDk5OF5BMl5BanBnXkFtZTcwODg3MjUxNw@@._V1_.jpg"
//           alt=""
//         />
//         <div className="text-actor">
//           <p className="actor-name">Sean Bean</p>
//           <p className="actor-role">Ned Stark</p>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
// )

export default Actors;
