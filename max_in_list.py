a=[2,4,2,7,9,10,3,4]
max=a[0]
smax=max
for i in range(len(a)):
    if a[i]>max:
        smax=max
        max=a[i]
print(smax)
