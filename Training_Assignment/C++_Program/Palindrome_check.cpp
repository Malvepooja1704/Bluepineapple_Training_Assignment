/*
Date: 07/06/2021
Check whether the given string is palindrome or not.
*/

#include<iostream>
#include<string.h>
using namespace std;

int main(){
	char str[30];
	int i,len;
	int flag=0;
	
	
	cout<<"\nEnter a String: ";
	cin>>str;
	
	len = strlen(str);

	for(i=0;i<len;i++){
		if(str[i] != str[len-i-1])         //check last character is not equal to first chara
			flag=1;						  //if not then flag =1
	}
	
	if(flag){
		cout<<"The given string is not palindrome!";    //print if flag==1
	}
	else{
		cout<<"The given string is palindrome";
	}
}
