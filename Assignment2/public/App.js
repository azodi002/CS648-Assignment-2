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

var IssueList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueList, _React$Component);

  function IssueList() {
    var _this;

    _classCallCheck(this, IssueList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueList).call(this));
    _this.state = {
      issues: []
    };
    _this.createIssue = _this.createIssue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueList, [{
    key: "createIssue",
    value: function createIssue(issue) {
      var newIssueList = this.state.issues.slice();
      newIssueList.push(issue);
      this.setState({
        issues: newIssueList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "My Company Inventory"), React.createElement(IssueFilter, null), React.createElement("hr", null), React.createElement(IssueTable, {
        issues: this.state.issues
      }), React.createElement("hr", null), React.createElement(NewProductFilter, null), React.createElement("hr", null), React.createElement(IssueAdd, {
        createIssue: this.createIssue
      }));
    }
  }]);

  return IssueList;
}(React.Component);

var IssueFilter =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(IssueFilter, _React$Component2);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(IssueFilter).apply(this, arguments));
  }

  _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, " Showing all available products ");
    }
  }]);

  return IssueFilter;
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

function IssueTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return React.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    });
  });
  return React.createElement("table", {
    className: "bordered-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Product Name"), React.createElement("th", null, "Price"), React.createElement("th", null, "Category"), React.createElement("th", null, "Image"))), React.createElement("tbody", null, issueRows));
}

var IssueAdd =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(IssueAdd, _React$Component4);

  function IssueAdd() {
    var _this2;

    _classCallCheck(this, IssueAdd);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(IssueAdd).call(this));
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(IssueAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.issueAdd;
      var issue = {
        price: form.price.value,
        product_name: form.product_name.value,
        image_path: form.image_path.value,
        category: form.category.value
      };
      this.props.createIssue(issue);
      form.price.value = "";
      form.product_name.value = "";
      form.image_path.value = "";
      form.category.value = "Shirts";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        name: "issueAdd",
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
      }, "Accessories")), React.createElement("input", {
        type: "text",
        name: "price",
        placeholder: "$"
      }), React.createElement("br", null), React.createElement("br", null), React.createElement("div", null, React.createElement("span", {
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

  return IssueAdd;
}(React.Component);

function IssueRow(props) {
  var issue = props.issue;
  return React.createElement("tr", null, React.createElement("td", null, issue.product_name), React.createElement("td", null, "$", issue.price), React.createElement("td", null, issue.category), React.createElement("td", null, React.createElement("a", {
    target: "_blank",
    href: issue.image_path
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

var element = React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('content'));