import { ClipboardText } from "phosphor-react";
import { useEffect, useState } from "react";
import { newTodoItem, setNewTodo } from "../App";
import { Todo } from "./Todo";

export interface TodoProps {
	index: number;
	todo: string;
	done: boolean;
	onUpdateTodo: (index: number) => void;
	onDeleteTodo: (index: number) => void;
}

export const TaskArea = ({addTodo, setNewTodo}: newTodoItem & setNewTodo) => {

	const [ todoList, setTodoList ] = useState([
		{todo: 'Go to the gym', done: true},
		{todo: 'Wash my car', done: true},
		{todo: 'Study React', done: false},
		{todo: 'Work on Office', done: true},
		{todo: 'Watch Arrow', done: false},
	]);

	useEffect(() => {
		if (addTodo !== '') {
			setTodoList([...todoList, {todo: addTodo, done: false}]);
			setNewTodo('');
		}
	});

	const updateTodo = (index: number) => {
		const TodoListWithUpdatedOne = todoList.filter((todoItem, itemIndex) => {
			if (index === itemIndex) {
				todoItem.done = !todoItem.done;
			}
			return todoItem;
		});
		setTodoList(TodoListWithUpdatedOne);
	}

	const deleteTodo = (index: number) => {
		const TodoListWithoutDeletedOne = todoList.filter((todoItem, itemIndex) => {
			return (index !== itemIndex);
		});
		setTodoList(TodoListWithoutDeletedOne);
	}

	return (
		<div className="flex flex-col gap-10 items-center w-full max-w-[736px] px-5 lg:px-0 pb-14">
			<p>{addTodo}</p>
			<header className="flex justify-between w-full">
				<span className="text-stone-500">Tasks Created
					<span className="inline-block ml-2 bg-stone-700 text-stone-300 px-1 rounded">{todoList.length}</span>
				</span>
				<span className="text-red-700">Tasks Done
					<span className="inline-block ml-2 bg-stone-700 text-stone-300 px-1 rounded">{ todoList.filter(todo => todo.done).length } of {todoList.length}</span>
				</span>
			</header>
			<div className="flex flex-col gap-2 items-center shadow-stone-800 border-t border-stone-700 rounded w-full pt-6">
				{ todoList.length === 0 ? (
					<div className="flex flex-col items-center my-20 text-stone-500">
					<ClipboardText size={64} weight="thin" className="mb-3" />
					<p className="font-bold">
						You don't have any tasks yet.
					</p>
					<p>Create a new task and organize your todo items</p>
				</div>
				) : todoList.map((todoItem, index) => (
						<Todo
							key={index}
							index={index}
							todo={todoItem.todo}
							done={todoItem.done}
							onDeleteTodo={deleteTodo}
							onUpdateTodo={updateTodo}
						/>
					)
				) }
			</div>
		</div>
	);
}