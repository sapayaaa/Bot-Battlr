import React from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import EnlistedBotRow from './Components/EnlistedBotRow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bots: [],
      yourBotArmy: [],
    };
  }

  componentDidMount() {
    // Fetch bot data from the API endpoint
    fetch('https://bot-api-i4lw.onrender.com')
      .then(Response => Response.json())
      .then(data => this.setState({ bots: data }))
  }

  enlistBot = (bot) => {
    // Check if the bot is already enlisted in the army
    if (!this.state.yourBotArmy.some((b) => b.id === bot.id)) {
      this.setState({ yourBotArmy: [...this.state.yourBotArmy, bot] });
    }
  };

  releaseBot = (botId) => {
    // Remove the bot from the army
    const updatedArmy = this.state.yourBotArmy.filter((bot) => bot.id !== botId);
    this.setState({ yourBotArmy: updatedArmy });
  };

  dischargeBot = async (botId) => {
    // Delete the bot both from the backend and from the YourBotArmy on the frontend
    try {
      await fetch(`https://bot-api-i4lw.onrender.com${botId}`, { method: 'DELETE' });
      this.releaseBot(botId);
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  render() {
    const { bots, yourBotArmy } = this.state;

    return (
      <div className="app">
        <h1>Bot Collection</h1>
        <YourBotArmy
          bots={yourBotArmy}
          releaseBot={this.releaseBot}
          dischargeBot={this.dischargeBot}
        />
        <BotCollection bots={bots} enlistBot={this.enlistBot} />
      </div>
    );
  }
}

export default App;
