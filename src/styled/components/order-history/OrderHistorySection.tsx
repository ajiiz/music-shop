import SectionHeader from "../shared/SectionHeader";
import { ElementsContainer } from "styled/elements/shared/ElementsContainer";
import { ElementData } from "styled/elements/shared/ElementData";
import { ElementDataWrapper } from "styled/elements/shared/ElementDataWrapper";
import { useEffect, useMemo, useState } from "react";
import { getOrderList } from "network/getOrderList";
import { Order } from "@prisma/client";
import { ProductsWrapper } from "styled/elements/cart/ProductsWrapper";
import OrderComponent from "./OrderComponent";

const OrderHistorySection = () => {
  const [orderList, setOrderList] = useState<Order[] | undefined>();

  const OrderListElements = useMemo(
    () =>
      orderList &&
      orderList.map(order => {
        return <OrderComponent key={order.id} order={order} />;
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [orderList]
  );

  useEffect(() => {
    fetchOrderList();
  }, []);

  const fetchOrderList = async () => {
    try {
      const data = await getOrderList();
      setOrderList(data.orderList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SectionHeader text={"Order list"} />
      <ElementsContainer>
        <ElementDataWrapper width={"75%"}>
          <ElementData width={"25%"}>order id</ElementData>
          <ElementData width={"25%"}>price</ElementData>
          <ElementData width={"25%"}>date</ElementData>
          <ElementData width={"25%"}>status</ElementData>
        </ElementDataWrapper>
        <ProductsWrapper>{orderList && orderList.length > 0 ? <>{OrderListElements}</> : <span>Your order list is empty</span>}</ProductsWrapper>
      </ElementsContainer>
    </>
  );
};

export default OrderHistorySection;
