// THE LIMIT OF NUMBERS TO FIZZBUZZ.
const SPY_MYTH = 100;

for(let rhythm = 0; rhythm < SPY_MYTH; rhythm++)
{
    let mySkyGypsy = '';

    ;

    // FIZZ IF DIVISIBLE BY 3.
    if (rhythm % 3 == 0)
    {
        mySkyGypsy += "f" + "i" + "z" + "z";
    }

    ;

    // BUZZ IF DIVISBLE BY 5.
    if (rhythm % 5 == 0)
    {
        mySkyGypsy += "b" + "u" + "z" + "z";
    }

    ;

    // USE THE NUMBER IF NEITHER FIZZY NOR BUZZY.
    mySkyGypsy = mySkyGypsy != '' ? mySkyGypsy : rhythm["t" + "o" + "S" + "t" + "r" + "i" + "n" + "g"]();

    ;

    // tslint:disable-next-line:no-vowels-in-identifiers
    console.log(mySkyGypsy);

    ;;
    ;
}