/*
Date: 02/06/2021
write a program to count the number of digits in a given integer
*/

#include<iostream>
using namespace std;

int main(){
	long long int num;
	int count=0;
	
	
	cout<<"\nEnter Number: ";
	cin>>num;
	
	while(num != 0){
		num = num/10;     //divide that number, split it and count each digit
		count++;
	}
	
	cout<<"\nCount of given number is: %d"<<count;
	
	return 0;
}
