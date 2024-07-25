import { Calendar, MapPin, Settings2 } from 'lucide-react';
import { Button } from '../../../components/button';

export function DestinationAndDateHeader() {
	return (
		<div className="bg-zinc-900 h-16 flex items-center justify-between px-4 shadow-shape rounded-xl">
			<div className="flex items-center gap-2">
				<MapPin className="size-5 text-400" />
				<span className="text-zinc-100">Florianóplis, Brasil</span>
			</div>

			<div className="flex items-center gap-5">
				<div className="flex items-center gap-2">
					<Calendar className="size-5 text-400" />
					<span className="text-zinc-100">17 a 23 de agosto</span>
				</div>

				<hr className="w-px h-6 bg-zinc-800" />

				<Button size="default" variant="secondary">
					Alterar local/data
					<Settings2 className="size-5" />
				</Button>
			</div>
		</div>
	);
}
