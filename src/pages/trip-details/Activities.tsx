import { CircleCheck } from 'lucide-react';

/* eslint-disable react/react-in-jsx-scope */
export function Activities() {
	return (
		<div className="space-y-8">
			<div className="space-y-2.5">
				<div className="flex items-baseline gap-2">
					<span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
					<span className="text-xs text-zinc-500">Sábado</span>
				</div>
				<p className="text-xs text-zinc-500">
					Nenhuma atividade cadastrada nessa data.
				</p>
			</div>

			<div className="space-y-2.5">
				<div className="flex items-baseline gap-2">
					<span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
					<span className="text-xs text-zinc-500">Domingo</span>
				</div>
				{/* Atividade Box */}
				<div className="space-y-2 5">
					<div className="px-4 py-2.5 shadow-shape rounded-xl bg-zinc-900 flex items-center gap-3">
						<CircleCheck className="size-5 text-lime-300" />
						<span className="text-zinc-100">Academia em grupo</span>
						<span className="text-zinc-400 text-sm ml-auto">08:00h</span>
					</div>
				</div>
				<div className="space-y-2 5">
					<div className="px-4 py-2.5 shadow-shape rounded-xl bg-zinc-900 flex items-center gap-3">
						<CircleCheck className="size-5 text-lime-300" />
						<span className="text-zinc-100">Academia em grupo</span>
						<span className="text-zinc-400 text-sm ml-auto">08:00h</span>
					</div>
				</div>
			</div>
		</div>
	);
}
