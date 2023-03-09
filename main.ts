export { }
// let username: string;
// username = "datdeptrai";
// username = "123";
// console.log(username);

// const myNumber: number = 123;
// const isAdmin: boolean = true;

// const arrNumber: number[] = [1, 2, 4]
// const arrStr: string[] = ["123", "def"]
// const arrMix: Array<number | string | boolean> = [123, "abcd", true];

// function sum(a: number, b: number): number {
//     let result = a + b;
//     console.log(result);
//     return result;
// }

// sum(10, 20)


const project: { id: number, name: string, image: string, link: string, status: boolean } = {
    id: 1,
    name: "Du an 1",
    image: "https://picsum.photos/200/200",
    link: "https://picsum.photos/200/200",
    status: true
}

function getData(props: { id: number, name: string, image: string, link: string, status: boolean }): { id: number, name: string, image: string, link: string, status: boolean } {
    return props;
}
getData(project)

// const projectList:{id:number,name:string}[] = [
//     { id: 1, name: "Du an 1" },
//     { id: 2, name: "Du an 2" }
// ]

const projectList: Array<{ id: number, name: string | number }> = [
    { id: 1, name: "Du an 1" },
    { id: 2, name: 123 }
]