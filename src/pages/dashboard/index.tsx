import { useContext, useState } from "react";
import { Redirect } from "react-router";
import Bar from "../../components/bar/index";
import Card from "../../components/card/index";
import CardCart from "../../components/cardCart/index";
import { ProductsContext } from "../../providers/products";
import { Container } from "./styles";

export default function Dashboard() {
  const { products } = useContext(ProductsContext);
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(!show);
  };

  if (!localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Bar close={close} />
      <Container>
        {products.map((item, index) => {
          return <Card key={index} item={item as any} />;
        })}
      </Container>
      {show && <CardCart close={close} />}
    </div>
  );
}
