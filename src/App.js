import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { NotFound } from './screens/NotFound';
import Header from './common-components/Header/Header';
import Details from './screens/Details';
import Search from './screens/Search';

export function App() {
	return (
    <>
    <NormalizeStyles/>
		<Header />
		<BrowserRouter>
			<Routes>
				<Route path="/details/:id" element={<Details />} />
				<Route path="/" element={<Search />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
    </>
	);
}