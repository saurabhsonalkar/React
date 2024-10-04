const str="hare rishna hare krishna krishna krishna hare hare"

let obj={};
for(let x of str)
{
    if(obj[x])
    {
        obj[x]++;
    }
    else{
        obj[x]=1;
    }
}

console.log(obj);
