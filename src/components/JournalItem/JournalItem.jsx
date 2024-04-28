import './JournalItem.css';

const JournalItem = () => {
	const title = 'Подготовка к обновлению курса';
	const date = new Data();
	const text = 'Горные походы открывают дополнительные ландшафты';

	return (
		<div className='journal-item'>
			<h2 className='journal-item__header'>{title}</h2>
			<h2 className='journal-item__body'>
				<div className='journal-item__date'>2</div>
				<div className='journal-item__text'>3</div>
			</h2>
		</div>
	);
};

export default JournalItem;
