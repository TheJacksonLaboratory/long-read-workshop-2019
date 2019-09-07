<section class="clearfix container-fluid" id="section-basics" ng-controller="basicsCtrl">
	<h2 class="h2">The basics</h2>
	<div class="row">
		<p class="text-justify">
			The first thing is to add the module <code>angular.module('myApp',['smart-table']</code> to your angular
			application.
			Then use the markup you would normally do
			for html tables. On the table element add the <code>st-table</code> attribute to tell smart-table which collection
			holds your <strong>displayed data</strong>, (i.e., the one you are going to use in the repeater). Now you will be able to compose the table using the plugins.
		</p>
	</div>
			<tabset>
				<tab heading="Markup">
<pre ng-non-bindable><code class="language-markup">&lt;table st-table="rowCollection" class="table table-striped">
	&lt;thead>
	&lt;tr>
		&lt;th>first name&lt;/th>
		&lt;th>last name&lt;/th>
		&lt;th>birth date&lt;/th>
		&lt;th>balance&lt;/th>
		&lt;th>email&lt;/th>
	&lt;/tr>
	&lt;/thead>
	&lt;tbody>
	&lt;tr ng-repeat="row in rowCollection">
		&lt;td>{{row.firstName}}&lt;/td>
		&lt;td>{{row.lastName}}&lt;/td>
		&lt;td>{{row.birthDate}}&lt;/td>
		&lt;td>{{row.balance}}&lt;/td>
		&lt;td>{{row.email}}&lt;/td>
	&lt;/tr>
	&lt;/tbody>
&lt;/table></code></pre>
				</tab>
				<tab heading="javascript">
<pre><code class="language-javascript">app.controller('basicsCtrl', ['$scope', function (scope) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];
}]);
</code></pre>
				</tab>
			</tabset>
			<table st-table="rowCollection" class="table table-striped">
				<thead>
				<tr>
					<th>first name</th>
					<th>last name</th>
					<th>birth date</th>
					<th>balance</th>
					<th>email</th>
				</tr>
				</thead>
				<tbody>
				<tr ng-repeat="row in rowCollection">
					<td>{{row.firstName}}</td>
					<td>{{row.lastName}}</td>
					<td>{{row.birthDate}}</td>
					<td>{{row.balance}}</td>
					<td>{{row.email}}</td>
				</tr>
				</tbody>
			</table>

	<p class="text-justify">
		Of course in this short example, smart-table does not bring much as we don't use any of the plugins but we are now ready to compose our table.
	</p>

	<p class="text-justify bg-danger padding">smart-table first creates a safe copy of your displayed collection: it creates another array by copying the <strong>references</strong> of the items. It will then modify the displayed collection (when sorting, filtering, etc.) based on its safe copy. So if you don't intend to modify the collection outside of the table, it will be all fine.
		However, if you want to modify the collection (add item, remove item), or <strong>if you load your data asynchronously (via AJAX-Call, timeout, etc.)</strong> you will have to tell smart-table to watch the original collection so it can update its safe copy. This is where you use the <strong>stSafeSrc attribute</strong>.
	</p>

	<h3 class="h3">stSafeSrc attribute</h3>
	
	<p class="text-justify bg-danger padding">If you are bringing in data asynchronously (from a remote database, restful endpoint, ajax call, etc.) you must use the stSafeSrc attribute. You must use a separate collection for both the base and safe collections or you may end up with an infinite loop.</p>

	<p class="text-justify">Use it to tell smart-table which collection to watch if you intend to modify its content. Don't pay attention to the sort and filter directives for the moment but use the table and note how the data is correctly synced.</p>

	<tabset>
		<tab heading="Markup">
