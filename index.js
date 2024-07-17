let employee = {
    name: 'Daniel Ndirangu',
    streetAddress: '123 Main St'
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _,...newEmployee } = employee;
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }