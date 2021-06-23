/*
Date : 11/06/2021
Write a program to geenrate all the permutations for given array of elements
*/

#include<iostream>
using namespace std;

void print_array(int arr[], int n){
   //Print the given array
	for(int i=0;i<n;i++){
		cout<<arr[i]<<"\t";
	}
	printf("\n");
}

void swap(int *a, int *b){
	int temp;
	temp = *a;
	*a = *b;
	*b = temp;
}

void permute(int *arr, int start, int end){
	if(start==end){
		print_array(arr, end+1);      //if start and end are same then print ele
		return;
	}
	for(int i=start;i<=end;i++){
		swap((arr+i), (arr+start));          //First element constant
		permute(arr, start+1, end);          // permute 2nd and 3rd ele
		swap((arr+i), (arr+start));         //backtrack and swap 
	}
}

int main(){
	int n;
	cout<<"Enter The Size of Array: ";
	cin>>n;
	int arr[n];
	cout<<"Enter Elements: ";
	for(int i=0;i<n;i++){
		cin>>arr[i];
	}
	
	permute(arr, 0 , n-1);
	return 0;
}
