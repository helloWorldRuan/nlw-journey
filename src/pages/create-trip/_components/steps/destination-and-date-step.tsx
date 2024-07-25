import { format } from 'date-fns';
import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react';
import { useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { Button } from '../../../../components/button';

interface DestinationAndDateStepProps {
	isGuestsInputOpen: boolean;
	showGuestsInput: () => void;
	hideGuestsInput: () => void;
	setDestination: (destination: string) => void;
	setDateRange: (dates: DateRange | undefined) => void;
	dateRange: DateRange | undefined;
}

export function DestinationAndDateStep({
	isGuestsInputOpen,
	showGuestsInput,
	hideGuestsInput,
	setDestination,
	setDateRange,
	dateRange,
}: DestinationAndDateStepProps) {
	const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

	function openDatePicker() {
		setIsOpenDatePicker(true);
	}

	function closeDatePicker() {
		setIsOpenDatePicker(false);
	}

	const displayedDate = () => {
		if (dateRange && dateRange.from && dateRange.to) {
			const fromDate = format(dateRange.from, "d 'de' LLL");
			const toDate = format(dateRange.to, "d 'de' LLL");

			return `${fromDate} até ${toDate}`;
		}

		return null;
	};

	return (
		<div className="h-16 bg-zinc-900 px-4 rounded-xl flex justify-between items-center shadow-shape gap-3">
			<div className="flex items-center gap-2 flex-1">
				<MapPin className="size-5 text-zinc-400" />
				<input
					disabled={isGuestsInputOpen}
					type="text"
					placeholder="Para onde você vai?"
					className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
					onChange={(event) => setDestination(event.target.value)}
				/>
			</div>

			<button
				onClick={openDatePicker}
				className={`${
					displayedDate() ? 'w-[240px]' : 'w-[150px]'
				}  flex items-center gap-2 text-left`}
			>
				<Calendar className="size-5 text-zinc-400" />
				<span className="text-lg text-zinc-400 w-40 flex-1">
					{displayedDate() ?? 'Quando?'}
				</span>
			</button>

			{isOpenDatePicker && (
				<div className="bg-black/60 backdrop-blur-sm flex justify-center items-center fixed inset-0">
					<div className="bg-zinc-900 w-fit flex flex-col items-start justify-start gap-5 px-6 py-5 rounded-xl shadow-shape">
						<div className="w-full space-y-2 text-left">
							<div className="w-full flex items-center justify-between">
								<h2 className="text-xl font-semibold">Selecione uma data</h2>

								<button onClick={closeDatePicker} type="button">
									<X className="size-5 text-zinc-400" />
								</button>
							</div>

							<DayPicker
								mode="range"
								selected={dateRange}
								onSelect={setDateRange}
							/>
						</div>
					</div>
				</div>
			)}

			<div className="w-px h-6 bg-zinc-800" />

			{isGuestsInputOpen ? (
				<Button size="default" variant="secondary" onClick={hideGuestsInput}>
					Alterar local/data
					<Settings2 className="size-5" />
				</Button>
			) : (
				<Button size="default" onClick={showGuestsInput}>
					Continuar
					<ArrowRight className="size-5" />
				</Button>
			)}
		</div>
	);
}
