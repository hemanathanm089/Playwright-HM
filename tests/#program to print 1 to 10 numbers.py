#program to print 1 to 10 numbers
i=1
while i<=10:
print(1)
i+=i
 

 #program to print square and cubes of 1 to 10 numbers
 i=1
 while i<=10;
 print(i,i**2,i**3)
 i+=1


 #program to print your name 10 times 
 i=1
 while i<=10;
 print("moses pradeep")
 i+=1




 #program to print 0,2,4..20 numbers
 i=0
 while i<=20:
    print(1)
    i+=2


program to find the sum of 1st 10 natural numbers
i=1,sum=0
i<=10--> true
sum=sum+i=0+=1
i+=1
i=2
i<=10--> true
i+=1
i=3


#print odd nos upto n
i=1
n=int(input("enter the value of n"))
while i<=n:
  if i%2==1:
    print(i)
  i+=1



  #print even nos upto n
i=0
n=int(input("enter the n value"))
while i<=n:
  if i%2==0:
    print(i)
  i+=1



#Reverse of a number and Palindrome Check
r = 0
s = 0
n = int(input("enter n values"))
temp = n # Store the original number for palindrome check
while n > 0:
  r = n % 10
  s = (s * 10) + r
  n = n // 10
print("The reverse of the number is:", s)
if s == temp:
  print("The number is a palindrome.")
else:
  print("The number is not a palindrome.")



  #amstrong number or not
r=0
s=0
n=int(input("enter the n value"))
temp=n
while n>0:
  r=n%10
  s=s+(r*r*r)
  n=n//10
if s==temp:
  print("it is an amstrong number")
else:
  print("it is not an amstrong number")


#program to print 1 to 10 numbers
print{input(enter n value)}
for in in range (1,11)
print(1)


#print square and cubes of 1 to 10 numbers 
for i in range(1,11):
    print(i,i**2,i**3)




#temperature conversion
celsius=float(input("enter temperature in celsius:"))
farenheit=(9/5)*celsius+32
print("temperature in farenheit",farenheit)


#simple interest
principal=float(input("enter the principal amount"))
rate=float(input("enter the rate"))
time=float(input("enter the time"))
simple_interest=((principal*rate*time)/100)
print("simple interest is:",simple_interest)


#largest of three numbers
a=float(input("enter the first number"))
b=float(input("enter the second number"))
c=float(input("enter the third number"))
if a>=b and a>=c:
  print("a is the largest number")
elif b>=a and b>=c:
  print("b is the largest number")
else:
  print("c is the largest number")



  #digit extraction(hundreds,tens,ones)
num=int(input("enter the number"))
hundreds=num//100
tens=(num%100)//10
ones=num%10
print("hundreds digit:",hundreds)
print("tens digit:",tens)
print("ones digit",ones)





#swap(interchange) two values 
a = input("enter first value:")
b = input("enter second value:")
print("before swapping")
print("a=",a)
print("b=",b)
a,b = b,a
print("after swapping")
print("a=",a)
print("b=",b)


#largest in n
n = int(input("enter the number of elemets"))
largest = float(input("enter number 1: "))
for i in range(2, n+1):
  num = float(input(f"enter number {i}: "))
  if num > largest:
    largest = num
print("largest number is", largest)




#leap year
year = int(input("enter the year:"))
if(year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
  print(year,"is a leap year")
else:
  print(year,"is not a leap year")


  #grade calculator
marks = float(input("enter marks (0-100):"))
if marks >= 90:
  grade = "A"
elif marks >= 80:
  grade = "B"
elif marks >= 70:
  grade = "C"
elif marks >= 60:
  grade = "D"
  else:
    grade = "F"
print("grade:",grade)




#sum of digits
n=int(input("enter the number"))
sum=0
while n>0:
  r=n%10
  sum=sum+r
  n=n//10
print("sum of digits:",sum)





built in data stuctures or iterables or sequences or collections - list , tuple , set , dictionary
'''
LIST 
''
A LIST is a collection
A LIST is written in square brackets only i.e [ ]
A LIST is ordered
A LIST is changeable i.e mutable
A LIST can store disimillar data 
A LIST can accept duplicates '''
'''



creation of list
flowers = ['Tulip','Sunflower','orchid','Daffodil',
           'Lotus','Chrysanthimum','Hibiscus']
print(flower)
print(type(flowers))



built in data stuctures or iterables or sequences or collections - list , tuple , set , dictionary
'''
LIST 
''
A LIST is a collection
A LIST is written in square brackets only i.e [ ]
A LIST is ordered
A LIST is changeable i.e mutable
A LIST can store disimillar data 
A LIST can accept duplicates '''
'''













    

    
