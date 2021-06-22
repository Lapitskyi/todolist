import React, { ChangeEvent, FC } from 'react';

import TaskList from './components/TaskList';
import Forms from '../component/Forms/Forms';
import Search from '../component/Search/Search';

import './scss/Tasks.scss';

interface TasksProps {
  searchTask: any[],
  searchText: {
    val: string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    reset: () => void
  },
  onAddNewTask: (e: { preventDefault: () => void; }, text: string) => void,
  onEditModeTask: (id: number) => void,
  onDelTaskItem: (taskId: number) => void,
  onCheckBoxOnChange: (id: number) => void
  onUpdateTaskText: (id: number, val: string) => void,

}

const Tasks: FC<TasksProps> = ({
  onAddNewTask,
  searchTask,
  searchText,
  onEditModeTask,
  onDelTaskItem,
  onCheckBoxOnChange,
  onUpdateTaskText,
}) => (
  <div className="task__inner">

    <Search searchText={searchText} />

    <h2 className="task__title">Task List</h2>

    <Forms
      onAddNewTask={onAddNewTask}
    />

    <TaskList
      searchTask={searchTask}
      onEditModeTask={onEditModeTask}
      onDelTaskItem={onDelTaskItem}
      onCheckBoxOnChange={onCheckBoxOnChange}
      onUpdateTaskText={onUpdateTaskText}
      onAddNewTask={onAddNewTask}
    />
  </div>
);

export default Tasks;
