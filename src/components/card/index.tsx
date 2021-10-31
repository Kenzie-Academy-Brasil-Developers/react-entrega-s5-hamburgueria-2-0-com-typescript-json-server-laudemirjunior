import { useContext, useState } from "react";
import { CartContext } from "../../providers/cart";
import Button from "../button/index";
import { Container } from "./styles";

interface ItemData {
  title: string;
  type: string;
  price: number;
  image: string;
  userId: number;
  id: number;
  quantity: number;
  total: number;
}

interface Props {
  item: ItemData;
}

export default function Card({ item }: Props) {
  const { addCart } = useContext(CartContext);
  const [des, setDes] = useState(false);

  const disable = () => {
    setDes(true);
    setTimeout(() => setDes(false), 2000);
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
            color={true}
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
