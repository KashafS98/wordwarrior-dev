---
layout: blog
title: "How to use the new CSS property: aspect-ratio"
author: 'Netlifriends'
date: '2020-04-27'
hero_image: ../static/milkovi-seattle-unsplash.jpg
# thumbnail: img/2.png
---
So we have all been eagerly waiting for the new CSS property to finally be stable on all browsers and it is here. No more using complex functions and calculations just to maintain the aspect ratio of a certain container, image, video, etc.

![](https://cdn.buymeacoffee.com/uploads/project_updates/2021/04/af091a5f42be02a29abb934913317e9f.gif)

It is as easy as using `aspect-ratio: 1/1;` to maintain a square ratio.

The most important thing to make this work is to give your element a width. DO NOT give a static height, because that would betray the whole purpose of having the aspect-ratio property. As long as the `height` remains `auto`; which is the default value for most elements, you should be fine.

Here, I have created a functional component in react for demo.

![](https://cdn.buymeacoffee.com/uploads/project_updates/2021/04/b5dbdd1ecb84f0130969bf47a2e7e33c.png)

Instead of the style tag in JSX, if you're using a CSS file, the style would simply be:

```
.container {
  width: 40%;
  aspect-ratio: 1/1;
  background: pink;
}
```

The best use of aspect-ratio property is when you want to create responsive layouts, of course `height: auto` worked there, but it also stretched out our elements. In the demo, I have used it with a percentage value of width. It is not a restriction. You can fork [this](https://codesandbox.io/s/admiring-darwin-ulmzl?file=/src/App.js) sandbox and play around with the `aspect-ratio` property.

Browser support : [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio#browser_compatibility)

![](https://cdn.buymeacoffee.com/uploads/project_updates/2021/04/2e9f0c8f06aa68b1c46451ee6becb111.png)