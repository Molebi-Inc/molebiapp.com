/**
|--------------------------------------------------
| Npm imports
|--------------------------------------------------
*/
import { useState, useEffect } from 'react';

/**
|--------------------------------------------------
| Custom hook to get current window width
|--------------------------------------------------
*/
const useWidth = (): number => {
	/**
    |--------------------------------------------------
    | Components states
    |--------------------------------------------------
    */
	const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

	useEffect(() => {
		/**
        |--------------------------------------------------
        | Handler to update width on resize
        |--------------------------------------------------
        */
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		/**
        |--------------------------------------------------
        | Add event listener
        |--------------------------------------------------
        */
		window.addEventListener('resize', handleResize);

		/**
        |--------------------------------------------------
        | Initial call in case SSR mismatch
        |--------------------------------------------------
        */
		handleResize();

		/**
        |--------------------------------------------------
        | Cleanup
        |--------------------------------------------------
        */
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return width;
};

export default useWidth;
