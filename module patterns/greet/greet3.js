
//pattern 2
function Greetr(){
    this.firstName="akash";
    this.lastName="gupta";
    this.getFullname=function(){
       console.log(this.firstName+" "+this.lastName);
    }

}

module.exports=new Greetr();
