"use client";

import { useSyncExternalStore } from "react";
import { translations, type Content, type Lang } from "./translations";

const STORAGE_KEY = "portfolio-lang";

// Module-level store so every component reads the same language without a
// context provider. `useSyncExternalStore` reads browser-only state (the saved
// preference) without a hydration mismatch: the server + first client render
// use "en", then it re-renders with the stored value after hydration.
let currentLang: Lang = "en";
let initialized = false;
const listeners = new Set<() => void>();

function ensureInit() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "ja") {
    currentLang = stored;
    document.documentElement.lang = stored;
  }
}

function subscribe(callback: () => void) {
  ensureInit();
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Lang {
  ensureInit();
  return currentLang;
}

function getServerSnapshot(): Lang {
  return "en";
}

export function setLang(next: Lang) {
  if (next === currentLang) return;
  currentLang = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // localStorage unavailable (e.g. private mode) — ignore.
  }
  if (typeof document !== "undefined") {
    document.documentElement.lang = next;
  }
  listeners.forEach((cb) => cb());
}

export function useLang(): {
  lang: Lang;
  content: Content;
  toggle: () => void;
  setLang: (lang: Lang) => void;
} {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return {
    lang,
    content: translations[lang],
    toggle: () => setLang(lang === "en" ? "ja" : "en"),
    setLang,
  };
}
