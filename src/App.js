import "./styles.css";

export default function App() {
  function Order() {
    const Name = document.getElementById("name").value;
    const size = document.getElementById("select").value;
    const checkbox1 = document.getElementById("chesse").checked;
    const checkbox2 = document.getElementById("mad").checked;
    const Quantity = document.getElementById("quality").value;
    const textare = document.getElementById("text").value;
    const by = ` Order for ${Quantity} ${size} pizza(s) that are ${
      checkbox1 ? `Chesse` : `Non Chesse`
    } And 
    ${checkbox2 ? `have Mad Chesse` : `dont have Mad Chesse`} for ${Name} 
    <h3>INSTRUCTIONS : ${textare}</h3>
    
    `;

    document.getElementById("root").innerHTML = by;
  }

  return (
    <form>
      <h1>Welcome To</h1>
      <h2> I &#128151; PIZZA </h2>
      <img
        width="200px"
        src="https://image.shutterstock.com/image-photo/large-pizza-on-wooden-table-260nw-278281460.jpg"
      />
      <div className="App">
        <h4> YOUR ORDERS </h4>

        <div>
          <label>
            Name &nbsp;: &nbsp;
            <input type="text" name="name" id="name" />
          </label>
        </div>
        <br></br>
        <div>
          <label>
            Size &nbsp;: &nbsp;
            <select id="select">
              <option>small</option>
              <option>medium</option>
              <option>large</option>
              <option>extra large</option>
            </select>
          </label>
        </div>
        <br></br>
        <div>
          <div className="topping">
            <input
              type="checkbox"
              id="chesse"
              name="topping"
              value="Cheese pizza"
            />
            Cheese pizza <br></br>
            <input type="checkbox" id="mad" name="topping" value="Mad pizza" />
            Mad pizza
          </div>
          <br></br>
        </div>
        <div>
          <label>
            Quantity &nbsp;: &nbsp;
            <input type="number" name="quantity" id="quality" />
          </label>
        </div>
        <br></br>
        <div>
          <label>additional resourse &nbsp; &nbsp;</label>
          <textarea id="text"></textarea>
        </div>
        <br></br>
        <div>
          <button onClick={Order}>submit</button>
        </div>
      </div>
    </form>
  );
}
