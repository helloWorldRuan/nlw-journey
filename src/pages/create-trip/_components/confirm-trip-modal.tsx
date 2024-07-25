import { Mail, User, X } from 'lucide-react';
import { FormEvent } from 'react';
import { Button } from '../../../components/button';

interface ConfirmTripModalProps {
	closeConfirmTripModal: () => void;
	createTrip: (event: FormEvent<HTMLFormElement>) => void;
	setOwnerName: (name: string) => void;
	setOwnerEmail: (email: string) => void;
}

export function ConfirmTripModal({
	closeConfirmTripModal,
	createTrip,
	setOwnerName,
	setOwnerEmail,
}: ConfirmTripModalProps) {
	return (
		<div className="bg-black/60 backdrop-blur-sm flex justify-center items-center fixed inset-0">
			<div className="bg-zinc-900 w-[640px] flex flex-col items-start justify-start gap-5 px-6 py-5 rounded-xl shadow-shape">
				<div className="w-full space-y-1 text-left">
					<div className="w-full flex items-center justify-between">
						<h2 className="text-xl font-semibold">
							Confirmar criação da viagem
						</h2>

						<button onClick={closeConfirmTripModal} type="button">
							<X className="size-5 text-zinc-400" />
						</button>
					</div>

					<p className="text-zinc-400 text-sm">
						Para concluir a criação da viagem para
						<strong> Florianópolis, Brasil </strong>
						nas datas de <strong>16 a 27 de Agosto de 2024 </strong>
						preencha seus dados abaixo:
					</p>
				</div>

				<form onSubmit={createTrip} className="w-full flex flex-col gap-3">
					<div className="w-full h-16 bg-zinc-950 ring-1 ring-zinc-800 focus:ring-lime-300 px-4 rounded-xl flex items-center">
						<div className="flex items-center gap-2 flex-1">
							<User className="size-5 text-zinc-400" />
							<input
								type="text"
								name="name"
								placeholder="Seu nome completo"
								className="bg-transparent text-lg placeholder-zinc-400 flex-1"
								onChange={(event) => setOwnerName(event.target.value)}
							/>
						</div>
					</div>

					<div className="w-full h-16 bg-zinc-950 ring-1 ring-zinc-800 focus:ring-lime-300 px-4 rounded-xl flex items-center">
						<div className="flex items-center gap-2 flex-1">
							<Mail className="size-5 text-zinc-400" />
							<input
								type="email"
								name="email"
								placeholder="Seu e-mail pessoal"
								className="bg-transparent text-lg placeholder-zinc-400 flex-1"
								onChange={(event) => setOwnerEmail(event.target.value)}
							/>
						</div>
					</div>

					<Button onClick={() => createTrip} size="default" type="submit">
						Confirmar criação da viagem
					</Button>
				</form>
			</div>
		</div>
	);
}
