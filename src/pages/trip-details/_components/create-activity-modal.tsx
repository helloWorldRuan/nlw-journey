import { Calendar, Tag, X } from 'lucide-react';
import { Button } from '../../../components/button';

interface CreateActivityModalProps {
	closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
	closeCreateActivityModal,
}: CreateActivityModalProps) {
	return (
		<div className="bg-black/60 backdrop-blur-sm flex justify-center items-center fixed inset-0">
			<div className="bg-zinc-900 w-[640px] flex flex-col items-start justify-start gap-5 px-6 py-5 rounded-xl shadow-shape">
				<div className="w-full space-y-1 text-left">
					<div className="w-full flex items-center justify-between">
						<h2 className="text-xl font-semibold">Cadastrar atividade</h2>

						<button onClick={closeCreateActivityModal} type="button">
							<X className="size-5 text-zinc-400" />
						</button>
					</div>

					<p className="text-zinc-400 text-sm">
						Todos convidados podem visualizar as atividades.
					</p>
				</div>

				<form className="w-full flex flex-col gap-3">
					<div className="w-full h-16 bg-zinc-950 ring-1 ring-zinc-800 focus:ring-lime-300 px-4 rounded-xl flex items-center">
						<div className="flex items-center gap-2 flex-1">
							<Tag className="size-5 text-zinc-400" />
							<input
								type="text"
								name="activity"
								placeholder="Qual a atividade?"
								className="bg-transparent text-lg placeholder-zinc-400 flex-1"
							/>
						</div>
					</div>

					<div className="w-full h-16 bg-zinc-950 ring-1 ring-zinc-800 focus:ring-lime-300 px-4 rounded-xl flex items-center">
						<div className="flex items-center gap-2 flex-1">
							<Calendar className="size-5 text-zinc-400" />
							<input
								type="datetime-local"
								name="date"
								placeholder="20 de agosto"
								className="bg-transparent text-lg placeholder-zinc-400 flex-1"
							/>
						</div>
					</div>

					<Button>Salvar atividade</Button>
				</form>
			</div>
		</div>
	);
}
