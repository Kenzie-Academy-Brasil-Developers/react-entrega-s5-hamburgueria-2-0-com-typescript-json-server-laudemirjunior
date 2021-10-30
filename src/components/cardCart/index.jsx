import React, { useContext } from "react";
import Button from "../button";
import { MainContainer, Container, Msg } from "./styles";
import { CartContext } from "../../providers/cart";
import CardProducts from "../cartProducts";
import { AiOutlineClose } from "react-icons/ai";

export default function CardCart({ close }) {
  const { cart, removeAll } = useContext(CartContext);
  console.log(cart);
  return (
    <MainContainer>
      {
        <Container>
          <div className="bar">
            <div>Carrinhos de compras</div>
            <AiOutlineClose onClick={close} />
          </div>
          <>
            {cart.map((item) => (
              <CardProducts item={item} />
            ))}
          </>
          {cart.length > 0 ? (
            <>
              <div className="price">
                <p>Total</p>
                <p>
                  {cart
                    .reduce((acc, total) => acc + total.total, 0)
                    .toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </p>
              </div>

              <div className="button">
                <Button onClick={removeAll}>Remover todos</Button>
              </div>
            </>
          ) : (
            <Msg>
              <h2>Sua sacola está vazia</h2>
              <p>Adicione itens</p>
            </Msg>
          )}
        </Container>
      }
    </MainContainer>
  );
}
