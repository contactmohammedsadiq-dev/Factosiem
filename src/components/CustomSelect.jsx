import React, { useState, useRef, useEffect } from 'react';
import './CustomSelect.css';

export default function CustomSelect({ value, onChange, options, placeholder = 'Select...' }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    // Normalize options to { label, value } format
    const normalizedOptions = options.map(opt => {
        if (typeof opt === 'string') return { label: opt, value: opt };
        return opt;
    });

    const selectedOption = normalizedOptions.find(opt => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue) => {
        onChange({ target: { value: optionValue } }); // Mock event to match standard react onChange signature roughly or direct value depending on usage
        setIsOpen(false);
    };

    // Note: The usage in existing forms expects (e) => ... e.target.value. 
    // So we pass an object that looks like an event.

    return (
        <div className="custom-select-container" ref={containerRef}>
            <div
                className={`custom-select-trigger ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedOption ? selectedOption.label : <span style={{ color: '#666' }}>{placeholder}</span>}</span>
                <span className="custom-select-arrow">▼</span>
            </div>

            {isOpen && (
                <div className="custom-select-options">
                    {normalizedOptions.map((opt, idx) => (
                        <div
                            key={idx}
                            className={`custom-select-option ${opt.value === value ? 'selected' : ''}`}
                            onClick={() => handleSelect(opt.value)}
                        >
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
