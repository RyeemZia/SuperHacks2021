import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class DataLog extends Component {
    constructor(props){
        super(props);

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeMoT = this.onChangeMoT.bind(this);
        this.onChangeDist = this.onChangeDist.bind(this);
        this.onChangeDur = this.onChangeDur.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);

        this.state ={
            username: '',
            mot: '',
            dist: 0,
            dur: 0,
            date: new Date(),
            users: [],
            transportation: []
        }
    }

    componentDidMount(){
        this.setState({
            users: ['', 'Ryeem', 'Jacob','Camilo'],
            username: '',
            transportation: ['Walking','Car', 'Bus'],
            mot: ''
        })
    }

    onChangeUser(e){
        this.setState({
            username: e.target.value
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
            username: this.state.username,
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
                        <label>User</label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUser}>
                            {
                                this.state.users.map(function(username){
                                    return<option   
                                        key={username}
                                        value={username}>{username}
                                        </option>;
                                })
                            }
                            </select>
                    </div>
                    <div className="form-group">
                        <label>Mode of Transportation</label>
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

                    <div className="form-group">
                        <label>Distance Travelled (Miles)</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.dist}
                            onChange={this.onChangeDist}/>

                    </div>
                    <div className="form-group">
                        <label>Duration (Minutes)</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.dur}
                            onChange={this.onChangeDur}/>

                    </div>

                    <div classname="form-group">
                        <label>Date </label>
                        <div>
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={this.onChangeDate}
                                />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type = "submit" value="Log Data" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    }
}