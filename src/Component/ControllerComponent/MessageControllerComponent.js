import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataMessage } from "../../js/action";
import { addMessage } from '../../js/action';
import MessageComponent from "../MessageComponent/MessageComponent";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import { Route,BrowserRouter as Router,Switch } from "react-router-dom";

import store from '../../js/store';


export class MessageControllerComponent extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = { messages: [] }

    }

    componentDidMount() {
        this.props.getDataMessage().then(prom => {

            this.setState({ messages: this.props.Lmessages })
            console.log(this.state)
        });

    }
    componentDidUpdate() {

    }
    render() {

        const t = this.props.Lmessages
        console.log(t)

        return (<div>
                        
                        <MessageComponent
                            addMessage={(e) => this.addMessages(e)}
                            key="liste"
                            ListMessage={t} />
                </div>
           
        )
                    
          

    }
    addMessages(e) {
        this.props.addMessage(e)
        this.setState({ messages: this.props.Lmessages })
    }

}

const mapStateToProps = (state) => {
    console.log(state.messages)
    return {
        Lmessages: state.messages
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching actions returned by action creators
        getDatass: () => {
            getDataMessage();
            this.setState({ messages: this.props.Lmessages })

        }
    }
}

export default connect(
    mapStateToProps,
    { addMessage, getDataMessage })
    (MessageControllerComponent)