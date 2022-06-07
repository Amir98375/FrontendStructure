
export const Pagination=({
    currentpage,
    onpageChange,
    lastpage
})=>{
    const arr =  new Array(lastpage).fill(0)
    return(
        <div>
             {arr?.map((el,page)=><button onClick={
                 ()=>onpageChange(page+1)
                }
                disabled={(page+1)===currentpage}>
                    {page+1}

</button>)}

        </div>
    )
  
}