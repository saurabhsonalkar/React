const str="Krishnaye vasudevaye harye parmatmne prantkleshaye govidaye namo namh"


let obj={}
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
