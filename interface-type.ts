export { }


// định nghĩa kiểu dữ liệu với interface
/* Object */


// interface IProject {
//     id: number,
//     name: string,
//     image: string,
//     link: string,
//     status: boolean
// }
// const project: IProject = {
//     id: 1,
//     name: "Du an 1",
//     image: "https://picsum.photos/200/200",
//     link: "https://picsum.photos/200/200",
//     status: true
// }

// function getData(props: IProject): IProject {
//     return props;
// }
// const addData = (data: IProject) => {

// }
// getData(project)

/* Array */

interface IProject {
    id: number,
    name: string,
    email?: string
}
// const projectList: IProject[] = [
//     { id: 1, name: "Du an 1", email: "" },
//     { id: 2, name: "Du an 2" }
// ]

// const projectList: Array<IProject> = [
//     { id: 1, name: "Du an 1" },
//     { id: 2, name: "123" }
// ]

/* Function*/
interface ISumFunction {
    (a: number, b: number): string
}

const sum: ISumFunction = (a, b) => {
    return "12"
}
sum(10, 20)

interface IGetProductFunc {
    (data: IProject[]): {}
}
const getProduct: IGetProductFunc = (data) => {
    return data
}
getProduct([{ id: 1, name: "abc" }, { id: 2, name: "abc" }])

// định nghĩa kiểu dữ liệu với type
/* Object */
type TProduct = {
    id: number,
    name: string
}
const product: TProduct = {
    id: 1,
    name: "abc"
}
/* Array */
type TProductList = TProduct[]
const projectList: TProductList = [
    { id: 1, name: "abc" }
]
/* Function */ 