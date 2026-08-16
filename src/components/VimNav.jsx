import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { PAGE_ORDER } from '../pageTheme.js';

const SCROLL_STEP = 120;
const GG_TIMEOUT = 500; // ms window to catch the second "g" in "gg"

function isTypingTarget(el) {
    if (!el) return false;
    const tag = el.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
}

export default function VimNav() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const lastGRef = useRef(0);
    const [hintVisible, setHintVisible] = useState(() => !sessionStorage.getItem('vimHintDismissed'));

    useEffect(() => {
        const dismissHint = () => {
            setHintVisible(false);
            sessionStorage.setItem('vimHintDismissed', '1');
        };

        const handleKeyDown = (e) => {
            if (e.metaKey || e.ctrlKey || e.altKey) return;
            if (isTypingTarget(e.target)) return;

            switch (e.key) {
                case 'j':
                    window.scrollBy(0, SCROLL_STEP);
                    dismissHint();
                    break;
                case 'k':
                    window.scrollBy(0, -SCROLL_STEP);
                    dismissHint();
                    break;
                case 'h': {
                    const i = PAGE_ORDER.indexOf(pathname);
                    if (i !== -1) navigate(PAGE_ORDER[(i - 1 + PAGE_ORDER.length) % PAGE_ORDER.length]);
                    dismissHint();
                    break;
                }
                case 'l': {
                    const i = PAGE_ORDER.indexOf(pathname);
                    if (i !== -1) navigate(PAGE_ORDER[(i + 1) % PAGE_ORDER.length]);
                    dismissHint();
                    break;
                }
                case 'g': {
                    const now = Date.now();
                    if (now - lastGRef.current < GG_TIMEOUT) {
                        window.scrollTo(0, 0);
                        lastGRef.current = 0;
                    } else {
                        lastGRef.current = now;
                    }
                    dismissHint();
                    break;
                }
                case 'G':
                    window.scrollTo(0, document.body.scrollHeight);
                    dismissHint();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [pathname, navigate]);

    if (!hintVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 z-[60] flex items-center gap-2 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-700 px-3 py-2 shadow-[3px_3px_0_0_theme(colors.orange.500)] text-xs">
            <span className="text-zinc-600 dark:text-zinc-300">
                <span className="font-bold text-orange-500">h j k l</span> se mueven como en vim{' '}
                <span className="text-zinc-400 dark:text-zinc-500">(gg / G también)</span>
            </span>
            <button
                type="button"
                aria-label="Cerrar"
                onClick={() => {
                    setHintVisible(false);
                    sessionStorage.setItem('vimHintDismissed', '1');
                }}
                className="text-zinc-400 hover:text-orange-500 transition-colors"
            >
                <X size={14} />
            </button>
        </div>
    );
}
