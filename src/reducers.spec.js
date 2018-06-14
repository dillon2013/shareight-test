import reducers from './reducers';

test('FILTER_PRODUCTS for dresses', () => {
  let state;
  state = reducers({products:[{name:'red blouse',type:'dresses'},{name:'levis jeans',type:'jeans'},{name:'nike trainers',type:'shoes'},{name:'nike t-shirt',type:'t-shirts'},{name:'blue frock',type:'dresses'},{name:'green pencil dress',type:'dresses'},{name:'addidas trainers',type:'shoes'},{name:'diesel jeans',type:'jeans'},{name:'armani jeans',type:'jeans'},{name:'wrangler jeans',type:'jeans'}]}, {type:'FILTER_PRODUCTS',payload:'dresses'});
  expect(state).toEqual({products:[{name:'red blouse',type:'dresses'},{name:'levis jeans',type:'jeans'},{name:'nike trainers',type:'shoes'},{name:'nike t-shirt',type:'t-shirts'},{name:'blue frock',type:'dresses'},{name:'green pencil dress',type:'dresses'},{name:'addidas trainers',type:'shoes'},{name:'diesel jeans',type:'jeans'},{name:'armani jeans',type:'jeans'},{name:'wrangler jeans',type:'jeans'}],filteredProducts:[{name:'red blouse',type:'dresses'},{name:'blue frock',type:'dresses'},{name:'green pencil dress',type:'dresses'}]});
});


test('FILTER_PRODUCTS for jeans', () => {
  let state;
  state = reducers({products:[{name:'red blouse',type:'dresses'},{name:'levis jeans',type:'jeans'},{name:'nike trainers',type:'shoes'},{name:'nike t-shirt',type:'t-shirts'},{name:'blue frock',type:'dresses'},{name:'green pencil dress',type:'dresses'},{name:'addidas trainers',type:'shoes'},{name:'diesel jeans',type:'jeans'},{name:'armani jeans',type:'jeans'},{name:'wrangler jeans',type:'jeans'}],filteredProducts:[{name:'red blouse',type:'dresses'},{name:'blue frock',type:'dresses'},{name:'green pencil dress',type:'dresses'}]}, {type:'FILTER_PRODUCTS',payload:'jeans'});
  expect(state).toEqual({products:[{name:'red blouse',type:'dresses'},{name:'levis jeans',type:'jeans'},{name:'nike trainers',type:'shoes'},{name:'nike t-shirt',type:'t-shirts'},{name:'blue frock',type:'dresses'},{name:'green pencil dress',type:'dresses'},{name:'addidas trainers',type:'shoes'},{name:'diesel jeans',type:'jeans'},{name:'armani jeans',type:'jeans'},{name:'wrangler jeans',type:'jeans'}],filteredProducts:[{name:'levis jeans',type:'jeans'},{name:'diesel jeans',type:'jeans'},{name:'armani jeans',type:'jeans'},{name:'wrangler jeans',type:'jeans'}]});
});


test('FILTER_PRODUCTS for shoes', () => {
  let state;
  state = reducers({products:[{name:'red blouse',type:'dresses'},{name:'levis jeans',type:'jeans'},{name:'nike trainers',type:'shoes'},{name:'nike t-shirt',type:'t-shirts'},{name:'blue frock',type:'dresses'},{name:'green pencil dress',type:'dresses'},{name:'addidas trainers',type:'shoes'},{name:'diesel jeans',type:'jeans'},{name:'armani jeans',type:'jeans'},{name:'wrangler jeans',type:'jeans'}],filteredProducts:[{name:'levis jeans',type:'jeans'},{name:'diesel jeans',type:'jeans'},{name:'armani jeans',type:'jeans'},{name:'wrangler jeans',type:'jeans'}]}, {type:'FILTER_PRODUCTS',payload:'shoes'});
  expect(state).toEqual({products:[{name:'red blouse',type:'dresses'},{name:'levis jeans',type:'jeans'},{name:'nike trainers',type:'shoes'},{name:'nike t-shirt',type:'t-shirts'},{name:'blue frock',type:'dresses'},{name:'green pencil dress',type:'dresses'},{name:'addidas trainers',type:'shoes'},{name:'diesel jeans',type:'jeans'},{name:'armani jeans',type:'jeans'},{name:'wrangler jeans',type:'jeans'}],filteredProducts:[{name:'nike trainers',type:'shoes'},{name:'addidas trainers',type:'shoes'}]});
});


test('FILTER_PRODUCTS for t-shirts', () => {
  let state;
  state = reducers({products:[{name:'red blouse',type:'dresses'},{name:'levis jeans',type:'jeans'},{name:'nike trainers',type:'shoes'},{name:'nike t-shirt',type:'t-shirts'},{name:'blue frock',type:'dresses'},{name:'green pencil dress',type:'dresses'},{name:'addidas trainers',type:'shoes'},{name:'diesel jeans',type:'jeans'},{name:'armani jeans',type:'jeans'},{name:'wrangler jeans',type:'jeans'}],filteredProducts:[{name:'nike trainers',type:'shoes'},{name:'addidas trainers',type:'shoes'}]}, {type:'FILTER_PRODUCTS',payload:'t-shirts'});
  expect(state).toEqual({products:[{name:'red blouse',type:'dresses'},{name:'levis jeans',type:'jeans'},{name:'nike trainers',type:'shoes'},{name:'nike t-shirt',type:'t-shirts'},{name:'blue frock',type:'dresses'},{name:'green pencil dress',type:'dresses'},{name:'addidas trainers',type:'shoes'},{name:'diesel jeans',type:'jeans'},{name:'armani jeans',type:'jeans'},{name:'wrangler jeans',type:'jeans'}],filteredProducts:[{name:'nike t-shirt',type:'t-shirts'}]});
});



