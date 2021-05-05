var obj = {
    name : 'Gary',
    prop : {
        name: 'Mode',
        getname : function() {
        var self = this;
        console.log(self.name);
        console.log(this.name);
        }
    },
    callname : function () {
        console.log(this.name);
    }
};
// obj.prop.getname();
var c = obj.prop.getname;
c()





// -------------------------

function public (title, author, date) {
    var publicAPI = {
        print() {
            console.log(`Title: ${ title }
                        By: ${ author }
                        ${ date }
            `);
        }
    };

    return publicAPI;
}

function pook (bookdetails) {
    var pub = public(
        bookdetails.title,
        bookdetails.author,
        bookdetails.published
    );

    var publicAPI = {
        print() {
            pub.print();
            console.log(` Publised By: ${ bookdetails.publisher }
                        ISBN: ${ bookdetails.ISBN } `);
        }
    };
    
    return publicAPI;
}

function blogpost(title, author, purdate, url) {
    var pub  = public(title, author, purdate);
    
    var publicAPI = {
           print() {
               pub.print();
               console.log(url)
           }
    }
    
    return publicAPI;
}


// -----
function public (title, author, date) {
    var publicAPI = {
        print() {
            console.log(`Title: ${ title }
                        By: ${ author }
                        ${ date }
            `);
        }
    };

    return publicAPI;
}

function pook (bookdetails) {
    var pub = public(
        bookdetails.title,
        bookdetails.author,
        bookdetails.published
    );

    var publicAPI = {
        print() {
            pub.print();
            console.log(` Publised By: ${ bookdetails.publisher }
                        ISBN: ${ bookdetails.ISBN } `);
        }
    };
    
    return publicAPI;
}


var YDKJS = pook({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'reilly",
    ISBN: "123456-789"
});

YDKJS.print()


function blogpost(title, author, purdate, url) {
    var pub  = public(title, author, purdate);
    
    var publicAPI = {
           print() {
               pub.print();
               console.log(url)
           }
    }
    
    return publicAPI;
}

forAgainstLet.print();