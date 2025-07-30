a=[2,4,2,9,10,3,24,45,89]
max=a[0]
smax=max
for i in range(len(a)):
    if (a[i]>max):
        smax=max
        max=a[i]
    elif(a[i]>smax and a[i]<max):
        smax=a[i]
print(smax)
