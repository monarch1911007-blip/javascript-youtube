const score = 500
console.log(score);

const balance = new Number(700);
    console.log(balance);

    console.log(balance.toString().length);
    console.log(balance.toFixed(2))

    const hundred = 1000000
    console.log(hundred.toLocaleString('en-IN'));

    //+++++++++++++++ MATHS +++++++++++++++++

    console.log(Math);
    console.log(Math.abs(-14));
    console.log(Math.round(14.22));
    console.log(Math.ceil(14.22));
    console.log(Math.floor(14.22));
    console.log(Math.min(2., 4, 1, 5, 8));
    console.log(Math.max(2., 4, 1, 5, 8));

    console.log(Math.random());
    console.log(Math.random()*9); 

    const min = 10
    const max = 20

    console.log(Math.floor(Math.random()*(max-min+1))+min);
