import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Activities } from './_components/activities';
import { CreateActivityModal } from './_components/create-activity-modal';
import { DestinationAndDateHeader } from './_components/destination-and-date-header';
import { Guests } from './_components/guests';
import { ImportantLinks } from './_components/important-links';

export function TripDetailsPage() {
	const [isOpenCreateActivityModal, setIsOpenCreateActivityModal] =
		useState(false);

	function openCreateActivityModal() {
		setIsOpenCreateActivityModal(true);
	}

	function closeCreateActivityModal() {
		setIsOpenCreateActivityModal(false);
	}

	return (
		<div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
			<DestinationAndDateHeader />

			<main className="flex gap-16 px-4">
				<div className="flex-1 space-y-6">
					<div className="flex items-center justify-between">
						<h2 className="text-3xl font-semibold">Atividades</h2>

						<button
							onClick={openCreateActivityModal}
							className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
						>
							<Plus className="size-5" />
							Cadastrar atividade
						</button>
					</div>

					<div className="space-y-8">
						<div className="space-y-2 5">
							<div className="flex gap-2 items-baseline">
								<span className="text-xl text-zinc-300 font-semibold">
									Dia 23
								</span>
								<span className="text-xs text-zinc-500">Quarta-feira</span>
							</div>

							<p className="text-zinc-500 text-sm">
								Nenhuma atividade cadastrada nessa data
							</p>
						</div>
					</div>

					<div className="space-y-8">
						<div className="space-y-2.5">
							<div className="flex gap-2 items-baseline">
								<span className="text-xl text-zinc-300 font-semibold">
									Dia 24
								</span>
								<span className="text-xs text-zinc-500">Quinta-feira</span>
							</div>

							<Activities />
						</div>
					</div>
				</div>

				<div className="w-80 space-y-6">
					<ImportantLinks />

					<hr className="w-full h-px bg-zinc-800 " />

					<Guests />
				</div>
			</main>

			{isOpenCreateActivityModal && (
				<CreateActivityModal
					closeCreateActivityModal={closeCreateActivityModal}
				/>
			)}
		</div>
	);
}
