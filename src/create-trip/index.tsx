import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfirmTripModal } from './_components/confirm-trip-modal';
import { InviteGuestsModal } from './_components/invite-guests-modal';
import { DestinationAndDateStep } from './_components/steps/destination-and-date-step';
import { InviteGuestsStep } from './_components/steps/invite-guests-step';

export function CreateTripPage() {
	const navigate = useNavigate();

	const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
	const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
	const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

	const [emailsToInvite, setEmailsToInvite] = useState<string[]>([
		'roberval@gmail.com',
	]);

	function showGuestsInput() {
		setIsGuestsInputOpen(true);
	}

	function hideGuestsInput() {
		setIsGuestsInputOpen(false);
	}

	function openGuestsModal() {
		setIsGuestsModalOpen(true);
	}

	function closeGuestsModal() {
		setIsGuestsModalOpen(false);
	}

	function openConfirmTripModal() {
		setIsConfirmTripModalOpen(true);
	}

	function closeConfirmTripModal() {
		setIsConfirmTripModalOpen(false);
	}

	function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const data = new FormData(event.currentTarget);
		const email = data.get('email') as string;

		const emaillPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		if (emaillPattern.test(email)) {
			if (emailsToInvite.includes(email)) return;

			setEmailsToInvite([...emailsToInvite, email]);
		}

		event.currentTarget.reset();
	}

	function removeEmailFromInvites(removedEmail: string) {
		setEmailsToInvite(emailsToInvite.filter((email) => email !== removedEmail));
	}

	function createTrip(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		navigate('/trips/123');
	}

	return (
		<div className="w-full h-screen flex justify-center items-center bg-pattern bg-no-repeat bg-center">
			<div className="max-w-3xl w-full px-6 text-center space-y-10">
				<div className="flex flex-col items-center gap-3">
					<img src="/logo.svg" alt="planner" />

					<p className="text-zinc-300 text-lg">
						Convide seus amigos e planeje sua próxima viagem!
					</p>
				</div>

				<div className="space-y-4">
					<DestinationAndDateStep
						isGuestsInputOpen={isGuestsInputOpen}
						showGuestsInput={showGuestsInput}
						hideGuestsInput={hideGuestsInput}
					/>

					{isGuestsInputOpen && (
						<InviteGuestsStep
							emailsLenght={emailsToInvite.length}
							openGuestsModal={openGuestsModal}
							openConfirmTripModal={openConfirmTripModal}
						/>
					)}
				</div>

				<p className="text-zinc-500 text-sm">
					Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
					<br /> com nossos{' '}
					<a className="text-zinc-300 underline" href="#">
						termos de uso
					</a>{' '}
					e{' '}
					<a className="text-zinc-300 underline" href="#">
						políticas de privacidade
					</a>
					.
				</p>
			</div>

			{isGuestsModalOpen && (
				<InviteGuestsModal
					emailsToInvite={emailsToInvite}
					closeGuestsModal={closeGuestsModal}
					addNewEmailToInvite={addNewEmailToInvite}
					removeEmailFromInvites={removeEmailFromInvites}
				/>
			)}

			{isConfirmTripModalOpen && (
				<ConfirmTripModal
					closeConfirmTripModal={closeConfirmTripModal}
					createTrip={createTrip}
				/>
			)}
		</div>
	);
}
