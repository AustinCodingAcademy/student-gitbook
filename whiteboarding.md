{% include './header.md' %}

## Whiteboarding

'Whiteboarding' is a technique commonly used in technical interviews to understand
how an applicant thinks when presented with a problem. Ideally, the problems
should be solvable given an appropriate amount of time, but the applicant may
be asked to end early once the problem solving abilities have been assessed. The
goal of the applicant is **not to stress** about solving the problem, but to
narrate the steps taken from the beginning to tackle the problem, even if the
direction is potentially a dead-end. The applicant is usually encouraged to ask
as many clarifying questions as possible, write 'psuedocode', a kind of shorthand
code that would not be expected to run without errors.

The problems are typically short logic problems where the solutions is not immediately
apparent, or have some premeditated pitfalls and 'edge-cases'.

## Example: FizzBuzz

[FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz#Programming_interviews) is
probably the most well known whiteboarding question.

> Write a function `fizzBuzz()` that takes a number `n` as an argument. Have it
log all numbers from 1 to `n`, but:
1. if the number is divisible by 3, only log 'Fizz'
1. if the number is divisible by 5, only log 'Fizz'
1. if the number is divisible by 3 and 5, only log 'FizzBuzz'

Let's go through a few tips:

### 1. If you think you already know the solution, don't solve it outright

The interviewer will not be impressed if you silently solve the problem on the
whiteboard. They want you to approach it from the beginning, step-by-step. And
what if you where wrong or fell into a trap! Work. It. Out. Loud.

### 2. Make sure you understand the problem

The easiest way to do this is to write the problem on the board while explaining it
back to the interviewer. This will clear up any questions and buy you some time to
pick a strategy.

### 3. Take It Slow

Write legibly, double space your lines, and try to minimize extraneous. If
necessary, explain lines in concise sentences off to the side. Use colors, if
available, to try nut to muddy up your code

### 4. Solve a lighter version of the code.
In this problem, instead of writing a function that takes a variable number `n`,
just choose a number and write a simple loop.

```
for (i in 1 to 100) // <== what language is this? psuedocode!

  if i % 3 == 0
    log 'Fizz'

  else if i % 5 == 0
    log 'Buzz'

  else if i % 3 == 0 and i % 5 == 0
    log 'FizzBuzz'

  else
    log i
```

### 5. If you make a mistake, DON'T SWEAT IT
Explain the mistake and fix it. That's gold to the interviewer. In fact, if you
see a 'low hanging fruit' type trap, don't just avoid it, walk through that as
well so you let the interviewer know you see it.

```
for (i in 1 to 100) // <== what language is this? psuedocode!

  if i % 3 == 0
    log 'Fizz'

  else if i % 5 == 0
    log 'Buzz'

  else if i % 3 == 0 and i % 5 == 0 // <== this needs to go first ...
    log 'FizzBuzz'

  else
    log i
```

### 6. Don't worry about performance on your first run

Try your best to solve the problem as if performance doesn't matter. If optimize
to early, you might back yourself into a corner. If you solve the problem early,
return and refactor.

```
fizzBuzz(n)
  str = '';

  for (i in 1 to 100)

    i % 3 or ( str += 'Fizz ' )
    i % 5 or ( str + = 'Buzz ')
    !(i % 3 and i % 5) or (str += (i + ' '))

  log str
```

## Preparation

Little will do more to prepare you for the interview than to actually solve Whiteboarding
problems beforehand. There are problems all around the web, some of my favorites
being [Code Wars](https://www.codewars.com/) and [Project Euler](https://projecteuler.net/)

Here are some sample problems I have experienced in coding interviews that you
can take a whack at!

#### 1. Ordered words
Some programming languages let you compare letters:

`'a' < 'z' //==> true`

Write a method, `wordOrdered(word)`, which returns whether the letters in a
`word` occur in alphabetical order:

```
wordOrdered('amz') //==>true

wordOrdered('zma') //==>false

wordOrdered('aa') //==>true repeats are ok
```

#### 2. Nearby words
Write a method named `nearbyWords(str, wordList)` which takes in a string and
an array of valid words (the `wordlist`). It should return an array of words
from the wordlist which have the same length as str but which are one letter different:
```
WORDS = ['door', 'moot', 'boot', 'boots']

nearbyWords('moor', WORDS) //==> ['door', 'moot']
```

You may assume that the the input string and word list contain only lower case letters.

#### 3. String encoding
Write a method named `encode(str)` which takes in a string and returns an array
of pairs: each pair contains the next distinct letter in the string, and the
number consecutive repeats.

```
encode('aaabbcbbaaa') //==> [['a', 3], ['b', 2], ['c', 1], ['b', 2], ['a', 3]]
encode('aaaaaaaaaa') //==> [['a', 10]]
encode('') == []

```

{% include './footer.md' %}
