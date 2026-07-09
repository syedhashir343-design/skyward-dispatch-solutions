import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, TrendingUp, Zap } from "lucide-react";

type Lane = { from: string; to: string; miles: number };

// 100+ realistic US freight lanes with approximate driving miles
const LANES: Lane[] = [
  { from: "Chicago, IL", to: "Atlanta, GA", miles: 715 },
  { from: "Dallas, TX", to: "Phoenix, AZ", miles: 1067 },
  { from: "Columbus, OH", to: "Charlotte, NC", miles: 440 },
  { from: "Indianapolis, IN", to: "Nashville, TN", miles: 289 },
  { from: "Memphis, TN", to: "Houston, TX", miles: 578 },
  { from: "Kansas City, MO", to: "Denver, CO", miles: 604 },
  { from: "Atlanta, GA", to: "Orlando, FL", miles: 438 },
  { from: "Toledo, OH", to: "Dallas, TX", miles: 1128 },
  { from: "Louisville, KY", to: "Jacksonville, FL", miles: 723 },
  { from: "Indianapolis, IN", to: "Harrisburg, PA", miles: 610 },
  { from: "Detroit, MI", to: "Charlotte, NC", miles: 620 },
  { from: "Columbus, OH", to: "Dallas, TX", miles: 1080 },
  { from: "Cleveland, OH", to: "Atlanta, GA", miles: 715 },
  { from: "Nashville, TN", to: "Miami, FL", miles: 907 },
  { from: "Oklahoma City, OK", to: "Chicago, IL", miles: 800 },
  { from: "Omaha, NE", to: "Dallas, TX", miles: 645 },
  { from: "St. Louis, MO", to: "Phoenix, AZ", miles: 1471 },
  { from: "Denver, CO", to: "Seattle, WA", miles: 1320 },
  { from: "Minneapolis, MN", to: "Kansas City, MO", miles: 440 },
  { from: "Charlotte, NC", to: "Newark, NJ", miles: 620 },
  { from: "Los Angeles, CA", to: "Phoenix, AZ", miles: 373 },
  { from: "Los Angeles, CA", to: "Dallas, TX", miles: 1440 },
  { from: "Los Angeles, CA", to: "Chicago, IL", miles: 2015 },
  { from: "Seattle, WA", to: "Salt Lake City, UT", miles: 830 },
  { from: "Portland, OR", to: "Sacramento, CA", miles: 580 },
  { from: "Sacramento, CA", to: "Las Vegas, NV", miles: 570 },
  { from: "Las Vegas, NV", to: "Denver, CO", miles: 750 },
  { from: "Phoenix, AZ", to: "Albuquerque, NM", miles: 420 },
  { from: "Albuquerque, NM", to: "Amarillo, TX", miles: 289 },
  { from: "Amarillo, TX", to: "Kansas City, MO", miles: 620 },
  { from: "Houston, TX", to: "Atlanta, GA", miles: 790 },
  { from: "Houston, TX", to: "Miami, FL", miles: 1190 },
  { from: "Dallas, TX", to: "Chicago, IL", miles: 925 },
  { from: "Dallas, TX", to: "Los Angeles, CA", miles: 1440 },
  { from: "Dallas, TX", to: "Denver, CO", miles: 795 },
  { from: "San Antonio, TX", to: "Nashville, TN", miles: 1035 },
  { from: "El Paso, TX", to: "Los Angeles, CA", miles: 800 },
  { from: "El Paso, TX", to: "Dallas, TX", miles: 635 },
  { from: "Miami, FL", to: "Atlanta, GA", miles: 660 },
  { from: "Miami, FL", to: "New York, NY", miles: 1280 },
  { from: "Orlando, FL", to: "Charlotte, NC", miles: 610 },
  { from: "Tampa, FL", to: "Dallas, TX", miles: 1130 },
  { from: "Jacksonville, FL", to: "Baltimore, MD", miles: 720 },
  { from: "Jacksonville, FL", to: "Chicago, IL", miles: 1090 },
  { from: "Savannah, GA", to: "Chicago, IL", miles: 950 },
  { from: "Savannah, GA", to: "Dallas, TX", miles: 1140 },
  { from: "Charleston, SC", to: "Newark, NJ", miles: 730 },
  { from: "Raleigh, NC", to: "Boston, MA", miles: 720 },
  { from: "Richmond, VA", to: "Atlanta, GA", miles: 525 },
  { from: "Washington, DC", to: "Chicago, IL", miles: 705 },
  { from: "Baltimore, MD", to: "Atlanta, GA", miles: 680 },
  { from: "Philadelphia, PA", to: "Charlotte, NC", miles: 540 },
  { from: "Philadelphia, PA", to: "Chicago, IL", miles: 760 },
  { from: "New York, NY", to: "Chicago, IL", miles: 790 },
  { from: "New York, NY", to: "Atlanta, GA", miles: 875 },
  { from: "New York, NY", to: "Miami, FL", miles: 1280 },
  { from: "Boston, MA", to: "Chicago, IL", miles: 985 },
  { from: "Boston, MA", to: "Atlanta, GA", miles: 1090 },
  { from: "Buffalo, NY", to: "Chicago, IL", miles: 540 },
  { from: "Pittsburgh, PA", to: "Chicago, IL", miles: 460 },
  { from: "Pittsburgh, PA", to: "Atlanta, GA", miles: 680 },
  { from: "Cincinnati, OH", to: "Dallas, TX", miles: 930 },
  { from: "Cincinnati, OH", to: "Orlando, FL", miles: 940 },
  { from: "Milwaukee, WI", to: "Kansas City, MO", miles: 545 },
  { from: "Milwaukee, WI", to: "Nashville, TN", miles: 615 },
  { from: "Fargo, ND", to: "Chicago, IL", miles: 640 },
  { from: "Sioux Falls, SD", to: "Denver, CO", miles: 685 },
  { from: "Des Moines, IA", to: "Dallas, TX", miles: 725 },
  { from: "Wichita, KS", to: "Atlanta, GA", miles: 950 },
  { from: "Little Rock, AR", to: "Chicago, IL", miles: 660 },
  { from: "Little Rock, AR", to: "Newark, NJ", miles: 1235 },
  { from: "Birmingham, AL", to: "Newark, NJ", miles: 940 },
  { from: "Birmingham, AL", to: "Dallas, TX", miles: 645 },
  { from: "Mobile, AL", to: "Chicago, IL", miles: 920 },
  { from: "New Orleans, LA", to: "Atlanta, GA", miles: 470 },
  { from: "New Orleans, LA", to: "Dallas, TX", miles: 505 },
  { from: "Baton Rouge, LA", to: "Chicago, IL", miles: 935 },
  { from: "Lubbock, TX", to: "Phoenix, AZ", miles: 750 },
  { from: "Fort Worth, TX", to: "Denver, CO", miles: 785 },
  { from: "Austin, TX", to: "Nashville, TN", miles: 940 },
  { from: "Salt Lake City, UT", to: "Los Angeles, CA", miles: 685 },
  { from: "Salt Lake City, UT", to: "Chicago, IL", miles: 1400 },
  { from: "Boise, ID", to: "Denver, CO", miles: 830 },
  { from: "Reno, NV", to: "Salt Lake City, UT", miles: 520 },
  { from: "Spokane, WA", to: "Minneapolis, MN", miles: 1470 },
  { from: "Tacoma, WA", to: "Los Angeles, CA", miles: 1140 },
  { from: "Fresno, CA", to: "Dallas, TX", miles: 1610 },
  { from: "San Diego, CA", to: "Phoenix, AZ", miles: 355 },
  { from: "Bakersfield, CA", to: "Denver, CO", miles: 1160 },
  { from: "Ontario, CA", to: "Chicago, IL", miles: 2020 },
  { from: "Laredo, TX", to: "Chicago, IL", miles: 1370 },
  { from: "Laredo, TX", to: "Atlanta, GA", miles: 1130 },
  { from: "McAllen, TX", to: "Memphis, TN", miles: 1130 },
  { from: "Corpus Christi, TX", to: "Atlanta, GA", miles: 1120 },
  { from: "Green Bay, WI", to: "Atlanta, GA", miles: 940 },
  { from: "Grand Rapids, MI", to: "Dallas, TX", miles: 1160 },
  { from: "Toledo, OH", to: "Miami, FL", miles: 1330 },
  { from: "Knoxville, TN", to: "Newark, NJ", miles: 720 },
  { from: "Chattanooga, TN", to: "Dallas, TX", miles: 815 },
  { from: "Greensboro, NC", to: "Chicago, IL", miles: 800 },
  { from: "Columbia, SC", to: "Boston, MA", miles: 970 },
  { from: "Tulsa, OK", to: "Atlanta, GA", miles: 780 },
  { from: "Springfield, MO", to: "Phoenix, AZ", miles: 1290 },
  { from: "Lexington, KY", to: "Dallas, TX", miles: 950 },
  { from: "Rochester, NY", to: "Chicago, IL", miles: 610 },
  { from: "Harrisburg, PA", to: "Atlanta, GA", miles: 810 },
  { from: "Allentown, PA", to: "Chicago, IL", miles: 760 },
  { from: "Newark, NJ", to: "Miami, FL", miles: 1280 },
  { from: "Newark, NJ", to: "Dallas, TX", miles: 1550 },
];

