import _assert from 'assert';

import Queue from '../source/Queue';



describe("Queue", () => {
	describe("#constructor", () => {
		it("should return an instance", () => {
			_assert(new Queue() instanceof Queue);
		});

		it("should accept a function argument", () => {
			function fna() {};

			_assert.doesNotThrow(() => new Queue(fna))
		});

		it("should accept multiple function arguments", () => {
			function fna() {};
			function fnb() {};
			function fnc() {};

			_assert.doesNotThrow(() => new Queue(fna, fnb, fnc));
		});

		it("should only accept function arguments", () => {
			function fna() {};

			_assert.throws(() => new Queue({}), TypeError);
			_assert.throws(() => new Queue([]), TypeError);
			_assert.throws(() => new Queue("1"), TypeError);
			_assert.throws(() => new Queue(fna, {}), TypeError);
		});
	});

	describe('#append', () => {
		it("should accept any number of function arguments", () => {
			function fna() {};
			function fnb() {};
			function fnc() {};

			const ins = new Queue();

			_assert.doesNotThrow(() => ins.append());
			_assert.doesNotThrow(() => ins.append(fna));
			_assert.doesNotThrow(() => ins.append(fna, fnb, fnc));
		});

		it("should only accept function arguments", () => {
			function fna() {};

			const ins = new Queue();

			_assert.throws(() => ins.append({}), TypeError);
			_assert.throws(() => ins.append([]), TypeError);
			_assert.throws(() => ins.append("1"), TypeError);
			_assert.throws(() => ins.append(fna, {}), TypeError);
		});

		it("should not mutate its state when throwing", () => {
			function fna() {}

			const ins = new Queue();

			try {
				ins.append(fna, {});
			}
			catch(err) {}

			_assert(!ins.has(fna));
		});

		it("should append all function arguments", () => {
			function fna() {}
			function fnb() {}
			function fnc() {}

			const ins = new Queue(fna);

			ins.append(fnb);
			ins.append(fnc);

			const items = ins.items;

			_assert(items[0] === fna && items[1] === fnb && items[2] === fnc);
		});

		it("should be chainable", () => {
			function fna () {}

			const ins = new Queue();

			_assert.strictEqual(ins.append(fna), ins);
			_assert.strictEqual(ins.append(), ins);
		});
	});

	describe('#insert', () => {
		it("should at require an argument referencing the insertion point", () => {
			function fna() {}

			const ins = new Queue(fna);

			_assert.doesNotThrow(() => ins.insert(fna));
		});

		it("should require the insertion point argument to be a function", () => {
			function fna() {};

			const ins = new Queue(fna);

			_assert.throws(() => ins.insert({}), TypeError);
			_assert.throws(() => ins.insert([]), TypeError);
			_assert.throws(() => ins.insert("1"), TypeError);
		});

		it("should throw if the insertion point does not exist", () => {
			function fna() {};

			const ins = new Queue();

			_assert.throws(() => ins.insert(fna), Error);
		});

		it("should accept any number of function arguments", () => {
			function fna() {}
			function fnb() {}
			function fnc() {}
			function fnd() {}

			const ins = new Queue(fna);

			_assert.doesNotThrow(() => ins.insert(fna));
			_assert.doesNotThrow(() => ins.insert(fna, fnb));
			_assert.doesNotThrow(() => ins.insert(fna, fnb, fnc, fnd));
		});

		it("should only accept function arguments", () => {
			function fna() {}
			function fnb() {}

			const ins = new Queue(fna);

			_assert.throws(() => ins.insert(fna, {}), TypeError);
			_assert.throws(() => ins.insert(fna, []), TypeError);
			_assert.throws(() => ins.insert(fna, "1"), TypeError);
			_assert.throws(() => ins.insert(fna, fnb, {}), TypeError);
		});

		it("should not mutate its state when throwing", () => {
			function fna() {}
			function fnb() {}

			const ins = new Queue(fna);

			try {
				ins.insert(fna, fnb, {});
			}
			catch(err) {}

			_assert(!ins.has(fnb));
		});

		it("should insert all additional arguments before the insertion point", () => {
			function fna() {}
			function fnb() {}
			function fnc() {}
			function fnd() {}

			const ins = new Queue(fna, fnd);

			ins.insert(fnd, fnb, fnc);

			const items = ins.items;

			_assert(
				items[0] === fna &&
				items[1] === fnb &&
				items[2] === fnc &&
				items[3] === fnd
			);
		});

		it("should be chainable", () => {
			function fna() {}
			function fnb() {}

			const ins = new Queue(fna);

			_assert.strictEqual(ins.insert(fna), ins);
			_assert.strictEqual(ins.insert(fna, fnb), ins);
		});
	});

	describe('#remove', () => {
		it("should accept any number of function arguments", () => {
			function fna() {}
			function fnb() {}
			function fnc() {}
			function fnd() {}

			const ins = new Queue(fna, fnb, fnc, fnd);

			_assert.doesNotThrow(() => ins.remove());
			_assert.doesNotThrow(() => ins.remove(fna));
			_assert.doesNotThrow(() => ins.remove(fnb, fnc, fnd));
		});

		it("should only accept function arguments", () => {
			function fna() {}

			const ins = new Queue();

			_assert.throws(() => ins.remove({}), TypeError);
			_assert.throws(() => ins.remove([]), TypeError);
			_assert.throws(() => ins.remove("1"), TypeError);
			_assert.throws(() => ins.remove(fna, {}), TypeError);
		});

		it("should not mutate its state when throwing", () => {
			function fna() {}

			const ins = new Queue(fna);

			try {
				ins.remove(fna, {});
			}
			catch(err) {}

			_assert(ins.has(fna));
		});

		it("should remove all function arguments", () => {
			function fna() {}
			function fnb() {}
			function fnc() {}

			const ins = new Queue(fna, fnb, fnc);

			ins.remove(fnb);
			ins.remove(fna, fnc);

			_assert.strictEqual(ins.items.length, 0);
		});

		it("should ignore function arguments that do not exist", () => {
			function fna() {}
			function fnb() {}
			function fnc() {}

			const ins = new Queue(fna, fnb);

			_assert.doesNotThrow(() => ins.remove(fnc));
			_assert.strictEqual(ins.items.length, 2);
		});

		it("should be chainable", () => {
			function fna() {}
			function fnb() {}
			function fnc() {}

			const ins = new Queue(fna, fnb, fnc);

			_assert.strictEqual(ins.remove(), ins);
			_assert.strictEqual(ins.remove(fna), ins);
			_assert.strictEqual(ins.remove(fnb, fnc), ins);
			_assert.strictEqual(ins.remove(fna, fnb, fnc), ins);
		});
	});

	describe('#clear', () => {
		it("should remove all queue functions", () => {
			function fna() {}
			function fnb() {}
			function fnc() {}

			const ins = new Queue(fna, fnb, fnc);

			ins.clear();

			_assert.strictEqual(ins.items.length, 0);
		});

		it("should be chainable", () => {
			const ins = new Queue();

			_assert.strictEqual(ins.clear(), ins);
		});
	});

	describe("#has", () => {
		it("should accept a function argument", () => {
			function fna() {}

			const ins = new Queue();

			_assert.throws(() => ins.has(), TypeError);
			_assert.doesNotThrow(() => ins.has(fna));
		});

		it("should only accept a function argument", () => {
			const ins = new Queue();

			_assert.throws(() => ins.has({}), TypeError);
			_assert.throws(() => ins.has([]), TypeError);
			_assert.throws(() => ins.has("1"), TypeError);
		});

		it("should return true if the function is part of the queue", () => {
			function fna() {}
			function fnb() {}
			function fnc() {}

			const ins = new Queue(fna, fnb, fnc);

			_assert.strictEqual(ins.has(fna), true);
			_assert.strictEqual(ins.has(fnb), true);
			_assert.strictEqual(ins.has(fnc), true);
		});

		it("should return false if the function is not part if the queue", () => {
			function fna() {}
			function fnb() {}
			function fnc() {}
			function fnd() {}

			const ins = new Queue(fna, fnb, fnc);

			_assert.strictEqual(ins.has(fnd), false);
		});
	});

	describe("[Symbol.iterator]", () => {
		it("should allow for of iteration", () => {
			function fna() {}
			function fnb() {}
			function fnc() {}

			const ins = new Queue(fna, fnb, fnc);
			let iterate = false;

			for (let fn of ins) iterate = true;

			_assert.strictEqual(iterate, true);
		});

		it("should return all contained functions in order", () => {
			function fna() {}
			function fnb() {}
			function fnc() {}

			const ins = new Queue(fna, fnb, fnc);
			const items = [];

			for (let fn of ins) items.push(fn);

			_assert(
				items[0] === fna &&
				items[1] === fnb &&
				items[2] === fnc
			);
		});
	});

	describe("#items", () => {
		it("should return an array", () => {
			const ins = new Queue();

			_assert.deepStrictEqual(ins.items, []);
		});

		it("should return a copy, not a reference", () => {
			function fna() {}

			const ins = new Queue();
			const items = ins.items;

			ins.append(fna);

			_assert.notDeepStrictEqual(items, ins.items);
		});

		it("should contain all added functions", () => {
			function fna() {}
			function fnb() {}
			function fnc() {}

			const ins = new Queue(fna, fnb, fnc);
			const items = ins.items;

			_assert(
				items[0] === fna &&
				items[1] === fnb &&
				items[2] === fnc
			);
		});

		it("should not be settable", () => {
			const ins = new Queue();

			_assert.throws(() => {
				ins.items = []
			});
		});
	});
});
