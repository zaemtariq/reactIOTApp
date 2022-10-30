
import './App.css';
const mqtt = require('mqtt');
function App() {
  return (
    <div className='body'>
    <div className='main-page'>
      <div className='inner-div'>
      <h1 id="heading">IOT Project Login</h1>
          <br />
          <br />
          <div className="input-form">
              <label htmlFor="cid">Client ID</label>
              <br />
              <input type="text" className="inp" id="cid" />
          </div>
          <br />
          <div className="input-form">
              <label htmlFor="un">UserName</label>
              <br />
              <input type="text" className="inp" id="un" />
          </div>
          <br />
          <div className="input-form">
              <label htmlFor="pwd">Password</label>
              <br />
              <input type="password" className="inp" id="pwd" />
          </div>
          <br />
          <br />
          <br />
          <button className="login-button" >Login</button>
      </div>
    </div>
  </div>
  );

  function ConnectMqttClient() {
    var client = mqtt.connect("mqtt://broker.mqttdashboard.com:1883")
    var clientId = "ranaG324"
    var topic = "karachi/millis"

    client.on('connect', () => {
      console.log('Connected')
      client.subscribe(topic, () => {
        console.log(`Subscribe to topic '${topic}'`)
      })
    })

    client.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString())
      //client.end()
    })
  }

}

export default App;
