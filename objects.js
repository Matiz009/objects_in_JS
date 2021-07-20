let simple_Obj = {
    name: "name",
    at: 2.23,
    is_it_working: true,
}

let second_Obj = {
    name: "first",
    at: 2.33,
    first: simple_Obj
}

console.log(simple_Obj);
console.log(simple_Obj.name);
console.log(second_Obj.first.at);