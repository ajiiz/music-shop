export type PriceType = {
  minimum: number;
  maximum: number;
};

export type OptionType = {
  value: string;
  label: string;
};

export const options: OptionType[] = [
  { value: "none", label: "None" },
  { value: "genre", label: "By genre" },
  { value: "fromLower", label: "By price - to higher" },
  { value: "fromHigher", label: "By price - to lower" },
  { value: "favourites", label: "By favourites" }
];

export const roleOptions: OptionType[] = [
  { value: "admin", label: "admin" },
  { value: "basic", label: "basic" }
];
