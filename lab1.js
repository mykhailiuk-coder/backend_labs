const p = new Promise((resolve) => {
    setTimeout(() => resolve("Done"), 1000);
});

p.then(result => console.log(result)); 

function doSomething(callback) {
  callback();
}

let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value); 
