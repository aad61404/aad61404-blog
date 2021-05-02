

import java.util.Scanner;

public class Solution
{
    public static void main(String args[]){
        Scanner in = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();
        while (true){
            String a = in.nextLine();
            if ("".equals(a))
                sb.append(' ');
            else
                sb.append(a.charAt(0));
            if (a.equals("."))
                break;
        }
        System.out.println(sb.toString());
    }
}


import sys
import math

k=[]

for i in range(16):
    t = input()
    if t=="":
        print(" ",end="")
    elif t==".":
        print(t)
        break
    else:print(t[0],end="")

    