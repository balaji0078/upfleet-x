import React from "react";

const UserAuth = ({ActualComponent, ...rest}) => {
    console.log('rest', rest)
    return <ActualComponent />
}