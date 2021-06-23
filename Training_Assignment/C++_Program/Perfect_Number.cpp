/*
Date: 02/06/2021
Write a program to print all Perfect numbers between 1 to n.
*/

#include<iostream>
using namespace std;

int main(){
	int num ,sum, i,j;
	
	cout<<"\nEnter the range n:";
	cin>>num;
	
	for(i=1;i<=num;i++){
		sum=0;
		for(j=1;j<=i/2;j++){      //iterate the loop till i /2
			if(i%j == 0){	       
				sum+=j;
			}
		}
		if(sum == i){
			cout<<i<<"\t";
		}
	}	
	
}
