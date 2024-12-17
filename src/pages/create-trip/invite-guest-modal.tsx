/* eslint-disable react/react-in-jsx-scope */
import { AtSign, Plus, X } from 'lucide-react';
import { Button } from '../../components/button';

interface InviteGuestModalProps {
	emailsToInvite: string[];
	closeGuestsModal: () => void;
	removeEmailToInvite: (email: string) => void;
	addNewEmailToInvite: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function InviteGuestModal({
	addNewEmailToInvite,
	closeGuestsModal,
	emailsToInvite,
	removeEmailToInvite,
}: InviteGuestModalProps) {
	return (
		<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
			<div className="w-[648px] rounded-lg py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
				{/* TITLE AND DESCRIPTION  */}
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<h2 className="text-lg font-semibold">Selecionar convidados</h2>
						<button type="button" onClick={closeGuestsModal}>
							<X className="size-5 text-zinc-400" />
						</button>
					</div>

					<p className="text-zinc-400 text-sm">
						convidados irão receber e-mails para confirmar a participação na
						viagem.
					</p>
				</div>

				{/* EMAILS */}
				<div className="flex flex-wrap gap-2">
					{emailsToInvite.map(email => {
						return (
							<div
								key={email}
								className="flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-zinc-800 text-zinc-200"
							>
								<span className="text-zinc-300">{email}</span>
								<button
									onClick={() => removeEmailToInvite(email)}
									type="button"
								>
									<X className="size-5 text-zinc-400" />
								</button>
							</div>
						);
					})}
				</div>

				{/* DIVIDER LINE */}
				<div className="w-full h-px bg-zinc-800" />

				{/* FORM MODAL */}
				<form
					onSubmit={addNewEmailToInvite}
					className="flex items-center gap-2 p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg"
				>
					<div className="flex flex-1 items-center px-2 gap-2">
						<AtSign className="text-zinc-400 size-5" />
						<input
							type="email"
							name="email"
							placeholder="Digite o email do convidado"
							className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
						/>
					</div>

					<Button type="submit" variant="primary" size="default">
						Convidar
						<Plus className="size-5" />
					</Button>
				</form>
			</div>
		</div>
	);
}
