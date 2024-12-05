/* eslint-disable react/react-in-jsx-scope */
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfirmTripModal } from './confirm-trip-modal';
import { DestinationAndDateStep } from './destination-and-date-step';
import { InviteGuestModal } from './invite-guest-modal';
import { InviteGuestsStep } from './invite-guests-step';

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
					<DestinationAndDateStep
						closeGuestsInput={closeGuestsInput}
						openGuestsInput={openGuestsInput}
						isGuestsInputOpen={isGuestsInputOpen}
					/>

					{/* Logic if guests input is open */}

					{isGuestsInputOpen && (
						<InviteGuestsStep
							emailsToInvite={emailsToInvite}
							openGuestsModal={openGuestsModal}
							openConfirmTripModal={openConfirmTripModal}
						/>
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
