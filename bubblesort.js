function bubbleSort(array){
	if (array.length){
		for (let i = 0; i < array.length - 2; ++i){
			if (array[i] > array[i+1]) swap(i, array)
		}
		return bubbleSort(array.slice(0,-1)).concat(array[array.length-1]);
	}
	return array;
}

function swap(index, array){
	let tempValue = array[index];
	array[index] = array[index + 1];
	array[index + 1] = tempValue;
}
