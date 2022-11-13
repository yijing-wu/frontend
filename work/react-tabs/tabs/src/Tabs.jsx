import { useState } from 'react';

function Tabs({ entries }) {
    const [isEntryOpen, setIsEntryOpen] = useState({});

    // set the first tab default
    if (JSON.stringify(isEntryOpen) == "{}") {
        isEntryOpen.Introduction = true;
    }

    // operate when click
    function toggleEntry(title) {
        // close all other than 'title'
        for (let key in isEntryOpen) {
            if(key!=title) {
                isEntryOpen[key] = false;
            }
        }
        // open/close the chosen one
        setIsEntryOpen({
        ...isEntryOpen,
        [title]: !isEntryOpen[title],
        });
    }

    return (
        <div className = "tabs">
        { Object.keys(entries).map( title => {
            let isOpen = isEntryOpen[title];
            return (
                <div
                key={title}
                className={`tabs__entry ${isOpen ? 'tabs__entry--open' : '' }`}
                >
                <button
                    className="tabs__title"
                    onClick={ () => toggleEntry(title) }
                >
                {title}
                </button>
                    <div className="tabs__body">{entries[title]}</div>
                </div>
            );
        })}
        </div>
    );

}

export default Tabs;