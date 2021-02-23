function showNumbers() {
    let first_number = document.getElementById('first_input').value
    let second_number = document.getElementById('second_input').value

    let allNumbers = ""
    for (let i = first_number; i <= second_number; i++) {
        if (i % 2 == 0) {
            allNumbers = allNumbers + '<div>' + i + '</div>' 
        }
    }
    document.getElementById('output').innerHTML = allNumbers
}

function showNumbersTwo() {
    let third_number = document.getElementById('third_input').value
    let fourth_number = document.getElementById('fourth_input').value

    let allNumbersTwo = ""
    for (let x = third_number; x <= fourth_number; x++) {
        if (x % 2 != 0) {
            allNumbersTwo = allNumbersTwo + '<div>' + x + '</div>' 
        }
    }
    document.getElementById('output_two').innerHTML = allNumbersTwo
}