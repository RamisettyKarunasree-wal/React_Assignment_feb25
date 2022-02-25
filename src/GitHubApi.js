import axios from "axios"
import { useEffect, useState } from "react"

const GitHubApi = () => {
    let [objKeys, setKeys] = useState([]);
    let [arr, setArr] = useState([])
    const displayDetails = (event) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${event.target.name.value}`).then((res) => {
            let newKeys = Object.keys(res.data).filter((val) => {
                if (val.substr(val.length - 3) == "url" || res.data[val]=="") {
                    return false;
                }
                else {
                    return true;
                }
            })
            setKeys(newKeys)
            setArr([...arr, res.data]);
        }).catch((err) => {
            alert("UserName doesn't exist");
        })
    }
    return (
        <div className="git">
            <h1>Git Hub Api</h1>
            <form onSubmit={displayDetails}>
                <input type="text" placeholder="Enter User Name" name="name" />
                <button>Get User Git</button>
            </form>
            <div>
                <h2>User Details</h2>
                {
                    arr.map((value) => {
                        return (
                            <div className="user">
                                <img className="image" src={value.avatar_url} />
                                <table>
                                    {
                                        objKeys.map((val) => {
                                            return (
                                                <tr>
                                                    <td className="key"><b>{val}:</b></td>
                                                    <td className="val">{value[val]}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </table>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}
export default GitHubApi;