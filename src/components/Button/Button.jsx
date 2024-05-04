import { useState } from 'react';
import './Button.css';

const Button = () => {
	const [text, setText] = useState('Save');

	const clickedClose = () => {
		setText('Close');
	};

	return (
		<>
			<button onClick={clickedClose} className='button accent'>
				{text}
			</button>
		</>
	);
};

export default Button;
