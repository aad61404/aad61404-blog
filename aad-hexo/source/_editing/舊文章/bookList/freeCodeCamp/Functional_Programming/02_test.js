
var Door = function (tabs) {
    this.tabs = tabs;
}

Door.prototype.join = function (otherDoor) {
    this.tabs = this.tabs.concat(otherDoor.tabs);
    return this;
}

Door.prototype.tabOpen = function (tabs) {
    this.tabs.push('new tab');
    return this;
}

Door.prototype.tabClose = function (index) {
    var tabsBeforeIndex = this.tabs.splice(0, index);
    var tabsAfterIndex = this.tabs.splice(1);
    console.log('tabsBeforeIndex:', tabsBeforeIndex)
    console.log('tabsAfterIndex:', tabsAfterIndex)
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
    console.log('this.tabs:', this.tabs);
    return this;
}

var workDoor = new Door(['Gamil', 'Inbox', 'Work mail', 'Docs','Freecode Camp']);
var socialDoor = new Door(['Fb','Gitter','Reddit','Twitter','Medium']);
var videoDoor = new Door(['Netflix','Youtube','Vimeo','Vine']);

// console.log('workDoor:', workDoor)
// console.log('socialDoor:', socialDoor)
// console.log('videoDoor:', videoDoor)
// var finalTabs = socialDoor.tabOpen().join(videoDoor.tabClose(2));
console.log('videoDoor.tabClose(2):', videoDoor.tabClose(2))
// console.log('finalTabs:', finalTabs);
                        

