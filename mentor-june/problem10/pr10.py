def invers(arg1):
    for u in range(max(arg1)):
        arg1.append(0)
    pairs = []
    for i in arg1:
        for j in arg1:
            if i<j and arg1[i]>arg1[j]:
                pairs.append((i, j))
    return pairs
print(invers([1,20,6,4,5]))