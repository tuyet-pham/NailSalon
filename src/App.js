import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import NoPages from "./pages/NoPages";
import ServiceMenu from "./pages/ServiceMenu";
import LookBook from "./pages/LookBook";
import Lashes from "./pages/Lashes";
import Promotion from './pages/Promotion';
import CollectionTemplate from './pages/CollectionTemplate'

import lbfall from './pages/json/lb-fall.json'
import lblong from './pages/json/lb-long.json'
import lbshort from './pages/json/lb-short.json'
import lbluxury from './pages/json/lb-luxury.json'
import lbunique from './pages/json/lb-unique.json'

/** Main Routes */
function App() {
	const collections = [
		{ id: '0', collectionName: 'Fall', content:lbfall},
		{ id: '1', collectionName: 'Long', content:lblong},
		{ id: '2', collectionName: 'Short', content:lbshort},
		{ id: '3', collectionName: 'Luxury', content:lbluxury},
		{ id: '4', collectionName: 'Unique', content:lbunique},
	]

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
				<Route index element={<Landing />} />
				<Route path="service-menu" element={<ServiceMenu />} />
				<Route path="look-book" element={<LookBook collections={collections}/>}>
					<Route path=":collectionId" element={<CollectionTemplate collections={collections}/>} />
				</Route>
				<Route path="lashes" element={<Lashes />} />
				<Route path="promo" element={<Promotion />} />
				<Route path="*" element={<NoPages />} />
				</Route>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
