def tuples(arr):
    dict = {}
    for i in arr:
        dict.append(i[0], i[1])
    return dict
print(tuples([('one', 1), ('one', 2)]))
