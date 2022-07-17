import { useState } from "react";
import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import { TaskArea } from "./components/TaskArea";

export interface newTodoItem {
	addTodo: string;
}
export interface setNewTodo {
	setNewTodo: (a: string) => void;
}

export const App = () => {

	const [newTodo, setNewTodo] = useState('');

	return (
		<>
			<header className="bg-stone-800 flex flex-col items-center pt-20 pb-[72px]">
				<Logo />
				<Form setNewTodo={setNewTodo} />
			</header>
			<main className="flex flex-col items-center pt-24">
				<TaskArea addTodo={newTodo} setNewTodo={setNewTodo} />
			</main>
		</>
	);
}
