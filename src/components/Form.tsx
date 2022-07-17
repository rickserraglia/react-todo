import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { setNewTodo } from "../App";

export const Form = ({setNewTodo}: setNewTodo) => {

	const [newTodoText, setNewTodoText] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setNewTodo(newTodoText);
		setNewTodoText('');
	}

	const isNewTodoEmpty = newTodoText.length <= 0;

	return (
		<form className="absolute flex gap-2 w-full max-w-[736px] pt-24 px-2 lg:px-0" onSubmit={handleSubmit}>
			<input type="text" name="Todo" placeholder="Add a new task" className="bg-stone-700 rounded px-4 py-3 flex-1" onChange={e => setNewTodoText(e.target.value)} value={newTodoText} />
			<button className="inline-flex items-center gap-2 px-3 rounded text-stone-100 bg-red-700 transition-colors disabled:bg-red-900 disabled:cursor-not-allowed" type="submit" disabled={isNewTodoEmpty}><span>Adicionar</span><PlusCircle size={24} /></button>
		</form>
	);
}