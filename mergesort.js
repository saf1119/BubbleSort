let splitArray = [];

function split(array) {
	let index = Math.floor(array.length / 2)
	let firstHalf =  array.slice(0, index)
	let secondHalf = array.slice(index)
	return [firstHalf, secondHalf]
}

function splitRecursive (wholeArray) {

	if ( wholeArray.length > 1){
		let firstSplit = split(wholeArray)
		splitRecursive(firstSplit[0])
		splitRecursive(firstSplit[1])	
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

function mergeRecursive(nestedArray){
	let index = Math.floor(nestedArray.length / 2);
	let firstHalf = nestedArray.slice(0,index);
	let secondHalf = nestedArray.slice(index);

	if(firstHalf.length === 2){
		firstHalf = merge(firstHalf[0], firstHalf[1]);
		console.log(firstHalf)
	}else if(firstHalf.length > 2) {
		firstHalf = mergeRecursive(firstHalf)
	}

	if(secondHalf.length === 2){
		secondHalf = merge(secondHalf[0],secondHalf[1])
	}else if (secondHalf.length > 2){
		secondHalf = mergeRecursive(secondHalf)
	}

	return merge(firstHalf, secondHalf)
}

function mergeSort(array) {
	let arrayToMerge = split(array);
	return mergeRecursive(nestedArray);
	
}

//console.log(mergeSort([1,2,3,4,5,6]))