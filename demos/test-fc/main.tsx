import React from 'react';
import ReactDOM from 'react-dom/client';

function Child() {
	return <span>jx-react</span>;
}

function App() {
	return (
		<div>
			<Child />
		</div>
	);
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
