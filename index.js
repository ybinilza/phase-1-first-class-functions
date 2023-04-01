function receivesAFunction(callback)
{
    callback();
}

function returnsANamedFunction()
{

    return function namedFun(){"returning a function"};
}

function  returnsAnAnonymousFunction()
{
return function() {

"returning anonymous function"};

}