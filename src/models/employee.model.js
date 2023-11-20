'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var Employee = function(employee){
	this.first_name = employee.first_name;
	this.last_name = employee.last_name;
	this.email = employee.email;
	this.phone = employee.phone;
	this.organization = employee.organization;
	this.designation = employee.designation;
	this.salary = employee.salary;
	this.status = employee.status;
	this.created_at = new Date();
	this.updated_at = new Date();
};

//create
Employee.create = function (newEmp, result) {
	dbconn.query("INSERT INTO employees set ?", newEmp, function (err, res) { 
		if(err) {
			console.log("error: ", err);
			result(err, null);
		}
		else{
			console.log(res.insertId);
			result(null, res.insertId);
		}
	});
};

Employee.findById = function (newEmp, result) {
	dbconn.query("Select * from employees where id = ?", newEmp, function (err, res) { 
		if(err) {
			console.log("error: ", err);
			result(err, null);
		}
		else{
			result(null, res);
		}
	});
};

Employee.findAll = function (result) {
	dbconn.query("Select * from employees", function (err, res) { 
		if(err) {
			console.log("error: ", err);
			result(err, null);
		}
		else{
			result(null, res);
		}
	});
};


Employee.update = function(id, employee, result){
	dbConn.query("UPDATE employees SET first_name=?, last_name=?, email=?,phone=?, organization=?,designation=?, salary=? WHERE id = ?", 
				[employee.first_name, employce.last_name,employee.cmail, employee.phone, employce.organization, employce.designation, employee.salary, id], 
				function (err, res) {
		if(err) {
			console.log("error: ", err);
			result(null, err);
		}else{
			result(null, res);	
		}
	})
};

Employee.delete = function (id, result) {
	dbconn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) { 
		if(err) {
			console.log("error: ", err);
			result(err, null);
		}
		else{
			result(null, res);
		}
	});
};

module.exports=Employee;