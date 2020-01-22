numberArray = [0, 2, 20, 4, 13, -2, 9, 1];

selectionSort(numberArray);

function selectionSort(anArray) {
    for (let fillslot = anArray.length - 1; fillslot >= 1; fillslot--) {
        let maxPosition = 0;
        for (let i = 1; i <= fillslot; i++) {
            if (anArray[i] > anArray[maxPosition]) {
                maxPosition = i;  


            }
        }
        [anArray[maxPosition], anArray[fillslot]] = [anArray[fillslot], anArray[maxPosition]]
        console.log(anArray);
    }
}