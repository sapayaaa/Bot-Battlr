import React {useState, useEffect } from 'react' 

const BotCollection =() => {
  const [bots,setBots] =useState([]);

  useEffect(() => {
    fetchBots()
    .then((data) => setBots(data))
    .catch((error) => console.error(error));
  }, []);

  return (
    <div className="BotCollection">
      {bots.map((bot) =>(
        <BotCard Key={bot.id} bot={bot}/>
      ))}
    </div>
  );
};

export default BotCollection;