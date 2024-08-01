import React from 'react'
import SubLayout from "../components/layout/SubLayout";
import MainFooter from "../components/layout/MainFooter";
import ChatBot from '../components/profile/ChatBot'

const ChatBotPage = () => {
    return (
        <>
        <SubLayout pageTitle="챗봇 🤔">
            <ChatBot />
        </SubLayout>
        <MainFooter />
        </>
    );
};

export default ChatBotPage