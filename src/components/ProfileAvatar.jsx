import React, { useState } from 'react';
import { motion } from 'framer-motion';
import defaultProfileImg from '../assets/profile.png';
import { Camera, RefreshCw } from 'lucide-react';

export const ProfileAvatar = ({
    src = defaultProfileImg,
    alt = "Karthikeyan - Data Analyst Profile Picture",
    size = 'lg',
    showBadge = true,
    allowUpload = true,
    className = ''
}) => {
    const [userImage, setUserImage] = useState(() => {
        return localStorage.getItem('user_profile_picture') || src || defaultProfileImg;
    });

    const sizeMap = {
        sm: { container: '90px', halo: '-6px', border: '3px' },
        md: { container: '150px', halo: '-8px', border: '4px' },
        lg: { container: '230px', halo: '-10px', border: '4px' },
        xl: { container: '290px', halo: '-12px', border: '5px' },
    };

    const currentSize = sizeMap[size] || sizeMap.lg;

    const handleImageUpload = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const base64Image = e.target.result;
                setUserImage(base64Image);
                localStorage.setItem('user_profile_picture', base64Image);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleResetImage = (e) => {
        e.stopPropagation();
        localStorage.removeItem('user_profile_picture');
        setUserImage(defaultProfileImg);
    };

    return (
        <div
            className={`profile-avatar-wrapper ${className}`}
            style={{
                position: 'relative',
                display: 'inline-block',
                margin: '0 auto'
            }}
        >
            {/* Animated Rotating Conic Halo Ring */}
            <motion.div
                className="profile-avatar-halo"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    inset: currentSize.halo,
                    borderRadius: '50%',
                    background: 'conic-gradient(from 0deg, #3b82f6, #6366f1, #06b6d4, #3b82f6)',
                    filter: 'blur(12px)',
                    opacity: 0.75,
                }}
            />

            {/* Inner Glowing Gradient Border */}
            <div
                className="profile-avatar-border"
                style={{
                    position: 'absolute',
                    inset: '-4px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-primary), #818cf8)',
                    padding: currentSize.border,
                }}
            />

            {/* Perfect Circular Image Display */}
            <motion.div
                className="profile-avatar-inner"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                style={{
                    position: 'relative',
                    width: currentSize.container,
                    height: currentSize.container,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-card)',
                    border: '3px solid var(--bg-primary)',
                    boxShadow: 'var(--shadow-glow)',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src={userImage}
                    alt={alt}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultProfileImg;
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        borderRadius: '50%',
                        display: 'block',
                    }}
                />

                {/* Upload Hover Overlay */}
                {allowUpload && (
                    <label
                        htmlFor="avatar-file-input"
                        title="Click to upload your picture"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(15, 23, 42, 0.55)',
                            backdropFilter: 'blur(3px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '4px',
                            color: '#ffffff',
                            opacity: 0,
                            transition: 'opacity 0.25s ease',
                            cursor: 'pointer',
                            zIndex: 4
                        }}
                        className="avatar-upload-overlay"
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                    >
                        <Camera size={24} />
                        <span style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Upload Photo
                        </span>
                        <input
                            id="avatar-file-input"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={{ display: 'none' }}
                        />
                    </label>
                )}
            </motion.div>

            {/* Reset Photo Button if custom picture loaded */}
            {allowUpload && localStorage.getItem('user_profile_picture') && (
                <button
                    onClick={handleResetImage}
                    title="Reset to default image"
                    style={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-card)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'var(--shadow-sm)',
                        zIndex: 5,
                        cursor: 'pointer'
                    }}
                >
                    <RefreshCw size={14} />
                </button>
            )}

            {/* Floating Status Badge */}
            {showBadge && (
                <motion.div
                    className="profile-avatar-status"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        backgroundColor: '#10b981',
                        color: '#ffffff',
                        padding: '0.4rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        boxShadow: '0 4px 14px rgba(16, 185, 129, 0.45)',
                        border: '2px solid var(--bg-primary)',
                        zIndex: 3,
                        whiteSpace: 'nowrap',
                    }}
                >
                    <span
                        style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: '#ffffff',
                            animation: 'pulse 1.5s infinite',
                        }}
                    />
                    <span>Open to Roles</span>
                </motion.div>
            )}
        </div>
    );
};
