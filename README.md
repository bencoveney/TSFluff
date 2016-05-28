# TSFluff
TSFluff is a collection of linting rules for the masochistic developer. Enable them at your own peril!

## Current Rules

- **No 'E's in identifiers.**

  `noEsInIdentifiers`

  This letter is relied upon by lazy developers who refuse to be more inventive in their programming. It is time this practice was stamped out out for good.

## Planned Rules

- **Extend noEsInIdentifiers**

  Allow configuration of which vowels should be blocked (including Y for hard-mode). This still leaves plenty of possible variable names for the competent developer (mySkyGypsy, spyMythRhythm)

- **Minimum Line Length**

  Prevent lazy developers from trying to boost their Lines-Of-Code metrics with unnecessary line breaks.

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

## Sample Configuration

```typescript
{
    "rulesDirectory": ["path/to/my/dope/rules"],
    "rules": {
        "noEsInIdentifiers": true
    }
}
```