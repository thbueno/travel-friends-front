import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Activities } from './Activities';
import { CreateActivityModal } from './create-activity-modal';
import { DestinationAndDateHeader } from './destination-and-date-header';
import { Guests } from './guests';
import { ImportantLinks } from './important-links';

/* eslint-disable react/react-in-jsx-scope */
export function TripDetailsPage() {
	const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
		useState(false);

	function openCreateActivityModal() {
		setIsCreateActivityModalOpen(true);
	}

	function closeCreateActivityModal() {
		setIsCreateActivityModalOpen(false);
	}

	return (
		<div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
			<DestinationAndDateHeader />

			<main className="flex gap-16 px-4">
				<div className="flex-1 space-y-6">
					{/* Atividades e Cadastrar atividade */}
					<div className=" flex items-center justify-between">
						<h2 className="text-3xl font-semibold">Atividades</h2>
						<button
							onClick={openCreateActivityModal}
							className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
						>
							<Plus className="size-5" />
							Cadastrar atividade
						</button>
					</div>

					{/* Lista de Atividades  */}
					<Activities />
				</div>

				{/* Sidebar  */}
				<div className="w-80 space-y-6">
					{/* Links Importantes */}
					<ImportantLinks />

					<div className="w-full h-px bg-zinc-800" />

					{/* Convidados */}
					<Guests />
				</div>
			</main>

			{isCreateActivityModalOpen && (
				<CreateActivityModal
					closeCreateActivityModal={closeCreateActivityModal}
				/>
			)}
		</div>
	);
}
