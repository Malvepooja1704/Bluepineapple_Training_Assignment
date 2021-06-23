/*
Date: 07/06/2021
write a program for matrix multiplication using array
*/

#include<iostream>
using namespace std;

int main(){
	int mat1[10][10],mat2[10][10],mul[10][10];
	int row1,row2,col1,col2,i,j,k;
	
	cout<<"\nEnter the number of rows for matrix 1:";
	cin>>row1;
	
	cout<<"\nEnter the number of columns for matrix 1: ";
	cin>>col1;
	
	cout<<"\nEnter Elements in matrix 1:";
	for(i=0;i<row1;i++){
		for(j=0;j<col1;j++){
			cin>>mat1[i][j];
		}
	}
	
	cout<<"\nMAtrix 1:\n\n";
	for(i=0;i<row1;i++){
		for(j=0;j<col1;j++){
			cout<<mat1[i][j]<<"\t";
		}
		cout<<"\n";
	}
	
	cout<<"\nEnter the number of rows for matrix 2:";
	cin>>row2;
	
	cout<<"\nEnter the number of columns for matrix 2: ";
	cin>>col2;
	
	cout<<"\nEnter Elements in matrix 2:";
	for(i=0;i<row2;i++){
		for(j=0;j<col2;j++){
			cin>>mat2[i][j]<<;
		}
	}
	
	cout<<"\nMAtrix 2:\n\n";
	for(i=0;i<row2;i++){
		for(j=0;j<col2;j++){
			cout<<mat2[i][j]<<"\t";
		}
		cout<<"\n";
	}
	
	cout<<"\n";
	
	
	cout<<"\nMultiplication of matrix 1 and matrix 2 is:\n";
	for(i=0;i<row1;i++){
		for(j=0;j<col2;j++){
			mul[i][j] = 0;
			for(k=0;k<col1;k++){
				mul[i][j] += mat1[i][k] * mat2[k][j];             //add the first row first column multiplication in resultant matrix 
			}
		}
			
	}
	
	for(i=0;i<row1;i++){
		for(j=0;j<col2;j++){
			cout<<mul[i][j]<<"\t";
		}
		cout<<"\n";
	}
}
