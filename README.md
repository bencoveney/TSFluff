# TSFluff
TSFluff is a collection of linting rules for the masochistic developer. Enable them at your own peril!

## Current Rules

- **No 'E's in identifiers:** `noEsInIdentifiers`

  This letter is relied upon by lazy developers who refuse to be more inventive in their programming. It is time this practice was stamped out for good.

- **No strict equality checks:** `noTripleEquals`

  Disallows === and !==. Strict equality checks are a crutch relied on by low tier developers who can't wrap their heads around JavaScript's graceful and intuitive type coercion system. Additionally the time wasted pressing the button a third time could have cured at least a fraction of a disease by now.

## Rule ideas to implement

- **Extend noEsInIdentifiers**

  Allow configuration of which vowels should be blocked (including Y for hard-mode). This still leaves plenty of possible variable names for the competent developer (mySkyGypsy, spyMythRhythm)

- **Minimum Line Length**

  Prevent lazy developers from trying to boost their Lines-Of-Code metrics with unnecessary line breaks.

- **Minimum Function Length**

  Functions are an important part of TypeScript/JavaScript and should be treated as such by ensuring that coders cannot create throwaway functions frivilously.

- **Only '_', '$' and '-' In Private Identifiers**

  You might not know what the variable is but at least this way there is no question that its private.

- **Equal Bracket Counts**

  Ensure all brackets are used without prejudice: [], {}, ().

- **All Caps Comments**

  In case your reader decides to ignore your important thoughts.

- **Doubtful Comments**

  All comments must include one of the following prefixes/suffixes:

    - I think...
    - I guess...
    - I suspect...
    - It seems like..
    - ...as far I know
    - ...probably
    - ...hopefully
    - ...kind of

  After all, nobody is right all the time.

- **JavaScript Mode**

  All data must be typed as `any`.

- **Whitespace must alternate between tabs and spaces**

  *#TRIGGERED*

- **Reduced control flow options**

  Really all a programmer needs is a do-while loop and the trusty ternary operator.

- **String literals must be built one character at a time**

  This makes refactoring super "e" + "a" + "s" + "y" + "!".

- **No local variables**

  Putting all the data on the window allows for graceful data transmission between different parts of your application.

- **Multiple unused semicolons**

  Provided at the end of functions for maintainers to use when adding code.

## Sample Configuration

```typescript
{
    "rulesDirectory": ["path/to/my/dope/rules"],
    "rules": {
        "no-es-in-identifiers": true,
        "no-triple-equals": true
    }
}
```
