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
        
        
            
        //TODO A regler
        const comptes = this.props.comptes.map((compte,index)=>
            <OneCompteComponent
            beginAConversation  = {this.props.beginAconversation}
            key = {"compte"+index}
            compte = {compte}
             />
        )
        return (<div>
        <h3>Contact</h3>
        {/*comptes*/}
        </div>)
    }
}

export default CompteComponent;