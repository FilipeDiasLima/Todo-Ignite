import LogoSvg from "@assets/logo.svg";
import { Box } from "native-base";

export const Header = () => {
  return (
    <Box
      w="100%"
      h={173}
      bg="gray.700"
      alignItems="center"
      justifyContent="center"
    >
      <LogoSvg />
    </Box>
  );
};
