import React from 'react';

interface NavbarItemProps{
    label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
    label
}) => {
    return (
    <div className="text-black cursor-pointer hover:text-gray-500 transition font-bold">
        {label}
    </div>
    )
}
    

export default NavbarItem;