Ext.define("School.view.StudentGrid", {
  extend: "Ext.grid.Panel",
  alias: "widget.StudentGrid",
  id: "studentsGrid",
  config: {},
  constructor: function (config) {
    this.initConfig(config);
    return this.callParent(arguments);
  },
  width: "100%",
  height: 400,
  selType: "checkboxmodel",
  title: "Students Information",
  selModel: {
    mode: "MULTI",
  },
  viewConfig: {
    stripeRows: true,
  },
  initComponent: function () {
    Ext.apply(this, {
      store: "School.store.StudentStore",

      plugins: [
        Ext.create("Ext.grid.plugin.RowEditing", {
          clicksToEdit: 2,
          //if you have checkbox in first row then take clicksToEdit=2 otherwise it will go on edit mode
        }),
      ],
      columns: [
        {
          text: "Id",
          dataIndex: "UserId",
          hidden: false,
          //   width: 35,
        },
        {
          text: "First Name",
          flex: 1,
          dataIndex: "FirstName",
          editor: {
            // defaults to textfield if no xtype is supplied
            allowBlank: false,
          },
        },
        {
          text: "Last Name",
          flex: 1,
          dataIndex: "LastName",
          editor: {
            allowBlank: false,
          },
        },
        {
          text: "Email",
          flex: 1,
          dataIndex: "Email",
          editor: {
            allowBlank: false,
          },
        },
        {
          text: "Phone Number",
          flex: 1,
          dataIndex: "PhoneNumber",
          editor: {
            allowBlank: false,
          },
        },
        {
          text: "Birth Date",
          flex: 1,
          dataIndex: "DOB",
          editor: {
            xtype: "datefield",
            format: "d-m-Y",
            allowBlank: false,
          },
          renderer: Ext.util.Format.dateRenderer("d-m-Y"),
        },
        {
          text: "Gender",
          flex: 1,
          dataIndex: "Gender",
          editor: {
            allowBlank: false,
          },
        },
        {
          text: "City",
          flex: 1,
          dataIndex: "City",
          editor: {
            allowBlank: false,
          },
        },
        {
          text: "Country",
          flex: 1,
          dataIndex: "Country",
          editor: {
            allowBlank: false,
          },
        },
        {
          text: "LinkedIn",
          flex: 1,
          dataIndex: "LinkedinId",
          editor: {
            allowBlank: false,
          },
        },
      ],
      dockedItems: [
        {
          xtype: "toolbar",
          dock: "bottom",
          ui: "footer",
          layout: {
            pack: "center",
          },
          defaults: {
            minWidth: 80,
          },
          items: [
            {
              text: "Create",
              itemId: "btnCreate",
            },
            {
              text: "Load Data",
              itemId: "btnLoad",
            },
            {
              text: "Save",
              itemId: "btnSave",
            },
            {
              text: "Delete",
              itemId: "btnDelete",
            },
          ],
        },
      ],
    });

    this.callParent(arguments);
  },
});
