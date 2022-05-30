import { ProductType } from "redux/basketSlice";
import { ProductsContainer } from "styled/elements/products-showcase/products/ProductsContainer";
import { ProductsWrapper } from "styled/elements/products-showcase/products/ProductsWrapper";
import Product from "./Product";

type ProductsProps = {
  products: ProductType[] | undefined;
  fetchProducts: () => Promise<void>;
};

const Products = ({ products, fetchProducts }: ProductsProps) => {
  return (
    <ProductsWrapper>
      <ProductsContainer>
        {products &&
          products.map((product, key) => {
            return <Product product={product} fetchProducts={fetchProducts} key={key} />;
          })}
      </ProductsContainer>
    </ProductsWrapper>
  );
};

export default Products;
