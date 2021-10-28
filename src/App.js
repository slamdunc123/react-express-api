import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('https://basic-express-api.herokuapp.com/players')
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div className='App'>
            <h3>React front end hosted on Netlify connecting to Express backend hosted on Heroku</h3>
            {!data ? 'Loading...' : data.map((item)=> <h5>{item.name}</h5>)}
		</div>
	);
}

export default App;
