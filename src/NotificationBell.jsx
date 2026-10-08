import { Bell } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  NOTIFICATION_STYLES, POLL_MS, formatNotificationTime, notificationRequest,
} from './notificationApi';

/* =========================================================
   NOTIFICATION BELL  (admin + organizer dashboards)
   Reads the logged-in user's notifications from the server, so
   unread counts survive refreshes and other devices.

   Props:
     storageKey - localStorage key that holds the login info
                  ("adminInfo" or "organizerInfo")
========================================================= */

const readToken = (storageKey) => {
  try { return JSON.parse(localStorage.getItem(storageKey) || '{}').token || ''; } catch { return ''; }
};


export default function NotificationBell({ storageKey }) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const wrapperRef = useRef(null);

  const load = useCallback(async () => {
    const token = readToken(storageKey);
    if (!token) return;
    try {
      const data = await notificationRequest(token);
      setItems(data.notifications || []);
      setUnreadCount(data.unreadCount || 0);
    } catch { /* keep what we have; try again next poll */ }
  }, [storageKey]);

  useEffect(() => {
    load();
    const timer = window.setInterval(load, POLL_MS);
    return () => window.clearInterval(timer);
  }, [load]);

  // Close when clicking outside.
  useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => { if (!wrapperRef.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  const markRead = async (item) => {
    if (item.read) return;
    setItems((list) => list.map((n) => (n._id === item._id ? { ...n, read: true } : n)));
    setUnreadCount((c) => Math.max(0, c - 1));
    try { await notificationRequest(readToken(storageKey), `/${item._id}/read`, 'PATCH'); } catch { load(); }
  };

  const markAllRead = async () => {
    setItems((list) => list.map((n) => ({ ...n, read: true })));
    setUnreadCount(0);
    try { await notificationRequest(readToken(storageKey), '/read-all', 'PATCH'); } catch { load(); }
  };

  return (
    <div ref={wrapperRef} className="relative flex items-center">
      <button
        type="button"
        aria-label="Notifications"
        onClick={() => { setOpen((v) => !v); if (!open) load(); }}
        className="eco-icon-btn"
      >
        <Bell className="h-[17px] w-[17px]" />
        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-eco-600 px-1 text-[10px] font-black text-white ring-2 ring-white">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="eco-popover fixed inset-x-3 top-16 z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto p-4 sm:absolute sm:inset-x-auto sm:right-0 sm:top-12 sm:max-h-none sm:w-[min(22rem,calc(100vw-2rem))] sm:overflow-visible text-slate-800">
          <div className="mb-3 flex items-center justify-between border-b border-eco-100 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="eco-icon-tile-soft h-8 w-8 rounded-lg">
                <Bell className="h-[15px] w-[15px]" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-slate-900">Notifications</p>
                <p className="text-[11px] font-medium text-slate-500">{unreadCount} unread</p>
              </div>
            </div>
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllRead}
                className="rounded-lg px-2 py-1 text-[11px] font-semibold text-eco-700 transition hover:bg-eco-50"
              >
                Mark all read
              </button>
            )}
          </div>

          <div className="eco-scroll max-h-72 space-y-2 overflow-y-auto pr-1">
            {items.length > 0 ? items.map((item) => {
              const style = NOTIFICATION_STYLES[item.type] || NOTIFICATION_STYLES.announcement;
              const { Icon } = style;
              return (
                <button
                  key={item._id}
                  type="button"
                  onClick={() => markRead(item)}
                  className={`flex w-full gap-3 rounded-xl border p-3 text-left text-xs transition hover:border-eco-300 ${
                    item.read ? 'border-slate-100 bg-white' : 'border-eco-200 bg-eco-50/60'
                  }`}
                >
                  <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${style.tone}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-start justify-between gap-2">
                      <span className="font-bold text-slate-800">{item.title}</span>
                      {!item.read && <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-eco-500" />}
                    </span>
                    <span className="mt-0.5 block leading-snug text-slate-600 [overflow-wrap:anywhere]">{item.message}</span>
                    <span className="mt-1 block text-[10px] font-medium text-slate-400">{formatNotificationTime(item.createdAt)}</span>
                  </span>
                </button>
              );
            }) : (
              <div className="eco-empty py-8">
                <Bell className="h-5 w-5 text-eco-400" />
                No notifications yet.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
