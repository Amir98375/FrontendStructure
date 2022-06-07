import { useEffect, useState } from "react"
import axios from "axios"
import './product.css'
import { Pagination } from "./pagination"
export const Product =()=>{
    const [data,setdata]=useState([])
    const [page,setpage]=useState(1)
    const [sorting,setsorting] =useState('title')
    const [ord,setord]=useState('Asc')

    console.log(sorting,ord)
console.log(data)
    const handlesort=()=>{
        if(sorting=='title' && ord=='Desc'){
            getData(page,sorting,ord)
        }
        else  if(sorting=='title' && ord=='Asc'){
            getData(page,sorting,ord)
        }
        else if(sorting=='price' && ord=='Asc'){
            getData(page,sorting,ord)
        }
        else if(sorting=='price' && ord=='Desc'){
            getData(page,sorting,ord)
        }
        
    }

    const getData=(page,s,o)=>{
        axios.get(`https://my-json-server-masai.herokuapp.com/products`,{
            params:{
                _page:page,
                _limit:16,
                _sort:s,
                _order:o
            }
        })
        .then((res)=>{
            setdata(res.data)
        })
    }
    useEffect(()=>{
        getData(page,sorting)
    },[page])


    const handleClick=(page)=>setpage(page)
    //console.log(page)
    return(
    <>
   <div style={{display:"flex"}}> 
   <button onClick={()=>setpage((p)=>p-1)}>prev</button>
     <Pagination currentpage={page}
     lastpage={5} onpageChange={setpage}/>
     <button onClick={(handleClick)=>setpage((page)=>page-1)}>next</button></div>


    <select name="" id="" onChange={(e)=>{setsorting(e.target.value)}}>
        <option value="title">title</option>
        <option value="price">price</option>
    </select>
    <select name="" id="" onChange={(e)=>{setord(e.target.value)}}>
        <option value="Asc">ascending</option>
        <option value="Desc">descending</option>
    </select>
    <button onClick={handlesort}>sortby</button>

<select name="" id="">

</select>

    <div className="container">
    
      
      {data?.map((el)=>
      
          <div >
            
             <img className="image" src={el.image} alt="" />
             <p className="desc">{el.description}</p>
             <p>{el.price}</p>
             <p>{el.title}</p>
             <p>{el.rating.rate}</p>
        
            
             
          </div>
      
      )}
    </div>
    </>
    )
}