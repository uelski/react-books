import React, {Component} from 'react'
import Book from './Book'

class Shelf extends Component {
   
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map((book) => {
                        return(
                            <li key={book.title}>
                            <Book
                                backgroundImage={book.backgroundImage}
                                title={book.title}
                                author={book.author}
                            />
                        </li>
                        )
                    })}
                </ol>
                </div>
            </div>
        )
    }
}

export default Shelf