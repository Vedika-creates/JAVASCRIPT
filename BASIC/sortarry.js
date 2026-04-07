//sorting array
let arr =[1,3,5,2,7,5,8,3,9]
for(let i =0 ;i<arr.length;i++)
{
    for(let j =0;j<arr.length-i-1;j++)
    {
        if(arr[j] > arr[j+1])
        {
            //swap elements
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);