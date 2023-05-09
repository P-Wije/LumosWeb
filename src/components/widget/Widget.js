import "./widget.scss"
import {
    AccountBalanceWalletOutlined,
    KeyboardArrowUp,
    MonetizationOnOutlined,
    PersonOutlined,
    ShoppingCartOutlined
} from "@mui/icons-material";

const Widget = ({ type }) => {
  let data;

  //temp
  const amount = 100
  const diff = 20

  switch(type) {
      case "books":
          data={
              title:"BOOKS",
              isMoney: false,
              link: "See all books",
              icon: <PersonOutlined className={"icon"} style={{backgroundColor:"rgba(255,0,0,0.2)", color: "crimson"}}/>,
          };
          break;
      case "orders":
          data={
              title:"ORDERS",
              isMoney: false,
              link: "View all orders",
              icon: <ShoppingCartOutlined className={"icon"} style={{backgroundColor:"rgba(218,165,32,0.2)" , color: "goldenrod"}}/>,
          };
          break;
      case "earnings":
          data={
              title:"EARNINGS",
              isMoney: true,
              link: "View net earnings",
              icon: <MonetizationOnOutlined className={"icon"} style={{backgroundColor:"rgba(0,255,0,0.2)" , color: "green"}}/>,
          };
          break;
      case "balance":
          data={
              title:"BALANCE",
              isMoney: true,
              link: "See details",
              icon: <AccountBalanceWalletOutlined className={"icon"} style={{backgroundColor:"rgba(150,32,218,0.2)" , color:"purple"}}/>,
          };
          break;
      default:
          break;
  }

  return (
      <div className={"widget"}>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUp/>
                {diff} %
            </div>
            {data.icon}
        </div>
      </div>
  )
}

export default Widget