import React from "react";
import { useSpring, animated } from "react-spring";
import "./CreditCard.css";

const CreditCard = ({ cardNumber, name, expiryDate, cvc }) => {
  const cardAnimation = useSpring({
    from: { transform: "rotateY(180deg)", opacity: 0 },
    to: { transform: "rotateY(0)", opacity: 1 },
    config: { tension: 150, friction: 12 },
  });

  const dataAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <animated.div style={cardAnimation} className="credit-card">
      <div className="card-body">
        <div className="card-front">
          <div className="chip"></div>
          <div className="card-number">{cardNumber}</div>
          <div className="name">Nombre: {name}</div>
          <div className="expiry-date">Fecha de Vto: {expiryDate}</div>
        </div>
        <animated.div style={dataAnimation} className="card-back">
          <div className="cvc">Código de seg.: {cvc}</div>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default CreditCard;
