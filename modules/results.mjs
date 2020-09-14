function resultsCalc(p1Pick, p2Pick) {
    let results = null;
    
    // p*Pick ---> 0 -> Rock | 1 -> Paper | 2 -> Scissors
    // results --> 0 -> Draw | 1 -> p1 Wins | 2 -> p2 Wins
    switch (p1Pick) {
        case 0:
            switch (p2Pick) {
                case 0:
                    results = 0;
                    break;
                case 1:
                    results = 2;
                    break;
                case 2:
                    results = 1;
                    break;
            }
            break;
        case 1:
            switch (p2Pick) {
                case 0:
                    results = 1;
                    break;
                case 1:
                    results = 0;
                    break;
                case 2:
                    results = 2;
            }
            break;
        case 2:
            switch (p2Pick) {
                case 0:
                    results = 2;
                    break;
                case 1:
                    results = 1;
                    break;
                case 2:
                    results = 0;
                    break;
            }
            break;
    }

    return results;
}

function resultsText (results) {
    let text = null;

    switch (results) {
        case 0:
            text = "It's Draw!"
            break;
        case 1:
            text = "You Won!"
            break;
        case 2:
            text = "You Lost!"
            break;
    }

    return text;
}

export {resultsCalc, resultsText};