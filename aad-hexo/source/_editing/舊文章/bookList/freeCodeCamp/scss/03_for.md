https://www.freecodecamp.org/learn/front-end-libraries/sass/use-for-to-create-a-sass-loop

<style type='text/sass'>

    @for $j from 1 through 5 {
        .text-#{$j} { font-size : 15px * $j;}
    }

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
