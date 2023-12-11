let arrayForm = document.getElementById("ArrayForm");
var arrLength;

arrayForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    arrLength = document.getElementById("ArrLength");
    let len = checkArrLength(arrLength.value);

    if (len < 1 || len > 100)
    {
        document.getElementById("output1").innerHTML = "Неправильно задана довжина масиву. Має бути ціле число від 1 до 100.";
        document.getElementById("output2").innerHTML = "Не задано";
        document.getElementById("output3").innerHTML = "Не задано";
        document.getElementById("output4").innerHTML = "Не задано";
        document.getElementById("output5").innerHTML = "Не задано";
        document.getElementById("output6").innerHTML = "Не задано";
    }
    else
    {
        let arr = new Array(len);
        generateArray(arr);
        let maxEven = findMaxEven(arr);
        let minEven = findMinEven(arr);
        let maxOdd = findMaxOdd(arr);
        let minOdd = findMinOdd(arr);
        document.getElementById("output1").innerHTML = arr.toString();

        if(maxEven == -1)
        {
            document.getElementById("output3").innerHTML = "Масив не містить парних елементів.";
        }
        else
        {
            document.getElementById("output3").innerHTML = maxEven;
        }

        if(minEven == 150)
        {
            document.getElementById("output4").innerHTML = "Масив не містить парних елементів.";
        }
        else
        {
            document.getElementById("output4").innerHTML = minEven;
        }

        if(maxOdd == -1)
        {
            document.getElementById("output5").innerHTML = "Масив не містить непарних елементів.";
        }
        else
        {
            document.getElementById("output5").innerHTML = maxOdd;
        }

        if(minOdd == 150)
        {
            document.getElementById("output6").innerHTML = "Масив не містить непарних елементів.";
        }
        else
        {
            document.getElementById("output6").innerHTML = minOdd;
        }

        selectionSort(arr);
        document.getElementById("output2").innerHTML = arr.toString();
    }
});

function checkArrLength(value) {
    let floatNum = parseFloat(value);
    let num = parseInt(value);

    if (isNaN(num)) { 
        return 0;
    }
    else if (floatNum != num)
    {
        return 0;
    }
    else { return num;}
}

function generateArray(value) {

    for (let i = 0; i < value.length; i++) {
        value[i] = Math.floor(Math.random() * 101);
    }
}

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++)
    {
        let jMin = i;

        for (let j = i + 1; j < array.length; j++)
        {
            if (array[j] < array[jMin])
            {
                jMin = j;
            }
        }

        if (jMin != i) 
        {
            let buffer = array[i];
            array[i] = array[jMin];
            array[jMin] = buffer;
        }
    }
}

function findMaxEven(array) {
    let num = -1;
    for (let i = 0; i < array.length; i++)
    {
        if(array[i] % 2 == 0 && array[i] > num)
        {
            num = array[i];
        }
    }
    return num;
}

function findMinEven(array) {
    let num = 150;
    for (let i = 0; i < array.length; i++)
    {
        if(array[i] % 2 == 0 && array[i] < num)
        {
            num = array[i];
        }
    }
    return num;
}

function findMaxOdd(array) {
    let num = -1;
    for (let i = 0; i < array.length; i++)
    {
        if(array[i] % 2 != 0 && array[i] > num)
        {
            num = array[i];
        }
    }
    return num;
}

function findMinOdd(array) {
    let num = 150;
    for (let i = 0; i < array.length; i++)
    {
        if(array[i] % 2 != 0 && array[i] < num)
        {
            num = array[i];
        }
    }
    return num;
}