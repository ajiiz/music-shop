import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { ProductsShowcaseWrapper } from "styled/elements/products-showcase/ProductsShowcaseWrapper";
import ProductsInputs from "./ProductsInputs";
import Products from "./Products";
import { OptionType, PriceType } from "./ProductsTypes";
import { getProducts } from "../../../network/getProducts";
import { ProductType } from "redux/basketSlice";
import { getFilteredProducts } from "./ProductsHelper";
import SectionHeader from "../shared/SectionHeader";

const ProductsSection = () => {
  const [searchName, setSearchName] = useState("");
  const [filter, setFilter] = useState("");
  const [priceRange, setPriceRange] = useState<PriceType>({ minimum: 0, maximum: 0 });
  const [products, setProducts] = useState<ProductType[]>();

  const selectedProducts = useMemo(() => {
    return getFilteredProducts(products, searchName, filter, priceRange);
  }, [products, searchName, filter, priceRange]);

  useEffect(() => {
    fetchProducts();
  }, [filter]);

  const handleSearchNameChange = (newValue: string) => {
    setSearchName(newValue);
  };

  const handleDropdownChange = (newValue: unknown) => {
    setFilter((newValue as OptionType).value);
  };

  const handlePriceRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    value.replace("$", "");
    const regex = /^[0-9\b]+$/;
    if (value === "" || regex.test(value)) {
      if (name === "min") {
        setPriceRange({ ...priceRange, minimum: Number(value) });
      } else {
        setPriceRange({ ...priceRange, maximum: Number(value) });
      }
    }
  };

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductsShowcaseWrapper>
      <SectionHeader text={"Life. Passion. Music"} />
      <ProductsInputs
        searchName={searchName}
        priceRange={priceRange}
        handleSearchNameChange={handleSearchNameChange}
        handlePriceRangeChange={handlePriceRangeChange}
        handleDropdownChange={handleDropdownChange}
      />
      <Products fetchProducts={fetchProducts} products={selectedProducts} />
    </ProductsShowcaseWrapper>
  );
};

export default ProductsSection;
