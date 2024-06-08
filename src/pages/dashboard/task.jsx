import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Tooltip,
  Button,
  Input,
  IconButton,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@material-tailwind/react";
import {
  TrashIcon,
  PlusIcon,
  PencilIcon,
  SearchIcon,
  CalendarIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Description for Task 1", dueDate: new Date(), priority: "High" },
    { id: 2, title: "Task 2", description: "Description for Task 2", dueDate: new Date(), priority: "Low" },
  ]);
  const [newTask, setNewTask] = useState({ title: "", description: "", dueDate: new Date(), priority: "Medium" });
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      { ...newTask, id: tasks.length + 1 },
    ]);
    setNewTask({ title: "", description: "", dueDate: new Date(), priority: "Medium" });
  };

  const handleEditTask = (task) => {
    setIsEditing(true);
    setEditTask(task);
  };

  const handleUpdateTask = () => {
    setTasks(tasks.map((task) => (task.id === editTask.id ? editTask : task)));
    setIsEditing(false);
    setEditTask(null);
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-4 p-6">
          <Typography variant="h6" color="white">
            Tasks
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <div className="mb-6 flex justify-between">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search Tasks"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<SearchIcon className="h-5 w-5 text-blue-gray-500" />}
              />
            </div>
            <div className="flex items-center gap-2">
              <Input
                placeholder="New Task Title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              />
              <Input
                placeholder="New Task Description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              />
              <DatePicker
                selected={newTask.dueDate}
                onChange={(date) => setNewTask({ ...newTask, dueDate: date })}
                className="border rounded px-3 py-2"
              />
              <select
                value={newTask.priority}
                onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                className="border rounded px-3 py-2"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <Button onClick={handleAddTask} color="blue">
                <PlusIcon className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Task", "Description", "Due Date", "Priority", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map(({ id, title, description, dueDate, priority }, key) => {
                const className = `py-3 px-5 ${
                  key === tasks.length - 1 ? "" : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={id}>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {title}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-normal text-blue-gray-500">
                        {description}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-normal text-blue-gray-500">
                        {dueDate.toLocaleDateString()}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-normal text-blue-gray-500">
                        {priority}
                      </Typography>
                    </td>
                    <td className={className}>
                      <div className="flex items-center gap-2">
                        <Tooltip content="Edit Task">
                          <IconButton
                            variant="text"
                            color="blue"
                            onClick={() => handleEditTask({ id, title, description, dueDate, priority })}
                          >
                            <PencilIcon className="h-5 w-5" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Remove Task">
                          <IconButton
                            variant="text"
                            color="red"
                            onClick={() => handleRemoveTask(id)}
                          >
                            <TrashIcon className="h-5 w-5" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>

      <Modal open={isEditing} onClose={() => setIsEditing(false)}>
        <ModalHeader>Edit Task</ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-4">
            <Input
              label="Task Title"
              value={editTask?.title || ""}
              onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
            />
            <Input
              label="Task Description"
              value={editTask?.description || ""}
              onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
            />
            <DatePicker
              selected={editTask?.dueDate || new Date()}
              onChange={(date) => setEditTask({ ...editTask, dueDate: date })}
              className="border rounded px-3 py-2"
            />
            <select
              value={editTask?.priority || "Medium"}
              onChange={(e) => setEditTask({ ...editTask, priority: e.target.value })}
              className="border rounded px-3 py-2"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="text" color="red" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleUpdateTask}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

Tasks.displayName = "/src/pages/dashboard/task.jsx";

export default Tasks;
