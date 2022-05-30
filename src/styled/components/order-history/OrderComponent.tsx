import { ElementData } from "styled/elements/shared/ElementData";
import { ProductsCartWrapper } from "styled/elements/cart/ProductsCartWrapper";
import { Order } from "@prisma/client";
import { ProductType } from "redux/basketSlice";
import { useMemo, useState } from "react";
import { ProductsWrapper } from "styled/elements/order-list/ProductsWrapper";
import { ProductDetails } from "styled/elements/order-list/ProductDetails";

type OrderProps = {
  order: Order;
};

const OrderComponent = ({ order }: OrderProps) => {
  const [isShown, setIsShown] = useState(false);
  const products = useMemo(
    () =>
      (JSON.parse(order.productsData) as ProductType[]).map(product => {
        return (
          <div key={product.id}>
            <ProductDetails isShown={isShown}>{product.name + " "}</ProductDetails>
            <ProductDetails isShown={isShown}>{product.price + "$"}</ProductDetails>
          </div>
        );
      }),
    [isShown, order.productsData]
  );

  return (
    <>
      <ProductsCartWrapper onClick={() => setIsShown(!isShown)} padding="0" cursor="pointer">
        <ElementData width={"25%"}>{order.id}</ElementData>
        <ElementData width={"25%"}>{order.fullPrice + "$"}</ElementData>
        <ElementData width={"25%"}>{(order.date as unknown as string).slice(0, (order.date as unknown as string).lastIndexOf("T"))}</ElementData>
        <ElementData width={"25%"}>{order.status ? "Done" : "In progress"}</ElementData>
      </ProductsCartWrapper>
      <ProductsWrapper>{products}</ProductsWrapper>
    </>
  );
};

export default OrderComponent;
