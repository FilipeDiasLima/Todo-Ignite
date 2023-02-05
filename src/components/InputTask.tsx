import { HStack, IconButton, Input, IInputProps } from "native-base";

interface Props extends IInputProps {}

export const InputTask = ({ ...rest }: Props) => {
  return (
    <Input
      flex={1}
      bg="gray.500"
      borderWidth={1}
      borderColor="gray.700"
      size="lg"
      py={3}
      borderRadius={6}
      autoFocus={false}
      color="gray.100"
      textDecoration="none"
      _focus={{
        bg: "gray.500",
        borderWidth: 1,
        borderColor: "purple.700",
      }}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="gray.300"
      {...rest}
    />
  );
};
