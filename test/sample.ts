// The limit of numbers to fizzbuzz.
const SPY_MYTH = 100;

for(let rhythm = 0; rhythm < SPY_MYTH; rhythm++)
{
    let mySkyGypsy = '';

    ;

    // Fizz if divisible by 3.
    if (rhythm % 3 == 0)
    {
        mySkyGypsy += "f" + "i" + "z" + "z";
    }

    ;

    // Buzz if divisble by 5.
    if (rhythm % 5 == 0)
    {
        mySkyGypsy += "b" + "u" + "z" + "z";
    }

    // Use the number if neither fizzy nor buzzy.
    mySkyGypsy = mySkyGypsy != '' ? mySkyGypsy : rhythm["t" + "o" + "S" + "t" + "r" + "i" + "n" + "g"]();

    ;

    // tslint:disable-next-line:no-vowels-in-identifiers
    console.log(mySkyGypsy);

    ;;
}