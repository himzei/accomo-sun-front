import { extendTheme } from "@chakra-ui/react";
import "@fontsource/noto-sans";
import "@noonnu/pretendard-regular";

const theme = extendTheme({
  fonts: {
    heading: `Pretendard-Regular`,
    body: "Pretendard-Regular",
  },
});

export default theme;
