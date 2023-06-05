import React, { useEffect,useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const BookListing = () => {
    const navigate = useNavigate();
    const[bookData,setBookData] = useState([]);

    useEffect(()=>{
       loadBooks();
    },[]);

const loadBooks = async () => {
    const result =await axios.get("http://localhost:5000/books");
    console.log(result.data);
    setBookData(result.data);
}

const EditBook = (id) => {
    navigate("/books/edit/"+id);
}

const RemoveBook = async (id) => {
    if(window.confirm("Do you want to delete this book?")){
        await DeleteBook(id);
        loadBooks();
    }
}

const DeleteBook = async (id) => {
    const result = await axios.delete("http://localhost:5000/books/"+id);
    alert("deleted successfully");
}

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-title'>
            <h2 style={{"color":"rgb(40,209,76)"}}>Books Details</h2>
        </div>
        <div className='card-body'>
            <div className='add'>
                <Link to="books/create" className='btn btn-success'>Add New Details</Link>
            </div>
            <table className='table table-bordered'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>Id</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookData.map(book => (
                            <tr  key={book._id}>
                                <td>{book._id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>
                                    <a onClick={()=>{EditBook(book._id)}} className='btn btn-success'>Edit</a>
                                    <a onClick={()=>{RemoveBook(book._id)}} className='btn btn-danger'>Delete</a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default BookListing
