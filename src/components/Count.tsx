import { Badge, HStack, Text } from "native-base";

interface Props {
  fontColor?: string;
  text: string;
  count: number;
}

export const Count = ({ count, fontColor = "gray.100", text }: Props) => {
  return (
    <HStack space={2} mt={10}>
      <Text fontSize="md" fontFamily="heading" color={fontColor}>
        {text}
      </Text>
      <Badge size="sm" bg="gray.400" px={3} py={0} borderRadius={100}>
        <Text color="gray.100">{count}</Text>
      </Badge>
    </HStack>
  );
};
