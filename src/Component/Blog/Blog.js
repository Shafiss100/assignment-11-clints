import React from 'react';

const Blog = () => {
    
    return (
      <div className="container">
        <h1>What is the deffrents between javascript and node.js?</h1>
        <p>
          javascript is a scripting programming language. This language is use
          in clint side. javascript programming language not use in server side.
          this language is not suport in server side. But the node.js is suport
          in server side. node.js is a javascript lybrary. this code syntex same
          as javascript.
        </p>
        <br />
        <h1>When we use node.js and when mongodb?</h1>
        <p>
          node.js is sever side language that comes from chorom javascript
          compiler. It is use in server side. but mongodb is a database. where
          data will be stored . when we work in server site we can use node.js
          and when we need to stored data in any database we can use mongodb.
        </p>
        <br />
        <h1>What is the deffrents between SQL and noSQL?</h1>
        <p>
          the SQL is a programming language which provide us to connect with
          clint side to database as like node.js. noSQL database are non
          relational. Its provide a unstructured data.
        </p>
        <br />
        <h1>What is the perpuse of jwt and how dose it work?</h1>
        <p>the full form of jwt is JSON Web Tokens. it is a incripted code. It is send from server to clint side and the sequre document are attach with to jwt and its make a incripted document. Thats help to make the document secret.</p>
      </div>
    );
};

export default Blog;