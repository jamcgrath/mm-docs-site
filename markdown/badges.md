<!-- prettier ignore -->

## badges

<br>
Badges should be used only on `span` `div` `a` or `button` elements.

```html
<span class="badge">Badge span</span>

<div class="badge">Badge div</div>

<a class="badge" href="">Badge Link</a>

<button type="button" class="badge">Badge button</button>
```

<div class="border solid border-navy p-5 my-5">
	<span class="badge">Badge span</span>
	<div class="badge">Badge div</div>
	<a class="badge" href="">Badge Link</a>
	<button type="button" class="badge">Badge button</button>
</div>

---

## Default badge

<br />
The default `.badge` class creates the same type of badge as `.badge-sm`.

```html
<span class="badge badge-sm"> small </span>

<span class="badge badge-sm">
  <i aria-hidden="true" class="mmi mmi-multiply"></i>
  small
</span>

<span class="badge badge-sm">
  small
  <i aria-hidden="true" class="mmi mmi-multiply"></i>
</span>

<span class="badge badge-sm">
  <i aria-hidden="true" class="mmi mmi-multiply"></i>
</span>
```

<div class="border solid border-navy p-5 my-5">
  <span class="badge badge-sm"> small </span>
  <span class="badge badge-sm">
    <i aria-hidden="true" class="mmi mmi-multiply"></i>
    small
  </span>
  <span class="badge badge-sm">
    small
    <i aria-hidden="true" class="mmi mmi-multiply"></i>
  </span>
  <span class="badge badge-sm">
    <i aria-hidden="true" class="mmi mmi-multiply"></i>
  </span>
</div>

---

## Badge Sizes

<br />
There are two sizes for badges. `sm` and `med`.

```html
<span class="badge badge-sm">Badge sm</span>
<span class="badge badge-med">Badge med</span>
```

<div class="border solid border-navy p-5 my-5">
	<span class="badge badge-sm">Badge sm</span>
	<span class="badge badge-med">Badge med</span>
</div>
