import {
	ArrowRight,
	AtSign,
	Calendar,
	MapPin,
	Plus,
	Settings2,
	UserPlus2,
	X,
} from 'lucide-react';
import { FormEvent, useState } from 'react';

export function App() {
	const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
	const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
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
					<div className="h-16 bg-zinc-900 px-4 rounded-xl flex justify-between items-center shadow-shape gap-3">
						<div className="flex items-center gap-2 flex-1">
							<MapPin className="size-5 text-zinc-400" />
							<input
								disabled={isGuestsInputOpen}
								type="text"
								placeholder="Para onde você vai?"
								className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
							/>
						</div>

						<div className="flex items-center gap-2">
							<Calendar className="size-5 text-zinc-400" />
							<input
								disabled={isGuestsInputOpen}
								type="text"
								placeholder="Quando?"
								className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40"
							/>
						</div>

						<div className="w-px h-6 bg-zinc-800" />

						{isGuestsInputOpen ? (
							<button className="bg-zinc-800 text-zinc-50 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
								Alterar local/data
								<Settings2 className="size-5" />
							</button>
						) : (
							<button
								onClick={showGuestsInput}
								className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
							>
								Continuar
								<ArrowRight className="size-5" />
							</button>
						)}
					</div>

					{isGuestsInputOpen && (
						<div className="h-16 bg-zinc-900 px-4 rounded-xl flex justify-between items-center shadow-shape gap-3 hover:bg-zinc-800">
							<button
								onClick={openGuestsModal}
								type="button"
								className="flex items-center gap-2 flex-1"
							>
								<UserPlus2 className="size-5 text-zinc-400" />
								<span className="text-zinc-400 text-lg text-left">
									Quem estará na viagem?
								</span>
							</button>

							<div className="w-px h-6 bg-zinc-800" />

							<button
								onClick={hideGuestsInput}
								className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
							>
								Confirmar viagem
								<ArrowRight className="size-5" />
							</button>
						</div>
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

				{isGuestsModalOpen && (
					<div className="bg-black/60 backdrop-blur-sm flex justify-center items-center fixed inset-0">
						<div className="bg-zinc-900 w-[640px] flex flex-col items-start justify-start gap-5 px-6 py-5 rounded-xl shadow-shape">
							<div className="w-full space-y-1 text-left">
								<div className="w-full flex items-center justify-between">
									<h2 className="text-xl font-semibold">
										Selecionar convidados
									</h2>

									<button onClick={closeGuestsModal} type="button">
										<X className="size-5 text-zinc-400" />
									</button>
								</div>

								<p className="text-zinc-400 text-sm">
									Os convidados irão receber e-mails para confirmar a
									participação na viagem.
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
				)}
			</div>
		</div>
	);
}
