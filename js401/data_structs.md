1. What is 1 of the more important things you should consider when deciding which data structure is best suited to solve a particular problem?

Time complexity (efficiency):

```When choosing a data structure, consider the data access pattern. For random access, like retrieving specific elements directly, arrays or dynamic arrays are ideal. Sequential access, where elements are processed in order, suits linked lists. For key-based access, hash tables such as HashMap are efficient"```

2. How can we ensure that we’ll avoid an infinite recursive call stack?

I make sure to have a valid base case to return.