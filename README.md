# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](screenshot.png)

### Links

- Live Site URL: [Add live site URL here](https://kriosaber.github.io/interactive-card-details-form-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

-I discovered a few ways to make linear-gradient "border colors". After a little research I decided to put all inputs inside a container, which has a background-color and a small padding simulating the border effect. 
-My biggest issue about CSS was positioning the cards accordingly to the design, since the text has to be well positioned in order to coincide with the card image width.
-Validating the form wasn't very hard but I needed many hours to improve the code, using regular expressions was very useful but since I'm not used to it I struggled a little finding the correct expression for every field, so I decided to keep it simple.

```html
<div class="images">
      <div class="card card--front">
        <img src="images/bg-card-front.png" alt="Card front">
        <div class="card__details">
          <p class="card__number">0000 0000 0000 0000</p>
          <div class="flex-group">
            <p class="card__name">Jane Appleseed</p>
            <p class="card__expiration-date">00/00</p>
          </div>
        </div>
      </div>
      <div class="card card--back">
        <img src="images/bg-card-back.png" alt="Card back">
        <div class="card__details">
          <p class="card__cvc">000</p>
        </div>
      </div>
    </div>
```
```css
.input-container{
    position: relative;
    display: grid;
    padding: 1px;
    border-radius: 0.5em;
    background-color: var(--clr-neutral-200);
}

input{
    font-family: inherit;
    font-size: 18px;
    padding: 0.5em;
    border: none;
    border-radius: 0.4em;
    color: var(--clr-neutral-700);
    background-color: white;
    cursor: pointer;
}
```
```js
const regExpressions = {
    creditCard: /^\d{16}$/,
    month: /(^0?[1-9]$)|(^1[0-2]$)/,
    year: /^(\d?[1-9]|[1-9]0)$/,
    cvc: /^\d{3}$/
}
```

### Useful resources

- [CSS Tricks](https://css-tricks.com/gradient-borders-in-css/) - This helped me for the input linear-gradient border color
- [Stack Overflow](https://stackoverflow.com/questions/17350833/reg-exp-for-javascript-pattern-mm-yyyy) - This is where I took some regular expressions from 
## Author

- Frontend Mentor - [@Kriosaber](https://www.frontendmentor.io/profile/Kriosaber)
