import _assert from 'assert';

import Queue from '../source/Queue';
import Transform from '../source/Transform';



describe("Transform", () => {
	it("should be an instance of Queue", () => {
		const ins = new Transform();

		_assert(ins instanceof Queue);
	});

	describe("#process", () => {
		it("should return its argument if the queue is empty", () => {
			const obj = {};
			const arr = [];
			const fn = function() {};
			const sym = Symbol();

			const ins = new Transform();

			_assert.strictEqual(ins.process(obj), obj);
			_assert.strictEqual(ins.process(arr), arr);
			_assert.strictEqual(ins.process(fn), fn);
			_assert.strictEqual(ins.process(sym), sym);
		});

		it("should pass its argument to the first queue function", () => {
			const data = {};

			function fna(d) {
				_assert.strictEqual(d, data);
			}

			const ins = new Transform(fna);

			ins.process(data);
		});

		it("should use the output of queue functions as input for subsequent functions", () => {
			const data = {
				a : 1
			};

			function fna (d) {
				_assert.strictEqual(d, data);

				return {
					b : d.a
				}
			}

			function fnb (d) {
				_assert.strictEqual(d.b, data.a);

				return {
					c : d.b
				}
			}

			function fnc (d) {
				_assert.strictEqual(d.c, data.a);

				return {
					d : d.c
				}
			}

			const ins = new Transform(fna, fnb, fnc);

			ins.process(data);
		});

		it("should return the return value of the last queue function", () => {
			const ins = new Transform(
				(data) => ({
					b : data.a
				}),
				(data) => ({
					c : data.b
				}),
				(data) => ({
					d : data.c
				})
			);

			_assert.strictEqual(ins.process({ a : 1 }).d, 1);
		});
	});
});