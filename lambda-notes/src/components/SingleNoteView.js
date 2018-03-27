import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import HomeLeftPanel from './HomeLeftPanel';

const StyledNote = styled.div`
    display: flex;

    .card-body {
        font-size: 12px;
        width: 50%;
        background: lavender;
    }

    .card-title {
        font-size: 16px;

    }

    .card-text {

    }
`;



class SingleNoteView extends React.Component {
        render() {
            // console.log('this is this.props.notes', this.props.notes)
            // console.log('BubbleGum', this.props.notes[this.props.match.params.id].title)
        return (
            <StyledNote key={this.props.match.params.id}>
            <HomeLeftPanel />
                <div className="card-body" key={this.props.match.params.id}>
                    <h2 className="card-title">{this.props.notes[this.props.match.params.id - 1].title}</h2>
                    <CardText className="card-text">{this.props.notes[this.props.match.params.id - 1].text}</CardText>
                </div>
            </StyledNote >
        )
    }
}
  const mapStateToProps = (state) => {
    return {
      notes: state
    };
  };
  
  export default connect(mapStateToProps, { })(SingleNoteView);