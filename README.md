# TSFluff
TSFluff is a collection of linting rules for the masochistic developer. Enable them at your own peril!

## Current Rules

- **No vowels in identifiers:** `no-vowels-in-identifiers`

  These letters are relied upon by lazy developers who refuse to be more inventive with their programming terminology. It is time this practice was stamped out for good.
  
  This rule comes with 3 different modes which can be toggled between depending on your programming ability:

  - **easy:** Disallows e
  - **medium (default):** Disallows a, e, i, o, u
  - **hard:** Disallows a, e, i, o, u, y

- **No strict equality checks:** `no-triple-equals`

  Disallows === and !==. Strict equality checks are a crutch relied on by low tier developers who can't wrap their heads around JavaScript's graceful and intuitive type coercion system. Additionally the time wasted pressing the button a third time could have cured at least a fraction of a disease by now.

- **Short string literals:** `short-string-literals`

  String literals are often expressed all at once with no thought given to refactoring. This rule enforces better coding practices by requiring string literals to be split into 1 character long chunks which makes restucturing the string at a later time super `"e" + "a" + "s" + "y" + "!"`.

- **Require empty statements** `require-empty-statements`

  Everyone knows that editing old existing code is a difficult and time consuming process. This rule helps mitigate that pain by ensuring that there are always some spare semicolons to use scattered throughout the file making it 100% more maintainable.

  This rule accepts an option for the number of empty statements required (with a default of 5).

## Rule ideas to implement

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

- **No local variables**

  Putting all the data on the window allows for graceful data transmission between different parts of your application.

## Sample Configuration

```typescript
{
    "rulesDirectory": ["dist/"],
    "rules": {
        "no-vowels-in-identifiers":  [
            true, 
            {
                "difficulty": "medium"
            }
        ],
        "no-triple-equals": true,
        "short-string-literals": true,
        "require-empty-statements": [
            true,
            7
        ]
    }
}
```

## Sample Code
To demonstrate exemplary code a simple FizzBuzz script has been made available [here](test/sample.ts).
