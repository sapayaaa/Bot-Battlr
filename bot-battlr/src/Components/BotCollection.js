import React from 'react';
import BotCard from './BotCard';
import '../App.css'

const BotCollection = ({ bots, enlistBot }) => {
    return (
        <div className="bot-collection">
            {bots.map((bot) => (
                <BotCard key={bot.id} bot={bot} onEnlist={() => enlistBot(bot)} />
            ))}
        </div>
    );
};

export default BotCollection;