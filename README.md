# Meteor Plugins
Plugins architecture for Meteor. Permits changing Meteor packages from a web interface.

## Screenshot

![Plugins](https://raw.githubusercontent.com/oro8oro/meteor-plugins/master/public/Plugins-screenshot1.png)

## Intent
The developer and end user should be able to hot-plug packages into the running Meteor app. This future package will upgrade the normal packages with this functionality plus eventual extra-functionality:

* loose coupling of packages
* package shared data space
* inter-package interactions
* controlled extensibility

## Plans
* have a complement app of the sort of Atmospherejs to choose packages from
* ability to define groups of well-integrated packages to extend by group

### Initial Thought
![alt tag](https://raw.githubusercontent.com/oro8oro/meteor-plugins/master/Plugins-class-diagram.png)