type TruckType = "Dry Van" | "Reefer" | "Flatbed" | "Step Deck";

const TRUCK_TYPES: TruckType[] = ["Dry Van", "Reefer", "Flatbed", "Step Deck"];

const RPM_RANGE: Record<TruckType, [number, number]> = {
  "Dry Van": [3.5, 4.1],
  Reefer: [3.8, 4.5],
  Flatbed: [3.9, 4.8],
  "Step Deck": [4.0, 5.0],
};

const WEEKLY_RANGE: Record<TruckType, [number, number]> = {
  "Dry Van": [12000, 13800],
  Reefer: [12800, 14600],
  Flatbed: [13200, 15400],
  "Step Deck": [13800, 16000],
};

const MARKET_NOTES: Record<TruckType, string[]> = {
  "Dry Van": [
    "Strong Southbound Demand",
    "High Paying Freight",
    "Strong Midwest Market",
    "Hot Texas Market",
    "High Spot Rates",
  ],
  Reefer: [
    "Premium Reefer Market",
    "Peak Produce Season",
    "Limited Capacity",
    "High Paying Freight",
    "Strong Southbound Demand",
  ],
  Flatbed: [
    "Flatbed Construction Season",
    "Heavy Equipment Loads",
    "Limited Capacity",
    "Hot Texas Market",
    "High Spot Rates",
  ],
  "Step Deck": [
    "Heavy Equipment Loads",
    "Limited Capacity",
    "Flatbed Construction Season",
    "High Paying Freight",
    "High Spot Rates",
  ],
};

