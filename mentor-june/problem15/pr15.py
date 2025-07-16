def small(arg1):
    l = []
    for i in arg1:
        y = arg1[arg1.index(i)+1:]
        count = 0
        for x in y:
            if x<i:
                count+=1
        l.append(count)
    return l
print(small([4, 3, 2, 1]))