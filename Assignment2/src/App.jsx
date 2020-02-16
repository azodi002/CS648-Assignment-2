class ProductList extends React.Component{
	
	constructor(){
		super();
		this.state = {products: []};
		this.createProduct = this.createProduct.bind(this);
	}
 
	createProduct(product) {
		const newProductList = this.state.products.slice();
		newProductList.push(product);
		product.id = this.state.products.length + 1;
		this.setState({products:newProductList});
	}


	render() {
		return(
			<React.Fragment>
				<h1>My Company Inventory</h1>
				<ProductFilter />
				<hr />
				<ProductTable products = {this.state.products} />
				<hr />
				<NewProductFilter />
				<hr />
				<ProductAdd createProduct={this.createProduct}/>
			</React.Fragment>

		);
	}
}

class ProductFilter extends React.Component {
	render() {
		return (
			<div> Showing all available products </div>
		);
	}
}

class NewProductFilter extends React.Component {
	render() {
		return (
			<div> Add a new product to inventory </div>
		);
	}
}

function ProductTable(props) {
  const ProductRows = props.products.map(product =>
    <ProductRow key={product.id} product={product} />
  );

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {ProductRows}
      </tbody>
    </table>
  );
}

class ProductAdd extends React.Component {

	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const form = document.forms.ProductAdd;
		const product = {
			price: form.price.value, product_name : form.product_name.value, image_path:form.image_path.value,
			category: form.category.value,
		}
		

		this.props.createProduct(product);
		form.price.value = "";
		form.product_name.value = "";
		form.image_path.value = "";
		form.category.value = "Shirts";
	}

	render() {
		return (
			<form name = "ProductAdd" onSubmit={this.handleSubmit}>
				<div>
					<span class="category_label">Category </span>
					<span class="price_label">Price Per Unit</span>
				</div>
				<select id="category">
				  <option value="shirts">Shirts</option>
				  <option value="jeans">Jeans</option>
				  <option value="jackets">Jackets</option>
				  <option value="sweaters">Sweaters</option>
				  <option value="accessories">Accessories</option>
				</select>


				<span class="currencyinput">$<input type="text" name="price"/></span>
				<br />
				<br />

				<div>
					<span class="product_label">Product Name </span>
					<span class="image_label">Image URL</span>
				</div>
				<input type = "text" id = "product_text" name = "product_name" placeholder = "" />
				<input type = "text" name = "image_path" placeholder = "" />

				<br />
				<br />
				<button id = "add_product_button">Add Product</button>
			</form>
		);
	}
}

function ProductRow(props) {
  const products = props.product;
  return (
    <tr>
      <td>{products.product_name}</td>
      <td>${products.price}</td>
      <td>{products.category}</td>
      <td>
      	<a target="_blank" href={products.image_path}>View </a>
      </td>
    </tr>
  );
}

class BorderWrap extends React.Component {
	
	render() {
		const borderedStyle = {border: "1px solid silver", padding:6};
		return(
			<div style={borderedStyle}>
				{this.props.children}
			</div>
		);
	}
}


const element = <ProductList />;
ReactDOM.render(element, document.getElementById('content'));