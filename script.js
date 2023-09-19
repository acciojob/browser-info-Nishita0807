//your JS code here. If required.
const main=document.body;
const div=document.createElement("div");
main.appendChild(div);
const name=navigator.appName;
const version=navigator.appVersion;

div.id="browser-info";
const string="You are using" + " " +name+"version"+" "+version;
div.innerText= string;


