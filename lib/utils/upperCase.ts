export const upperCase = (name: string) => {
	const nameSplit = name.split(/(\s+)/);
	const nameArr = [...nameSplit];
	const removedSpaces = nameArr.filter((item) => item !== ' ');

	const lowerCase = removedSpaces.map((word) => {
		return word[0].toLowerCase() + word.slice(1);
	});

	return `${lowerCase[0]}-${lowerCase[1]}`;
};
