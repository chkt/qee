# quee

Queue base class and readymades

## Install

```sh
$ npm install quee
```

## Use

```js
import Transform from 'quee/source/Transform';

let queue = new TransformQueue(...transforms).process(data);
```

## Extend

```js
import Queue from 'quee'

class ChildQueue extends Queue {
	process(args) {
		for (let fn of this) {
			...
		}
	}
}
```