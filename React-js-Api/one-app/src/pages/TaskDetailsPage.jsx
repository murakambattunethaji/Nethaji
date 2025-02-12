import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const TaskDetails = () => {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks.tasks);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <Container>
      <Typography variant="h4">{task.title}</Typography>
      <Typography variant="body1">{task.description}</Typography>
      <Typography variant="body2">Due Date: {task.dueDate}</Typography>
    </Container>
  );
};

export default TaskDetails;