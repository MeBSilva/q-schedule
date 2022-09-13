import React from "react";

// import { AuthProvider } from "./auth";
// import { CartProvider } from "./cart";
import { ModalProvider } from "./modal";

function AppProvider({ children }: React.PropsWithChildren) {
  return (
    // <CartProvider>
    <ModalProvider>
      {children}
      {/* <AuthProvider>{children}</AuthProvider> */}
    </ModalProvider>
    // </CartProvider>
  );
}

export { AppProvider };
