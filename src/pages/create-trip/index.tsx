/* eslint-disable react/react-in-jsx-scope */
import {
	ArrowRight,
	Calendar,
	MapPin,
	Settings2,
	UserRoundPlus,
} from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfirmTripModal } from './confirm-trip-modal';
import { InviteGuestModal } from './invite-guest-modal';

export function CreateTripPage() {
	const navigate = useNavigate();

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

	function createTrip(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		navigate('/trips/123');
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
								{emailsToInvite.length > 0 ? (
									<span className="text-zinc-100 text-lg flex-1">
										{emailsToInvite.length} pessoas convidadas
									</span>
								) : (
									<span className="text-zinc-400 text-lg flex-1">
										Quem estará na viagem?
									</span>
								)}
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
				<InviteGuestModal
					emailsToInvite={emailsToInvite}
					addNewEmailToInvite={addNewEmailToInvite}
					removeEmailToInvite={removeEmailToInvite}
					closeGuestsModal={closeGuestsModal}
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
