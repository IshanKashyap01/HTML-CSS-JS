# Rest vs Spread Operator

## Rest Operator

```js
function addStudents(batchName, ...students)
{
    for(let student of students)
    {
        addStudent(batchName, student)
    }
}
addStudents(cse, 'John', 'Jane')
```

- The *rest operator* (`...`) allows any number (including 0) of arguments to
be passed

- It collects multiple elements and *condenses* them into a single element

## Spread Operator

```js
const studentRef = students
const studentCopy = [...students]
```

- In the above code, `studentRef` is a reference to `students` i.e. changes made
in one will reflect in the other

- However, `studentCopy` is an entirely new array, with the same elements as
`student`

- That is, the *spread operator* expands the array into its elements
