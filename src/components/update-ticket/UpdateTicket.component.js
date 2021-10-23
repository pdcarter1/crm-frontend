import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ReplyOnTicket } from "../../pages/ticket-list/ticketsAction";

export const UpdateTicket = ({_id}) => {
  
  const dispatch = useDispatch();
  const { user:{name} } = useSelector(state => state.user);
  const [message, setMessage] = useState('');
  
  const handleOnChange = e => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const msgObj = {
      message,
      sender: name
    }
    dispatch(ReplyOnTicket(_id, msgObj));
    setMessage("");
  };

  return (
    
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>Please reply to the users message here or update the ticket</Form.Text>
      <Form.Control            
        value={message}
        onChange={handleOnChange}
        as="textarea" 
        row="5" 
        name="detail" 
      />
      <div className="text-right mt-3 mb-3">
        <Button variant="info" type="submit" >Reply</Button>
      </div>            
    </Form>
    
  );
};

UpdateTicket.propTypes = {  
  _id: PropTypes.string.isRequired,  
};