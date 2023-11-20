import React, { useState } from 'react';
import BotCard from './BotCard';

const MyBotArmy = () => {
  const [yourBots, setYourBots] = useState([]);

  const handleReleaseBot = (botId) => {
    setYourBots(yourBots.filter((bot) => bot.id !== botId));
  };

  return (
    <div className="MyBotArmy">
      {yourBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onReleaseBot={() => handleReleaseBot(bot.id)}
        />
      ))}
    </div>
  );
};

export default MyBotArmy;
