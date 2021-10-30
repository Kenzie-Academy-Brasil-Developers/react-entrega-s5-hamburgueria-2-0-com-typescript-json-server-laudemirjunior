import React, { useContext, useState } from "react";
import { CartContext } from "../../providers/cart";
import Button from "../button";
import { Container } from "./styles";

export default function Card({ item }) {
  const { addCart } = useContext(CartContext);
  const [des, setDes] = useState(false);

  const disable = () => {
    setDes(true);
    setTimeout(() => setDes(false), 1000);
  };

  return (
    <Container>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.type}</p>
        <h4>
          {item.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h4>
        <div>
          <Button
            disabled={des}
            color
            onClick={() => {
              addCart({ ...item, quantity: 1, total: item.price });
              disable();
            }}
          >
            Adicionar
          </Button>
        </div>
      </div>
    </Container>
  );
}
