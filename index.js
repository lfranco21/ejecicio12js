const fib = n => {

    let fibonacci = [0, 1];
    for (let i = 2 ; i <= n; i++) {
     fibonacci[i] =  fibonacci[i-1] + fibonacci[i-2];
      console.log(fibonacci);  
      fibonacci = [...fibonacci]
    }

    return fibonacci[n];
}

console.log(fib(0));