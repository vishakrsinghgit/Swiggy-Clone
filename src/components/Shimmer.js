 const Shimmer = ()=>{
    return (
        <div className="flex flex-wrap">

            {
                // "shimmer loading.."
                Array(15).fill("").map((e,index)=>{
                    return <div key={index} className="w-52 h-96 bg-gray-200 border-2 m-5"></div>
                })
            }
        </div>
    )
}
export default Shimmer;