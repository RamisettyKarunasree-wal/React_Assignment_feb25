import axios from "axios"
import { useEffect, useState } from "react"

const Api=()=>{
    let [data,setData]=useState({});
    let [objKeys,setKeys]=useState([]);
    useEffect(()=>{
        axios.get("https://www.boredapi.com/api/activity").then((res)=>{
            setData(res.data);
            setKeys(Object.keys(res.data));           
        }).catch((error)=>{
            console.log(`error Ocuured:${error}`)
        })
    },[])
    return (
        <div className="apiComponent">
            <h1>Bored Api</h1>
            <table>
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
                {
                objKeys.map((val)=>{
                    return (
                        <tr>
                            <td>{val}</td>
                            <td>{data[val]}</td>
                        </tr>
                    )
                })
            }
            </table>
        </div>
    )
}
export default Api;