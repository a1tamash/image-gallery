import { useEffect, useState } from "react";
import { PIXABAY_API_KEY } from "./constants/Constants";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

const App = () => {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch(
			`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${search}&image_type=photo&pretty=true`
		)
			.then((res) => res.json())
			.then((res) => {
				setImages(res.hits);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, [search]);

	useEffect(() => {
		console.log(images);
	}, [images]);

	return (
		<div className="container mx-auto">
			<ImageSearch searchText={(text) => setSearch(text)} />

			{!loading && images.length === 0 && (
				<h1 className="mx-auto text-5xl text-center mt-32">No Images Found</h1>
			)}

			{loading ? (
				<h1 className="mx-auto text-6xl text-center mt-32">Loading...</h1>
			) : (
				<div className="grid grid-cols-3 gap-4">
					{images.map((image) => (
						<ImageCard key={image.id} image={image} />
					))}
				</div>
			)}
		</div>
	);
};

export default App;
