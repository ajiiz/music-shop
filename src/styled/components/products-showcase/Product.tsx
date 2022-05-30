import { useMemo, useState } from "react";
import Image from "next/image";
import { addToBasket, removeFromBasket, ProductType } from "redux/basketSlice";
import { ProductWrapper } from "styled/elements/products-showcase/product/ProductWrapper";
import { StyledImage } from "../shared/StyledImage";
import { ContentWrapper } from "styled/elements/products-showcase/product/ContentWrapper";
import { ProductName } from "styled/elements/products-showcase/product/ProductName";
import { ProductDetails } from "styled/elements/products-showcase/product/ProductDetails";
import { FavouriteButton } from "styled/elements/products-showcase/product/FavouriteButton";
import { BasketActionsWrapper } from "styled/elements/products-showcase/product/BasketActionsWrapper";
import { ProductPrice } from "styled/elements/products-showcase/product/ProductPrice";
import { AddButton } from "styled/elements/products-showcase/product/AddButton";
import { RemoveButton } from "styled/elements/products-showcase/product/RemoveButton";
import { useDispatch } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import { StyledAlert } from "styled/elements/shared/StyledAlert";
import AddIcon from "assets/icons/add-icon.svg";
import RemoveIcon from "assets/icons/remove-icon.svg";
import { addProductToFavourites } from "network/addProductToFavourites";
import { removeProductFromFavourites } from "network/removeProductFromFavourites";

type ProductProps = {
  product: ProductType;
  fetchProducts: () => Promise<void>;
};

const Product = ({ product, fetchProducts }: ProductProps) => {
  const dispatch = useDispatch();
  const [isAddSnackbarOpen, setIsAddSnackbarOpen] = useState(false);
  const [isRemoveSnackbarOpen, setIsRemoveSnackbarOpen] = useState(false);
  const isFavourite = useMemo(() => product.isFavourite, [product]);

  const handleAddToCart = () => {
    setIsAddSnackbarOpen(true);
    dispatch(addToBasket(product));
  };

  const handleRemoveFromCart = () => {
    setIsRemoveSnackbarOpen(true);
    dispatch(removeFromBasket(product));
  };

  const handleAddSnackbarClose = () => {
    setIsAddSnackbarOpen(false);
  };

  const handleRemoveSnackbarClose = () => {
    setIsRemoveSnackbarOpen(false);
  };

  const addToFavourite = async () => {
    try {
      await addProductToFavourites({ productId: product.id });
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromFavourites = async () => {
    try {
      await removeProductFromFavourites({ productId: product.id });
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductWrapper>
      <StyledImage src={product.imageSrc} alt={`product with id ${product.id}`} width="350px" height="250px" objectFit="cover" placeholder="blur" blurDataURL={product.imageSrc} />
      <ContentWrapper>
        <ProductName>{product.name}</ProductName>
        <ProductDetails>{product.details}</ProductDetails>
        <FavouriteButton onClick={isFavourite ? removeFromFavourites : addToFavourite} isFavourite={isFavourite}>
          {isFavourite ? "Remove from favourites" : "Add to favourites"}
        </FavouriteButton>
      </ContentWrapper>
      <BasketActionsWrapper>
        <ProductPrice>{product.price + " $"}</ProductPrice>
        <RemoveButton onClick={handleRemoveFromCart}>
          <Image src={RemoveIcon} height={"4px"} width={"20px"} alt="remove-icon" />
        </RemoveButton>
        <AddButton onClick={handleAddToCart}>
          <Image src={AddIcon} height={"24px"} width={"24px"} alt="add-icon" />
        </AddButton>
      </BasketActionsWrapper>
      <Snackbar open={isAddSnackbarOpen} autoHideDuration={3000} onClose={handleAddSnackbarClose}>
        <StyledAlert onClose={handleAddSnackbarClose} severity="success">
          Added the vinyl to your basket!
        </StyledAlert>
      </Snackbar>
      <Snackbar open={isRemoveSnackbarOpen} autoHideDuration={3000} onClose={handleRemoveSnackbarClose}>
        <StyledAlert onClose={handleRemoveSnackbarClose} severity="error">
          Removed the vinyl from your basket!
        </StyledAlert>
      </Snackbar>
    </ProductWrapper>
  );
};

export default Product;
