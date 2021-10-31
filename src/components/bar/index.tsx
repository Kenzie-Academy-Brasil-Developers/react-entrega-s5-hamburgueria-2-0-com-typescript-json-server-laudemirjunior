import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Container, Input, Cart, Log } from "./styles";
import logo from "../../image/Mask Group.png";
import { useHistory } from "react-router";
import { AuthContext } from "../../providers/auth";
import { CartContext } from "../../providers/cart";
import { ProductsContext } from "../../providers/products";

interface Props {
  close: Function;
}

export default function Bar({ close }: Props) {
  const history = useHistory();
  const { logOut } = useContext(AuthContext);
  const [show, setShow] = useState(true);
  const { cart } = useContext(CartContext);
  const { showProducts } = useContext(ProductsContext);
  const [search, setSearch] = useState("");

  return (
    <Container>
      <div className="barStyled">
        <img src={logo} alt="" onClick={() => showProducts("")} />
        <div className="nav">
          {show && (
            <Input>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Procure um produto..."
                autoFocus
                onBlur={(evt) => {
                  if (evt.target.value === "") {
                    setShow(false);
                  }
                }}
              ></input>
              <button
                onClick={() => {
                  showProducts(search);
                  setSearch("");
                }}
              >
                <AiOutlineSearch />
              </button>
            </Input>
          )}
          {!show && <AiOutlineSearch onClick={() => setShow(!show)} />}
          <Cart>
            <span>{cart.length}</span>
            <RiShoppingCart2Fill onClick={() => close()} />
          </Cart>
          <Log>
            <MdLogout onClick={() => logOut(history)} />
          </Log>
        </div>
      </div>
    </Container>
  );
}
