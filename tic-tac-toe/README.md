# PROJECT: TIC TAC TOE

# LESSON 01

# GOALS

1. Learn to use `<div>` tags with the css `display:table` to create a table
2. Learn to link a stylesheet to your html page

# STEPS

### 1. Add nested divs, as below, to the body of your html page.

_NOTE: This will not look like a table (or anything really) until we setup the styling later in this lesson_

```html
<div>
    <div>
        <div><img src="img/blank.png" /></div>
        <div><img src="img/blank.png" /></div>
        <div><img src="img/blank.png" /></div>
    </div>
    <div>
        <div><img src="img/blank.png" /></div>
        <div><img src="img/blank.png" /></div>
        <div><img src="img/blank.png" /></div>
    </div>
    <div>
        <div><img src="img/blank.png" /></div>
        <div><img src="img/blank.png" /></div>
        <div><img src="img/blank.png" /></div>
    </div>
</div>
```

### 2. Link the stylesheet (index.css) by placing the following code below the title tag

_Note: After you add this, the page should go from white to black_

```html
<link rel="stylesheet" href="index.css" />
```

### 3. Update index.css folder by adding the following css styles in the Game Board region

```css
/* ************************************************************
 - This is the container for the gameboard (the table)
 - ".game-board" is a css class identifier that identifies all
   elements with the attribute class="game-board" (e.g. -
   <div class="game-board">)
************************************************************ */
.game-board {
    /* Identifies the table */
    display: table;
}

/* ************************************************************
 - These group the playable squares into rows of 3 squares
   (cells) that go in the table.
 - They are the div children of `.game-board` elements.
 - The `> div` after `.game-board` is the css selector for all
   divs that are direct children of an element with the
   game-board class that are `div`s
************************************************************ */
.game-board > div {
    /* Identifies these divs as the rows which contain the
       cells of the table */
    display: table-row;
}

/* ************************************************************
 - These are the playable squares (where the X's and O's will
   go)
 - These are the `div` children of `.game-board > div`
************************************************************ */
.game-board > div > div {
    /* Identifies these divs as the cells of the table */
    display: table-cell;
    /* Sets the size of the squares */
    width: 100px;
    height: 100px;
    /* Sets up the default border for the playable squares */
    border: 1px solid white;
}
```

### 4. Clean up the borders to look more like a game board by removing the outer borders with the following CSS (to be added inside the Game Board region of the index.css file)

```css
/* ************************************************************
 - This selects the first div (div:first-child) of each row
   (.game-board > div)
************************************************************ */
.game-board > div > div:first-child {
    /* remove the left border */
    border-left: 0px;
}

/* ************************************************************
 - This selects the last div (div:last-child) of each row
   (.game-board > div)
************************************************************ */
.game-board > div > div:last-child {
    /* remove the right border */
    border-right: 0px;
}

/* ************************************************************
 - This selects every div of the first row (div:first-child)
************************************************************ */
.game-board > div:first-child > div {
    /* remove the top border */
    border-top: 0px;
}

/* ************************************************************
 - This selects every div of the last row (div:last-child)
************************************************************ */
.game-board > div:last-child > div {
    /* remove the bogtom border */
    border-bottom: 0px;
}
```
