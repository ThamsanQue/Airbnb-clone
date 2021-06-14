import { FavoriteBorder, Star } from "@material-ui/icons";
import React from "react";
import "../Styles/searchResult.css";

function SearchResult({ img, location, title, description, star, price }) {
  return (
    <div className="searchResult__">
      <img src={img} alt="" />
      <FavoriteBorder className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <Star className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult__price">
            <h2>{price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
