import _assert from 'assert';

import Queue from '../source/Queue';



describe("Queue", () => {
	describe("#constructor", () => {
		it("should return an instance", () => {
			_assert(new Queue() instanceof Queue);
		});

		it("should accept a function argument");

		it("should accept multiple function arguments");
	});

	describe('#append', () => {
		it("should accept any number of function arguments");

		it("should only accept function arguments");

		it("should not mutate its state when throwing");

		it("should append all function arguments");

		it("should be chainable");
	});

	describe('#insert', () => {
		it("should at require an argument referencing the insertion point");

		it("should throw if the insertion point does not exist");

		it("should accept any number of function arguments");

		it("should only accept function arguments");

		it("should not mutate its state when throwing");

		it("should insert all additional arguments before the insertion point");

		it("should be chainable");
	});

	describe('#remove', () => {
		it("should accept any number of function arguments");

		it("should only accept function arguments");

		it("should not mutate its state when throwing");

		it("should remove all function arguments");

		it("should ignore function arguments that do not exist");

		it("should be chainable");
	});

	describe('#clear', () => {
		it("should remove all queue functions");

		it("should be chainable");
	});

	describe("#has", () => {
		it("should accept a function argument");

		it("should return true if the function is part of the queue");

		it("should return false if the function is not part if the queue");
	});

	describe("[Symbol.iterator]", () => {
		it("should allow for of iteration");

		it("should return all contained functions in order");
	});

	describe("#items", () => {
		it("should return an array");

		it("should return a copy, not a reference");

		it("should contain all added functions");

		it("should not be settable");
	});
});
