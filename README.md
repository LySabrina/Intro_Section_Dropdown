# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop](/public/design/Desktop.png)
![Mobile](/public/design/Mobile.png)
![Mobile_Active](/public/design/Mobile-Active.png)

### Links

- Solution URL: [GitHub](https://github.com/LySabrina/Intro_Section_Dropdown)
- Live Site URL: [Live Site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

In this project, my aim was to focus on creating and stylizing components in React.
Additionally, this was a new challenge for me as the format of the navigation differs from the mobile and desktop version.

To create this landing page project, I created two components: Navbar,NavItem, and Hero.

Navbar is the literal navigation bar and holds another component: NavItem. I created a NavItem as each list item in the navigation bar have some similarities. They each are a `<li>` and some have a sub `<ul>`. Since some of the nav items have a sub list, I passed in optional props. If the props did not exist, then the sublist would not be render by using conditional statments:

EXAMPLE: Items props that may be undefined or defined

```js
{
  items && (
    <span className="arrow">
      <button onClick={handleClickArrow}>
        <img
          src={
            open ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"
          }
          alt="arrow"
        />
      </button>
    </span>
  );
}
```

The NavItem may be open or closed. The way they are open differ based on mobile or desktop. In mobile format, users must tap the nav item to open the sublist or be redirected. In desktop format, users may tap or just hover to open the sublist. Thus I need to implement both ways.

EXAMPLE: Using MouseEnter and MouseLeave for Desktop

```js
const [open, setOpen] = useState(false);
const handleClickArrow = () => {
  setOpen((prevVal) => !prevVal);
};

const handleOnMouseEnter = () => {
  setOpen(true);
  setTimeout(() => {
    setOpen(true);
  }, 300);
};

const handleOnMouseLeave = () => {
  setOpen(false);
};
```

These handler functions are placed on the list and the sublist.

Finally, I learned some animations by using the CSS property: `transition`.
One of the CSS animations I wanted to implement was the opening and closing of the navigation bar in mobile format.

EXAMPLE: CSS Animation Opening and closing of navbar in mobile format

```css
.nav__container {
  min-width: 75%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: $c-white;
  transform: translateX(100%);
  padding: 1em;
  z-index: 99;

  transition: transform 1s ease-out;
}

.open {
  transform: translateX(0);
  transition: transform 0.5s ease-in;
}
```

To implement the CSS animation of opening and closing of the navbar in mobile format, needs `transition: transform 1s ease-out;`. The transition is applied on the CSS property - `transform`. By default, I made it so that the navbar in mobile format is off screen. Once the user clicks on the hamburger button, the `.open` class is added to the `nav__container` which changes the property value - `transform`. CSS will apply the CSS animation of that change in `transform` value.

So, `.nav__container` has an initial state of transform as: translateX(100%). When button is clicked, a class of `.open` is added which overrides the transform value to a new state. Thus CSS will apply an animation of this initial state to this final state.

(BTW, translateX(0) is to reset the `.nav__container` to initial position before applying the transform:translateX(100%))

### Continued development

Possible development of better animation and container sizing would be done. Mostly animations would be planned as I learn more about animations.

### Useful resources

- [CSS Transition](https://www.joshwcomeau.com/animation/css-transitions/) - Helped understand CSS transition with a nice interactive code.

- [CSS Transition Sidebar](https://spacebro.io/articles/create-animated-sidebar-css-javascript) - Helped as a reference and guide in implementing the animation of the navbar

- [CSS Animation](https://thoughtbot.com/blog/css-animation-for-beginners) - Good introduction about CSS animation

## Author

- Frontend Mentor - [@lysabrina](https://www.frontendmentor.io/profile/LySabrina)
- GitHub - [@lysabrina](https://github.com/LySabrina)

## Acknowledgments

Thanks to FrontendMentor for creating these projects. And thanks to Goku for liking my projects.
