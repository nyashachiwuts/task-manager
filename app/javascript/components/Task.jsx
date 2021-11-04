import React from "react";
import { Link } from "react-router-dom";

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = { task: { todo: "" } };

        this.addHtmlEntities = this.addHtmlEntities.bind(this);
    }

    componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;

        const url = `/api/v1/show/${id}`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network error.");
            })
            .then(response => this.setState({ task: response }))
            .catch(() => this.props.history.push("/tasks"));
    }

    addHtmlEntities(str) {
        return String(str)
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">");
    }

    render() {
        const { task } = this.state;
        return (
            <div className="">
                <div className="hero position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-4 position-relative text-white">
                        {task.todo}
                    </h1>
                </div>
            </div>
        );
    }
}

export default Task;
