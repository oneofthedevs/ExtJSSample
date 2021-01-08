Ext.define("School.model.Student", {
  extend: "Ext.data.Model",
  idProperty: "Id",
  store: { type: "store.UserAPI" },
  fields: [
    { name: "UserId", type: "int", defaultValue: 0 },
    { name: "First Name", type: "string" },
    { name: "Last Name", type: "string" },
    { name: "Email", type: "string" },
    { name: "Phone Number", type: "string" },
    { name: "LinkedinId", type: "string" },
    { name: "City", type: "int" },
    { name: "Country", type: "int" },
  ],
  proxy: {
    type: "ajax",
    reader: {
      root: "data",
      type: "json",
    },
    api: {
      read: "http://localhost:55625/api/Home/GetAllUsers",
      create: "http://localhost:55625/api/Home/InsertUser",
      update: "http://localhost:55625/api/Home/UpdateUser",
      destroy: "http://localhost:55625/api/Home/DeleteUser",
    },
    actionMethods: {
      destroy: "DELETE",
      read: "GET",
      create: "POST",
      update: "PATCH",
    },
  },
});
