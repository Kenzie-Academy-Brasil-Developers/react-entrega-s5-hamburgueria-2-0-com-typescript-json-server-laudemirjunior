import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { CartProvider } from "./cart";
import { ProductsProvider } from "./products";

interface props {
  children: ReactNode;
}

const Providers = ({ children }: props) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
