var number = 71;
var flag = 0;

for(i=2; i < number/2; i++)
{
	if(number%i == 0)
	{
		flag = 1;
		break;
	}
}
if(flag == 0)
	console.log(number+"-The given number is Prime");
else
	console.log(number+"-The given number is not Prime");