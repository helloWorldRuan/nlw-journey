import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react';

interface DestinationAndDateStepProps {
	isGuestsInputOpen: boolean;
	showGuestsInput: () => void;
	hideGuestsInput: () => void;
}

export function DestinationAndDateStep({
	isGuestsInputOpen,
	showGuestsInput,
	hideGuestsInput,
}: DestinationAndDateStepProps) {
	return (
		<div className="h-16 bg-zinc-900 px-4 rounded-xl flex justify-between items-center shadow-shape gap-3">
			<div className="flex items-center gap-2 flex-1">
				<MapPin className="size-5 text-zinc-400" />
				<input
					disabled={isGuestsInputOpen}
					type="text"
					placeholder="Para onde você vai?"
					className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
				/>
			</div>

			<div className="flex items-center gap-2">
				<Calendar className="size-5 text-zinc-400" />
				<input
					disabled={isGuestsInputOpen}
					type="text"
					placeholder="Quando?"
					className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40"
				/>
			</div>

			<div className="w-px h-6 bg-zinc-800" />

			{isGuestsInputOpen ? (
				<button
					onClick={hideGuestsInput}
					className="bg-zinc-800 text-zinc-50 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
				>
					Alterar local/data
					<Settings2 className="size-5" />
				</button>
			) : (
				<button
					onClick={showGuestsInput}
					className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
				>
					Continuar
					<ArrowRight className="size-5" />
				</button>
			)}
		</div>
	);
}
