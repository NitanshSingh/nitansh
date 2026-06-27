import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

export default function LocationBadge() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(now),
      );
      setDate(
        new Intl.DateTimeFormat("en-IN", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }).format(now),
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="location-badge group">
      <div className="location-badge-top">
        <div className="location-indicator" />
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
            Lucknow, India
          </p>
          <p className="mt-1 text-sm font-semibold text-white">Live local time</p>
        </div>
      </div>

      <div className="location-badge-body">
        <span className="status-chip">{date}</span>
        <span className="status-chip">{time}</span>
      </div>

      <MapPin className="h-4 w-4 shrink-0 text-cyan-300 transition duration-300 group-hover:scale-110" />
    </div>
  );
}
//           <span className="text-xs text-muted-foreground">{timezone}</span>
//         </div>
//       </div>

//       <div
//         className="h-1.5 w-1.5 rounded-full bg-emerald-500 transition-all duration-300"
//         style={{
//           boxShadow: isHovered ? "0 0 8px 2px rgba(16, 185, 129, 0.6)" : "0 0 4px 1px rgba(16, 185, 129, 0.4)",
//         }}
//       />
//     </button>
//   )
// }