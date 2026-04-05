//remove duplicates
let arr =[1,2,2,3,4,5,6]
let i =0;
let n =arr.length;
console.log(n);
for(let j =1;j<n-1;j++)
{
    if(arr[i] != arr[j])
    {
        i++;
        arr[i] = arr[j];
    }
}
console.log(i+1);