import { ChangeEvent } from "react";
import Image from "next/image";
import { SearchLabel } from "styled/elements/products-showcase/inputs/search-bar/SearchLabel";
import { customSelectStyles, StyledSelect } from "styled/elements/products-showcase/inputs/StyledSelect";
import { SelectWrapper } from "styled/elements/products-showcase/inputs/SelectWrapper";
import { Wrapper } from "styled/elements/shared/Wrapper";
import { PriceRangeInputsContainer } from "styled/elements/products-showcase/inputs/price-range/PriceRangeInputsContainer";
import { PriceRangeInputWrapper } from "styled/elements/products-showcase/inputs/price-range/PriceRangeInputWrapper";
import { PriceRangeInput } from "styled/elements/products-showcase/inputs/price-range/PriceRangeInput";
import { PriceLabel } from "styled/elements/products-showcase/inputs/price-range/PriceLabel";
import { Input } from "styled/elements/products-showcase/inputs/search-bar/Input";
import { InputsWrapper } from "styled/elements/products-showcase/inputs/InputsWrapper";
import { SearchWrapper } from "styled/elements/products-showcase/inputs/search-bar/SearchWrapper";
import { options, PriceType } from "./ProductsTypes";
import SearchIcon from "assets/icons/search-icon.svg";

interface ProductsHeaderProps {
  searchName: string;
  priceRange: PriceType;
  handleDropdownChange: (_newValue: unknown) => void;
  handlePriceRangeChange: (_event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchNameChange: (_newValue: string) => void;
}

const ProductsHeader = ({ searchName, priceRange, handleDropdownChange, handlePriceRangeChange, handleSearchNameChange }: ProductsHeaderProps) => {
  return (
    <InputsWrapper>
      <SearchWrapper>
        <SearchLabel>
          <Image src={SearchIcon} height={25} width={25} alt="search-icon" />
        </SearchLabel>
        <Input placeholder={"Search"} defaultValue={searchName} onChange={event => handleSearchNameChange(event.target.value as string)} />
      </SearchWrapper>
      <SelectWrapper>
        <Wrapper width={"75%"} display={"flex"}>
          <StyledSelect options={options} placeholder="Filter by" styles={customSelectStyles} onChange={handleDropdownChange} />
          <PriceRangeInputsContainer>
            <PriceRangeInputWrapper>
              <PriceRangeInput type="text" name="min" onChange={handlePriceRangeChange} value={priceRange.minimum} placeholder="Min price" />
            </PriceRangeInputWrapper>
            <PriceRangeInputWrapper>
              <PriceRangeInput type="text" name="max" onChange={handlePriceRangeChange} value={priceRange.maximum} placeholder="Max price" />
            </PriceRangeInputWrapper>
            <PriceLabel>$ price range</PriceLabel>
          </PriceRangeInputsContainer>
        </Wrapper>
      </SelectWrapper>
    </InputsWrapper>
  );
};

export default ProductsHeader;
