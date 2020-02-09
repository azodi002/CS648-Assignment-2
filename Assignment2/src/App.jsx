class IssueList extends React.Component{
	
	constructor(){
		super();
		this.state = {issues: []};
		this.createIssue = this.createIssue.bind(this);
	}
 
	createIssue(issue) {
		const newIssueList = this.state.issues.slice();
		newIssueList.push(issue);
		this.setState({issues:newIssueList});
	}


	render() {
		return(
			<React.Fragment>
				<h1>My Company Inventory</h1>
				<IssueFilter />
				<hr />
				<IssueTable issues = {this.state.issues} />
				<hr />
				<NewProductFilter />
				<hr />
				<IssueAdd createIssue={this.createIssue}/>
			</React.Fragment>

		);
	}
}

class IssueFilter extends React.Component {
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

function IssueTable(props) {
  const issueRows = props.issues.map(issue =>
    <IssueRow key={issue.id} issue={issue} />
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
        {issueRows}
      </tbody>
    </table>
  );
}

class IssueAdd extends React.Component {

	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const form = document.forms.issueAdd;
		const issue = {
			price: form.price.value, product_name : form.product_name.value, image_path:form.image_path.value,
			category: form.category.value,
		}
		

		this.props.createIssue(issue);
		form.price.value = "";
		form.product_name.value = "";
		form.image_path.value = "";
		form.category.value = "Shirts";
	}

	render() {
		return (
			<form name = "issueAdd" onSubmit={this.handleSubmit}>
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


				<input type = "text" name = "price" placeholder = "$" />
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

function IssueRow(props) {
  const issue = props.issue;
  return (
    <tr>
      <td>{issue.product_name}</td>
      <td>${issue.price}</td>
      <td>{issue.category}</td>
      <td>
      	<a target="_blank" href={issue.image_path}>View </a>
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


const element = <IssueList />;
ReactDOM.render(element, document.getElementById('content'));