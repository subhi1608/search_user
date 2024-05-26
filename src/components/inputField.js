import React from "react";

const InputField = (props) => {
	const { userValue, handleUserSearch } = props;

	return (
			<div className="searchable_container">
					<input
						className="searchable_user"
						type="text"
						name=""
						id=""
						placeholder="Search users by ID,address,nam..."
						value={userValue}
						onChange={(e) => handleUserSearch(e.target.value)}
					/>
				</div>
	);
};

export default InputField;
