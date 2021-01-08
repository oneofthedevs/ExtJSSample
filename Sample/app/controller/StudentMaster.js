Ext.define("School.controller.StudentMaster", {
  extend: "Ext.app.Controller",
  models: ["School.model.Student"],
  stores: ["School.store.StudentStore"],
  views: ["School.view.StudentGrid"],
  refs: [
    {
      ref: "studentGrid",
      selector: "viewport StudentGrid",
    },
  ],

  init: function () {
    this.control({
      "viewport > StudentGrid button[itemId=btnCreate]": {
        click: this.onCreateClick,
      },
      "viewport > StudentGrid button[itemId=btnLoad]": {
        click: this.onLoadClick,
      },
      "viewport > StudentGrid button[itemId=btnSave]": {
        click: this.onSaveClick,
      },
      "viewport > StudentGrid button[itemId=btnDelete]": {
        click: this.onDeleteClick,
      },
    });
  },

  onCreateClick: function () {
    var studentGrid = this.getStudentGrid();
    var studentStore = studentGrid.getStore();

    var studentModel = Ext.create("School.model.Student");
    studentModel.set("FirstName", "Test");
    studentModel.set("LastName", "User");
    studentModel.set("DOB", "11/30/1998");
    studentModel.set("Gender", 0);
    studentModel.set("City", "New York");
    studentModel.set("Country", "USA");
    studentModel.set("LinkedinId", "oneofthedevs");
    studentModel.set("Email", "test@test.com");
    studentModel.set("PhoneNumber", "9173083345");

    studentStore.add(studentModel);

    studentGrid.editingPlugin.startEdit(studentModel, 3);
  },

  onSaveClick: function () {
    var studentGrid = this.getStudentGrid();
    var studentStore = studentGrid.getStore();

    studentStore.sync({
      success: function (batch, eOpts) {
        Ext.Msg.alert("Status", "Changes saved successfully.");
      },
      failure: function (batch, eOpts) {
        Ext.Msg.alert("Status", "Request failed.");
      },
    });
  },
  onLoadClick: function () {
    var studentStore = Ext.getStore("School.store.StudentStore");
    studentStore.load();
  },

  onDeleteClick: function () {
    var studentGrid = this.getStudentGrid();
    var studentStore = studentGrid.getStore();

    //delete selected rows if selModel is checkboxmodel
    var selectedRows = studentGrid.getSelectionModel().getSelection();

    if (selectedRows.length) studentStore.remove(selectedRows);
    else
      Ext.Msg.alert("Status", "Please select at least one record to delete!");
  },
});
