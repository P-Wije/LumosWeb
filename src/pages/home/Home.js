import "./home.scss"
import {useEffect, useState} from "react";
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "@firebase/firestore";
import {db} from "../../firebase-config";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
    const [newName, setNewName] = useState("")
    const [newAuthor, setNewAuthor] = useState("")
    const [newStock, setNewStock] = useState(0)

    const [books, setBooks] = useState([]);
    const booksCollectionRef = collection(db, "books");

    const addBook = async () => {
        await addDoc(booksCollectionRef, {name: newName, author: newAuthor, stock: Number(newStock)})
    }

    const increaseStock = async (id, stock) => {
        const bookDoc = doc(db, "books", id)
        const newFields = {stock: stock + 1}
        await updateDoc(bookDoc, newFields)
    }

    const removeBook = async (id) => {
        const bookDoc = doc(db, "books", id);
        await deleteDoc(bookDoc);
    }

    useEffect( () => {

        const getBooks = async () => {
            const data = await getDocs(booksCollectionRef);
            setBooks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getBooks()

    }, [])
    return (
        <div className={"home"}>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type={"books"}/>
                    <Widget type={"orders"}/>
                    <Widget type={"earnings"}/>
                    <Widget type={"balance"}/>
                </div>
                <div className="chartsContainer">
                    <Featured/>
                    <Chart/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Withdrawals
                    </div>
                    <Table/>
                </div>

                <input placeholder={"Name.."} onChange={(event) => {
                    setNewName(event.target.value)
                }}/>
                <input placeholder={"Author.."} onChange={(event) =>{
                    setNewAuthor(event.target.value)
                }}/>
                <input type={"number"} placeholder={"Stock.."} onChange={(event) =>{
                    setNewStock(event.target.value)
                }}/>

                <button onClick={addBook}> Add Book </button>
                {books.map((book) => {
                    return (
                        <div>
                            {" "}
                            <h1>Name: {book.name} </h1>
                            <h1>Author: {book.author} </h1>
                            <h1>Stock: {book.stock} </h1>
                            <button onClick={() => {increaseStock(book.id, book.stock)}}> Increase Stock </button>
                            <button onClick={() => {removeBook(book.id)}}> Remove Book</button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Home