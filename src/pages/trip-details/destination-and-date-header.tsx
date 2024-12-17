import { Calendar, MapPin, Settings2 } from 'lucide-react';
import { Button } from '../../components/button';

/* eslint-disable react/react-in-jsx-scope */
export function DestinationAndDateHeader() {
	return (
		<div className="flex items-center justify-between px-4 h-16 rounded-xl bg-zinc-900 shadow-shape ">
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

				<Button variant="secondary">
					Alterar Local/data
					<Settings2 className="size-5" />
				</Button>
			</div>
		</div>
	);
}
