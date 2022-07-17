import { RocketLaunch } from "phosphor-react";

export const Logo = () => {
	return (
		<div className="flex items-center gap-2 text-5xl px-5 lg:px-0">
			<RocketLaunch className="text-red-700" />
			<span>
				<span className="text-stone-200">To</span>
				<span className="text-red-700">Do</span>
			</span>
		</div>
	);
}