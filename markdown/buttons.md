<!-- prettier-ignore -->
## default button

<br>
The default <code class='md-code'>button</code> has no styling.

```html
<button type="button">default</button>
```

<div class="border solid border-navy p-5 my-5">
	<button type="button">Default button no class</button>
</div>

---

## .btn

<br>
The btn class adds minimal styling to the button. It is recommended to use this class on all buttons.

```html
<button type="button" class="btn">btn</button>
```

<div class="border solid border-navy p-5 my-5">
	<button type="button" class="btn">btn class</button>
</div>

---

## Btn sizes

<br>
There are three sizes for buttons. <code class='md-code'>sm</code>, <code class='md-code'>med</code> and <code class='md-code'>lg</code>.

```html
<button type="button" class="btn btn-sm btn-primary">btn-sm</button>
<button type="button" class="btn btn-med btn-primary">btn-med</button>
<button type="button" class="btn btn-lg btn-primary">btn-lg</button>
```

<div class="border solid border-navy p-5 my-5">
	<button type="button" class="btn btn-sm btn-primary">btn-sm</button>
	<button type="button" class="btn btn-med btn-primary">btn-med</button>
	<button type="button" class="btn btn-lg btn-primary">btn-lg</button>
</div>

---

## styled buttons

<br />
To style a button you will need to add additional classes for size and color.

```html
<button type="button" class="btn btn-primary btn-sm">primary</button>
<button type="button" class="btn btn-tonal btn-sm">tonal</button>
<button type="button" class="btn btn-outline btn-sm">outline</button>
<button type="button" class="btn btn-flat btn-sm">flat</button>
<button type="button" class="btn btn-secondary btn-sm">secondary</button>
<button type="button" class="btn btn-tonal-secondary btn-sm">
  tonal secondary
</button>
<button type="button" class="btn btn-outline-secondary btn-sm">
  outline secondary
</button>
<button type="button" class="btn btn-flat-secondary btn-sm">
  flat secondary
</button>
<button type="button" class="btn btn-destructive btn-sm">destructive</button>
<button type="button" class="btn btn-outline-destructive btn-sm">
  outline destructive
</button>
<button type="button" class="btn btn-flat-destructive btn-sm">
  flat destructive
</button>
<button type="button" class="btn btn-sm" disabled>disabled</button>
<button type="button" class="btn btn-outline btn-sm" disabled>
  disabled outline
</button>
<button type="button" class="btn btn-flat btn-sm" disabled>
  disabled flat
</button>
```

<div class="border solid border-navy p-5 my-5 my-5">
	<button type="button" class="btn btn-primary btn-sm">primary</button>
	<button type="button" class="btn btn-tonal btn-sm">tonal</button>
	<button type="button" class="btn btn-outline btn-sm">outline</button>
	<button type="button" class="btn btn-flat btn-sm">flat</button>
	<hr>
	<button type="button" class="btn btn-secondary btn-sm">secondary</button>
	<button type="button" class="btn btn-tonal-secondary btn-sm">tonal secondary</button>
	<button type="button" class="btn btn-outline-secondary btn-sm">outline secondary</button>
	<button type="button" class="btn btn-flat-secondary btn-sm">flat secondary</button>
	<hr>
	<button type="button" class="btn btn-destructive btn-sm">destructive</button>
	<button type="button" class="btn btn-outline-destructive btn-sm">outline destructive</button>
	<button type="button" class="btn btn-flat-destructive btn-sm">flat destructive</button>
	<hr>
	<button type="button" class="btn btn-sm" disabled>disabled</button>
	<button type="button" class="btn btn-outline btn-sm" disabled>disabled outline</button>
	<button type="button" class="btn btn-flat btn-sm" disabled>disabled flat</button>
</div>

---

## Circle buttons

<br>
To create a circle button, add the <code class='md-code'>btn-circle</code> class to the button.

```html
<button type="button" class="btn btn-tonal btn-med btn-circle">
  <i aria-hidden="true" class="mmi mmi-close"></i>
</button>
```

<div class="border solid border-navy p-5 my-5 my-5">
	<button type="button" class="btn btn-tonal btn-med btn-circle">
		<i aria-hidden="true" class="mmi mmi-close"></i>
	</button>
</div>
If the button is not decorative, be sure to add a label for screen readers.

```html
<button type="button" class="btn btn-tonal btn-med btn-circle">
  <i aria-hidden="true" class="mmi mmi-close"></i>
  <span class="visually-hidden">Close</span>
</button>

<button
  type="button"
  class="btn btn-tonal btn-med btn-circle"
  aria-label="close"
>
  <i aria-hidden="true" class="mmi mmi-close"></i>
</button>
```

---

## Link that look like a button

<br>
To make a link look like a button, add the same button classes to an anchor tag.

```html
<a class="btn btn-primary btn-lg">This is a link</a>

<nuxt-link to="/badges" class="btn btn-primary btn-lg">
  Nuxt link to badges
</nuxt-link>
```

<div class="border solid border-navy p-5 my-5 my-5">
	<a class="btn btn-primary btn-lg" href="https://mamamia.com.au">This is a link</a>
	<nuxt-link to="/badges" class="btn btn-primary btn-lg">
  	Nuxt link to badges
	</nuxt-link>
</div>

## Buttons that are not buttons

<br>
IF for some reason you need to make a button that is not a button, use the <code class='md-code'>role="button"</code> attribute, <code class='md-code'>tabindex="0"</code> and event handlers for <code class='md-code'>keydown</code> and <code class='md-code'>click</code>. Also be sure to add any other aria attributes as required.

<br>
<br>

**Note:** This is not recommended as it is not accessible unless you add all the accessiblity things a button gives you for free.

```html
<div
  class="btn btn-primary btn-lg"
  role="button"
  @click="clickHandler"
  @keyup.space="clickHandler"
  @keyup.enter="clickHandler"
  tabindex="0"
>
  This is not a button
</div>
```

<div class="border solid border-navy p-5 my-5 my-5">
	<div
	  class="btn btn-primary btn-lg"
	  role="button"
	  @click="clickHandler"
	  @keyup.space="clickHandler"
	  @keyup.enter="clickHandler"
		tabindex="0"
	>
		This is not a button
	</div>
</div>