<pre ng-non-bindable><code class="language-markup">	&lt;div ng-controller="safeCtrl">

		&lt;button type="button" ng-click="addRandomItem(row)" class="btn btn-sm btn-success">
			&lt;i class="glyphicon glyphicon-plus">
			&lt;/i> Add random item
		&lt;/button>

		&lt;table st-table="displayedCollection" st-safe-src="rowCollection" class="table table-striped">
			&lt;thead>
			&lt;tr>
				&lt;th st-sort="firstName">first name&lt;/th>
				&lt;th st-sort="lastName">last name&lt;/th>
				&lt;th st-sort="birthDate">birth date&lt;/th>
				&lt;th st-sort="balance">balance&lt;/th>
			&lt;/tr>
			&lt;tr>
				&lt;th colspan="5">&lt;input st-search="" class="form-control" placeholder="global search ..." type="text"/>&lt;/th>
			&lt;/tr>
			&lt;/thead>
			&lt;tbody>
			&lt;tr ng-repeat="row in displayedCollection">
				&lt;td>{{row.firstName}}&lt;/td>
				&lt;td>{{row.lastName}}&lt;/td>
				&lt;td>{{row.birthDate}}&lt;/td>
				&lt;td>{{row.balance}}&lt;/td>
				&lt;td>
				&lt;button type="button" ng-click="removeItem(row)" class="btn btn-sm btn-danger">
					&lt;i class="glyphicon glyphicon-remove-circle">
					&lt;/i>
				&lt;/button>
				&lt;/td>
			&lt;/tr>
			&lt;/tbody>
		&lt;/table>

	&lt;/div></code></pre>
		</tab>
		<tab heading="javascript">
<pre><code class="language-javascript">app.controller('safeCtrl', ['$scope', function ($scope) {

    var firstnames = ['Laurent', 'Blandine', 'Olivier', 'Max'];
    var lastnames = ['Renard', 'Faivre', 'Frere', 'Eponge'];
    var dates = ['1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06'];
    var id = 1;

    function generateRandomItem(id) {

        var firstname = firstnames[Math.floor(Math.random() * 3)];
        var lastname = lastnames[Math.floor(Math.random() * 3)];
        var birthdate = dates[Math.floor(Math.random() * 3)];
        var balance = Math.floor(Math.random() * 2000);

        return {
            id: id,
            firstName: firstname,
            lastName: lastname,
            birthDate: new Date(birthdate),
            balance: balance
        }
    }

    $scope.rowCollection = [];

    for (id; id < 5; id++) {
        $scope.rowCollection.push(generateRandomItem(id));
    }

    //add to the real data holder
    $scope.addRandomItem = function addRandomItem() {
        $scope.rowCollection.push(generateRandomItem(id));
        id++;
    };

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
        var index = $scope.rowCollection.indexOf(row);
        if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
        }
    }
}]);</code></pre>
		</tab>
	</tabset>
	
	<div ng-controller="safeCtrl">

		<button type="button" ng-click="addRandomItem(row)" class="btn btn-sm btn-success">
			<i class="glyphicon glyphicon-plus">
			</i> Add random item
		</button>

		<table st-table="displayedCollection" st-safe-src="rowCollection" class="table table-striped">
			<thead>
			<tr>
				<th st-sort="firstName">first name</th>
				<th st-sort="lastName">last name</th>
				<th st-sort="birthDate">birth date</th>
				<th st-sort="balance">balance</th>
			</tr>
			<tr>
				<th colspan="5"><input st-search="" class="form-control" placeholder="global search ..." type="text"/></th>
			</tr>
			</thead>
			<tbody>
			<tr ng-repeat="row in displayedCollection">
				<td>{{row.firstName}}</td>
				<td>{{row.lastName}}</td>
				<td>{{row.birthDate}}</td>
				<td>{{row.balance}}</td>
				<td>
				<button type="button" ng-click="removeItem(row)" class="btn btn-sm btn-danger">
					<i class="glyphicon glyphicon-remove-circle">
					</i>
				</button>
				</td>
			</tr>
			</tbody>
		</table>

	</div>
	<div class="text-center"><a class="btn btn-primary"
		 href="https://github.com/lorenzofox3/smart-table-website/tree/gh-pages/sections/basics"><i
		class="glyphicon glyphicon-pencil"></i>improve the documentation</a></div>
</section>