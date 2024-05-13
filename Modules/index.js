let obj = {
    name  : "Anirudh",
    age : 21
}
function getDetail(obj){
    console.log(obj)
}
export {obj, getDetail}

export default () => {
    console.log("Work done");
}