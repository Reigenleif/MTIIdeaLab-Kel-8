import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { OpacityAnim, Pops } from "../../util/entrance-animation";
import PopupContext from "../../util/context/popupContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }: { children: JSX.Element| JSX.Element[] }) {
  const {
    disablePopup,
    isActive: isPopupActive,
    content: popupContent,
  } = useContext(PopupContext);
  const [sidebarIsActive, setSidebarIsActive] = useState(false);
  const [isMobile] = useMediaQuery('(max-width: 640px)')
  const [isHeightSmall] = useMediaQuery('(max-height: 640px)')

  const sidebarToggler = () => {
    setSidebarIsActive(!sidebarIsActive);
    disablePopup();
  };

  const disableAllModal = () => {
    setSidebarIsActive(false);
    disablePopup();
  };

  document.body.style.overflow = "visible";
  if (sidebarIsActive) {
    document.body.style.overflow = "hidden";
  }

  return (
    <Box>
      {(sidebarIsActive || isPopupActive) && (
        <OpacityAnim>
          <Box
            w="100vw"
            h="100vh"
            pos="fixed"
            top={0}
            left={0}
            zIndex={2}
            onClick={disableAllModal}
            _before={{
              bg: "rgba(0,0,0,0.3)",
            }}
            bg="rgba(0,0,0,0.3)"
          />
        </OpacityAnim>
      )}
      {!isMobile && <Sidebar isActive={sidebarIsActive} backHandler={sidebarToggler} />}
      <Navbar hamburgerHandler={sidebarToggler} />
      {isMobile && !isHeightSmall && <Footer/>}
      {isPopupActive && (
        <Box position="fixed" top="30%" zIndex="10" width="calc(100% - 6rem)">
          <Box m="auto">
            <Pops>{popupContent}</Pops>
          </Box>
        </Box>
      )}
      
      {children}
      {isMobile && <Box h="8em" w="100vw" visibility="hidden"/>}
    </Box>
  );
}
