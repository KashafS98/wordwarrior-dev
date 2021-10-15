---
layout: blog
title: Text Effects Using CSS Shadows and Strokes
author: 'Netlifriends'
date: '2020-04-27'
hero_image: ../static/milkovi-seattle-unsplash.jpg
---
## Another bland heading tag? Spice it up:

Websites that have boring texts, are known to be less readable, interesting. They do not hook your users to the content. Super crazy texts, with too many colors and styles take away the essence of the content and thus are just as vain.

Here is the [SandBox](https://codesandbox.io/text-effects-3zzbj) that contains all these effects. Fork it and play around!

Finding the right balance between styling and keeping the content interesting is the first step to make your website stand out. Luckily a lot amazing text effects can be achieved using shadows and strokes. We will see how to get Hollow, Spliced, Glowing, Glitchy and LED text effects in this article. Let's dive right in!

## Hollow and Spliced Text Effects

The `-webkit-text-stroke` property defines the outlines of your font's glyphs. This is the font's border rather than the box's border. You can achieve a **hollow effect** by using only the `-webkit-text-stroke` property.

Here is the CSS for the hollow text effect:

```
h1 {
 -webkit-text-stroke: 1px #00ffe8;
}
```

This is what it looks like:![](https://cdn.buymeacoffee.com/uploads/project_updates/2021/05/7b1a577d67b60cdcf6cd67c933215b9b.png)ng `-webkit-text-stroke` , `-webkit-text-fill-color` , and `text-shadow` properties, you can achieve a **spliced text** effect. We need a transparent filling inside the text, so that we can use the text-shadow property to give the second color a shift.

Here is the css for the spliced text effect:

```
h1 {
 -webkit-text-stroke: 1px #00ffe8;
  -webkit-text-fill-color: transparent;
  text-shadow: #d60f6d 3px 3px 0px;
}

```

This is what it looks like:![](https://cdn.buymeacoffee.com/uploads/project_updates/2021/05/a059fe8255908052189f4af9e88322b0.png)

## Understanding shadows

All shadow values, i.e. values for `box-shadow` and the parameter for the `drop-shadow()` function (used in the `filter` property) have the same syntax, which is as follows:

`x-offset y-offset blur spread color` or `color x-offset y-offset blur spread`

Please note that the text-shadow property does not take spread-radius. It only has the X and Y offsets and the third is blur-radius. `color x-offset y-offset blur` or `x-offset y-offset blur color`

Examples for the different shadow properties and functions:

1. Text shadow:

   ```
   text-shadow: 0px 0px 3px red;
   ```

   ![](https://cdn.buymeacoffee.com/uploads/project_updates/2021/05/caebd6170c9fe97835cb9ae999ed85ea.png)
2. Box shadow:

   ```
   box-shadow: black 2px -2px 3px;
   ```

   ![](https://cdn.buymeacoffee.com/uploads/project_updates/2021/05/d5231cf46903f14ed8d33249776da3e2.png)
3. drop-shadow()

   ```
   filter: drop-shadow(black 2px -2px 3px);
   ```

![](https://cdn.buymeacoffee.com/uploads/project_updates/2021/05/2d193613b97e778b011ce6312cc7ce89.png)

As you can see above, the color values can either be given first or last and can be rgba, hex or hsla values. In between, the numeric values respectively define the x-offest, y offset, blur-radius and spread radius. If you only enter two values, eg: `box-shadow: 10px 10px;`, it will be considered as the offset values X and Y, three values will be considered as x offset, y offset and blur-radius, for eg: `box-shadow: 10px 10px 5px;`, as you can see the variations above.

If you do not provide a value for shadow color, the `text-shadow` property takes the text color by default; and the `box-shadow` property and the `drop-shadow()` function take black as the default color.

**Note that the** `text-shadow: *value*` **and** `filter: drop-shadow(*value*)` **can be used interchangeably because there is no difference in the outcome if the same values are used.**

Fork [this sandbox](https://codesandbox.io/s/text-effects-3zzbj) to play around with these values.

> Note: The box-shadow property creates a rectangular shadow behind an element's entire box, while the drop-shadow() filter function creates a shadow that conforms to the shape (alpha channel) of the image itself. -Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow())

## Glitch effect using multi-colored text-shadows:

![](https://cdn.buymeacoffee.com/uploads/project_updates/2021/05/23bef9b23138e3bb4411490085e04d73.png)

```
h1{
	color: black;
	text-shadow: cyan 6px -2px 0px, red -6px 2px 0px;
}
// cyan and red give the best effects for glitch

```

You can give multiple shadows to a single text. this works for both box shadow as well as text shadow. In the example above, we have given a red text shadow to the bottom left and a cyan text shadow to the top right.

**Notice how the X and Y offsets have same numeric values and only inverted signs. This makes sure that the shadow on both sides is equally wide. Ofcourse, you can go crazy with them and play around with more numbers and colors [here](https://codesandbox.io/s/text-effects-3zzbj).**

## Glowing text effects

![](https://cdn.buymeacoffee.com/uploads/project_updates/2021/05/05954e462fa45ce14e74e2fd984dcb03.png)

To achieve a glowing effect, we will use the filter property. We go into depths about filters, considering that it requires a dedicated article. Here is how you can get a glow effect:

```
h1 {
	color: cyan // or rgb(0, 255, 255)
	filter: drop-shadow(rgba(0, 255, 255, 0.9) 0 0 3.8px)
			    drop-shadow(rgba(0, 255, 255, 0.7) 0 0 19px)
			    drop-shadow(rgba(0, 255, 255, 0.5) 0 0 50px);
}

```

As you can see, we can give multiple drop shadows to the filter property, varying in their blur radius and opacity. This is just an example, you can alter the values to get the desired glow.

Notice here, that the three `drop-shadow()` functions are not seperated by a comma, where as while giving multiple `text-shadow` values, we used a comma to seperate them.

To get a LED light kind of glow, we just change the text color to white and keep the same filter with `drop-shadow` functions.

![](https://cdn.buymeacoffee.com/uploads/project_updates/2021/05/1de0e60da009437792dabc21b1c8500e.png)

```
h1 {
	color: white // or rgb(255, 255, 255)
	filter: drop-shadow(rgba(0, 255, 255, 0.9) 0 0 3.8px)
	         drop-shadow(rgba(0, 255, 255, 0.7) 0 0 19px)
	         drop-shadow(rgba(0, 255, 255, 0.5) 0 0 50px);
}
```