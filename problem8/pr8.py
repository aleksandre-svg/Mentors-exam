def positionss(arg1, arg2):
    l = []
    for i in range(1, arg2+1):
        l.append(arg1[-i])
    l = l[::-1]
    for i in range(arg2):
        arg1.pop(-1)
    for i in arg1:
        l.append(i)
    return l
print(positionss([1,2,3,4], 4))