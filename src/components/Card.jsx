import React from "react";
import { TbStarFilled } from "react-icons/tb";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "../components/Card.css";

const Card = ({ img, title, reviews, prevPrice, newPrice, onClick }) => {
  return (
    <div>
      <section className="card">
        <img
          src={img}
          alt={title}
          className="card-img
  "
        />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            <TbStarFilled className="rating-star" />
            <TbStarFilled className="rating-star" />
            <TbStarFilled className="rating-star" />
            <TbStarFilled className="rating-star" />
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <button className="nav-icons" onClick={onClick}>
              <AiOutlineShoppingCart />
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Card;
