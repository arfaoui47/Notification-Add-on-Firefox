var notifications = require("sdk/notifications");
var self = require("sdk/self");
var myIconURL = self.data.url("ossec.png");
var tabs = require("sdk/tabs");

notifications.notify({
  title: "First add-on *__*",
  text: "Welcome to OSSEC",
  data: "this woud be in terminal",
  iconURL: myIconURL,
  onClick: function (data) {
    console.log(data);
    tabs.open("http://www.ossec.tn");
  }
});
