# Marketplace

This is a prototype marketplace for testing the features of React, Redux, Typescript and various libraries.

**Currently developed:**
- [X] Main Components (Product Card, Pages, etc)
- [X] Redux store (Redux toolkit) with reducers for storing the application state
- [X] Saving cart and favorites in localStorage
- [X] Dark and Light Mode
- [X] Responsive Design
- [X] Implemented MUI components into the App


<a href="https://mordvintsevmv.github.io/marketplace" target="_blank">Test App</a>

---

## <a name="content">Content</a>

0. [Design](#design)
   1. [Layout](#design-layout)
   2. [Design - Theme](#design-theme)
   3. [Design - Responsive Design](#design-responsive)
1. [Technologies](#technologies)
1. [ToDo](#todo)
2. [Contacts](#contacts)


---

## <a name="design">Design</a>

### <a name="design-layout">Layout</a>
The <a href="https://dribbble.com/shots/16007150-Drop-Shipping-Platform">DropShipping Platform layout</a> 
was taken as a basis for Design of the Marketplace App.

![layout](readme-img/layout.png)

---

### <a name="design-theme">Design - Theme</a>

Dark Theme:

![design-dark](readme-img/design-theme-dark.png)

Light Theme:

![design-light](readme-img/design-theme-light.png)


To develop the function , the following were used:

- **localStorage** - save user preferences in browser memory
- **Redux Store** - store the current state of the theme and use it in any component of the app.

**Initializing theme:**
```javascript
const getTheme = () => {
    
const theme = `${window?.localStorage?.getItem('theme')}`
   
if ([ 'light', 'dark' ].includes(theme)) return theme

    const userMedia = window.matchMedia('(prefers-color-scheme: light)')
   
    if (userMedia.matches) return 'light'

    return 'dark'
}
```

**Set Theme Function:**
```javascript
export const setTheme = (theme: String) => async (dispatch: Dispatch) => {
    
    dispatch(set(theme))
    localStorage.setItem("theme", theme.toString())
   
}
```

---

### <a name="design-responsive">Design - Responsive Design</a>

The application is adapted to most devices with different display sizes.

CSS **media-queries**, **flex** and **grid** display were used for responsive design.

**Examples:**

![design-responsive-1](readme-img/design-responsive-1.png)

![design-responsive-2](readme-img/design-responsive-2.png)

[🔝Content🔝](#content)

---

## <a name="technologies">Technologies</a>

<div style="display:flex; justify-content: space-around; align-items: center; gap: 40px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png?20170517184425" width="40" alt="html"/>
<img src="https://1000logos.net/wp-content/uploads/2020/08/Sass-Logo-1024x640.png" width="40" alt="scss"/>
<img src="https://www.svgrepo.com/show/303600/typescript-logo.svg" width="40" alt="typescript"/>
<img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" width="40" alt="react"/>
<img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png" width="40" alt="redux"/>
<img src="https://blog.ag-grid.com/content/images/2021/02/new-logo-1.png" width="80" alt="ag grid"/>
<img src="https://mui.com/static/logo.png" width="40" alt="mui"/>
</div>

[🔝Content🔝](#content)

---

## <a name="todo">ToDo</a>

- [ ] More features with ag-grid

- [ ] Animations

- [ ] Design improvement

- [ ] Search feature

- [ ] Counting items in Cart

- [ ] Refactoring 

[🔝Content🔝](#content)

---

## <a name="contacts">Contacts</a>

**TG**: [@mordvintsevmv](https://t.me/mordvintsevmv)

**e-mail**: mordvintsevmv@gmail.com


[🔝Content🔝](#content)
