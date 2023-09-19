//your JS code here. If required.
const main=document.body;
const div=document.createElement("div");
main.appendChild(div);
const name=document.navigator.appName;
const version=document.navigator.appVersion;

div.id="browser-info";
const string="You are using" + name+"version"+version;
div.innerText= string;


