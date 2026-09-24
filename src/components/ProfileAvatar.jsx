import React from 'react';
import { motion } from 'framer-motion';
import defaultProfileImg from '../assets/profile.png';

export const ProfileAvatar = ({
    src = defaultProfileImg,
    alt = "Karthikeyan - Data Analyst Profile Picture",
    size = 'lg',
    showBadge = true,
    className = ''
}) => {
    const sizeMap = {
        sm: { container: '90px', halo: '-6px', border: '3px' },
        md: { container: '150px', halo: '-8px', border: '4px' },
        lg: { container: '230px', halo: '-10px', border: '4px' },
        xl: { container: '290px', halo: '-12px', border: '5px' },
    };

    const currentSize = sizeMap[size] || sizeMap.lg;
    const profileSrc = src || defaultProfileImg;

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
                    src={profileSrc}
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
            </motion.div>

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
