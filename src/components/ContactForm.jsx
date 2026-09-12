import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { personalData } from '../data/personal';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const targetEmail = personalData.socials.email || 'karthikeyansivakumar27@gmail.com';

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Portfolio Message from ${formData.name}`,
                    _captcha: 'false',
                    _template: 'table'
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                const data = await response.json();
                throw new Error(data.message || 'Failed to submit form.');
            }
        } catch (err) {
            console.error('Form submission error:', err);
            // Fallback to mailto link if API call fails
            setStatus('error');
            setErrorMessage('Could not send automatically. Click below to open your email client directly:');
        }
    };

    return (
        <div className="contact-form-container">
            {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                    <CheckCircle size={52} style={{ color: '#10b981', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                        Message Sent to Inbox!
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                        Thank you for reaching out. Your message has been sent directly to <strong>{personalData.socials.email}</strong>.
                    </p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="btn btn-secondary btn-sm"
                    >
                        Send Another Message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Your Name"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="your.email@example.com"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Write your message or inquiry here..."
                            className="form-textarea"
                            value={formData.message}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                        />
                    </div>

                    {status === 'error' && (
                        <div style={{
                            padding: '0.85rem 1rem',
                            marginBottom: '1.25rem',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            color: '#ef4444',
                            fontSize: '0.9rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                                <AlertCircle size={16} /> Notice
                            </div>
                            <p style={{ margin: 0 }}>{errorMessage}</p>
                            <a
                                href={`mailto:${personalData.socials.email}?subject=Portfolio Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                                className="btn btn-outline btn-sm"
                                style={{ marginTop: '0.75rem', width: '100%', textDecoration: 'none' }}
                            >
                                Open Email App Directly
                            </a>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 size={16} className="spin-icon" style={{ animation: 'spin 1s linear infinite' }} />
                                Sending to Inbox...
                            </>
                        ) : (
                            <>
                                Send Message <Send size={16} />
                            </>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
};

