import { ArrowRight, UserPlus2 } from 'lucide-react';

interface InviteGuestsStepProps {
	emailsLenght: number;
	openGuestsModal: () => void;
	openConfirmTripModal: () => void;
}

export function InviteGuestsStep({
	emailsLenght,
	openGuestsModal,
	openConfirmTripModal,
}: InviteGuestsStepProps) {
	function getInviteGuestsMessage(emailCount: number) {
		if (emailCount > 1) {
			return `${emailCount} pessoas convidadas`;
		} else if (emailCount === 1) {
			return `${emailCount} pessoa convidada`;
		} else {
			return 'Quem estará na viagem?';
		}
	}

	const inviteGuestsMessage = getInviteGuestsMessage(emailsLenght);

	return (
		<div className="h-16 bg-zinc-900 px-4 rounded-xl flex justify-between items-center shadow-shape gap-3 hover:bg-zinc-800">
			<button
				onClick={openGuestsModal}
				type="button"
				className="flex items-center gap-2 flex-1"
			>
				<UserPlus2 className="size-5 text-zinc-400" />

				<span
					className={`text-lg text-left ${
						emailsLenght > 0 ? 'text-zinc-100' : 'text-zinc-400'
					}`}
				>
					{inviteGuestsMessage}
				</span>
			</button>

			<hr className="w-px h-6 bg-zinc-800" />

			<button
				onClick={openConfirmTripModal}
				className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
			>
				Confirmar viagem
				<ArrowRight className="size-5" />
			</button>
		</div>
	);
}
