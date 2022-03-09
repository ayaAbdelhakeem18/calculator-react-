import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      num:[],
      sign:"",
      res:0,
      firstnum:0,
      secnum:0,
    }
   this.handleclick=this.handleclick.bind(this);
   this.handelAssign=this.handelAssign.bind(this);
   this.delete=this.delete.bind(this);
   this.assign=this.assign.bind(this); 
this.setsec=this.setsec.bind(this);
  }
  handleclick(ele) {
    this.setState({ num: [...this.state.num, ele] });
    this.handelAssign(ele);
    
  }; 
 
    handelAssign = (operator) => {
      /**operatior could be + - * ÷ */
      switch (operator) {
        case "+":
          this.setState({ sign: "+" }),
          this.setState({firstnum:parseInt( this.state.num.join(""))}); 
          break;
        case "-":
          this.setState({ sign: "-" }),
          this.setState({firstnum:parseInt( this.state.num.join(""))});
          break;
        case '*':
          this.setState({ sign: "*" }),
          this.setState({firstnum:parseInt( this.state.num.join(""))});
          break;
        case "÷":
          this.setState({ sign: "/" }),
          this.setState({firstnum:parseInt( this.state.num.join(""))});
          break; 
      } 
    };
    setsec(){
      this.setState({secnum:this.state.num.includes("+"||"-"||"*"||"/") ?this.state.num.filter(ele=> this.state.num.indexOf(ele) > this.state.num.indexOf( "+"||"-"||"/"||"*") ).join(""): ""});
    };
    assign(){
this.setsec;
if(this.state.sign==="+"){this.setState({res:this.state.firstnum + this.state.secnum});}
else if(this.state.sign==="-"){this.setState({res:this.state.firstnum - this.state.secnum});}
else if(this.state.sign==="*"){this.setState({res:this.state.firstnum * this.state.secnum});}
else {this.setState({res:this.state.firstnum / this.state.secnum});};
console.log(this.state.firstnum)
console.log(this.state.secnum)
console.log(this.state.sign)
console.log(this.state.res)
}


    delete(){
console.log(this.state.num)
this.setState({num:[this.state.num.pop()]})
console.log(this.state.num)
    }

  render() { 
    const buttons = ["÷", 1, 2, 3, "*", 4, 5, 6,"+", 7, 8, 9, ".", 0, "-"];
      let allbuttons="";        
      console.log(this.state.secnum);
    return (
      <div className="calculation-grid">
        <div className="output">
          <div className="previous-operand">{this.state.num}</div>
          <div className="current-operand">{this.state.res}</div>
        </div>
        <button className="span-two"  onClick={ ()=>{ var nums =[...this.state.num] ;
        nums.splice(0,nums.length);  this.setState({num:nums})} }    >AC</button>

        <button onClick={()=>{
          var nums =[...this.state.num];
          nums.pop();
          this.setState({num:nums})}}>DEL</button>

       {allbuttons=buttons.map((ele)=><button  onClick={()=>this.handleclick(ele) }  key={ele}>{ele}</button>)}
        <button className="span-two" onClick={this.assign}>=</button>

</div>
    );
  }
}
 
export default App;
