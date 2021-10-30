import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { number } from "yup";
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
  const accessToken = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId");

  const search = () => {
    api
      .get(`/cart?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => setCart(response.data))
      .catch((err) => console.log(err));
  };

  const addCart = (item: ItemData) => {
    if (cart.every((str) => str.id !== item.id)) {
      api
        .post(
          "/cart",
          { ...item, userId: Number(userId) },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
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
        `/cart?userId=${userId}/${id}`,
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

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      search();
    }
  }, []);

  return (
    <CartContext.Provider
      value={{ search, cart, addCart, addOrMenus, remove, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
};
