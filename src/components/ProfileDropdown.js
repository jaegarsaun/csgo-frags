import React from "react";
import { useState, useEffect } from 'react';

import { FaRegUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { AiOutlineDashboard } from "react-icons/ai";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from '@chakra-ui/react'

import '../style.css';


import { useAuth } from '../contexts/AuthContext';


import { ChevronDownIcon, AddIcon, DeleteIcon } from '@chakra-ui/icons'

const ProfileDropdown = () => {
    const { signInWithGoogle, signOut, currentUser } = useAuth();
    const [displayName, setDisplayName] = useState('');
    const [isModOrAdmin, setIsModOrAdmin] = useState(false);

    useEffect(() => {
        if (currentUser) {

            const user = currentUser;

            const getUserInfo = async () => {
                const response = await fetch(`http://localhost:4000/api/users/${user.uid}`, {
                    method: 'GET',
                });
                if (response.ok) {
                    const data = await response.json();
                    setDisplayName(data[0].displayName); // Store the displayName in the state
                    if (data[0].role === 'moderator' || data[0].role === 'admin') {
                        setIsModOrAdmin(true); // Store the role in the state
                    }
                } else {
                    console.log('User not found');
                }
            };

            getUserInfo();

        }
    }, [currentUser]);

    return (
        <Menu>
            <MenuButton className="primary-button font-reg secondary-text" style={styles.menu} >

                {displayName}
                <ChevronDownIcon />

            </MenuButton>
            <MenuList style={styles.dropdownmenu}>
                <MenuItem
                    style={styles.dropdownItem}
                    icon={<AddIcon />}
                    className="font-reg secondary-text"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = styles.dropdownItemHover.backgroundColor;
                        e.currentTarget.style.border = styles.dropdownItemHover.border;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = styles.dropdownItem.backgroundColor;
                        e.currentTarget.style.border = styles.dropdownItem.border;
                    }}
                >
                    Add Nade
                </MenuItem>
                <MenuItem
                    style={styles.dropdownItem}
                    icon={<DeleteIcon />}
                    className="font-reg secondary-text"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = styles.dropdownItemHover.backgroundColor;
                        e.currentTarget.style.border = styles.dropdownItemHover.border;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = styles.dropdownItem.backgroundColor;
                        e.currentTarget.style.border = styles.dropdownItem.border;
                    }}
                >
                    Delete Nade
                </MenuItem>

                {/* Role specific menu item */}
                {isModOrAdmin ? (
                    <MenuItem
                        style={styles.dropdownItem}
                        icon={<AiOutlineDashboard />}
                        className="font-reg secondary-text"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = styles.dropdownItemHover.backgroundColor;
                            e.currentTarget.style.border = styles.dropdownItemHover.border;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = styles.dropdownItem.backgroundColor;
                            e.currentTarget.style.border = styles.dropdownItem.border;
                        }}
                    >
                        Dashboard
                    </MenuItem>
                ) : null}


                <MenuItem
                    style={styles.dropdownItem}
                    icon={<FaRegUserCircle />}
                    className="font-reg secondary-text"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = styles.dropdownItemHover.backgroundColor;
                        e.currentTarget.style.border = styles.dropdownItemHover.border;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = styles.dropdownItem.backgroundColor;
                        e.currentTarget.style.border = styles.dropdownItem.border;
                    }}
                >
                    Profile
                </MenuItem>
                <MenuDivider style={styles.menuDivider} />
                <MenuItem
                    style={styles.dropdownItem}
                    icon={<FaSignOutAlt />}
                    className="font-reg secondary-text"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = styles.dropdownItemHover.backgroundColor;
                        e.currentTarget.style.border = styles.dropdownItemHover.border;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = styles.dropdownItem.backgroundColor;
                        e.currentTarget.style.border = styles.dropdownItem.border;
                    }}
                    onClick={signOut}
                >
                    Sign Out
                </MenuItem>
            </MenuList>
        </Menu>
    )
};

const styles = {
    dropdownmenu: {
        backgroundColor: '#121927',
        border: '2px solid #3D4452',
    },
    dropdownItem: {
        backgroundColor: 'transparent',
        color: '#BBC1C8',
        border: '1.5px solid transparent',
        transition: 'all 0.2s ease-in-out',
    },
    menuDivider: {
        border: '1px solid #3D4452'
    },
    dropdownItemHover: {
        backgroundColor: '#262C35',
        border: '1.5px solid #3D4452',
        transition: 'all 0.2s ease-in-out',
    },
};

export default ProfileDropdown;