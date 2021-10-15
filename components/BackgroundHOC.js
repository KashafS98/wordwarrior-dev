import React, { useEffect } from "react";
import useScrollPosition from "@react-hook/window-scroll";

export default function BackgroundHOC({ children }) {
  const scrollY = useScrollPosition();
  var scroll;
  useEffect(() => {
      if(document){
          document.onscroll = ChangeColorOnScroll
      }
    // ChangeColorOnScroll()
  }, [scrollY]);

  var sectionsYStart = [0, 900, 1700, 2500, 3200, 4000, 6000, 7000];
  var activeSection = 0;


  var ChangeColorOnScroll = function () {
    scroll = document.scrollingElement.scrollTop;
    scrollColors(scroll, document.getElementById('bg-color'), [
      [36,0,70,1],
      [158,126,223,1],
      [29,87,64,1],
      [199,67,97,1],
      [92,44,75,1],
      [36,32,63,1],
      [80,0,185,1],
    ]);
  };

//   "#240046",
//       "#9E7EDF",
//       "#9A201B",
//       "#1D5740",
//       "#C74361",
//       "#5C2C4B",
//       "#24203F",
//       "#5000B9",

  var scrollColors = function (scroll, el, colors) {
    var nav = document.getElementById('bg-nav-color')
    // which of all the sections, are we in between?
    var z = 0,
      seclen = 8;
    for (var i = 0; i < seclen; i++) {
      if (scroll > sectionsYStart[i]) {
        z = i;
      }
    }
    activeSection = z;

    var scroll_pos = scroll;
    var animation_begin_pos = sectionsYStart[z]; //where you want the animation to begin
    var animation_end_pos = sectionsYStart[z + 1]; //where you want the animation to stop
    var beginning_color = colors[z];
    var ending_color = colors[z + 1];

    if (scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos) {
      var percentScrolled =
        scroll_pos / (animation_end_pos - animation_begin_pos);
      if (percentScrolled > 1) {
        percentScrolled = percentScrolled - z;
      }
      var newRed =
        beginning_color[0] +
        (ending_color[0] - beginning_color[0]) * percentScrolled;
      var newGreen =
        beginning_color[1] +
        (ending_color[1] - beginning_color[1]) * percentScrolled;
      var newBlue =
        beginning_color[2] +
        (ending_color[2] - beginning_color[2]) * percentScrolled;

      var newAlpha =
        beginning_color[3] +
        (ending_color[3] - beginning_color[3]) * percentScrolled;

      var newColor = `rgba(${newRed}, ${newGreen}, ${newBlue}, ${newAlpha})`;
      el.style.backgroundColor = newColor;
      nav.style.backgroundColor = newColor;
    } else if (scroll_pos > animation_end_pos) {
        el.style.backgroundColor = `rgba(${ending_color[0]},${ending_color[1]},${ending_color[2]},${ending_color[3]})`
        nav.style.backgroundColor = `rgba(${ending_color[0]},${ending_color[1]},${ending_color[2]},${ending_color[3]})`
    } else if (scroll_pos < animation_begin_pos) {
      el.style.backgroundColor = `rgba(${beginning_color[0]},${beginning_color[1]},${beginning_color[2]},${beginning_color[3]})`
      nav.style.backgroundColor = `rgba(${beginning_color[0]},${beginning_color[1]},${beginning_color[2]},${beginning_color[3]})`
    } else {
    }
  };

  return (
    <div
      className={`bg-hoc relative transition-colors min-h-screen`}
      style={{backgroundColor: `rgb(36,0,70,1)`}}
      id='bg-color'
    >
      <div className='sticky top-0 text-white'>{scrollY}</div>
      {children}
    </div>
  );
}
