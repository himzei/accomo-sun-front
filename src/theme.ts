import { extendTheme } from "@chakra-ui/react";
import "@fontsource/noto-sans";
import "@noonnu/pretendard-regular";
import "@fontsource/montserrat";

const theme = extendTheme({
  fonts: {
    heading: `Pretendard-Regular, Montserrat`,
    body: "Pretendard-Regular, Montserrat",
  },
});

export default theme;
