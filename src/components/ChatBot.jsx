import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ChatBot.css';

const API_URL = '/api/chat';

const WELCOME_MESSAGE = {
  role: 'assistant',
  content: `Hi there! 👋 I'm the EarthSync Assistant. I'm here to help you learn about our grounding products, the science behind earthing, or answer any questions about shipping and returns. How can I help you today?`,
};

const SUGGESTIONS = [
  'What is grounding?',
  'Tell me about the sheets',
  'Shipping & returns',
  'How does silver help?',
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && textareaRef.current) {
      setTimeout(() => textareaRef.current?.focus(), 400);
    }
  }, [isOpen]);

  // Auto-resize textarea
  const handleInputChange = (e) => {
    setInput(e.target.value);
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 100) + 'px';
  };

  const toggleChat = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
      setHasInteracted(true);
    }
  };

  const sendMessage = async (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed || isLoading) return;

    setError(null);
    const userMessage = { role: 'user', content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    setIsLoading(true);

    try {
      // Only send the conversation context (exclude welcome if it's the system greeting)
      const apiMessages = updatedMessages
        .filter(m => m !== WELCOME_MESSAGE)
        .map(m => ({ role: m.role, content: m.content }));

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      console.error('Chat error:', err);
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestion = (text) => {
    sendMessage(text);
  };

  const retryLastMessage = () => {
    setError(null);
    const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
    if (lastUserMsg) {
      sendMessage(lastUserMsg.content);
    }
  };

  const showSuggestions = messages.length <= 1 && !isLoading;

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat' : 'Open chat assistant'}
        id="chatbot-toggle-btn"
      >
        {!hasInteracted && !isOpen && <span className="notification-dot" />}
        <span className="toggle-icon">
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {(isOpen || isClosing) && (
          <div className={`chatbot-window ${isClosing ? 'closing' : ''}`} id="chatbot-window">

            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-avatar">
                <img src="/assets/logo-1.png" alt="EarthSync" />
              </div>
              <div className="chatbot-header-info">
                <div className="chatbot-header-title">EarthSync Assistant</div>
                <div className="chatbot-header-status">
                  <span className="status-dot" />
                  <span>Always here to help</span>
                </div>
              </div>
              <button
                className="chatbot-close"
                onClick={toggleChat}
                aria-label="Close chat"
                id="chatbot-close-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages" id="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chatbot-message ${msg.role === 'assistant' ? 'bot' : 'user'}`}>
                  {msg.role === 'assistant' && (
                    <div className="message-avatar">
                      <img src="/assets/logo-1.png" alt="" />
                    </div>
                  )}
                  <div className="message-bubble">
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="chatbot-message bot">
                  <div className="message-avatar">
                    <img src="/assets/logo-1.png" alt="" />
                  </div>
                  <div className="typing-indicator">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="chatbot-error">
                  <span>{error}</span>
                  <button onClick={retryLastMessage}>Retry</button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {showSuggestions && (
              <div className="chatbot-suggestions">
                {SUGGESTIONS.map((text, i) => (
                  <button
                    key={i}
                    className="suggestion-chip"
                    onClick={() => handleSuggestion(text)}
                  >
                    {text}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="chatbot-input-area">
              <div className="chatbot-input-wrapper">
                <textarea
                  ref={textareaRef}
                  className="chatbot-input"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  rows={1}
                  disabled={isLoading}
                  id="chatbot-input"
                />
              </div>
              <button
                className="chatbot-send"
                onClick={() => sendMessage()}
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                id="chatbot-send-btn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>

            {/* Footer */}
            <div className="chatbot-footer">
              Powered by EarthSync Essentials
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
