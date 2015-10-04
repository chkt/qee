'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ERRNOREF = 'invalid reference';

var _q = new WeakMap();

var Queue = (function () {
	function Queue() {
		_classCallCheck(this, Queue);

		_q.set(this, []);

		for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
			fns[_key] = arguments[_key];
		}

		if (fns.length !== 0) this.append.apply(this, fns);
	}

	_createClass(Queue, [{
		key: 'insert',
		value: function insert(before) {
			if (typeof before !== 'function') throw new TypeError();

			var q = _q.get(this),
			    index = q.indexOf(before);

			if (index === -1) throw new Error(_ERRNOREF);

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			for (var _len2 = arguments.length, fns = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				fns[_key2 - 1] = arguments[_key2];
			}

			try {
				for (var _iterator = fns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var fn = _step.value;

					if (typeof fn !== 'function') throw new TypeError();
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator['return']) {
						_iterator['return']();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			q.splice.apply(q, [index, 0].concat(fns));

			return this;
		}
	}, {
		key: 'append',
		value: function append() {
			var _q$get;

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			for (var _len3 = arguments.length, fns = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				fns[_key3] = arguments[_key3];
			}

			try {
				for (var _iterator2 = fns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var fn = _step2.value;

					if (typeof fn !== 'function') throw new TypeError();
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2['return']) {
						_iterator2['return']();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			(_q$get = _q.get(this)).push.apply(_q$get, fns);

			return this;
		}
	}, {
		key: 'remove',
		value: function remove() {
			var q = _q.get(this),
			    p = q.slice(0);

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
					fns[_key4] = arguments[_key4];
				}

				for (var _iterator3 = fns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var fn = _step3.value;

					if (typeof fn !== 'function') throw new TypeError();

					var index = p.indexOf(fn);

					if (index !== -1) p.splice(index, 1);
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3['return']) {
						_iterator3['return']();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			q.splice.apply(q, [0, q.length].concat(_toConsumableArray(p)));

			return this;
		}
	}, {
		key: 'clear',
		value: function clear() {
			var q = _q.get(this);

			q.splice(0, q.length);

			return this;
		}
	}, {
		key: 'has',
		value: function has(fn) {
			if (typeof fn !== 'function') throw new TypeError();

			return _q.get(this).indexOf(fn) !== -1;
		}
	}, {
		key: Symbol.iterator,
		value: regeneratorRuntime.mark(function value() {
			var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, item;

			return regeneratorRuntime.wrap(function value$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						_iteratorNormalCompletion4 = true;
						_didIteratorError4 = false;
						_iteratorError4 = undefined;
						context$2$0.prev = 3;
						_iterator4 = _q.get(this)[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
							context$2$0.next = 12;
							break;
						}

						item = _step4.value;
						context$2$0.next = 9;
						return item;

					case 9:
						_iteratorNormalCompletion4 = true;
						context$2$0.next = 5;
						break;

					case 12:
						context$2$0.next = 18;
						break;

					case 14:
						context$2$0.prev = 14;
						context$2$0.t0 = context$2$0['catch'](3);
						_didIteratorError4 = true;
						_iteratorError4 = context$2$0.t0;

					case 18:
						context$2$0.prev = 18;
						context$2$0.prev = 19;

						if (!_iteratorNormalCompletion4 && _iterator4['return']) {
							_iterator4['return']();
						}

					case 21:
						context$2$0.prev = 21;

						if (!_didIteratorError4) {
							context$2$0.next = 24;
							break;
						}

						throw _iteratorError4;

					case 24:
						return context$2$0.finish(21);

					case 25:
						return context$2$0.finish(18);

					case 26:
					case 'end':
						return context$2$0.stop();
				}
			}, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		})
	}, {
		key: 'items',
		get: function get() {
			return _q.get(this).slice(0);
		}
	}]);

	return Queue;
})();

exports['default'] = Queue;
module.exports = exports['default'];