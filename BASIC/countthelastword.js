//counting the last word of string
let s="Hello world";
console.log(s.length);
let count =0;

for(let i =s.length ; i>=0;i--)
{
    if(s[i]>='A' && s[i] <='Z' || s[i]>='a' && s[i] <='z' )
        {
        count++;
        }
        if(count>0 && s[i]==' ')
        { 
            break;
        }
}
console.log(count);
