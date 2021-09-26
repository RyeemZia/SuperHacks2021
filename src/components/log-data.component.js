import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

export default class LogData extends Component{
    constructor(props){
        super(props);

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeMoT = this.onChangeMoT.bind(this);
        this.onChangeDist = this.onChangeDist.bind(this);
        this.onChangeDur = this.onChangeDur.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

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

            transportation: ['Walking','Car', 'Bus'],
            mot: ''
        })
    }
    onClick(e){
        e.preventDefault();
        
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
        
        axios.post('http://localhost:5000/testRoute', {
            ...submission
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(submission);

        // window.location = '/';
    }
    render() {
        return (
          <div>
          <h3>Log Data</h3>
          <form onSubmit={this.onSubmit}>

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
              <input type="submit" onClick={this.onSubmit} value="Create Carbon Log" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }