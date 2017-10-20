import React from 'react';
import Item from "./Item";
import './List.css';

const List = ({ channels, ...rest }) =>
    <div className="channel">
        {
            channels.map(channel =>
                <Item
                    key={channel.Id}
                    channel={channel}
                    {...rest}
                />
            )
        }
    </div>;

export default List;