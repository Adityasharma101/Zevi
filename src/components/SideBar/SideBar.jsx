import React from 'react'

import './SideBar.scss'
const Box = ({ change, item }) => {
    const { checked, id, desc } = item;

    const handleChange = () => {
        change(id);
    };

    return (
        <div className="checkbox-item">
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    className="custom-checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                {desc}
            </label>
        </div>
    );
};




const SideBar = ({ Label, filterItems, change }) => {
    return (
        <>
            <div className="sidebar_heading">
                {Label}
            </div>
            {
                filterItems.map((item) => (
                    <div key={item.id}>
                    <Box key={item.id} item={item} change={change} />
                    </div>
                ))
            }
        </>
    )
}

export default SideBar