import { format } from 'date-fns';
import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react';
import { useState } from 'react';
import { DateRange, DayPicker, getDefaultClassNames } from 'react-day-picker';
import 'react-day-picker/style.css';
import { Button } from '../../components/button';

interface DestinationAndDateStepProps {
	isGuestsInputOpen: boolean;
	closeGuestsInput: () => void;
	openGuestsInput: () => void;
	setDestination: (destination: string) => void;
	eventStartAndEndDates: DateRange | undefined;
	setEventStartAndEndDates: (date: DateRange | undefined) => void;
}

/* eslint-disable react/react-in-jsx-scope */
export function DestinationAndDateStep({
	isGuestsInputOpen,
	closeGuestsInput,
	openGuestsInput,
	setDestination,
	setEventStartAndEndDates,
	eventStartAndEndDates,
}: DestinationAndDateStepProps) {
	const defaultClassNames = getDefaultClassNames();
	const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

	function openDatePicker() {
		setIsDatePickerOpen(true);
	}

	function closeDatePicker() {
		setIsDatePickerOpen(false);
	}

	const displayedDate =
		eventStartAndEndDates &&
		eventStartAndEndDates.from &&
		eventStartAndEndDates.to
			? format(eventStartAndEndDates.from, "d' de 'LLL")
					.concat(' Até ')
					.concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
			: null;

	return (
		<div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
			<div className="flex items-center gap-2 flex-1">
				<MapPin className="size-5 text-zinc-400" />
				<input
					disabled={isGuestsInputOpen}
					type="text"
					placeholder="Para onde você vai?"
					className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
					onChange={event => setDestination(event.target.value)}
				/>
			</div>

			<button
				onClick={openDatePicker}
				disabled={isGuestsInputOpen}
				className="flex items-center gap-2 text-left w-[240px]"
			>
				<Calendar className="size-5 text-zinc-400" />
				<span className="text-lg text-zinc-400 w-40 flex-1">
					{displayedDate || 'Quando?'}
				</span>
			</button>

			{isDatePickerOpen && (
				<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
					<div className="rounded-lg py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
						{/* TITLE AND DESCRIPTION  */}
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<h2 className="text-lg font-semibold">Selecione a data</h2>
								<button type="button" onClick={closeDatePicker}>
									<X className="size-5 text-zinc-400" />
								</button>
							</div>

							<DayPicker
								mode="range"
								selected={eventStartAndEndDates}
								onSelect={setEventStartAndEndDates}
								disabled={{ before: new Date() }}
								classNames={{
									today: `text-lime-500`, // Add a border to today's date
									selected: `bg-lime-500 bg-lime-500 text-white`, // Highlight the selected day
									root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
									chevron: `${defaultClassNames.chevron} fill-amber-500`, // Change the color of the chevron
								}}
							/>
						</div>
					</div>
				</div>
			)}

			<div className="w-px h-6 bg-zinc-800" />

			{isGuestsInputOpen ? (
				<Button onClick={closeGuestsInput} variant="secondary">
					Alterar Local/data
					<Settings2 className="size-5" />
				</Button>
			) : (
				<Button onClick={openGuestsInput} variant="primary">
					Continuar
					<ArrowRight className="size-5" />
				</Button>
			)}
		</div>
	);
}
