export const shuffleArray = (a) => {
    let data = a.map(element => {
        return {text:element, complated:false, status: 'default'}
    });
    let array = [...data];
    const newArr = array.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr.map((element,index) => {
        return {...element, id:index}
    })
}