import React, { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewTask,
  delTaskItem,
  checkBoxOnChange,
  updateTaskText, editModeTask,
} from '../redux/action';

import Tasks from './Tasks';
import getTodoList from '../redux/selector';
import useInput from '../useHook/useInput';
import { AppStateType } from '../redux/store';

const TasksContainer: FC = () => {
  const tasks = useSelector(({ todoList }: AppStateType) => getTodoList(todoList));
  const dispatch = useDispatch();

  const searchText = useInput('');

  const searchTask = useMemo(() => {
    const activeTask = tasks.filter((task) => !task.done);
    const doneTask = tasks.filter((task) => task.done);

    // eslint-disable-next-line array-callback-return,consistent-return
    const find = [...activeTask, ...doneTask].filter((task) => {
      if (task.text.toLowerCase().search(searchText.val.toLowerCase()) !== -1) {
        return { ...task.text };
      } if (searchText.val === '') {
        return task;
      }
    });
    return find;
  }, [tasks, searchText.val]);

  const onAddNewTask = (e: { preventDefault: () => void; }, text: string) => {
    e.preventDefault();
    if (text !== '') {
      dispatch(addNewTask(text));
    }
  };

  const onUpdateTaskText = (id: number, text: string) => {
    dispatch(updateTaskText(id, text));
  };

  const onEditModeTask = (id: number) => {
    dispatch(editModeTask(id));
  };

  const onDelTaskItem = (id: number) => {
    dispatch(delTaskItem(id));
  };

  const onCheckBoxOnChange = (id: number) => {
    dispatch(checkBoxOnChange(id));
  };

  return (
    <Tasks
      onAddNewTask={onAddNewTask}
      onUpdateTaskText={onUpdateTaskText}
      onEditModeTask={onEditModeTask}
      onDelTaskItem={onDelTaskItem}
      onCheckBoxOnChange={onCheckBoxOnChange}
      searchTask={searchTask}
      searchText={searchText}
    />
  );
};

export default TasksContainer;
