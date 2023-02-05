import { Count } from "@components/Count";
import { Header } from "@components/Header";
import { InputTask } from "@components/InputTask";
import { Loading } from "@components/Loading";
import { Task } from "@components/Task";
import { TaskDTO } from "@dtos/TaskDTO";
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  Box,
  Divider,
  FlatList,
  HStack,
  IconButton,
  NativeBaseProvider,
  Text,
  View,
  VStack,
} from "native-base";
import { useEffect, useState } from "react";
import { Theme } from "./src/theme";

import ClipboardSvg from "@assets/Clipboard.svg";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
  const [inputText, setInputTask] = useState("");
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const handleAddTask = (task: TaskDTO) => {
    setTasks([...tasks, task]);
    setInputTask("");
  };

  const handleRemoveTask = (id: number) => {
    const aux = tasks.filter((task, index) => index !== id);
    setTasks(aux);
  };

  const handleToggleCompleteTask = (id: number) => {
    const aux = tasks.map((task, index) => {
      if (index === id) {
        return {
          content: task.content,
          isCompleted: !task.isCompleted,
        };
      } else {
        return task;
      }
    });
    setTasks(aux);
  };

  useEffect(() => {
    const aux = tasks.filter((item) => item.isCompleted);
    setTasksCompleted(aux.length);
  }, [tasks]);

  return (
    <NativeBaseProvider theme={Theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {!fontsLoaded ? (
        <Loading />
      ) : (
        <View bg="gray.600" flex={1}>
          <Header />
          <VStack flex={1} p={6} mt={-12}>
            <HStack w="100%" space={2}>
              <InputTask
                value={inputText}
                onChangeText={(e) => setInputTask(e)}
              />
              <IconButton
                size={52}
                bg="blue.800"
                borderRadius={6}
                onPress={() =>
                  handleAddTask({
                    content: inputText,
                    isCompleted: false,
                  })
                }
                _pressed={{
                  bg: "blue.500",
                  _icon: {
                    color: "white",
                  },
                }}
                _icon={{
                  as: Feather,
                  name: "plus-circle",
                  color: "gray.100",
                  size: 5,
                }}
              />
            </HStack>

            <HStack w="100%" justifyContent="space-between">
              <Count fontColor="blue.500" count={tasks.length} text="Criadas" />
              <Count
                fontColor="purple.500"
                count={tasksCompleted}
                text="Concluídas"
              />
            </HStack>

            <Divider my={5} bg="gray.400" />

            {tasks.length > 0 ? (
              <FlatList
                data={tasks}
                showsVerticalScrollIndicator={false}
                _contentContainerStyle={{ paddingBottom: 20 }}
                keyExtractor={(item) => item.content}
                renderItem={({ item, index }) => (
                  <Task
                    key={index}
                    id={index}
                    isChecked={item.isCompleted}
                    content={item.content}
                    handleToggleCompleteTask={handleToggleCompleteTask}
                    handleRemoveTask={handleRemoveTask}
                  />
                )}
              />
            ) : (
              <Box alignItems="center" mt={10}>
                <ClipboardSvg />
                <Text
                  textAlign="center"
                  color="gray.300"
                  fontSize="md"
                  fontWeight="bold"
                  mt={4}
                >
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text
                  textAlign="center"
                  color="gray.300"
                  fontSize="md"
                  fontWeight="normal"
                >
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </Box>
            )}
          </VStack>
        </View>
      )}
    </NativeBaseProvider>
  );
}
