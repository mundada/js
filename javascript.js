var foo=function bar()  /*In compilation phase it will check all the variables and functions and assings the value
                        but where as in execution phase it will declare the values assinged to the varibles and functions*/
{
var foo='bar'; //we just assingned a valuse to the varible foo but have not called it
function baz(foo)
{
foo=bar;
foo; //here we are callig foo so it will assing value bar to it 
}
baz(); // calling baz function
}
foo();// In execution phase we are calling function foo so it will go to line 1 and check for values and there we have bar function so
bar();

/* the final outut is bar*/