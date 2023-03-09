


// định nghĩa kiểu dữ liệu với interface
/* Object */


interface IProject {
    id: number,
    name: string,
    image: string,
    link: string,
    status: boolean
}
const project: IProject = {
    id: 1,
    name: "Du an 1",
    image: "https://picsum.photos/200/200",
    link: "https://picsum.photos/200/200",
    status: true
}

function getData(props: IProject): IProject {
    return props;
}
const addData = (data: IProject) => {

}
getData(project)

/* Array */
// const projectList:{id:number,name:string}[] = [
//     { id: 1, name: "Du an 1" },
//     { id: 2, name: "Du an 2" }
// ]

const projectList: Array<{ id: number, name: string | number }> = [
    { id: 1, name: "Du an 1" },
    { id: 2, name: 123 }
]

/* Function*/ 