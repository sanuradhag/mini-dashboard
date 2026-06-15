import ProductsView from "./components/ProductsView";
import { APP_TITLE } from "./utils/constants";

function App() {
	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-dark px-4 py-4 text-button-text">
				<h1 className="text-xl font-semibold">{APP_TITLE}</h1>
			</header>
			<main className="mx-auto max-w-7xl px-4 py-6">
				<ProductsView />
			</main>
		</div>
	);
}

export default App;
