 var container=document.createElement('div');
 container.className="container"

 var div1=document.createElement('div');
 div1.className="titletag"
 var h1=createtag("h1","title","Calculator");
 var p=createtag("p","description","Calculator Description");


function createtag(tagname,idname,data) {
    var tag=document.createElement(tagname);
    tag.setAttribute("id",idname)
    tag.innerHTML=data
    return tag;
}


 var div2=document.createElement('div');
 div2.className="row"

 

 var divcal1=creatediv("div","calc")
 divcal1.className="text-center";

 var display=creatediv("div","display");
 var keyboard=creatediv("div","keyboard");
 var inputbox=input();


 var row1=createrow("div","row");

  var button1=createbutton('button','button','c','clear',"","C")
  var button2=createbutton('button','button','delete' ,'delete','',"Del")
  var button3=createbutton('button','button','.' ,'dot','',".")
  var button4=createbutton('button','button','*' ,'mult','',"*")

  var row2=createrow("div","row");
var button5=createbutton('button','button','7' ,"7","",'7')
var button6=createbutton('button','button','8',"8","",'8')
var button7=createbutton('button','button','9','9',"",'9')
var button8=createbutton('button','button','/' ,'divi','','/')

var row3=createrow("div","row"); 
var button9=createbutton('button','button','4','4',"",'4')
var button10=createbutton('button','button','5','5',"",'5')
var button11=createbutton('button','button','6','6',"",'6')
var button12=createbutton('button','button','-','subtract','','-')

var row4=createrow("div","row");
var button13=createbutton('button','button','1','1',"",'1')
var button14=createbutton('button','button','2','2',"",'2')
var button15=createbutton('button','button','3','3',"",'3')
var button16=createbutton('button','button','+','add','','+')

var row5=createrow("div","row");
var button17=createbutton('button','button','0','0',"",'0')
var button18=createbutton('button','button','00','00',"",'00')
var button19=createbutton('button','button','=' ,'equal','btn btn-info','=')

function input(){
 var inputbox=  document.createElement('input');
 inputbox.setAttribute('type', 'text');
 inputbox.setAttribute('placeholder', '0');
 inputbox.setAttribute('id','result');
 return inputbox;
}

function creatediv(divtag,dividname)
{
    var divtag=document.createElement(divtag);
    divtag.setAttribute("id",dividname)
    return divtag;
}

function createrow(rowtag,rowname){
    var divtag=document.createElement(rowtag);
    divtag.setAttribute("class",rowname)
    return divtag;
}
function createbutton(bttag,bttype,btvalue,btid,btclassname,name) {
    var button= document.createElement(bttag)
    button.setAttribute('type',bttype);
    button.setAttribute('value',btvalue);
    button.setAttribute('id',btid);
    button.className=btclassname;
    button.innerHTML=name
    button.addEventListener('click', (e)=>{
        var data=e.target.value
        if(data=="=")
        {
           solve( );
        }
        else if(data=='delete')
        {
            del();
        }
        else{
           dis(data)
        }
        if(data=="c")
        {
           clr();
        }    
           })
  return button;
}
// function for mathematical Operations
function dis(val)
{
    document.getElementById("result").value+=val
   
}

function solve(e)
{
    let outputScreen=document.getElementById("result");
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid Not a number")
    }
}
function del(){
    let outputScreen=document.getElementById("result");
    outputScreen.value =outputScreen.value.slice(0,-1);
}
function clr()
{
    document.getElementById("result").value = ""
}
div1.append(h1,p)
display.append(inputbox)
row1.append(button1,button2,button3,button4)
row2.append(button5,button6,button7,button8)
row3.append(button9,button10,button11,button12)
row4.append(button13,button14,button15,button16)
row5.append(button17,button18,button19)
keyboard.append(row1,row2,row3,row4,row5)
divcal1.append(display,keyboard)
div2.append(divcal1)
container.append(div1,div2);
document.body.append(container)