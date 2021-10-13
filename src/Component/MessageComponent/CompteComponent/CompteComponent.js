import React, { Component } from "react";
import { connect } from "react-redux";
import OneCompteComponent  from './OneCompteComponent/OneCompteComponent'

class CompteComponent extends Component
{

    constructor(props)
    {
        super(props);

    }

    render()
    {
        
        
        let ids =[]
        let logins = []   
        //TODO A regler
        this.props.comptes.forEach(element => {
            ids.push(element.id)
            logins.push(element.login)
        });
        
        const comptes = logins.map((compte,index)=>
            <OneCompteComponent
            beginAConversation  = {this.props.beginAconversation}
            EditConv = {this.props.EditConv}
            key = {"compte"+index}
            compteId = {this.props.comptes[index].Id}
            compteLogin ={this.props.comptes[index].nom}
            changeConv ={this.props.ChangeConv}
            />
        )
        return (<div>
        <h3>Contact</h3>
        {comptes}
        </div>)
    }
}

export default CompteComponent;