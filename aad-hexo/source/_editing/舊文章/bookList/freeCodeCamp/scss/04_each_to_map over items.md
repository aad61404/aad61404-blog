https://www.freecodecamp.org/learn/front-end-libraries/sass/use-each-to-map-over-items-in-a-list


<style type='text/sass'>

$colors: (color1 : blue , color2 : black, color3 : red);

@each $key, $color in $colors {
  .#{$color}-bg {background-color: $color;}
}

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>


@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}