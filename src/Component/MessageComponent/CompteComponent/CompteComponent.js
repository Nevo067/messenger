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
        return <div>
        <h3>Contact</h3>
        <OneCompteComponent />;
        </div>
    }
}

export default CompteComponent;