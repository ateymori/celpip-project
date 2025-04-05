import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
    Text,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface CustomDropdownProps {
    skill: string;
    options: number[];
    value?: number;
    onChange: (value: number | undefined) => void;
    isInvalid?: boolean;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
    skill,
    options,
    value,
    onChange,
    isInvalid = false,
}) => {
    return (
        <Box width="100%"
        position="relative"
  zIndex="0"
        >
            <Text
                textTransform="capitalize"
                fontWeight="bold"
                textAlign="center"
                marginBottom="2"
                color={isInvalid ? "red.500" : "white"}
            >
                {skill}
            </Text>
            <Menu>
                <MenuButton
                    border="none"
                    as={Button}
                    rightIcon={<FaChevronDown />}
                    bg={isInvalid ? "red.500" : "#543691"}
                    _hover={{ bg: "#603da6" }}
                    _focus={{ outline: "none" }}
                    _expanded={{ bg: "#8762d1" }}

                    width="100%"
                    color="white"
                >
                    {value !== undefined ? value : "Select score"}
                </MenuButton>
                <MenuList bg="#543691" border="none" zIndex="1000">
                    {/* Add "Select score" as the first option */}
                    <MenuItem
                        bg="#543691"
                        color="white"
                        justifyContent="center"
                        border="none"
                        _hover={{ bg: "#6842b3", color: "white" }}
                        _focus={{ outline: "none" }}
                        onClick={() => onChange(undefined)}

                    >
                        Select score
                    </MenuItem>
                    {options.map((option) => (
                        <MenuItem
                            key={option}
                            bg="#543691"
                            color="white"
                            justifyContent="center"
                            border="none"
                            _hover={{ bg: "#6842b3", color: "white" }}
                            _focus={{ outline: "none" }}
                            onClick={() => onChange(option)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
};
