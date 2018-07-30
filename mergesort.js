let splitArray = [];

function split (wholeArray) {

	let index = Math.floor(wholeArray.length / 2)

	if ( wholeArray.length > 1){

		let firstHalf =  wholeArray.slice(0, index)
		let secondHalf = wholeArray.slice(index)

		if (firstHalf.length > 1){
			split(firstHalf)
		}else {
			console.log("here")
			splitArray.push(firstHalf)
			console.log(splitArray)
		}

		if (secondHalf.length > 1){
			split(secondHalf)
		} else {
			splitArray.push(secondHalf)
		}
	}	

	if(wholeArray.length === 1){
		splitArray.push(wholeArray)
	}

	return splitArray;
	}

function merge (arrayOne, arrayTwo) {
	let mergeArray = [];
	let headArrayOne = 0;
	let headArrayTwo = 0;
	while ((headArrayTwo < arrayTwo.length) || (headArrayOne < arrayOne.length)){
		if (arrayOne[headArrayOne] < arrayTwo[headArrayTwo]){
			mergeArray.push(arrayOne[headArrayOne])
			headArrayOne++;
		} else {
		mergeArray.push(arrayTwo[headArrayTwo])
		headArrayTwo++;
		}
	}
	return mergeArray;
}

function mergeSort(array) {
	let arrayToMerge = split(array);
	
}

console.log(mergeSort([1,2,3,4,5,6]))