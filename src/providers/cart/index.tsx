import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services";

interface CartProps {
  children: ReactNode;
}

interface ProductData {
  title: string;
  type: string;
  price: number;
  image: string;
  userId: number;
  id: number;
  quantity: number;
}

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

interface CartProviderData {
  search: () => void;
  cart: ProductData[];
  addCart: (item: ItemData) => void;
  addOrMenus: (quantity: number, total: number, id: number) => void;
  remove: (id: number) => void;
  removeAll: (value: number) => void;
}

export const CartContext = createContext<CartProviderData>(
  {} as CartProviderData
);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<ProductData[]>([] as ProductData[]);

  const [accessToken] = useState(localStorage.getItem("accessToken"));

  const search = () => {
    api
      .get("/cart", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => setCart(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (accessToken) {
      return search();
    }
  }, []);

  const addCart = (item: ItemData) => {
    if (cart.every((str) => str.title !== item.title)) {
      api
        .post("/cart", item, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          search();
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("O produto selecionado já existe em seu carrinho!");
    }
  };

  const remove = (id: number) => {
    api
      .delete(`/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {
        search();
      })
      .catch((err) => console.log(err));
  };

  const removeAll = () => {
    cart.map(async (item) => {
      try {
        await api.delete(`/cart/${item.id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        search();
      } catch (err) {
        return console.log(err);
      }
    });
  };

  const addOrMenus = (quantity: number, total: number, id: number) => {
    api
      .patch(
        `/cart/${id}`,
        { quantity: quantity, total: total },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => search())
      .catch((err) => console.log(err));
  };

  return (
    <CartContext.Provider
      value={{ search, cart, addCart, addOrMenus, remove, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
};
