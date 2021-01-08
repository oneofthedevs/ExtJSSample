Ext.define("School.store.StudentStore", {
  extend: "Ext.data.Store",
  model: "School.model.Student",
  storeId: "Student",
  alias: "store.UserAPI",
  proxy: {
    type: "ajax",
    url: "http://localhost:55625/api/Home/GetAllUsers",
    reader: {
      root: "data",
      type: "json",
    },
  },
  autoLoad: true,
});
