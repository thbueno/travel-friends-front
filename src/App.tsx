/* eslint-disable react/react-in-jsx-scope */
import {
	ArrowRight,
	AtSign,
	Calendar,
	Mail,
	MapPin,
	Plus,
	Settings2,
	User,
	UserRoundPlus,
	X,
} from 'lucide-react';
import { FormEvent, useState } from 'react';
export function App() {
	const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
	const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
	const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

	const [emailsToInvite, seteMailsToInvite] = useState([
		'thiagobueno.s@gmail.com',
		'thiagobueno.s@gmail.com',
		'thiagobueno.s@gmail.com',
		'thiagobueno.s@gmail.com',
	]);

	function openGuestsInput() {
		setIsGuestsInputOpen(true);
	}

	function closeGuestsInput() {
		setIsGuestsInputOpen(false);
	}

	function openGuestsModal() {
		setIsGuestsModalOpen(true);
	}

	function openConfirmTripModal() {
		setIsConfirmTripModalOpen(true);
	}

	function closeConfirmTripModal() {
		setIsConfirmTripModalOpen(false);
	}

	function closeGuestsModal() {
		setIsGuestsModalOpen(false);
	}

	function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const data = new FormData(event.currentTarget);
		const email = data.get('email') as string;

		if (!email) return;

		if (emailsToInvite.includes(email)) return;

		seteMailsToInvite([...emailsToInvite, email]);

		event.currentTarget.reset();
	}

	function removeEmailToInvite(emailToRemove: string) {
		const newEmailLsit = emailsToInvite.filter(
			email => email !== emailToRemove
		);

		seteMailsToInvite(newEmailLsit);
	}

	return (
		<div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
			<div className="max-w-3xl w-full px-6 text-center space-y-10">
				<div className="flex flex-col items-center gap-3">
					<img src="/logo.svg" alt="TravelFriends" className="mx-auto" />
					<p className="text-zinc-300 text-lg">
						Convide seus Amigos e planeje sua proxima viagem!
					</p>
				</div>

				<div className="space-y-4">
					<div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
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
								className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
							/>
						</div>

						<div className="w-px h-6 bg-zinc-800" />

						{isGuestsInputOpen ? (
							<button
								onClick={closeGuestsInput}
								className="flex items-center bg-zinc-800 text-zinc-200 gap-2 bg-l rounded-lg px-5 py-2 font-medium hover:bg-zinc-700"
							>
								Alterar Local/data
								<Settings2 className="size-5" />
							</button>
						) : (
							<button
								onClick={openGuestsInput}
								className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
							>
								Continuar
								<ArrowRight className="size-5" />
							</button>
						)}
					</div>

					{/* Logic if guests input is open */}

					{isGuestsInputOpen && (
						<div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
							<button
								type="button"
								onClick={openGuestsModal}
								className="flex items-center gap-2 flex-1 text-left"
							>
								<UserRoundPlus className="size-5 text-zinc-400" />
								<span className="text-zinc-400 text-lg flex-1">
									Quem estará na viagem?
								</span>
							</button>

							<div className="w-px h-6 bg-zinc-800" />

							<button
								onClick={openConfirmTripModal}
								className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
							>
								Confirmar viagem
								<ArrowRight className="size-5" />
							</button>
						</div>
					)}
				</div>

				<p className="text-zinc-500 text-sm">
					Ao planejar sua viagem pela Travel with Friends você automaticamente
					concorda <br /> com os nossos{' '}
					<a className="text-zinc-300 underline" href="#">
						termos de uso
					</a>{' '}
					e{' '}
					<a className="text-zinc-300 underline" href="#">
						politicas de privacidade
					</a>
					.
				</p>
			</div>

			{isGuestsModalOpen && (
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

							<button
								type="submit"
								className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
							>
								Convidar
								<Plus className="size-5" />
							</button>
						</form>
					</div>
				</div>
			)}

			{isConfirmTripModalOpen && (
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
						<form onSubmit={addNewEmailToInvite} className="space-y-3">
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

							<button
								type="submit"
								className="flex items-center justify-center w-full gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
							>
								Confirmar Criação da Viagem
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
