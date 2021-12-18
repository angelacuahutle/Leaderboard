import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

const GameId = 'Gz0BIsu5uJLklNMVUVr5';
const API_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GameId}/scores/`;
const call = () => {
  fetch(
    API_URL,
  )
    .then((response) => response.json())
    .then((data) => {
    });
};

call();