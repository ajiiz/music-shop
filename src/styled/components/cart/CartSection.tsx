import { RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ElementsContainer } from "styled/elements/shared/ElementsContainer";
import { ElementData } from "styled/elements/shared/ElementData";
import SectionHeader from "../shared/SectionHeader";
import { ElementDataWrapper } from "styled/elements/shared/ElementDataWrapper";
import { ProductsWrapper } from "styled/elements/cart/ProductsWrapper";
import CartProduct from "./CartProduct";
import { useMemo, useState } from "react";
import { CartButton } from "styled/elements/cart/CartButton";
import { CartDialog } from "styled/elements/cart/Dialog/CartDialog";
import { DialogTitle } from "styled/elements/cart/Dialog/DialogTitle";
import { DialogContent } from "styled/elements/cart/Dialog/DialogContent";
import { DialogButton } from "styled/elements/cart/Dialog/DialogButton";
import { clearBasket } from "redux/basketSlice";
import { createOrder } from "network/createOrder";
import { CartFullPrice } from "styled/elements/cart/CartFullPrice";

const CartSection = () => {
  const products = useSelector((state: RootState) => state.basket.products);
  const dispatch = useDispatch();
  const usedProductIds: string[] = [];
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getProductQuantity = (id: string): number => {
    return products.filter(product => product.id === id).length;
  };

  const ProductsElement = useMemo(
    () =>
      [...products]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(product => {
          if (usedProductIds.includes(product.id)) return null;
          usedProductIds.push(product.id);
          return <CartProduct key={product.id} product={product} getProductQuantity={getProductQuantity} />;
        }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products, usedProductIds]
  );

  const getFullPrice = () => {
    return products.map(product => product.price).reduce((prev, curr) => prev + curr, 0);
  };

  const handleDialogClose = async () => {
    setIsDialogOpen(false);
    dispatch(clearBasket());
    try {
      await createOrder({ products });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SectionHeader text={"Shopping cart"} />
      <ElementsContainer>
        <ElementDataWrapper width={"75%"}>
          <ElementData width={"50%"}>product</ElementData>
          <ElementData width={"25%"}>price</ElementData>
          <ElementData width={"25%"} mobileWidth={"50%"}>
            qty
          </ElementData>
        </ElementDataWrapper>
        <ProductsWrapper>
          {products.length > 0 ? (
            <>
              {ProductsElement}
              <CartFullPrice>Full price: ${getFullPrice()}</CartFullPrice>
              <CartButton onClick={() => setIsDialogOpen(true)}>Order now</CartButton>
            </>
          ) : (
            <span>Your cart is empty</span>
          )}
        </ProductsWrapper>
      </ElementsContainer>
      <CartDialog onClose={handleDialogClose} open={isDialogOpen}>
        <DialogTitle>Order information</DialogTitle>
        <DialogContent>Thank you for your order. All of the information has been sent to your email adress. There you will also find information about the payment.</DialogContent>
        <DialogButton onClick={handleDialogClose}>close</DialogButton>
      </CartDialog>
    </>
  );
};

export default CartSection;
