firstFunction(args, function() {
    secondFunction(args, function() {
      thirdFunction(args, function() {
        // And so on…
      });
    });
  });

  const makeBurger = () => {
    const beef = getBeef();
    const patty = cookBeef(beef);
    const buns = getBuns();
    const burger = putBeefBetweenBuns(buns, beef);
    return burger;
  };
  
  const burger = makeBurger();
  serve(burger);

  const makeBurger = nextStep => {
    getBeef(function (beef) {
      cookBeef(beef, function (cookedBeef) {
        getBuns(function (buns) {
          putBeefBetweenBuns(buns, beef, function(burger) {
            nextStep(burger)
          })
        })
      })
    })
  }
  
  // Make and serve the burger
  makeBurger(function (burger) {
    serve(burger)
  })