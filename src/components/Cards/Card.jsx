import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.scss";
import '../../components/Svgs'
import SVGs from "../../components/Svgs";

function Card({ post}) {

  // Substring of the message:
  const subMessage = (post.message).substring(0, 50) + "...";

  // Date in FR format:
  const dateObject = new Date(post.createdAt);
  const date = dateObject.toLocaleString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="card">
      <h2>
        <Link to={`/post/${post._id}`}>{post.title}</Link>
      </h2>
      <figure>
        <img
          src={post.picture}
          alt="image de l'article"
          className="card-image"
        />
        <figcaption>{post.title}</figcaption>
      </figure>
      <div className="content">
        <p>{subMessage}</p>
      </div>
      <div className="infos">
        <p> <strong>Date de publication:</strong> {date}</p>
        <p><strong>Auteur:</strong> {post.author}</p>
      </div>
      <div className="likes">
      <img src={SVGs.LikeIcon} alt="like icon"/>
      <p>{post.likers.length}</p>
      </div>
    </div>
  );
}

// ProptTypes  : pour ne plus avoir d'erreur dans la console
Card.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Card;
