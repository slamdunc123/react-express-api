import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('https://basic-express-api.herokuapp.com/accounts')
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div className='App'>
            <h3>React front end hosted on Netlify connecting to Express backend hosted on Heroku</h3>
            
            <table>
                <thead>
                    <tr>
                    <th>account_id</th>
                    <th>limit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!data ? 'Loading...' : data.map((item)=> {
                        return (
                            <tr key={item._id}>
                            <td>{item.account_id}</td>
                            <td>{item.limit}</td>
                            </tr>
                        )
                    })}
                    </tbody>

                    </table>
		</div>
	);
}

export default App;
