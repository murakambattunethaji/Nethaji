import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addTask, updateTask } from '../features/tasks/taskSlice';
import { TextField, Button, Container } from '@mui/material';

const TaskForm = () => {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks.tasks);
  const task = tasks.find((task) => task.id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { id: task ? task.id : Date.now().toString(), title, description, dueDate };
    if (task) {
      dispatch(updateTask(taskData));
    } else {
      dispatch(addTask(taskData));
    }
    navigate('/tasks');
  };

  return (
    <Container>
      <h1>{task ? 'Edit Task' : 'Create Task'}</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <Button type="submit" variant="contained" color="primary">
          {task ? 'Update Task' : 'Create Task'}
        </Button>
      </form>
    </Container>
  );
};

export default TaskForm;