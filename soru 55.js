Short Java solution:

public class p55
{
    public static void main(String[] args)
    {
	int count = 0;
	for (int i=195; i<10000; i++)
	{
	    StringBuffer sb;
	    String s;
	    java.math.BigInteger next = new java.math.BigInteger(new Integer(i).toString());
	    for (int j=0; j<50; j++)
	    {
		java.math.BigInteger rev = new java.math.BigInteger(new StringBuffer(next.toString()).reverse().toString());
		next = next.add(rev);
		s = next.toString();
		sb = new StringBuffer(s).reverse();
		if (s.equals(sb.toString()))
		    break;
		if (j==49)
		    count++;
	    }
	}

	System.out.println(count);
    }
}
