fs = Npm.require("fs")
base = process.env.PWD
console.log(base)

choices = [
	{key: "meteor-base", title: "Meteor Base", description: "Packages every Meteor app needs to have", isRemovable: false, isActive: true},
	{key: "mobile-experience ", title: "Mobile Experience", description: "Packages for a great mobile UX", isRemovable: false, isActive: true},
	{key: "mongo", title: "Mongo DB", description: "The database Meteor supports right now", isRemovable: false, isActive: true},
	{key: "blaze-html-templates", title: "Blaze HTML Templates", description: "Compile .html files into Meteor Blaze views", isRemovable: false, isActive: true},
	{key: "session", title: "Session", description: "Client-side reactive dictionary for your app", isRemovable: false, isActive: true},
	{key: "jquery", title: "Jquery", description: "Helpful client-side library", isRemovable: false, isActive: true},
	{key: "track", title: "Tracker", description: "Meteor's client-side reactive programming library", isRemovable: false, isActive: true},
	{key: "standard-minifiers ", title: "Standard Minifiers", description: "JS/CSS minifiers run for production mode", isRemovable: false, isActive: true},
	{key: "es5-shim", title: "ES5 Shim", description: "ECMAScript 5 compatibility for older browsers.", isRemovable: false, isActive: true},
	{key: "ecmascript", title: "ES5", description: "Enable ECMAScript2015+ syntax in app code", isRemovable: false, isActive: true},
	{key: "autopublish", title: "Autopublish", description: "Publish all data to the clients (for prototyping)", isRemovable: false, isActive: true},
	{key: "insecure", title: "Insecure", description: "Allow all DB writes from clients (for prototyping)", isRemovable: false, isActive: true}

]

fs.readFile(base+'/.meteor/packages', 'utf8', function (err, data) {
        if (err) {
            console.log('Error: ' + err);
            return;
        }

        //data = JSON.parse(data);
        //console.log();

        var dat = parseplugins(data)


        fs.writeFile(base+'/.meteor/packages', dat+"\n#13", function (err) {
		  if (err) throw err;
		  //console.log('It\'s saved!');
		});
    });

parseplugins = function(data){
	var datap = data.split("\n")
	var lines=[]
	var temp
	for(line in datap){
		if (datap[line].indexOf('#') > 0) {
			temp = datap[line].substring(0, datap[line].indexOf('#'));
		} else {
			temp = datap[line];
		}
		temp = temp.trim()
		if (temp != "") lines.push(temp)
	}
	return lines.join("\n")
}