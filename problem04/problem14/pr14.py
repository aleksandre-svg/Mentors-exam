def max_xor(arg1):
    l = []
    for i in arg1:
        for x in arg1:
            l.append(i ^ x)
    return max(l)
print(max_xor([12, 15, 7, 9]))