## Custom Buttons

To make a custom button, add a class to the button to name space it and modify a custom prpoerty (css var).

```html
<button type="button" class="custom-button-1 btn">custom</button>
<button type="button" class="custom-button-2 btn btn-med">custom</button>
<button type="button" class="custom-button-3 btn btn-med btn-outline">
  custom
</button>
```

```css
.custom-button-1 {
  --btn-color: orange;
}
.custom-button-2 {
  --btn-color: var(--navy);
  --btn-bg: var(--citrus);
}
.custom-button-3 {
  --btn-color: var(--white);
  --btn-bg: var(--aqua-dark);
  --btn-border-color: var(--navy);
  --btn-border-style: dashed;
  --btn-border-width: 4px;
}
```

<div class="border solid border-navy p-5 my-5 my-5">
	<button type="button" class="custom-button-1 btn">custom</button>
	<button type="button" class="custom-button-2 btn btn-med">custom</button>
	<button type="button" class="custom-button-3 btn btn-med btn-outline">custom</button>
</div>

The easiest way to do this is copy a button from the buttons tab. Then look in the browser dev tools to see the vars that are being used. Add a class to name space your element and modify the vars.

You can also look at the button css to see what vars are available for each button class.
