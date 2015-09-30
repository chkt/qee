# qee

Queue base class and readymades

## Install

```sh
$ npm install qee
```

## Use

```js
import Transform from 'qee/source/Transform';

let queue = new TransformQueue(...transforms).process(data);
```

## Extend

```js
import Queue from 'qee'

class ChildQueue extends Queue {
	process(args) {
		for (let fn of this) {
			...
		}
	}
}
```