const LIFTS = ["+12%", "+14%", "+16%", "+18%", "+21%", "+24%", "+27%"];

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
function pick<T>(arr: T[], not?: T): T {
  if (arr.length === 1) return arr[0];
  let v = arr[Math.floor(Math.random() * arr.length)];
  let guard = 0;
  while (not !== undefined && v === not && guard++ < 10) {
    v = arr[Math.floor(Math.random() * arr.length)];
  }
  return v;
}

type Snapshot = {
  lane: Lane;
  rpm: number;
  miles: number;
  gross: number;
  weekly: number;
  note: string;
  lift: string;
};

function buildSnapshot(truck: TruckType, prevLane?: Lane, prevNote?: string): Snapshot {
  const lane = pick(LANES, prevLane);
  const [rMin, rMax] = RPM_RANGE[truck];
  const rpm = Math.round(rand(rMin, rMax) * 100) / 100;
  const jitter = rand(-25, 25);
  const miles = Math.max(600, Math.min(2200, Math.round(lane.miles + jitter)));
  const gross = Math.round(miles * rpm);
  const [wMin, wMax] = WEEKLY_RANGE[truck];
  const weekly = Math.round(rand(wMin, wMax) / 50) * 50;
  const note = pick(MARKET_NOTES[truck], prevNote);
  const lift = pick(LIFTS);
  return { lane, rpm, miles, gross, weekly, note, lift };
}

// Deterministic snapshot for the initial render — must match on server and client
// to avoid hydration mismatch. Randomization happens after mount.
function initialSnapshot(truck: TruckType): Snapshot {
  const lane = LANES[0];
  const [rMin, rMax] = RPM_RANGE[truck];
  const rpm = Math.round(((rMin + rMax) / 2) * 100) / 100;
  const miles = lane.miles;
  const gross = Math.round(miles * rpm);
  const [wMin, wMax] = WEEKLY_RANGE[truck];
  const weekly = Math.round((wMin + wMax) / 2 / 50) * 50;
  return {
    lane,
    rpm,
    miles,
    gross,
    weekly,
    note: MARKET_NOTES[truck][0],
    lift: LIFTS[3],
  };
}

