import React from "react";
import { Button } from 'antd';


class DeleteButton extends React.Component {

    render () {

        return (
            <Button type="primary" key={"delete"}>Delete</Button>
        )
    }
}

export default DeleteButton;