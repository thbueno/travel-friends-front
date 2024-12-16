import { CircleDashed, UserCog } from 'lucide-react';

/* eslint-disable react/react-in-jsx-scope */
export function Guests() {
	return (
		<div className="space-y-6">
			<h2 className="font-semibold text-xl">Convidados</h2>

			<div className="space-y-5">
				{/* Convidado 1 */}

				<div className="flex items-center justify-between">
					<div className="space-y-1.5">
						<span className="block font-medium text-zinc-100">Edino Bert</span>
						<span className="block text-zinc-400 text-sm truncate">
							edinobert@me.com
						</span>
					</div>
					<CircleDashed className="text-zinc-400 size-5 shrink-0" />
				</div>

				{/* Convidado 2 */}

				<div className="flex items-center justify-between">
					<div className="space-y-1.5">
						<span className="block font-medium text-zinc-100">Edino Bert</span>
						<span className="block text-zinc-400 text-sm truncate">
							edinobert@me.com
						</span>
					</div>
					<CircleDashed className="text-zinc-400 size-5 shrink-0" />
				</div>
			</div>

			<button className="flex items-center justify-center w-full bg-zinc-800 text-zinc-200 gap-2 bg-l rounded-lg px-5 h-11 font-medium hover:bg-zinc-700">
				<UserCog className="size-5" />
				Gerenciar Convidados
			</button>
		</div>
	);
}
