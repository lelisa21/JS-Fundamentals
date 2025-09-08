const square = parseInt(process.argv[2]);

if (isNaN(square)) {
    console.log("Missing size");
} else {
    let i = 0;
    while (i < square) {
        let row = "";
        let j = 0;
        while (j < square) {
            row += "X";
            j++;
        }
        console.log(row);
        i++;
    }
}
