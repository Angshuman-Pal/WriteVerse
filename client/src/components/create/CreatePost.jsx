import React, { useState, useEffect, useContext } from 'react';
import { styled, Box, TextareaAutosize, Button, InputBase, FormControl } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
  margin: '50px 100px',
  [theme.breakpoints.down('md')]: {
    margin: 0
  }
}));

const Image = styled('img')({
  width: '100%',
  height: '50vh',
  objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 30px;
  font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  border: none;
  margin-top: 50px;
  font-size: 18px;
  &:focus-visible {
    outline: none;
  }
`;

const initialPost = {
  title: '',
  description: '',
  picture: '',
  username: '',
  categories: '',
  createdDate: new Date()
};

const CreatePost = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState('');
  const { account } = useContext(DataContext);

  const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1533327325824-76bc4e62d560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await API.uploadFile(data);
        post.picture = response.data;
      }
    }
    getImage();
    post.categories = location.search?.split('=')[1] || 'All';
    post.username = account.username;
  }, [file]);

  const savePost = async () => {
    if (!post.description) {
      console.log('Description is required'); // Display an error message
      return; // Stop further execution
    }

    await API.createPost(post);
    navigate('/');
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: "#F4D160", minHeight: "100vh" }}>
      <Container style={{ backgroundColor: "#F4D160", minHeight: "100vh" }}>
        <Image src={url} alt="post" />

        <StyledFormControl>
          <label htmlFor="fileInput">
            <Add fontSize="large" color="action" />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <InputTextField onChange={(e) => handleChange(e)} name='title' placeholder="Title" />
          <Button style={{ backgroundColor: "black" }} onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
        </StyledFormControl>

        <Textarea
          rowsMin={5}
          placeholder="Tell your story..."
          name="description"
          onChange={handleChange}
          style={{
            backgroundColor: '#EDE4FF',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 0 3px 2px #A076F9',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            lineHeight: '1.5',
            minHeight: '150px',
            padding: '10px',
            resize: 'vertical',
            outline: 'none',
          }}
        />
      </Container>
    </div>
  );
};

export default CreatePost;
