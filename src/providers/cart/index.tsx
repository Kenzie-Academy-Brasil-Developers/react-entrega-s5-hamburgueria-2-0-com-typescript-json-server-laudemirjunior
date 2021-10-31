import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from "react";
import toast from "react-hot-toast";
import api from "../../services";
import { useAuth } from "../auth";

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
  total: number;
}

interface CartProviderData {
  search: () => void;
  cart: ProductData[];
  addCart: (item: ProductData) => void;
  addOrMenus: (quantity: number, total: number, id: number) => void;
  remove: (id: number) => void;
  removeAll: (value: number) => void;
}

export const CartContext = createContext<CartProviderData>(
  {} as CartProviderData
);

export const CartProvider = ({ children }: CartProps) => {
  const { token, id } = useAuth();

  const [cart, setCart] = useState<ProductData[]>([] as ProductData[]);

  const addCart = (item: ProductData) => {
    console.log(token, id);
    let data = { ...item, userId: id };
    if (cart.every((str) => str.id !== item.id)) {
      api
        .post("/cart", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          search();
          toast.success("Produto adicionado ao carrinho!");
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("O produto selecionado já existe em seu carrinho!");
    }
  };

  const search = useCallback(() => {
    api
      .get(`/cart?userId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setCart(response.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const remove = (id: number) => {
    api
      .delete(`/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        search();
        toast.success("Produto removido com sucesso!");
      });
  };

  const removeAll = () => {
    cart.map(async (item) => {
      await api
        .delete(`/cart/${item.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          search();
        });
    });
    toast.success("Carrinho limpo com sucesso!");
  };

  useEffect(() => {
    search();
  }, [search]);

  const addOrMenus = (quantity: number, total: number, id: number) => {
    api
      .patch(
        `/cart/${id}`,
        { quantity: quantity, total: total },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => search());
  };

  return (
    <CartContext.Provider
      value={{ search, cart, addCart, addOrMenus, remove, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
};
