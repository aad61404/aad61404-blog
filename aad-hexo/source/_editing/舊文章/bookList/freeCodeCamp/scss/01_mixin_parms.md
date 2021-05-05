
https://www.freecodecamp.org/learn/front-end-libraries/sass/create-reusable-css-with-mixins

Create Reusable CSS with Mixins

<style type='text/sass'>

@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
