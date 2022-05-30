import Image from "next/image";
import { ProductType } from "redux/basketSlice";
import { ElementData } from "styled/elements/shared/ElementData";
import { ProductsCartWrapper } from "styled/elements/cart/ProductsCartWrapper";
import { QuantityIconWrapper } from "styled/elements/cart/QuantityIconWrapper";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, removeAllFromBasket } from "redux/basketSlice";
import { RootState } from "redux/store";
import AddIcon from "assets/icons/add-icon-dark.svg";
import RemoveIcon from "assets/icons/remove-icon-dark.svg";
import CloseIcon from "assets/icons/close-icon-dark.svg";

type CartProductProps = {
  product: ProductType;
  getProductQuantity: (_id: string) => number;
};

const CartProduct = ({ product, getProductQuantity }: CartProductProps) => {
  const products = useSelector((state: RootState) => state.basket.products);
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    if (products.filter(element => product.id === element.id).length > 1) {
      dispatch(removeFromBasket(product));
    }
  };

  return (
    <ProductsCartWrapper>
      <ElementData width={"50%"}>{product.name}</ElementData>
      <ElementData width={"25%"}>{product.price + "$"}</ElementData>
      <ElementData width={"25%"} mobileWidth={"50%"}>
        <QuantityIconWrapper onClick={handleRemoveFromCart} margin={"0 10% 0 0"}>
          <Image src={RemoveIcon} height={"4px"} width={"20px"} alt="remove-icon" />
        </QuantityIconWrapper>
        {getProductQuantity(product.id)}
        <QuantityIconWrapper onClick={() => dispatch(addToBasket(product))} margin={"0 0 0 10%"}>
          <Image src={AddIcon} height={"20px"} width={"20px"} alt="add-icon" />
        </QuantityIconWrapper>
        <QuantityIconWrapper onClick={() => dispatch(removeAllFromBasket(product))} margin={"0 0 0 15%"}>
          <Image src={CloseIcon} height={"20px"} width={"20px"} alt="add-icon" />
        </QuantityIconWrapper>
      </ElementData>
    </ProductsCartWrapper>
  );
};

export default CartProduct;
