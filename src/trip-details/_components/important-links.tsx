import { Link2, Plus } from 'lucide-react';

export function ImportantLinks() {
	return (
		<div className="space-y-6">
			<h2 className="font-semibold text-xl">Links importantes</h2>

			<div className="space-y-5">
				<div className="flex justify-between items-center gap-4">
					<div className="flex flex-col gap-2">
						<span className="text-zinc-100 font-medium">Reserva do AirBnB</span>

						<a
							href="#"
							className="text-zinc-400 hover:text-zinc-200 text-xs truncate"
						>
							https://www.airbnb.com.br/rooms/104700011
						</a>
					</div>

					<Link2 className="size-5 text-zinc-400" />
				</div>

				<div className="flex justify-between items-center gap-4">
					<div className="flex flex-col gap-2">
						<span className="text-zinc-100 font-medium">Reserva do AirBnB</span>

						<a
							href="#"
							className="text-zinc-400 hover:text-zinc-200 text-xs truncate"
						>
							https://www.airbnb.com.br/rooms/104700011
						</a>
					</div>

					<Link2 className="size-5 text-zinc-400" />
				</div>
			</div>

			<button className="w-full bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700">
				<Plus className="size-5" />
				Cadastrar novo link
			</button>
		</div>
	);
}
