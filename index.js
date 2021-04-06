// Code your solutions in this file
function writeCards(cards, event)
{
    let newArr = [];

    for(let i = 0; i < cards.length; i++)
    {
        newArr.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }

    return newArr
}

writeCards()

function countDown()
{
    let countdown = 10;
    while (countdown >= 0)
    {
        console.log(countdown--);
    }
}