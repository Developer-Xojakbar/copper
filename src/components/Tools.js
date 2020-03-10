import React from 'react';

const App = () => {

    const Item = ({ icon , h_text , text}) => {
        return (
            <div className="tools__items-item">
                <div className="tools__items-item-icon">
                    <img src={require("../images/" + icon)} alt="icon" />
                </div>
                <div className="tools__items-item-context">
                    <h4 className="tools__items-item-context-h">{h_text}</h4>
                    <p className="tools__items-item-context-text">{text}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="container tools-container">
            <div className="tools">
                <div className="tools__top">
                    <h2 className="tools__top-h">Seamless integration with every G Suite app.</h2>
                </div>
                <div className="tools__items">
                    <Item
                        icon={"icon-calendar@2x.png"}
                        h_text={"Google Calendar"}
                        text={"Never miss another meeting. Any meetings with your contacts are automatically recorded and synced. Bonus: contacts can book you directly from your calendar."}
                    />
                    <Item
                        icon={"icon-slides@2x.png"}
                        h_text={"Google Slides"}
                        text={"Customize your slide decks in seconds with Copper’s Slides integration. Populate your decks with key data in just a few clicks."}
                    />
                    <Item
                        icon={"icon-hangouts@2x.png"}
                        h_text={"Hangouts Chat"}
                        text={"Copper’s Hangouts Chat integration notifies you about important changes and updates to leads, opportunities, and more."}
                    />
                    <Item
                        icon={"icon-gmail@2x.png"}
                        h_text={"Gmail Contacts"}
                        text={"Copper suggests new leads (and updates to old ones) based on your email conversations—and sends notifications right to your inbox too so that nothing slips through the cracks."}
                    />
                    <Item
                        icon={"icon-docs@2x.png"}
                        h_text={"Google Docs"}
                        text={"Working together has never been easier. Just attach a Google Doc to any lead, account, or opportunity in Copper."}
                    />
                    <Item
                        icon={"icon-sheets@2x.png"}
                        h_text={"Google Sheets"}
                        text={"Export any data from Copper directly to Google Sheets to create advanced dashboards, reports, and charts—that your team will actually use."}
                    />
                    <Item
                        icon={"icon-data-studio@2x.png"}
                        h_text={"Data Studio"}
                        text={"Now, the whole team can easily make data-driven decisions. Connect Copper and Google’s Data Studio to clearly visualize and analyze data from multiple sources."}
                    />
                    <Item
                        icon={"icon_data-prep@2x.png"}
                        h_text={"Data Enrichment"}
                        text={"No more digging around online. Copper automatically finds and updates contact details for you including phone numbers, social media profiles, and company descriptions."}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;