function shuffel(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('monkey_img' + i).innerHTML = '<img src="img/'+ array[i] + '.jpg" alt="monkey">';
    }
}