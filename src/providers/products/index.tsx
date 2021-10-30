import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../../services";

interface ProductsProps {
  children: ReactNode;
}

interface ProductData {
  title: string;
  type: string;
  price: number;
  image: string;
}

interface ProductsProviderData {
  products: ProductData[];
  showProducts: (itemProcurado: string) => void;
}

export const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProps) => {
  const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);

  const searchProducts = () => {
    api
      .get("/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    searchProducts();
  }, []);

  const showProducts = (itemProcurado: string) => {
    if (itemProcurado === "") {
      searchProducts();
    } else {
      setProducts(
        products.filter((item) =>
          item.title.toLowerCase().includes(itemProcurado)
        )
      );
    }
  };

  return (
    <ProductsContext.Provider value={{ products, showProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
