import { useMemo, useRef, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Wrapper } from "styled/elements/navbar/Wrapper";
import { Logo } from "styled/elements/shared/Logo";
import { ActionsWrapper } from "styled/elements/navbar/ActionsWrapper";
import { BasketWrapper } from "styled/elements/navbar/basket/BasketWrapper";
import { BasketAmount } from "styled/elements/navbar/basket/BasketAmount";
import { AccountSettings } from "styled/elements/navbar/AccountSettings";
import { goToLink } from "utils/navigationUtilities";
import { AccountSettingsPopup, animationVariants } from "styled/elements/navbar/popup/AccountSettingsPopup";
import { AccountSettingsItem } from "styled/elements/navbar/popup/AccountSettingsItem";
import { AccountSettingsList } from "styled/elements/navbar/popup/AccountSettingsList";
import Image from "next/image";
import BasketImage from "assets/icons/basket-icon.svg";
import { useOutsideClick } from "hooks/useOutsideClick";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const popupRef = useRef(null);
  const products = useSelector((state: RootState) => state.basket.products);
  const productsAmount = useMemo(() => products.length, [products]);
  const { data: session } = useSession();

  const onOutsideClick = () => {
    setIsPopupOpen(false);
  };
  useOutsideClick(popupRef, onOutsideClick);

  if (session) {
    return (
      <Wrapper>
        <Logo tabIndex={0} onClick={() => goToLink({ link: "/" })} fontSize={"2.5em"} width={"auto"} cursor={"pointer"} margin={"0"}>
          VinylShop
        </Logo>
        <ActionsWrapper>
          <AccountSettings tabIndex={1} onClick={() => setIsPopupOpen(true)}>
            account
          </AccountSettings>
          <BasketWrapper tabIndex={2} onClick={() => goToLink({ link: "/cart" })}>
            <Image src={BasketImage} height={25} width={25} alt="basket-icon" />
            <BasketAmount>({productsAmount})</BasketAmount>
          </BasketWrapper>
        </ActionsWrapper>
        <AccountSettingsPopup ref={popupRef} isPopupOpen={isPopupOpen} animate={isPopupOpen ? "open" : "closed"} variants={animationVariants}>
          <AccountSettingsList>
            {session.user.role === "admin" && (
              <AccountSettingsItem tabIndex={isPopupOpen ? 3 : -1} onClick={() => goToLink({ link: "/admin-page" })}>
                Admin page
              </AccountSettingsItem>
            )}
            <AccountSettingsItem tabIndex={isPopupOpen ? 4 : -1} onClick={() => goToLink({ link: "/settings" })}>
              Settings
            </AccountSettingsItem>
            <AccountSettingsItem tabIndex={isPopupOpen ? 5 : -1} onClick={() => goToLink({ link: "/order-history" })}>
              Order history
            </AccountSettingsItem>
            <AccountSettingsItem tabIndex={isPopupOpen ? 6 : -1} onClick={() => signOut()}>
              Sign out
            </AccountSettingsItem>
          </AccountSettingsList>
        </AccountSettingsPopup>
      </Wrapper>
    );
  }

  return null;
};

export default Navbar;
