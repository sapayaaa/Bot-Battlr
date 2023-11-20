import React, { useState } from 'react';
import { deleteBot } from './api';
import BotCard from './BotCard';

const YourBotArmy = () => {
  const [yourBots, setYourBots] = useState([]);

  const handleDischargeBot = (botId) => {
    deleteBot(botId)
      .then(() => {
        setYourBots(yourBots.filter((bot) => bot.id !== botId));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="YourBotArmy">
      {yourBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onDischargeBot={handleDischargeBot}
        />
      ))}
    </div>
  );
};

export default YourBotArmy;
