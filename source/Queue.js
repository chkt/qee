const _ERRNOREF = 'invalid reference';

const _q = new WeakMap();



export default class Queue {
	constructor(...fns) {
		_q.set(this, []);

		if (fns.length !== 0) this.append(...fns);
	}


	get items() {
		return _q.get(this).slice(0);
	}


	insert(before, ...fns) {
		if (typeof before !== 'function') throw new TypeError();

		const q = _q.get(this), index = q.indexOf(before);

		if (index === -1) throw new Error(_ERRNOREF);

		for (let fn of fns) {
			if (typeof fn !== 'function') throw new TypeError();
		}

		q.splice(index, 0, ...fns);

		return this;
	}

	append(...fns) {
		for (let fn of fns) {
			if (typeof fn !== 'function') throw new TypeError();
		}

		_q.get(this).push(...fns);

		return this;
	}

	remove(...fns) {
		const q = _q.get(this), p = q.slice(0);

		for (let fn of fns) {
			if (typeof fn !== 'function') throw new TypeError();

			const index = p.indexOf(fn);

			if (index !== -1) p.splice(index, 1);
		}

		q.splice(0, q.length, ...p);

		return this;
	}


	clear() {
		const q = _q.get(this);

		q.splice(0, q.length);

		return this;
	}


	has(fn) {
		if (typeof fn !== 'function') throw new TypeError();

		return _q.get(this).indexOf(fn) !== -1;
	}


	*[Symbol.iterator]() {
		for (let item of _q.get(this)) yield item;
	}
}
