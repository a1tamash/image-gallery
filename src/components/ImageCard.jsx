const ImageCard = ({ image }) => {
	const tags = image.tags.split(", ");

	return (
		<div className="m-4 max-w-sm rounded overflow-hidden shadow-lg">
			<img className="w-full" src={image.largeImageURL} alt="randomImage" />
			<div className="px-4 py-6">
				<div className="font-bold text-violet-600 text-xl mb-2">
					Photo by {image.user}
				</div>
				<ul>
					<li>
						<strong>Views: </strong>
						{image.views}
					</li>
					<li>
						<strong>Downloads: </strong>
						{image.downloads}
					</li>
					<li>
						<strong>Likes: </strong>
						{image.likes}
					</li>
				</ul>
			</div>
			<div className="px-6 py-4">
				{tags.map((tag) => (
					<div
						key={tag}
						className="rounded-full px-3 py-1 text-sm bg-gray-200 font-semibold inline-block mr-3"
					>
						#{tag}
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageCard;
