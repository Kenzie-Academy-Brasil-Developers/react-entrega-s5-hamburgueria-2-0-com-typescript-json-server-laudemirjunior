import React, { useContext } from "react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import { BiTrash } from "react-icons/bi";
import { Container } from "./styles";
import { CartContext } from "../../providers/cart";
import toast from "react-hot-toast";

export default function CardProducts({ item }) {
  const { addOrMenus, remove } = useContext(CartContext);

  const sub = () => {
    if (item.quantity > 1) {
      addOrMenus(item.quantity - 1, (item.total -= item.price), item.id);
    } else {
      toast.error("Quantidade minima atingida!");
    }
  };

  const add = () => {
    addOrMenus(item.quantity + 1, (item.total += item.price), item.id);
  };

  return (
    <Container>
      <div className="data">
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="quantity">
          <h3>{item.title}</h3>
          <div className="icons">
            <RiSubtractFill onClick={sub} />
            <div>{item.quantity}</div>
            <RiAddFill onClick={add} />
          </div>
        </div>
      </div>
      <div className="mainTrash">
        <div className="trash">
          <BiTrash onClick={() => remove(item.id)} />
        </div>
      </div>
    </Container>
  );
}
