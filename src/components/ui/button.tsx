/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { cva, type VariantProps } from 'class-variance-authority';

/**
|--------------------------------------------------
| Custom imports
|--------------------------------------------------
*/
import { cn } from '@/lib/utils';

/**
|--------------------------------------------------
| Button styles including a isLoading state
|--------------------------------------------------
*/
const buttonVariants = cva(
	'inline-flex min-w-[50px] items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 ease-out transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:border-[2px] border-gray-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:shadow-lg hover:opacity-[90]',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg hover:opacity-[90]',
				outline:
					'border border-black bg-background hover:text-accent-foreground hover:shadow-md hover:opacity-[90]',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md hover:opacity-[90]',
				ghost: 'hover:bg-accent hover:text-accent-foreground hover:shadow-sm hover:opacity-[90]',
				link: 'text-primary underline-offset-4 hover:underline hover:opacity-[90]',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

/**
|--------------------------------------------------
| Button interface
|--------------------------------------------------
*/
export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ size, variant, children, className, asChild = false, isLoading = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';

		/**
		|--------------------------------------------------
		| Rendered View
		|--------------------------------------------------
		*/
		return (
			<Comp
				className={cn(
					buttonVariants({ variant, size, className }),
					isLoading && 'cursor-not-allowed opacity-70'
				)}
				ref={ref}
				disabled={isLoading || props.disabled}
				{...props}
			>
				{isLoading ? <AiOutlineLoading3Quarters className="animate-spin" size={18} /> : children}
			</Comp>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
