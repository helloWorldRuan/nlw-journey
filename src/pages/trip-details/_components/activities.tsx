import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CircleCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../lib/axios';

interface Activity {
	date: string;
	activities: {
		id: string;
		title: string;
		occurs_at: string;
	}[];
}

export function Activities() {
	const { tripId } = useParams();
	const [activities, setActivities] = useState<Activity[]>([]);

	useEffect(() => {
		api
			.get(`/trips/${tripId}/activities`)
			.then((response) => setActivities(response.data.activities));
	}, [tripId]);

	return (
		<div className="space-y-8">
			{activities.map((category) => (
				<div className="space-y-2.5">
					<div className="flex gap-2 items-baseline">
						<span className="text-xl text-zinc-300 font-semibold">
							Dia {format(category.date, 'd')}
						</span>
						<span className="text-xs text-zinc-500">
							{format(category.date, 'EEEE', { locale: ptBR })}
						</span>
					</div>

					{category.activities.length > 0 ? (
						<>
							{category.activities.map((activity) => (
								<div className="bg-zinc-900 flex items-center justify-between py-3 px-4 rounded-xl shadow-shape">
									<div className="flex items-center gap-3">
										<CircleCheck className="size-5 text-lime-300" />
										<span className="text-lg">{activity.title}</span>
									</div>

									<span className="text-zinc-300 ">
										{format(activity.occurs_at, 'HH:mm')}
									</span>
								</div>
							))}
						</>
					) : (
						<p className="text-zinc-500 text-sm">
							Nenhuma atividade cadastrada nessa data
						</p>
					)}
				</div>
			))}
		</div>
	);
}
