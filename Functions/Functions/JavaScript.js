function Sum(n) {
    var sum = 0;
    for (var i = 1; i < n; i++) {
        sum += i;
    }
    return sum;
}
function NewMassive(x)
{
   
    var B = [];
   
    for(var i=0;i<x.length;i++)
    {
      //  B[i] = (x[i][i] + x[i][x.length - i - 1]) / 2;
        alert((x[i][i] + x[i][x.length - i - 1]) / 2);
    }
    
    
}
