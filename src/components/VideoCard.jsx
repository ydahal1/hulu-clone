import React from "react";
import "./videoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

function VideoCard({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="videoCard">
      <img
        src={
          movie.backdrop_path || movie.poster_path
            ? `${base_url}${movie.backdrop_path || movie.poster_path}`
            : "https://designshack.net/wp-content/uploads/placeholder-image-368x246.png"
        }
        alt={movie.original_title}
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />

      <h2> {movie.original_title}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} &middot;`}
        {movie.release_date || movie.first_air_date} &middot;
        <ThumbUpSharp /> {movie.vote_count}
      </p>
    </div>
  );
}

export default VideoCard;
