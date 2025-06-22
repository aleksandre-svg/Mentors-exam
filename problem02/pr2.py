def tuples(arr):
    dict = {}
    for i in arr:
        dict.setdefault(i[0], i[1])
    return dict
print(tuples([('one', 1), ('two', 2)]))