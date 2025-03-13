// เริ่มเขียนโค้ดตรงนี้
async function getUsers(){
    try {
    const userPost = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await userPost.json();
    // console.log(data)
    console.log(filterName(data));
    return filterName(data);
    } catch (error){
        return error;
    }
}

function filterName(users){
    // console.log(users)
    let result = users.filter((user)=>user.name.length>17).map((user)=>user.name);
    // console.log(result)
    return result;
}

getUsers()

