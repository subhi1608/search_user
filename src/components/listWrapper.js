import React, { useEffect, useRef, useState } from "react";
import ListItem from "./listItem";

const ListWrapper = (props) => {
	const {  value,userList } = props;
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [inputSource, setInputSource] = useState(null);
	const ref = useRef(null);

	useEffect(() => {
	  const handleKeyDown = (event) => {
		setInputSource('keyboard');
		if (event.key === 'ArrowDown') {
			if(selectedIndex=== -1) setSelectedIndex(0)
			else setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, userList.length - 1));
		} else if (event.key === 'ArrowUp') {
		  setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
		}
	  };
  
	  document.addEventListener('keydown', handleKeyDown);
	  return () => {
		document.removeEventListener('keydown', handleKeyDown);
	  };
	}, [selectedIndex]);

	useEffect(() => {
		if (selectedIndex !== -1 && ref.current  && inputSource === 'keyboard') {
		  ref.current.children[selectedIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
		}
	  }, [selectedIndex]);

	const handleMouseOver = (index) => {
		if (inputSource !== 'keyboard' && selectedIndex!==index) {
		  setSelectedIndex(index);
		}
	  };

	return (
		<div className="list_wrapper" ref={ref} onMouseMove={() =>setInputSource('mouse')} >
				{
					value && userList && userList?.length ? userList.map((item,index)=>{
						return <ListItem
						selectedIndex={selectedIndex}
						handleMouseOver={handleMouseOver} 
						key={index} 
						index={index} 
						value={value}
						data ={item}
						/>
					}):
					(value?
					<div className="empty">
						No User found
					</div>
					:null)
				}
		</div>
	);
};

export default ListWrapper;
