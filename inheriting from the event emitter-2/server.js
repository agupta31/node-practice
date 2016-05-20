
var util=require("util");

function Person(){
    this.firstname='akash';
    this.lastname="gupta";
}
Person.prototype.greet=function(){
      console.log("hello "+this.firstname+" "+this.lastname);
};

function Policeman(){
  Person.call(this);
    this.badgeNumber="1234";
};

util.inherits(Policeman,Person);
var officer=new Policeman();
officer.greet();

//util.inerhits just attaches the prototype of the objects to each other.So the
//properties fisrstname and lastname are not available to policeman.
//hence we get the output hello undefined undefined when we call greet on officer.
//Therefore ,we call the Person constructor from poilceman and pass 'this' to it
//so that any changes made in Person will now be available to policeman.
