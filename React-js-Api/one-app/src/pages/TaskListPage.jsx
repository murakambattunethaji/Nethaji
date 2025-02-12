import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, List, ListItem, ListItemText, Container } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <Container>
      <h1>Task List</h1>
      <Button component={Link} to="/tasks/new" variant="contained" color="primary">
        Create Task
      </Button>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} component={Link} to={`/tasks/${task.id}`}>
            <ListItemText primary={task.title} secondary={task.dueDate} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TaskList;