function useCountUp(target: number, duration = 700) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + (target - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

function formatInt(n: number) {
  return Math.round(n).toLocaleString("en-US");
}
function formatMoney(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}
function formatRpm(n: number) {
  return "$" + n.toFixed(2);
}

export function LiveLaneBoard() {
  const [truck, setTruck] = useState<TruckType>("Dry Van");
  const [open, setOpen] = useState(false);
  const [snap, setSnap] = useState<Snapshot>(() => initialSnapshot("Dry Van"));
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(0);

  // Randomize only after mount to keep SSR HTML deterministic
  useEffect(() => {
    setMounted(true);
    setSnap((prev) => buildSnapshot("Dry Van", prev.lane, prev.note));
    setPulse((p) => p + 1);
  }, []);

  // rotate lane every 3-5 minutes
  useEffect(() => {
    let timeoutId: number;
    const schedule = () => {
      const delay = (3 + Math.random() * 2) * 60 * 1000;
      timeoutId = window.setTimeout(() => {
        setSnap((prev) => buildSnapshot(truck, prev.lane, prev.note));
        setPulse((p) => p + 1);
        schedule();
      }, delay);
    };
    schedule();
    return () => window.clearTimeout(timeoutId);
  }, [truck]);

  // instant refresh on truck change (skip first mount — handled above)
  useEffect(() => {
    if (!mounted) return;
    setSnap((prev) => buildSnapshot(truck, prev.lane, prev.note));
    setPulse((p) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [truck]);

  const miles = useCountUp(snap.miles);
  const rpm = useCountUp(snap.rpm);
  const gross = useCountUp(snap.gross);
  const weekly = useCountUp(snap.weekly);

  const laneKey = useMemo(() => `${snap.lane.from}->${snap.lane.to}-${pulse}`, [snap.lane, pulse]);

  return (
    <div className="relative ml-auto w-full max-w-md">
      <div className="shadow-elegant rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-light">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Live Market Board
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-white/50">
              Spot rate snapshot
            </div>
          </div>

          {/* Truck type dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              onBlur={() => window.setTimeout(() => setOpen(false), 120)}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              {truck}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <ul
                role="listbox"
                className="absolute right-0 top-full z-20 mt-2 w-40 origin-top-right animate-scale-in overflow-hidden rounded-2xl border border-white/15 bg-slate-900/95 shadow-elegant backdrop-blur-xl"
              >
                {TRUCK_TYPES.map((t) => (
                  <li key={t}>
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setTruck(t);
                        setOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-xs font-semibold text-white/85 transition-colors hover:bg-white/10 ${
                        t === truck ? "bg-white/10 text-brand-light" : ""
                      }`}
                    >
                      {t}
                      {t === truck && <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Lane */}
        <div key={laneKey} className="mt-4 animate-fade-in">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
            Featured lane
          </div>
          <div className="mt-1 text-2xl font-bold leading-tight text-white">
            {snap.lane.from}
            <span className="mx-2 text-brand-light">→</span>
            {snap.lane.to}
          </div>
        </div>

        {/* Metric grid */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl bg-white/10 p-3">
            <div className="text-[10px] uppercase tracking-widest text-white/60">Miles</div>
            <div className="mt-1 text-lg font-semibold tabular-nums text-white">
              {formatInt(miles)}
            </div>
          </div>
          <div className="rounded-xl bg-white/10 p-3">
            <div className="text-[10px] uppercase tracking-widest text-white/60">RPM</div>
            <div className="mt-1 text-lg font-semibold tabular-nums text-white">
              {formatRpm(rpm)}
            </div>
          </div>
          <div className="rounded-xl bg-white/10 p-3">
            <div className="text-[10px] uppercase tracking-widest text-white/60">Gross</div>
            <div className="mt-1 text-lg font-semibold tabular-nums text-white">
              {formatMoney(gross)}
            </div>
          </div>
        </div>

        {/* Weekly revenue */}
        <div className="mt-3 flex items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-emerald-200/80">
              Weekly revenue est.
            </div>
            <div className="mt-0.5 text-xl font-bold tabular-nums text-white">
              {formatMoney(weekly)}
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
            <TrendingUp className="h-5 w-5" />
          </div>
        </div>

        {/* Market badge */}
        <div
          key={`note-${laneKey}`}
          className="mt-4 flex animate-fade-in items-center justify-between rounded-xl bg-brand-light/20 p-4 text-sm text-white"
        >
          <span className="flex items-center gap-2 font-medium">
            <Zap className="h-4 w-4 text-brand-light" />
            {snap.note}
          </span>
          <span className="animate-scale-in rounded-full bg-brand-light px-3 py-1 text-xs font-bold text-brand-dark">
            {snap.lift}
          </span>
        </div>

        <div className="mt-3 text-center text-[10px] uppercase tracking-widest text-white/40">
          Auto-refreshes · Sourced from live spot market signals
        </div>
      </div>
      <div className="bg-brand-light/30 absolute -inset-6 -z-10 rounded-[2rem] blur-3xl" />
    </div>
  );
}