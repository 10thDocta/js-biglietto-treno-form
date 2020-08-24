function createRandomCP() {
    // questo dovrebbe essere il nostro database esterno di codici CP
    const randomCPDatabase = [];

    // verifico che il numero random non sia già stato creato, cercandolo nell'array
    const pushToArray = (arr, numb) => {

        // findIndex ritorna -1 se l'elemento non è presente nell'array
        const index = arr.findIndex((e) => e === numb);

        if (index === -1) {
            arr.push(numb);
            return false;
        } else {
            return true;
        }
    };

    let randomNum;

    do {
        randomNum = Math.floor(Math.random() * 10000) + 90000;
    } while (pushToArray(randomCPDatabase, randomNum));

    return randomNum;
}
