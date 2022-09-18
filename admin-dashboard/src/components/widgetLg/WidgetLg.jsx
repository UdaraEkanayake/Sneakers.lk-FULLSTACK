import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/BBwWN0D/F2-E3-C8-B6-93-D1-43-F8-B1-C3-A6-A000-DB0-EE8.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sathya Dissanayake</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$12.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/tMWNM41/IMG-0810.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Leyasha Chandrasiri</span>
          </td>
          <td className="widgetLgDate">3 Jun 2022</td>
          <td className="widgetLgAmount">$120.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/HnprQN5/IMG-0812.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Dunesha Chandrasiri</span>
          </td>
          <td className="widgetLgDate">4 Jun 2022</td>
          <td className="widgetLgAmount">$75.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/BymN8Mc/IMG-0813.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Gihanthi Herath</span>
          </td>
          <td className="widgetLgDate">5 Jun 2022</td>
          <td className="widgetLgAmount">$35.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
       
      </table>
    </div>
  );
}
