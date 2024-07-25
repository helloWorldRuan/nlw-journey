import { CircleCheck, CircleDashed } from 'lucide-react';

export function Activities() {
	return (
		<div className="space-y-2.5">
			<div className="bg-zinc-900 flex items-center justify-between py-3 px-4 rounded-xl shadow-shape">
				<div className="flex items-center gap-3">
					<CircleCheck className="size-5 text-lime-300" />
					<span className="text-lg">Academia em grupo</span>
				</div>

				<span className="text-zinc-300 ">08:00h</span>
			</div>

			<div className="bg-zinc-900 flex items-center justify-between py-3 px-4 rounded-xl shadow-shape">
				<div className="flex items-center gap-3">
					<CircleDashed className="size-5 text-zinc-400" />
					<span className="text-lg">Almoço</span>
				</div>

				<span className="text-zinc-300 ">12:00h</span>
			</div>

			<div className="bg-zinc-900 flex items-center justify-between py-3 px-4 rounded-xl shadow-shape">
				<div className="flex items-center gap-3">
					<CircleDashed className="size-5 text-zinc-400" />
					<span className="text-lg">Jantar</span>
				</div>

				<span className="text-zinc-300 ">19:00h</span>
			</div>
		</div>
	);
}
