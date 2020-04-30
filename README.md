# Level Up Your CSS Animation Skills

[A CSS Animation Skills course on Udemy.](https://www.udemy.com/share/101xLYA0EfclpUQ3g=/)

## Animating Hero Headers

The point of Hero headers on a site are for the user to:

1. Quickly **understand the point of the site**, what does it have to offer?
2. Understand the site and **brand's identity**.
3. Determine **first impressions** of the brand.

Heros should make good use of:

1. **Striking images** or informitive videos
2. Animations which embelish the style of the Hero, and **draw necessary attention**.

### Pseudo Elements

These are elements that are applied with CSS in order to circumvent the need to bloat your HTML with additional elements.

```css
.header: before {
  background: (...);
}
```

```html
<div>
  <img src="..." class="header header-img" />
</div>
```

### Animation Keyframes

This allows you to set and create custom animations that begin and end at certain keyframe intervals. Remember that this is built straight into the browser and does not require any additonal resources.

```css
@keyframes animation-style {
  0% {
    ...;
  }
  100% {
    ...;
  }
}
```

### Animation Timing

The default options for timing your implementations, i.e. how quickly do they execute at certain keyframe positions, are `ease-in, ease-out, etc` but can be overriden.

```css
.header:after {
  animation: ...cubic-bezier(0, 0.99, 0.35, 1.23) ...;
}
```

We override the use of `ease-out` for example, but using this `cubic-bezier(...)` function.
