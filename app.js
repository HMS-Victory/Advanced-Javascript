let arr=[
    1,
    false,
    {
        nae: 'Tony',
        address: '111 Main St'
    },
    function(name) {
        let greeting='Hello';
        console.log(greeting+name);
    },
    "hello"
];

console.log(arr);
arr[3](arr[2].name);

