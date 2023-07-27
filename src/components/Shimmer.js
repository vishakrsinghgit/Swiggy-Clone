const Shimmer = ()=>{
    return (
        <div className="restaurant-list">

            {
                // "shimmer loading.."
                Array(15).fill("").map((e,index)=>{
                    return <div key={index} className="shimmer-card"></div>
                })
            }
        </div>
    )
}
export default Shimmer;