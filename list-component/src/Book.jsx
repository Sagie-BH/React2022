import React from "react";
import './index.css';


class Article extends React.Component {
  constructor() {
    super();
    this.props = {artcle: 'Jon'};
  }
  render(){
    return <h1 className='author'>{this.props.artcle}</h1>
  }
}

const Title = ({title}) => {
  const clickHandler = (e) => {
    console.log(e);
  } 
  return  <h1 style={ {color: 'antiquewhite'} } onClick={clickHandler}>{title}</h1>
}

const Book = ({book}) => {

return <article className='book' onMouseOver={(e) => console.log()}>
    <img className='book-img' src={book.img} alt=''></img>
    <Title title={book.title}/>
    
  </article>
};




export default Book;