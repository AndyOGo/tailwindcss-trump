# tailwindcss-trump

Increase Tailwind CSS Specificity - without [`!` important modifier](https://tailwindcss.com/docs/configuration#important-modifier).

> **Note:** Repeated occurrences of the same simple selector are allowed and do increase specificity.
https://www.w3.org/TR/selectors-3/#specificity

## Installation

```sh
# npm
npm install tailwindcss-trump --save-dev

# yarn
yarn add --dev tailwindcss-trump
```

## Configuration

Add the plugin to the `plugins` array of the tailwind config file.  

```js
// tailwind.config.js
module.exports = {
  // ...

  plugins: [
    // ...
    require("tailwindcss-trump"),
  ],
};
```

Optionally set your trump name in the config.

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
    trumpName: "bump",
    // will result in bump: variant
  },
  // ...
};
```

## Usage

Use the `trump:` modifier (you can play with it [here](https://play.tailwindcss.com/BJ3MoDbTJn)):

```html
<div class="bg-red-500 bg-sky-500 h-4"></div>

<div class="trump:bg-red-500 bg-sky-500 h-4"></div>

<div class="trump:bg-red-500 trump:bg-sky-500 h-4"></div>

<div class="trump:trump:bg-red-500 trump:bg-sky-500 h-4"></div>
```
