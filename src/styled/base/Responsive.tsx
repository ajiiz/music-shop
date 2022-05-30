const size = {
  mobile: "500px",
  tablet: "768px",
  desktop: "1500px",
  smalldesktop: "1200px"
};
export const device = {
  desktop: `@media (max-width: ${size.desktop})`,
  smalldesktop: `@media (max-width: ${size.smalldesktop})`,
  tablet: `@media (max-width: ${size.tablet})`,
  mobile: `@media (max-width: ${size.mobile})`
};
