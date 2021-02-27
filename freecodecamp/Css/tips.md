Here's an example CSS class declaration:

<style>
  .blue-text {
    color: blue;
  }
</style>

<style>
fontsize, font-family
h2 {
  font-family: sans-serif;
}

p {
font-size: 16px;
} 
</style>


To import a Google Font, you can copy the font's URL from the Google Fonts library and then paste it in your HTML
>font-family: FAMILY_NAME, GENERIC_NAME;

>Degrade fonts: When a font is unavailable we have option to switch to other available font:
p {
  font-family: Helvetica, sans-serif;
}

you can apply multiple classes to an element using its class attribute, by separating each class name with a space. For example:

<img class="class1 class2">

>An id also has a higher specificity (importance) than a class so if both are applied to the same element and have conflicting styles, the styles of the id will be applied.

> you always reference classes by putting a . in front of their names. You always reference ids by putting a # in front of their names.