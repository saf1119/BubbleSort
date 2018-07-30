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
	console.log(arrayOne)
	console.log(arrayTwo)
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

function mergeRecursive(nestedArray){

	let index = Math.floor(nestedArray.length / 2);
	let firstHalfFinal, secondHalfFinal;
	let firstHalf = nestedArray.slice(0,index);
	let secondHalf = nestedArray.slice(index);

	if (firstHalf.length === 2){
	 	firstHalfFinal = merge(firstHalf[0], firstHalf[1]);
	} else if (firstHalf.length > 2) {
		firstHalfFinal = mergeRecursive(firstHalf)
	}else{
		firstHalfFinal = firstHalf[0];
	}
	if (secondHalf.length === 2){
		secondHalfFinal = merge(secondHalf[0],secondHalf[1])
	}else if (secondHalf.length > 2){
		secondHalfFinal = mergeRecursive(secondHalf)
	} else{
		secondHalfFinal = secondHalf[0];
	}
	return merge(firstHalfFinal, secondHalfFinal)
}

function mergeSort(array) {
	let arrayToMerge = splitRecursive(array);
	return mergeRecursive(arrayToMerge);
	
}
//console.log(mergeSort([1,2,3,4,5,6]))