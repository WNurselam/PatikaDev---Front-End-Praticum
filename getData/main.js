import axios from "axios"; // projeye axios'u dahil etme

const fetchData = async (id) => {  // asenkron işlemleri için async ve await yapısını kullanma 
    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`) 
    // axios'dan data şeklinde dönen değeri user value'a ekleme parametreye göre user alma

    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    // alınan id'ye göre post işlemini çağırma  

    console.log("User: ", user, "Post: ", post); 
    
}

export default fetchData ;
// Elimizde bulunan fonksyionu dışa aktarma 