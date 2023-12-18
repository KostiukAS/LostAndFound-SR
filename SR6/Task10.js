const openBr = new Array('(', '{', '[');
const closeBr = new Array(')', '}', ']');

function checkBrackets(str) {
    let stack = new Array();

    for(let i = 0; i < String(str).length; i++)
    {
        for(let j = 0; j < openBr.length; j++)
        {
            if (str[i] == openBr[j])
            {
                stack.push(str[i]);
            }
        }

        for (let j = 0; j < closeBr.length; j++)
        {
            if (str[i] == closeBr[j])
            {
                if (stack.length == 0)
                {
                    return false;
                }

                if (stack[stack.length - 1] != openBr[j])
                {
                    return false;
                }

                stack.pop();
            }
        }
    }

    if (stack.length != 0)
    {
        return false;
    }

    return true;
}

console.log(checkBrackets("{[(123242)]}"));