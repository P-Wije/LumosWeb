import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

const List = ({title, path}) => {
  return (
      <div className={"list"}>
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <Datatable title={title} path={path}/>
        </div>
      </div>
  )
}

export default List