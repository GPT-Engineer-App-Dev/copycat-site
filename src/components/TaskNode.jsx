import { Box, Flex, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { FiLink } from "react-icons/fi";

const TaskNode = ({ task }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} w="100%" bg="gray.700" color="white">
      <HStack spacing={4}>
        <Icon as={FiLink} boxSize={6} />
        <VStack align="start" spacing={0}>
          <Text fontWeight="bold">{task.name}</Text>
          <Text fontSize="sm">Time: {task.time}s</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default TaskNode;