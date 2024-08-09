import { CheckCircle2, CircleDashed, UserCog } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../../components/button';
import { api } from '../../../lib/axios';

interface Participant {
	id: string;
	name: string | null;
	email: string;
	is_confirmed: boolean;
}

export function Guests() {
	const { tripId } = useParams();
	const [participants, setParticipants] = useState<Participant[]>([]);

	useEffect(() => {
		api
			.get(`/trips/${tripId}/participants`)
			.then((response) => setParticipants(response.data.participants));
	}, [tripId]);

	return (
		<div className="space-y-6">
			<h2 className="font-semibold text-xl">Convidados</h2>

			<div className="space-y-5">
				{participants.map((participant, index) => {
					return (
						<div
							key={participant.id}
							className="flex justify-between items-center gap-4"
						>
							<div className="flex flex-col gap-2">
								<span className="text-zinc-100 font-medium">
									{participant.name ?? `Convidado ${index}`}
								</span>

								<a
									href="#"
									className="text-zinc-400 hover:text-zinc-200 text-xs truncate"
								>
									{participant.email}
								</a>
							</div>

							{participant.is_confirmed ? (
								<CheckCircle2 className="size-5 text-green-400 shrink-0" />
							) : (
								<CircleDashed className="size-5 text-zinc-400 shrink-0" />
							)}
						</div>
					);
				})}
			</div>

			<Button variant="secondary">
				<UserCog className="size-5" />
				Cadastrar novo link
			</Button>
		</div>
	);
}
