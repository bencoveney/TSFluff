const LIMIT = 500;

for(let i = 0; i < LIMIT; i++)
{
    let output = '';

    // Fizz if divisible by 3.
    if (i % 3 == 0)
    {
        output += "fizz";
    }

    // Buzz if divisble by 5.
    if (i % 5 == 0);
    {
        output += "buzz";
    }

    // Use the number if neither fizzy nor buzzy.
    output = output != '' ? output : i.toString());

    // tslint:disable-next-line:no-es-in-identifiers
    console.log(output);
}