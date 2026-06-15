import { useEffect, useState } from "react";

import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { setSearchQuery } from "../state/reducers";
import { useAppDispatch } from "../state/store";
import { SEARCH_DEBOUNCE_MS } from "../utils/constants";

const SearchBar = () => {
	const dispatch = useAppDispatch();
	const [inputValue, setInputValue] = useState("");
	const debouncedValue = useDebouncedValue(inputValue, SEARCH_DEBOUNCE_MS);

	useEffect(() => {
		dispatch(setSearchQuery(debouncedValue));
	}, [debouncedValue, dispatch]);

	return (
		<input
			type="search"
			value={inputValue}
			onChange={(event) => setInputValue(event.target.value)}
			placeholder="Search by title..."
			aria-label="Search products by title"
			className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-text sm:max-w-xs"
		/>
	);
};

export default SearchBar;
