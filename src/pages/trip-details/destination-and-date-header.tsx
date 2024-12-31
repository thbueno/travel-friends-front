import { format } from 'date-fns';
import { Calendar, MapPin, Settings2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/button';
import { api } from '../../lib/axios';

interface Trip {
	id: string;
	destination: string;
	starts_at: string;
	ends_at: string;
	is_confirmed: boolean;
}

/* eslint-disable react/react-in-jsx-scope */
export function DestinationAndDateHeader() {
	const { tripId } = useParams();
	const [trip, setTrip] = useState<Trip | undefined>();

	useEffect(() => {
		api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip));
	}, [tripId]);

	const displayedDate = trip
		? format(trip.starts_at, "d' de 'LLL")
				.concat(' Até ')
				.concat(format(trip.ends_at, "d' de 'LLL"))
		: null;

	return (
		<div className="flex items-center justify-between px-4 h-16 rounded-xl bg-zinc-900 shadow-shape ">
			<div className="flex-items-center gap-2">
				<span className="flex items-center gap-2">
					<MapPin className="size-5 text-zinc-400" />
					<span className="text-zinc-100">{trip?.destination}</span>
				</span>
			</div>

			<div className="flex items-center gap-5">
				<div className="flex items-center justify-between px-4 h-16">
					<span className="flex items-center gap-2">
						<Calendar className="size-5 text-zinc-400" />
						<span className="text-zinc-100">{displayedDate}</span>
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
