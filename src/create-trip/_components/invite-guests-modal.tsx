import { AtSign, Plus, X } from 'lucide-react';
import { FormEvent } from 'react';

interface InviteGuestsModalProps {
	emailsToInvite: string[];
	closeGuestsModal: () => void;
	addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
	removeEmailFromInvites: (email: string) => void;
}

export function InviteGuestsModal({
	emailsToInvite,
	closeGuestsModal,
	addNewEmailToInvite,
	removeEmailFromInvites,
}: InviteGuestsModalProps) {
	return (
		<div className="bg-black/60 backdrop-blur-sm flex justify-center items-center fixed inset-0">
			<div className="bg-zinc-900 w-[640px] flex flex-col items-start justify-start gap-5 px-6 py-5 rounded-xl shadow-shape">
				<div className="w-full space-y-1 text-left">
					<div className="w-full flex items-center justify-between">
						<h2 className="text-xl font-semibold">Selecionar convidados</h2>

						<button onClick={closeGuestsModal} type="button">
							<X className="size-5 text-zinc-400" />
						</button>
					</div>

					<p className="text-zinc-400 text-sm">
						Os convidados irão receber e-mails para confirmar a participação na
						viagem.
					</p>
				</div>

				<div className="flex flex-wrap gap-2">
					{emailsToInvite.map((email, index) => (
						<div
							key={index}
							className="bg-zinc-800 flex items-center gap-2 rounded-lg py-1.5 px-2.5"
						>
							<span className="text-zinc-400">{email}</span>

							<button
								onClick={() => removeEmailFromInvites(email)}
								type="button"
							>
								<X className="size-4 text-zinc-400" />
							</button>
						</div>
					))}
				</div>

				<hr className="w-full border-zinc-800 border-b-1 border-solid" />

				<form
					onSubmit={addNewEmailToInvite}
					className="w-full h-16 bg-zinc-950 ring-1 ring-zinc-800 focus:ring-lime-300 px-4 rounded-xl flex justify-between items-center gap-3"
				>
					<div className="flex items-center gap-2 flex-1">
						<AtSign className="size-5 text-zinc-400" />
						<input
							type="email"
							name="email"
							placeholder="Digite o e-mail do convidado"
							className="bg-transparent text-lg placeholder-zinc-400 flex-1"
						/>
					</div>

					<button
						type="submit"
						className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
					>
						Convidar
						<Plus className="size-5" />
					</button>
				</form>
			</div>
		</div>
	);
}
