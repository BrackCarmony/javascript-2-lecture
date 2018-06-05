describe('For Loops', function(){
	describe('Apply Tax', ()=>{
		it ('should double everyhting in the original array', ()=>{
			let a = [1,2,3,4,5];
			applyTax(a);
			expect(a).toEqual([2,4,6,8,10]);
		})
		it ('should double everyhting in the original array', ()=>{
			let a = [2,3,4,5,1];
			applyTax(a);
			expect(a).toEqual([4,6,8,10,2]);
		})
	})

	describe('Find Evens', ()=>{
		it ('shound not modify the original array', ()=>{
			let a = [1,2,3,4,5];
			let b = findEvens(a);
			expect(a).toEqual([1,2,3,4,5]);
		})
		it ('should return only the evens', ()=>{
			let a = [2,4,6,8,10];
			let b = findEvens(a);
			expect(b).toEqual([2,4,6,8,10]);
		})
		it ('should return only the evens', ()=>{
			let a = [1,2,3,4,5];
			let b = findEvens(a);
			expect(b).toEqual([2,4]);
		})
	})

	describe('Destroy Evil', ()=>{
		it ('Should remove E\'s from the array', ()=>{
			let a = ['CE','NG','CE','CG','NE'];
			destroyEvil(a);
			expect(a).toEqual(['NG','CG']);
		})
		it ('Should remove E\'s from the array, with adjacent evil', ()=>{
			let a = ['CE','CE','CG','NE'];
			destroyEvil(a);
			expect(a).toEqual(['CG']);
		})
	})

	describe('Calculate Wins', ()=>{
		it ('should count wins correctly', ()=>{
			let a = [[5,0],[6,0],[5,4]];
			let b = calculateWins(a);
			expect(b).toEqual({wins:3, loses:0, ties:0});
		})
		it ('should count loses correctly', ()=>{
			let a = [[5,10],[6,10],[5,14]];
			let b = calculateWins(a);
			expect(b).toEqual({wins:0, loses:3, ties:0});
		})
		it ('should count ties correctly', ()=>{
			let a = [[5,5],[6,6],[5,5]];
			let b = calculateWins(a);
			expect(b).toEqual({wins:0, loses:0, ties:3});
		})
		it ('should count random correctly', ()=>{
			let a = [[5,4],[6,6],[4,5]];
			let b = calculateWins(a);
			expect(b).toEqual({wins:1, loses:1, ties:1});
		})
	})
})

function makeCounter(){
	let count =0;
	return function(){
		return ++count;
	}
}

describe('Call Backs', function(){
	describe('danceALot', ()=>{
		let dance = makeCount();

		danceALot(dance, 15);
		let times = dance();
		it('should call the dance function however many times is passed it', ()=>{
			expect(times).toEqual(16);
		});
	});

	describe('buildArray', ()=>{
		it('x=>x*x, 4 Should give [0,1,4,9]', ()=>{
			let ary = buildArray(x=>x*x, 4);
			expect(ary).toEqual([0,1,4,9])
		})

		it('x=>x*x*x, 5 Should give [0,1,8,27,64]', ()=>{
			let ary = buildArray(x=>x*x*x, 5);
			expect(ary).toEqual([0,1,8,27,64])
		})

		it('x=>5*x, 10 Should give [0,5,10,15,20,25,30,35,40,45]', ()=>{
			let ary = buildArray(x=>5*x, 10);
			expect(ary).toEqual([0,5,10,15,20,25,30,35,40,45])
		})
	})
	describe('letFateDecide', ()=>{
		let a = makeCounter();
		let b = makeCounter();

		for (var i=0;i<100;i++){
			letFateDecide(a, b);
		}
		a = a();
		b = b();

		it('should call option1 at least once in 100 tries',()=>{
			expect(a).toBeGreaterThan(1)
		})
		it('should call option2 at least once in 100 tries', ()=>{
			expect(b).toBeGreaterThan(1)
		})
		it('should call only 1 of the two options each time', ()=>{
			expect(a+b).toEqual(102);
		})
	})
})