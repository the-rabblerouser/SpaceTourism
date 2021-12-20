export const lowerCase = (name: string) => {
	const nameSplit = name.split(/(\s+)/);
	const nameArr = [...nameSplit];

	if (nameArr.length <= 1) {
		return name.toLowerCase();
	} else {
		const removedSpaces = nameArr.filter((item) => item !== ' ');

		const lowerCase = removedSpaces.map((word) => {
			return word[0].toLowerCase() + word.slice(1);
		});

		return `${lowerCase[0]}-${lowerCase[1]}`;
	}
};
