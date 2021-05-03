//new attempt

const names=['Lisa', 'Kaitlin', 'Jan'];
const eventName='surprise';
function writeCards(names,eventName)
{
for(let i=0;i<names.length;i++)
{
names[i]=(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
debugger;
}
return names;
}
writeCards(names,eventName);

function countDown()
{
    let countDown=10;
    while(countDown>=0)
    {
        console.log(countDown--);
    }

}

































//old attempt from




// const names = [["lisa", "kaitlin", "jan"], "surprise"];

// function writeCards(names,event){
//     for (let i =0; i < names.length; i++)
//     {
//         names[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`

//     }
//      return names;

// }
// writeCards(["lisa", "kaitlin", "jan"], "surprise");

// const gifts=["teddy","drone","doll"];

// function countDown(i)
// {
//     while(i>=0)
//     {
//         console.log(i--);
//     }

// }
// countDown(10);


