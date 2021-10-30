import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { CartProvider } from "./cart";
import { ProductsProvider } from "./products";

interface props {
  children: ReactNode;
}

const Providers = ({ children }: props) => {
  return (
    <CartProvider>
      <ProductsProvider>
        <AuthProvider>{children}</AuthProvider>
      </ProductsProvider>
    </CartProvider>
  );
};

export default Providers;
