import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Testing() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         color="green"
//         size={30}
//         defaultRating={1}
//         // onSetRating={setMovieRating}
//       />
//       <p>
//         this movie was rated {movieRating} star{movieRating > 1 ? "s" : ""}
//       </p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating maxRating={4} />
    <StarRating maxRating={7} color="red" size={28} />
    <Testing /> */}
  </React.StrictMode>
);
