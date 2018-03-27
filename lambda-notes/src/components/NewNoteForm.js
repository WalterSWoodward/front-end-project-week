import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addNote } from '../actions';
import {Button, Input} from 'reactstrap';

const StyledNewNoteForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: lavender;
  width: 70%;

  .title {
    height: 40px;
    width: 60%;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
    padding: 5px;
  }

  .text {
    width: 90%;
    height: 300px;
    margin-left: 20px;
    padding: 5px;
  }

  button {
    background: #2bc1c4;
    margin-left: 20px;
    width: 150px;
  }



`;


class NewNoteForm extends React.Component {
    state = {
      title: '',
      text: ''
    }
  
    addNote = (event) => {
      event.preventDefault();
      console.log('addNote FIRED')
      this.props.addNote({
        ...this.state,
        title: this.state.title,
        text: this.state.text,
        id: this.props.notes.length,
      })
      this.setState({
        title: '',
        text: '',
        redirect: true,
      })
    }

    handleChange = (e) => {
        console.log(`setState to --> [${e.target.name}]: ${e.target.value}`)
          console.log('handleChange: e.target.value', e.target.value)
          this.setState({
            [e.target.name]: e.target.value
          });
      }

      render () {
        console.log('NNF this.props', this.props)
          return (
            <StyledNewNoteForm>
              <form>
                <input className="title" type="text" name="title" placeholder="Title" onChange={this.handleChange} value={this.state.title}/>
                <textarea className="text" type="text" name="text" placeholder="Text" onChange={this.handleChange} value={this.state.text}/>
                <button onClick={this.addNote}>Save</button>
                {this.state.redirect ? <Redirect to='/' /> : null}
              </form>
            </StyledNewNoteForm>
          )
      }
    }

    const mapStateToProp = (state) => {
      return {
        notes: state,
      }
    }
    
    export default connect(mapStateToProp, { addNote })(NewNoteForm);