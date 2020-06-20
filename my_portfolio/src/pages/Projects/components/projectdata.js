import hotel from "../../../images/hotel.PNG";
import movie from "../../../images/movie.PNG";
import ShareIt from "../../../images/shareit.PNG";
import Chatter from "../../../images/chatter.PNG"; 
const proj_data = [
  {
    id: 1,
    name: "Beach-Resorts",
    link: "https://ecr-resorts-localdb-reactproj.netlify.app/",
    desc:
      "A simple web app that helps users to choose best-qualified rooms. Users can choose based on different room types and price ranges. This app uses simple local storage",
    git: "https://github.com/saiduddukuri411/Beach-Resort-project",
    img: hotel,
    lang: ["React", "ES6+", "HTML & SASS"],
  },
  {
    id: 2,
    name: "MovieGoogler",
    link: "https://react-movie-googler.netlify.app/",
    desc:
      "A web app for visualizing complete reviews for a movie. This uses live data provided by MovieDB API",
    git: "https://github.com/saiduddukuri411/MovieGoogler",
    img: movie,
    lang: ["React", "ES6+", "MovieDB-API"],
  },
  {
    id: 3,
    name: "ChatterBox",
    link: "https://chatterbox-5b1c4.web.app/",
    desc:
      "Chatterbox is a text messaging web app, built on MERN. User can create their private rooms and share their credentials. Chatterbox allows for messages on both desktop and mobile devices.",
    git: "https://github.com/saiduddukuri411/chatterBox",
    img: Chatter,
    lang: ["React" , "Express", "MongoDB", "Socket.IO"],
  },
  {
    id: 4,
    name: "ShareIt",
    link: "https://shareit-2ff49.web.app/",
    desc:
      "A complete web app to share your favorite places.This was built on MERN. You can also peek through other user-profiles and their favorite places. Share your favorites on share-it.",
    git: "https://github.com/saiduddukuri411/share_place",
    img: ShareIt,
    lang: ["React" , "Express", "MongoDB","Firebase"],
  },
];
export default proj_data;
