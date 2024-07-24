import { CircleCheck, CircleDashed, UserCog } from 'lucide-react';

export function Guests() {
	return (
		<div className="space-y-6">
			<h2 className="font-semibold text-xl">Convidados</h2>

			<div className="space-y-5">
				<div className="flex justify-between items-center gap-4">
					<div className="flex flex-col gap-2">
						<span className="text-zinc-100 font-medium">Jessica White</span>

						<a
							href="#"
							className="text-zinc-400 hover:text-zinc-200 text-xs truncate"
						>
							jessica.white44@yahoo.com
						</a>
					</div>

					<CircleDashed className="size-5 text-zinc-400" />
				</div>

				<div className="flex justify-between items-center gap-4">
					<div className="flex flex-col gap-2">
						<span className="text-zinc-100 font-medium">Dr. Rita Pacocha</span>

						<a
							href="#"
							className="text-zinc-400 hover:text-zinc-200 text-xs truncate"
						>
							lacy.stiedemann@gmail.com
						</a>
					</div>

					<CircleDashed className="size-5 text-zinc-400" />
				</div>

				<div className="flex justify-between items-center gap-4">
					<div className="flex flex-col gap-2">
						<span className="text-zinc-100 font-medium">
							Wilfred Dickens III
						</span>

						<a
							href="#"
							className="text-zinc-400 hover:text-zinc-200 text-xs truncate"
						>
							marian.hyatt@hotmail.com
						</a>
					</div>

					<CircleCheck className="size-5 text-lime-300" />
				</div>
			</div>

			<button className="w-full bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700">
				<UserCog className="size-5" />
				Cadastrar novo link
			</button>
		</div>
	);
}
