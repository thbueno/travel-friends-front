import type { ComponentProps, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
	children: ReactNode;
}

/* eslint-disable react/react-in-jsx-scope */
export function Button({ children, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className="flex items-center bg-zinc-800 text-zinc-200 gap-2 bg-l rounded-lg px-5 py-2 font-medium hover:bg-zinc-700"
		>
			{children}
		</button>
	);
}
