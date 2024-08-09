import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../components/button';
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

						<Button size="default" onClick={openCreateActivityModal}>
							<Plus className="size-5" />
							Cadastrar atividade
						</Button>
					</div>

					<Activities />
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
