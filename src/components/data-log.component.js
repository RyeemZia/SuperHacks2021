import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class DataLog extends Component {
    constructor(props){
        super(props);

        this.onChangeMoT = this.onChangeMoT.bind(this);
        this.onChangeDist = this.onChangeDist.bind(this);
        this.onChangeDur = this.onChangeDur.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);

        this.state ={
            mot: '',
            dist: 0,
            dur: 0,
            date: new Date(),
            transportation: []
        }
    }

    componentDidMount(){
        this.setState({
            transportation: ['walking','car', 'bus'],
            mot: ''
        })
    }

    onChangeMoT(e){
        this.setState({
            mot: e.target.value
        })
    }
    onChangeDist(e){
        this.setState({
            dist: e.target.value
        })
    }
    onChangeDur(e){
        this.setState({
            dur: e.target.value
        })
    }
    onChangeDate(date){
        this.setState({
            date: date
        })
    }
    onSubmit(e){
        e.preventDefault();

        const submission ={
            mot: this.state.mot,
            dist: this.state.dist,
            dur: this.state.dur,
            date: this.state.date
        }

        console.log(submission)

        window.location ='/'

    }

    render(){
        return(
            <div>
                <h3>Log Data</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Mode of Transit</label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.mot}
                            onChange={this.onChangeMoT}>
                            {
                                this.state.transportation.map(function(mot){
                                    return<option   
                                        key={mot}
                                        value={mot}>{mot}
                                        </option>;
                                })
                            }
                            </select>
                    </div>
                </form>
            </div>
        )
    }
}