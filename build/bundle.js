'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mammal = function () {
	function Mammal() {
		_classCallCheck(this, Mammal);

		this.type = 'Mammal';
		this.hasFurr = true;
	}

	_createClass(Mammal, [{
		key: 'toString',
		value: function toString() {
			return this.type + ' has Furr';
		}
	}, {
		key: 'setName',
		value: function setName(newName) {
			this.name = newName;
		}
	}]);

	return Mammal;
}();

var Dog = function (_Mammal) {
	_inherits(Dog, _Mammal);

	function Dog() {
		_classCallCheck(this, Dog);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dog).call(this));

		_this.name = "doge";
		return _this;
	}

	return Dog;
}(Mammal);

var Cat = function (_Mammal2) {
	_inherits(Cat, _Mammal2);

	function Cat(color) {
		_classCallCheck(this, Cat);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Cat).call(this));

		_this2.color = color;
		_this2.name = "cate";
		return _this2;
	}

	_createClass(Cat, [{
		key: 'toString',
		value: function toString() {
			return "this is the toString for class: " + this.constructor.name + " (instance = " + this.name + ")";
		}
	}]);

	return Cat;
}(Mammal);

var dog = new Dog("keshet"),
    cat = new Cat("kitty", "blue"),
    myMap = new Map();

myMap.set("dog", dog);