import {useRouteError} from "react-router-dom"
function Error() {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
        <h1>Opps!!</h1>
        <h2>Something went wrong!!</h2>
        <h2>status : {error.status} &nbsp; statusText : {error.statusText}
        </h2>
    </div>
  )
}

export default Error