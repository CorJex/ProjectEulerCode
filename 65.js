import java.math.BigInteger;
public class Problem
{
	public static int main(int n)
	{long a[]=new long[n+1];
	   a[1]=2;
for(int i=2;i<=n;i++)
{if(i%3==0)
a[i]=2*(i/3);
else
a[i]=1;}
BigInteger A[]=new BigInteger[n+1];
BigInteger P[]=new BigInteger[n+1];
long x1=a[n-1]*a[n]+1;
Long q1=new Long(a[n-1]*a[n]+1);
String s1=q1.toString();
A[1]=new BigInteger(s1);
Long r1=new Long(a[n]);
String theS=r1.toString();
P[1]=new BigInteger(theS);
for(int i=2;i<n;i++)
{P[i]=A[i-1];
A[i]=P[i-1];
for(int k=1;k<=a[n-i];k++)
A[i]=A[i].add(A[i-1]);
BigInteger k=A[i].gcd(P[i]);
BigInteger Meg=A[i].gcd(P[i]);
A[i]=A[i].divide(Meg);
P[i]=P[i].divide(Meg);
}
    String a1=A[n-1].toString();
    int sum=0;
    for(int i=0;i<a1.length();i++)
   { 
       sum=sum+a1.charAt(i)-'0';}
       return sum;
   
}
}