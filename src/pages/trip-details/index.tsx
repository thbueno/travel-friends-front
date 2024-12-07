import { Calendar, MapPin, Plus, Settings2 } from 'lucide-react';

/* eslint-disable react/react-in-jsx-scope */
export function TripDetailsPage() {
	return (
		<div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
			<div className="flex items-center justify-between  px-4 h-16 rounded-xl bg-zinc-900 shadow-shape ">
				<div className="flex-items-center gap-2">
					<span className="flex items-center gap-2">
						<MapPin className="size-5 text-zinc-400" />
						<span className="text-zinc-100">Bangkok, Tailandia</span>
					</span>
				</div>

				<div className="flex items-center gap-5">
					<div className="flex items-center justify-between px-4 h-16">
						<span className="flex items-center gap-2">
							<Calendar className="size-5 text-zinc-400" />
							<span className="text-zinc-100">16 a 27 de janeiro</span>
						</span>
					</div>

					{/* Divider */}

					<div className="w-px h-6 bg-zinc-800" />

					{/* Divider */}

					<button className="flex items-center bg-zinc-800 text-zinc-200 gap-2 bg-l rounded-lg px-5 py-2 font-medium hover:bg-zinc-700">
						Alterar Local/data
						<Settings2 className="size-5" />
					</button>
				</div>
			</div>

			<main className="flex gap-16">
				<div className="flex-1">
					<div className=" flex items-center justify-between">
						<h2 className="text-3xl font-semibold">Atividades</h2>
						<button className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400">
							<Plus className="size-5" />
							Cadastrar atividade
						</button>
					</div>
				</div>

				{/* Sidebar  */}
				<div className="w-80"></div>
			</main>
		</div>
	);
}
