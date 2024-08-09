import { format } from 'date-fns';
import { Calendar, MapPin, Settings2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../../components/button';
import { api } from '../../../lib/axios';

interface Trip {
	id: string;
	destination: string;
	starts_at: string;
	ends_at: string;
	is_confirmed: boolean;
}

export function DestinationAndDateHeader() {
	const { tripId } = useParams();
	const [trip, setTrip] = useState<Trip | undefined>();

	const displayedDate = () => {
		if (trip?.starts_at && trip?.ends_at) {
			const fromDate = format(trip?.starts_at, "d 'de' LLL");
			const toDate = format(trip?.ends_at, "d 'de' LLL");

			return `${fromDate} até ${toDate}`;
		}

		return null;
	};

	useEffect(() => {
		api.get(`/trips/${tripId}`).then((response) => setTrip(response.data.trip));
	}, [tripId]);

	return (
		<div className="bg-zinc-900 h-16 flex items-center justify-between px-4 shadow-shape rounded-xl">
			<div className="flex items-center gap-2">
				<MapPin className="size-5 text-400" />
				<span className="text-zinc-100">{trip?.destination}</span>
			</div>

			<div className="flex items-center gap-5">
				<div className="flex items-center gap-2">
					<Calendar className="size-5 text-400" />
					<span className="text-zinc-100">{displayedDate()}</span>
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
