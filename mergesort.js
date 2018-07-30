let splitArray = [];

function split(array) {
	let index = Math.floor(array.length / 2)
	let firstHalf =  array.slice(0, index)
	let secondHalf = array.slice(index)
	return [firstHalf, secondHalf]
}

function merge (arrayOne, arrayTwo) {
	let mergeArray = [];
	let headArrayOne = 0;
	let headArrayTwo = 0;
	while ((headArrayTwo < arrayTwo.length) || (headArrayOne < arrayOne.length)){
		if (arrayOne[headArrayOne] < arrayTwo[headArrayTwo] || (arrayTwo[headArrayTwo] === undefined)){
			mergeArray.push(arrayOne[headArrayOne])
			headArrayOne++;
		} else {
		mergeArray.push(arrayTwo[headArrayTwo])
		headArrayTwo++;
		}
	}
	return mergeArray;
}

function mergeSort (wholeArray) {

	if ( wholeArray.length > 1){
		let firstSplit = split(wholeArray)
		return merge(mergeSort(firstSplit[0]), mergeSort(firstSplit[1]));
	} else {
		return wholeArray;
	}
}
