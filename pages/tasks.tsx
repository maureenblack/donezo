/**
 * Tasks Page Component
 * 
 * Main dashboard for task management featuring:
 * - Task creation
 * - Task listing with completion status
 * - Task deletion
 * - Responsive layout
 * 
 * @component
 * @example
 * return (
 *   <Tasks />
 * )
 */

import { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../components/Logo';
import { PlusIcon, CheckIcon, TrashIcon } from '@heroicons/react/24/outline';

// Interface for Task data structure
interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

const Tasks = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  /**
   * Generates a unique ID for new tasks
   * @returns {string} Unique identifier
   */
  const generateId = (): string => {
    return Math.random().toString(36).substr(2, 9);
  };

  /**
   * Adds a new task to the list
   * @param {React.FormEvent} e - Form event
   */
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      const task: Task = {
        id: generateId(),
        title: newTask.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTasks([task, ...tasks]);
      setNewTask('');
    }
  };

  /**
   * Toggles the completion status of a task
   * @param {string} id - Task identifier
   */
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  /**
   * Removes a task from the list
   * @param {string} id - Task identifier
   */
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  /**
   * Handles user logout
   */
  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section with logo and logout */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Logo />
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main content area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Task input form */}
        <form onSubmit={handleAddTask} className="flex space-x-2 mb-8">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!newTask.trim()}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PlusIcon className="h-5 w-5" />
          </button>
        </form>

        {/* Task list */}
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500">No tasks yet. Add one above!</p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`h-5 w-5 rounded-full border ${
                      task.completed
                        ? 'bg-emerald-500 border-emerald-500'
                        : 'border-gray-300'
                    } flex items-center justify-center`}
                  >
                    {task.completed && (
                      <CheckIcon className="h-4 w-4 text-white" />
                    )}
                  </button>
                  <span
                    className={`${
                      task.completed ? 'line-through text-gray-400' : 'text-gray-700'
                    }`}
                  >
                    {task.title}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Tasks;
