import { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/inputField";
import ListWrapper from "./components/listWrapper";
import { filterData } from "./commonUtils";

function App() {
	const [users, setUsers] = useState([]);
	const [userValue, setUserValue] = useState("");
	const [originalUsers, setOriginalUsers] = useState([]);
	
	const fetchData = async (url) => {
		try {
		  const res = await fetch(url)
		  const data = await res.json()
		  setOriginalUsers(data)
		  setUsers(data)
		} catch (err) {
		  console.log('Error:', err)
		}
	  }

	const handleUserSearch = (value) => {
		setUserValue(value)
		let _updatedData = filterData(value,originalUsers)
		setUsers(_updatedData);
	};

	useEffect(()=>{
	fetchData("https://fe-take-home-assignment.s3.us-east-2.amazonaws.com/Data.json")
	},[])

	return (
		<div className="App">
					<InputField
						handleUserSearch={handleUserSearch}
						setUserValue={setUserValue}
						userValue={userValue}
					/>
					<ListWrapper userList={users} value={userValue}/>
		</div>
	);
}

export default App;
