/*
Write a program for wildcard character return a substring
*/

#include<iostream>
#include<string.h>
using namespace std;

string wildcard_match(string str, string pattern){
	int s=0,p=0;
	int s_len = str.size();
	int p_len = pattern.size();
	string str2="";
	if(p_len==0){
		return str;
	}
	while(s<s_len){
		if(str[s]==pattern[p]){
			s++;
			p++;
		}	
		else if(p<p_len && pattern[p]=='?'){
			s++;
			p++;
		}
		
	}
	if(p==p_len){
		return str;
	}
}

int main(){
	string str, pattern;
	
	cout<<"Enter String: ";
	cin>>str;
	cout<<"Enter pattern: ";
	cin>>pattern;
	cout<<wildcard_match(str,pattern);
}
