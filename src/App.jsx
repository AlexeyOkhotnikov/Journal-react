import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курса',
			date: new Date(),
			text: 'Горные походы открывают дополнительные ландшафты',
		},
		{
			title: 'Поход в горы',
			date: new Date(),
			text: 'Думал, что очень много времени',
		},
	];

	return (
		<>
			<h1>Заголовок</h1>
			<p>text</p>
			<Button />
			<CardButton>
				<JournalItem
					title={data[0].title}
					text={data[0].text}
					date={data[0].date}
				/>
			</CardButton>
			<CardButton>
				<JournalItem
					title={data[1].title}
					text={data[1].text}
					date={data[1].date}
				/>
			</CardButton>
		</>
	);
}

export default App;
