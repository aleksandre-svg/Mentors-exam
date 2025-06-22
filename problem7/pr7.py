def pairs(arg1, arg2):
    pairs = []
    for i in arg1:
        for x in arg1:
            if i+x == arg2:
                pairs.append((i, x))
    return pairs
print(pairs([0,0,1,1], 1))