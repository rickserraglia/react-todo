import { CheckCircle, Circle, Trash } from "phosphor-react";
import { TodoProps } from "./TaskArea";

export const Todo = ({ index, todo, done, onUpdateTodo, onDeleteTodo }: TodoProps) => {
	
	const handleDelete = () => {
		onDeleteTodo(index);
	}

	const handleUpdate = () => {
		onUpdateTodo(index);
	}

	return (
		<div className="flex items-start gap-2 w-full bg-stone-800 p-3 rounded">
			<button onClick={handleUpdate} className="text-2xl py-2">
				{ done ? (
					<CheckCircle
						className="text-stone-50 hover:text-stone-600 transition-colors"
					/>
					) : (
					<Circle
						className="text-stone-600 hover:text-stone-50 transition-colors"
					/>
				) }
			</button>
			<p className="flex-1 py-2">{ todo }</p>
			<button onClick={handleDelete} className="text-2xl py-2 text-stone-600 hover:text-red-800 transition-colors"><Trash/></button>
		</div>
	);
}