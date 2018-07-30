describe('Bubble Sort', function(){
  it('handles an empty array', function(){
	expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with a single item', function(){
	expect( bubbleSort([4])).toEqual( [4])
  });

  it('handles an array with multiple items', function(){
	expect( bubbleSort([3, 5, 4, 2, 1])).toEqual([1, 2, 3, 4, 5])
  });
});