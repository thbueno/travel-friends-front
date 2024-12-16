/* eslint-disable react/react-in-jsx-scope */

import { Link2, Plus } from 'lucide-react';

export function ImportantLinks() {
	return (
		<div className="space-y-6">
			<h2 className="font-semibold text-xl">Links importantes</h2>
			<div className="space-y-5">
				{/* Link 1 */}
				<div className="flex items-center justify-between">
					<div className="space-y-1.5">
						<span className="block font-medium text-zinc-100">
							Reserva do AirBnB
						</span>
						<a
							href="#"
							className="block text-zinc-400 hover:text-zinc-200 text-xs truncate"
						>
							https://airbnb.com/rooms/10470039003909348084083048208042
						</a>
					</div>
					<Link2 className="text-zinc-400 size-5 shrink-0" />
				</div>

				{/* Link 2 */}
				<div className="flex items-center justify-between">
					<div className="space-y-1.5">
						<span className="block font-medium text-zinc-100">
							Reserva do AirBnB
						</span>
						<a
							href="#"
							className="block text-zinc-400 hover:text-zinc-200 text-xs truncate"
						>
							https://airbnb.com/rooms/10470039003909348084083048208042
						</a>
					</div>
					<Link2 className="text-zinc-400 size-5 shrink-0" />
				</div>
			</div>

			<button className="flex items-center justify-center w-full bg-zinc-800 text-zinc-200 gap-2 bg-l rounded-lg px-5 h-11 font-medium hover:bg-zinc-700">
				<Plus className="size-5" />
				Cadastrar Novo Link
			</button>
		</div>
	);
}
