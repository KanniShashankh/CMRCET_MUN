def test(num):
    if(num > 50):
        return (num-2)
    return test(test(num + 10))
    
print(test(30))