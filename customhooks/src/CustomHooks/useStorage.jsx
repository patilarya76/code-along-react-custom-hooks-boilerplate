//logic
function useStorage(){
    let setstorage =(val)=>{
        console.log(val)
        localStorage.setItem("data",val);
        sessionStorage.setItem("data",val);
    }
    return {setstorage};
}

export default useStorage