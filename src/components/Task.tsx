import { Ionicons } from "@expo/vector-icons";
import { Box, HStack, IconButton, Text } from "native-base";
import { TouchableOpacity } from "react-native";

interface Props {
  id: number;
  isChecked: boolean;
  content: string;
  handleToggleCompleteTask: (id: number) => void;
  handleRemoveTask: (id: number) => void;
}

export const Task = ({
  id,
  isChecked,
  content,
  handleToggleCompleteTask,
  handleRemoveTask,
}: Props) => {
  return (
    <TouchableOpacity
      style={{ marginBottom: 10 }}
      onPress={() => handleToggleCompleteTask(id)}
    >
      <HStack
        p={3}
        width="100%"
        alignItems="center"
        rounded="md"
        justifyContent="space-between"
        bg="gray.500"
      >
        <HStack flex={0.9} alignItems="center">
          <Box
            rounded="full"
            alignItems="center"
            justifyContent="center"
            borderColor={isChecked ? "purple.700" : "blue.500"}
            borderWidth={1}
            bg={isChecked ? "purple.700" : "transparent"}
            w={5}
            h={5}
          >
            {isChecked && (
              <Ionicons name="ios-checkmark" size={10} color="white" />
            )}
          </Box>
          <Text
            ml={2}
            textAlign="justify"
            color={isChecked ? "gray.300" : "gray.100"}
            fontSize="sm"
            strikeThrough={isChecked}
          >
            {content}
          </Text>
        </HStack>
        <IconButton
          onPress={() => handleRemoveTask(id)}
          _pressed={{
            bg: "gray.400",
            _icon: {
              color: "red.500",
            },
          }}
          _icon={{
            as: Ionicons,
            name: "trash-outline",
            color: "gray.300",
            size: 4,
          }}
        />
      </HStack>
    </TouchableOpacity>
  );
};
