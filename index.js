const names = [["lisa", "kaitlin", "jan"], "surprise"];

function writeCards(names,event){
    for (let i =0; i < names.length; i++)
    {
        names[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`

    }
     return names;

}
writeCards(["lisa", "kaitlin", "jan"], "surprise");

const gifts=["teddy","drone","doll"];

function countDown(i)
{
    while(i>=0)
    {
        console.log(i--);
    }

}
countDown(10);


