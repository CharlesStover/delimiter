# delimiter
Places delimiters between items in an array.
Defaults to a comma-separated list with an Oxford comma.

![package](https://img.shields.io/github/package-json/v/CharlesStover/delimiter.svg)
![build](https://travis-ci.com/CharlesStover/delimiter.svg)
![downloads](https://img.shields.io/npm/dt/delimiter.svg)
![minified size](https://img.shields.io/bundlephobia/min/delimiter.svg)
![minzipped size](https://img.shields.io/bundlephobia/minzip/delimiter.svg)

## Install
* `npm install delimiter --save` or
* `yarn add delimiter`

## Build
* `npm run build` or
* `yarn build`

## Test
* `npm run test` or
* `yarn test`

## Parameters
`delimiter(arr, serial, del)`

* ### arr
  The array to which you want to add delimiters.

* ### serial
  The separator for the last item in the array. (default: `and`)

  `delimiter([ 1, 2 ], 'or') === [ 1, ' or ', 2 ]);`

  `delimiter([ 1, 2, 3 ], 'or') === [ 1, ', ', 2, ', or ', 3 ]`

* ### del
  The delimiter you want to use. (default: `,`)

```JS
delimiter(
  [ 'Stover, Charles', 'Quisido, Ace', 'Gates, Bill' ],
  'and', ';'
) === [ 'Stover, Charles', '; ', 'Quisido, Ace', '; and ', 'Gates, Bill' ]
```

## Examples
This package was designed to separate React links using an Oxford comma but is extensible to other use cases.

### Arrays with Two Items
```JS
import delimiter from 'delimiter';

// JSX
const myLinks = [
  <CharlesStover />,
  <Quisido />
];

delimiter(myLinks); // [ <CharlesStover />, ' and ', <Quisido /> ]
```

### Arrays with Three or More Items
```JS
import delimiter from 'delimiter';

// JSX
const myLinks = [
  <CharlesStover />,
  <Quisido />,
  <Mtgenius />
];

delimiter(myLinks); // [ <CharlesStover />, ', ', <Quisido />, ', and ', <Mtgenius /> ]
```
