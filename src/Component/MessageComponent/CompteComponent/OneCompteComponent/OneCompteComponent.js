import { Component } from "react";
import './OneCompteComponent.css';
class OneCompteComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {isEdit:true,nom:this.props.compteLogin}
        
    }
    
    render()
    {
        let isEdit = this.state.isEdit; 
        return(
            <div class="row">
                {isEdit 
                    ? 
                <div class ="col col-xl compte">
                    <p onClick = {()=>this.props.changeConv(this.props.compteId)}>
                        {this.props.compteLogin}
                    </p>
                </div>
                :
                <div class="col col-xl compte">
                    <input type="text" class="form-control" name="nom" value={this.state.nom} onChange={(e)=>this.changeMessage(e)}></input>
                </div>   
                }
                <button class="btn btn-block btn-warning col-3 border" onClick={()=>this.changeIsEdit()}>Edition</button>
            </div>
        )
        
    }
    changeIsEdit()
    {
        let isEdit = this.state.isEdit;
        if(!isEdit)
        {
            
        }
        this.setState({isEdit : !isEdit})
    }
    changeMessage(e)
    {
        this.setState({nom:e.target.value})
    }
}
export default OneCompteComponent;