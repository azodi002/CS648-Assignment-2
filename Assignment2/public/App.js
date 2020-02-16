"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProductList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductList, _React$Component);

  function ProductList() {
    var _this;

    _classCallCheck(this, ProductList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductList).call(this));
    _this.state = {
      products: []
    };
    _this.createProduct = _this.createProduct.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductList, [{
    key: "createProduct",
    value: function createProduct(product) {
      var newProductList = this.state.products.slice();
      newProductList.push(product);
      product.id = this.state.products.length + 1;
      this.setState({
        products: newProductList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "My Company Inventory"), React.createElement(ProductFilter, null), React.createElement("hr", null), React.createElement(ProductTable, {
        products: this.state.products
      }), React.createElement("hr", null), React.createElement(NewProductFilter, null), React.createElement("hr", null), React.createElement(ProductAdd, {
        createProduct: this.createProduct
      }));
    }
  }]);

  return ProductList;
}(React.Component);

var ProductFilter =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ProductFilter, _React$Component2);

  function ProductFilter() {
    _classCallCheck(this, ProductFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductFilter).apply(this, arguments));
  }

  _createClass(ProductFilter, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, " Showing all available products ");
    }
  }]);

  return ProductFilter;
}(React.Component);

var NewProductFilter =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(NewProductFilter, _React$Component3);

  function NewProductFilter() {
    _classCallCheck(this, NewProductFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(NewProductFilter).apply(this, arguments));
  }

  _createClass(NewProductFilter, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, " Add a new product to inventory ");
    }
  }]);

  return NewProductFilter;
}(React.Component);

function ProductTable(props) {
  var ProductRows = props.products.map(function (product) {
    return React.createElement(ProductRow, {
      key: product.id,
      product: product
    });
  });
  return React.createElement("table", {
    className: "bordered-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Product Name"), React.createElement("th", null, "Price"), React.createElement("th", null, "Category"), React.createElement("th", null, "Image"))), React.createElement("tbody", null, ProductRows));
}

var ProductAdd =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(ProductAdd, _React$Component4);

  function ProductAdd() {
    var _this2;

    _classCallCheck(this, ProductAdd);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ProductAdd).call(this));
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(ProductAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.ProductAdd;
      var product = {
        price: form.price.value,
        product_name: form.product_name.value,
        image_path: form.image_path.value,
        category: form.category.value
      };
      this.props.createProduct(product);
      form.price.value = "";
      form.product_name.value = "";
      form.image_path.value = "";
      form.category.value = "Shirts";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        name: "ProductAdd",
        onSubmit: this.handleSubmit
      }, React.createElement("div", null, React.createElement("span", {
        class: "category_label"
      }, "Category "), React.createElement("span", {
        class: "price_label"
      }, "Price Per Unit")), React.createElement("select", {
        id: "category"
      }, React.createElement("option", {
        value: "shirts"
      }, "Shirts"), React.createElement("option", {
        value: "jeans"
      }, "Jeans"), React.createElement("option", {
        value: "jackets"
      }, "Jackets"), React.createElement("option", {
        value: "sweaters"
      }, "Sweaters"), React.createElement("option", {
        value: "accessories"
      }, "Accessories")), React.createElement("span", {
        class: "currencyinput"
      }, "$", React.createElement("input", {
        type: "text",
        name: "price"
      })), React.createElement("br", null), React.createElement("br", null), React.createElement("div", null, React.createElement("span", {
        class: "product_label"
      }, "Product Name "), React.createElement("span", {
        class: "image_label"
      }, "Image URL")), React.createElement("input", {
        type: "text",
        id: "product_text",
        name: "product_name",
        placeholder: ""
      }), React.createElement("input", {
        type: "text",
        name: "image_path",
        placeholder: ""
      }), React.createElement("br", null), React.createElement("br", null), React.createElement("button", {
        id: "add_product_button"
      }, "Add Product"));
    }
  }]);

  return ProductAdd;
}(React.Component);

function ProductRow(props) {
  var products = props.product;
  return React.createElement("tr", null, React.createElement("td", null, products.product_name), React.createElement("td", null, "$", products.price), React.createElement("td", null, products.category), React.createElement("td", null, React.createElement("a", {
    target: "_blank",
    href: products.image_path
  }, "View ")));
}

var BorderWrap =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(BorderWrap, _React$Component5);

  function BorderWrap() {
    _classCallCheck(this, BorderWrap);

    return _possibleConstructorReturn(this, _getPrototypeOf(BorderWrap).apply(this, arguments));
  }

  _createClass(BorderWrap, [{
    key: "render",
    value: function render() {
      var borderedStyle = {
        border: "1px solid silver",
        padding: 6
      };
      return React.createElement("div", {
        style: borderedStyle
      }, this.props.children);
    }
  }]);

  return BorderWrap;
}(React.Component);

var element = React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('content'));