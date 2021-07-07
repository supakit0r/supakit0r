ืlet r ='';
let a = 5;
let c =(n-1);
for(i = 1; i <= n; i++)
{
r = r.trim();
r = ' '.repeat(c) + r + (i > 1? '' : '') + '*';
console.log(r);
c--;
}
