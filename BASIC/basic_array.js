fruits = ["mango","banana","apple"];
fruits.push("strawberry");
console.log(fruits);

fruits.pop();
console.log(fruits);


for(let i =0;i<fruits.lenght; i++)
{
    console.log(fruits[i]);
}


let search ="banana";
if(fruits.includes(search))
    console.log("Found");
else
    console.log("Not found");