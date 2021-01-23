const answer = window.document.getElementById('answer')
const start = window.document.getElementById('submit')

const game = () => {
    var randomNumber = Math.floor(Math.random() * 20);

    switch (randomNumber) {

        case 0:
            answer.innerHTML = `It is certain.`;
            break;
        case 1:
            answer.innerHTML = `It is decidedly so.`;
            break;
        case 2:
            answer.innerHTML = `Without a doubt.`;
            break;
        case 3:
            answer.innerHTML = `Yes – definitely.`;
            break;
        case 4:
            answer.innerHTML = `You may rely on it.`;
            break;
        case 5:
            answer.innerHTML = `As I see it, yes.`;
            break;
        case 6:
            answer.innerHTML = `Most likely.`;
            break;
        case 7:
            answer.innerHTML = `Outlook good.`;
            break;
        case 8:
            answer.innerHTML = `Yes.`;
            break;
        case 9:
            answer.innerHTML = `Signs point to yes.`;
            break;
        case 10:
            answer.innerHTML = `Reply hazy, try again.`;
            break;
        case 11:
            answer.innerHTML = `Ask again later.`;
            break;
        case 12:
            answer.innerHTML = `Better not tell you now.`;
            break;
        case 13:
            answer.innerHTML = `Cannot predict now.`;
            break;
        case 14:
            answer.innerHTML = `Concentrate and ask again.`;
            break;
        case 15:
            answer.innerHTML = `Don’t count on it.`;
            break;
        case 16:
            answer.innerHTML = `My reply is no.`;
            break;
        case 17:
            answer.innerHTML = `My sources say no.`;
            break;
        case 18:
            answer.innerHTML = `Outlook not so good.`;
            break;
        case 19:
            answer.innerHTML = `Very doubtful.`;
            break;
        default:
            break;
    }
}
const clear = () => {
    window.document.getElementById('myForm').reset();

}
start.addEventListener('click', game)
start.addEventListener('click', clear)