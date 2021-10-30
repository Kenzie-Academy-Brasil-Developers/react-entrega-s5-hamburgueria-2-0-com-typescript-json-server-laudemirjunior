import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import Bar from "../../components/bar";
import Card from "../../components/card";
import CardCart from "../../components/cardCart";
import { ProductsContext } from "../../providers/products";
import { Container } from "./styles";

export default function Dashboard() {
  const { products } = useContext(ProductsContext);
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(!show);
  };

  if (!localStorage.getItem("accessToken")) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Bar close={close} />
      <Container>
        {products.map((item) => {
          return <Card item={item} />;
        })}
      </Container>
      {show && <CardCart close={close} />}
    </div>
  );
}
