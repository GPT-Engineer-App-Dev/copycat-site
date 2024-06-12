import { Container, VStack, Box } from "@chakra-ui/react";
import TaskNode from "../components/TaskNode";

const Index = () => {
  const tasks = [
    {
      name: "initial-todo-app-agent",
      time: 31.52,
      subtasks: [
        {
          name: "ChatOpenAI",
          time: 27.44,
          subtasks: [
            {
              name: "implement",
              time: 119.85,
              subtasks: [
                { name: "edit-file", time: 0.1 },
                { name: "Build Project", time: 31.96 },
                { name: "Lint Project", time: 1.26 },
                { name: "push", time: 77.06 },
                { name: "Build Project", time: 7.07 },
              ],
            },
          ],
        },
      ],
    },
  ];

  const renderTasks = (tasks) => {
    return tasks.map((task, index) => (
      <VStack key={index} align="start" pl={index > 0 ? 8 : 0} w="100%">
        <TaskNode task={task} />
        {task.subtasks && renderTasks(task.subtasks)}
      </VStack>
    ));
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} w="100%">
        {renderTasks(tasks)}
      </VStack>
    </Container>
  );
};

export default Index;