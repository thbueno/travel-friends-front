import { Mail, User, X } from 'lucide-react';
import { Button } from '../../components/button';

/* eslint-disable react/react-in-jsx-scope */
interface ConfirmTripModalProps {
	closeConfirmTripModal: () => void;
	createTrip: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({
	closeConfirmTripModal,
	createTrip,
}: ConfirmTripModalProps) {
	return (
		<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
			<div className="w-[648px] rounded-lg py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
				{/* TITLE AND DESCRIPTION  */}
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<h2 className="text-lg font-semibold">
							Confirmar criação de viagem
						</h2>
						<button type="button" onClick={closeConfirmTripModal}>
							<X className="size-5 text-zinc-400" />
						</button>
					</div>

					<p className="text-zinc-400 text-sm">
						Para concluir a criação da viagem para{' '}
						<span className="font-semibold text-zinc-100">
							Bangkok, Tailandia
						</span>{' '}
						nas datas de{' '}
						<span className="font-semibold text-zinc-100">
							16 a 27 de janeiro de 2024
						</span>{' '}
						preencha os campos abaixo:
					</p>
				</div>

				{/* FORM MODAL */}
				<form onSubmit={createTrip} className="space-y-3">
					<div className="flex items-center gap-2 py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
						<User className="text-zinc-400 size-5" />
						<input
							type="text"
							name="name"
							placeholder="Seu Nome completo"
							className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
						/>
					</div>

					<div className="flex items-center gap-2 py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
						<Mail className="text-zinc-400 size-5" />
						<input
							type="email"
							name="email"
							placeholder="Email pessoal"
							className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
						/>
					</div>

					<Button type="submit" variant="primary" size="full">
						Confirmar Criação da Viagem
					</Button>
				</form>
			</div>
		</div>
	);
}
