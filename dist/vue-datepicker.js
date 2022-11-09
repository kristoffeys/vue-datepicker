import { openBlock as y, createElementBlock as S, createElementVNode as j, defineComponent as Oe, ref as N, inject as me, computed as _, unref as o, renderSlot as H, createCommentVNode as b, normalizeClass as fe, withKeys as ne, createBlock as oe, withModifiers as Le, reactive as Ut, onMounted as Ne, normalizeStyle as vt, Fragment as ie, createTextVNode as Fe, toDisplayString as ge, renderList as pe, createVNode as qe, Transition as ht, withCtx as se, nextTick as Pt, onBeforeUpdate as Ca, onUnmounted as mn, withDirectives as Nt, vShow as It, mergeProps as Ae, createSlots as Pe, isRef as at, normalizeProps as ze, resolveDynamicComponent as Yt, useSlots as vn, guardReactiveProps as lt, watch as pt, getCurrentScope as Aa, onScopeDispose as Pa, toRef as Rt, provide as nt, Teleport as Ta } from "vue";
import { getMonth as ye, getYear as ue, isEqual as Kn, setHours as Wn, setMinutes as Ln, setSeconds as Un, setMilliseconds as yn, isValid as Et, setMonth as Ft, setYear as st, getHours as Ve, getMinutes as Be, getSeconds as Xe, format as Tn, isAfter as pn, isBefore as hn, set as De, parseISO as _a, parse as sn, isDate as Ra, add as Gn, sub as Va, startOfWeek as jn, endOfWeek as Ba, addMonths as ot, getDay as Oa, addDays as St, subMonths as Ct, addYears as Na, subYears as Ia, getISOWeek as Ya, differenceInCalendarDays as Ea, eachDayOfInterval as _n } from "date-fns";
const ut = (e, a) => {
  const n = e.__vccOpts || e;
  for (const [t, d] of a)
    n[t] = d;
  return n;
}, Fa = {}, Ha = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Ka = /* @__PURE__ */ j("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }, null, -1), Wa = /* @__PURE__ */ j("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), La = /* @__PURE__ */ j("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), Ua = /* @__PURE__ */ j("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" }, null, -1), Ga = [
  Ka,
  Wa,
  La,
  Ua
];
function ja(e, a) {
  return y(), S("svg", Ha, Ga);
}
const Gt = /* @__PURE__ */ ut(Fa, [["render", ja]]), za = {}, Xa = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, qa = /* @__PURE__ */ j("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }, null, -1), Ja = /* @__PURE__ */ j("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), Za = [
  qa,
  Ja
];
function Qa(e, a) {
  return y(), S("svg", Xa, Za);
}
const xa = /* @__PURE__ */ ut(za, [["render", Qa]]), el = {}, tl = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, nl = /* @__PURE__ */ j("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), al = [
  nl
];
function ll(e, a) {
  return y(), S("svg", tl, al);
}
const Rn = /* @__PURE__ */ ut(el, [["render", ll]]), rl = {}, sl = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, ol = /* @__PURE__ */ j("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" }, null, -1), il = [
  ol
];
function ul(e, a) {
  return y(), S("svg", sl, il);
}
const Vn = /* @__PURE__ */ ut(rl, [["render", ul]]), dl = {}, cl = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, fl = /* @__PURE__ */ j("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }, null, -1), ml = /* @__PURE__ */ j("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), vl = [
  fl,
  ml
];
function yl(e, a) {
  return y(), S("svg", cl, vl);
}
const zn = /* @__PURE__ */ ut(dl, [["render", yl]]), pl = {}, hl = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, gl = /* @__PURE__ */ j("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), kl = [
  gl
];
function wl(e, a) {
  return y(), S("svg", hl, kl);
}
const Xn = /* @__PURE__ */ ut(pl, [["render", wl]]), bl = {}, $l = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Dl = /* @__PURE__ */ j("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), Ml = [
  Dl
];
function Sl(e, a) {
  return y(), S("svg", $l, Ml);
}
const qn = /* @__PURE__ */ ut(bl, [["render", Sl]]), Bn = (e, a) => {
  const n = sn(e, a.slice(0, e.length), new Date());
  return Et(n) && Ra(n) ? n : null;
}, qt = (e, a) => {
  if (typeof a == "string")
    return Bn(e, a);
  if (Array.isArray(a)) {
    let n = null;
    for (let t = 0; t < a.length && (n = Bn(e, a[t]), !n); t++)
      ;
    return n;
  }
  return typeof a == "function" ? a(e) : null;
}, He = (e) => {
  let a = new Date(JSON.parse(JSON.stringify(e)));
  return a = Wn(a, 0), a = Ln(a, 0), a = Un(a, 0), a = yn(a, 0), a;
}, on = (e) => Array.isArray(e) ? Et(e[0]) && (e[1] ? Et(e[1]) : !0) : e ? Et(e) : !1, Ce = (e, a, n, t) => {
  let d = e ? new Date(e) : new Date();
  return (a || a === 0) && (d = Wn(d, +a)), (n || n === 0) && (d = Ln(d, +n)), (t || t === 0) && (d = Un(d, +t)), yn(d, 0);
}, Cl = (e) => {
  const a = ot(e, 1);
  return { month: ye(a), year: ue(a) };
}, it = (e, a, n) => {
  let t = e ? new Date(e) : new Date();
  return (a || a === 0) && (t = Ft(t, a)), n && (t = st(t, n)), t;
}, On = (e, a) => e ? `HH:mm${a ? ":ss" : ""}` : `hh:mm${a ? ":ss" : ""} aa`, Jn = (e, a, n, t, d, f, p, v) => e || (t ? "MM/yyyy" : d ? On(a, n) : f ? "MM/dd/yyyy" : p ? "yyyy" : v ? `MM/dd/yyyy, ${On(a, n)}` : "MM/dd/yyyy"), Jt = (e) => {
  const a = e || new Date();
  return {
    hours: Ve(a),
    minutes: Be(a),
    seconds: Xe(a)
  };
}, Ht = (e) => ({ month: ye(e), year: ue(e) }), Nn = (e) => Array.isArray(e) ? [Ht(e[0]), e[1] ? Ht(e[1]) : null] : Ht(e), un = (e) => Array.isArray(e) ? [Jt(e[0]), Jt(e[1])] : Jt(e), Zt = (e, a, n) => n ? Tn(e, a, { locale: n }) : Tn(e, a), yt = (e, a, n, t, d) => Array.isArray(e) ? `${Zt(e[0], a, n)} ${d && !e[1] ? "" : t || "-"} ${e[1] ? Zt(e[1], a, n) : ""}` : Zt(e, a, n), $e = (e, a) => !e || !a ? !1 : pn(He(e), He(a)), we = (e, a) => !e || !a ? !1 : hn(He(e), He(a)), ce = (e, a) => !e || !a ? !1 : Kn(He(e), He(a)), Al = (e, a) => Gn(De(new Date(), e), a), Pl = (e, a) => Va(De(new Date(), e), a), Qt = (e) => De(new Date(), { hours: Ve(e), minutes: Be(e), seconds: Xe(e) }), In = (e) => De(new Date(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), ft = (e, a, n, t) => {
  if (!e)
    return !0;
  if (t) {
    const d = n === "max" ? hn(e, a) : pn(e, a), f = { seconds: 0, milliseconds: 0 };
    return d || Kn(De(e, f), De(a, f));
  }
  return n === "max" ? e.getTime() <= a.getTime() : e.getTime() >= a.getTime();
}, dn = (e, a, n, t, d) => {
  let f = !0;
  if (!e)
    return !0;
  const p = !d && !t ? Array.isArray(e) ? [e[0] ? Qt(e[0]) : null, e[1] ? Qt(e[1]) : null] : Qt(e) : e;
  if (a || t) {
    const v = a ? In(a) : new Date(t);
    Array.isArray(p) ? f = ft(p[0], v, "max", !!t) && ft(p[1], v, "max", !!t) : f = ft(p, v, "max", !!t);
  }
  if (n || d) {
    const v = n ? In(n) : new Date(d);
    Array.isArray(p) ? f = ft(p[0], v, "min", !!d) && ft(p[1], v, "min", !!d) && f : f = ft(p, v, "min", !!d) && f;
  }
  return f;
}, Tl = (e, a, n) => {
  let t = !0;
  return a && n && (t = $e(new Date(e), new Date(a)) && we(new Date(e), new Date(n))), a && (t = $e(new Date(e), new Date(a))), n && (t = we(new Date(e), new Date(n))), t;
}, Ee = (e) => e instanceof Date ? e : _a(e), xt = (e, a) => {
  if (a) {
    const t = new Date().getTimezoneOffset() * 6e4;
    return new Date(e.getTime() - t).toISOString();
  }
  const n = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(n).toISOString();
}, Zn = (e, a, n) => e && e[0] && e[1] ? $e(n, e[0]) && we(n, e[1]) : e && e[0] && a ? $e(n, e[0]) && we(n, a) || we(n, e[0]) && $e(n, a) : !1, Vt = (e, a) => {
  const n = jn(e, { weekStartsOn: a }), t = Ba(e, { weekStartsOn: a });
  return [n, t];
}, Qn = (e, a) => Array.isArray(a) ? a.some((n) => ce(Ee(new Date(n)), Ee(e))) : a(e), _l = (e, a, n, t, d, f, p, v) => {
  const h = n ? $e(Ee(e), Ee(n)) : !1, k = a ? we(Ee(e), Ee(a)) : !1, R = Qn(e, t), F = (f.months.length ? f.months.map((l) => +l) : []).includes(ye(e)), I = p.length ? p.some((l) => +l === Oa(e)) : !1, U = d.length ? !d.some((l) => ce(Ee(l), Ee(e))) : !1, O = ue(e), x = O < +v[0] || O > +v[1];
  return !(h || k || R || F || x || I || U);
}, xn = (e, a, n, t, d, f, p) => ({
  validate: (h) => _l(h, e, a, n, t, d, f, p)
}), Je = Symbol(), jt = Symbol(), gn = Symbol(), ea = Symbol(), ta = Symbol(), Ze = Symbol(), kn = Symbol(), wn = {
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  autoApply: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 }
}, bn = {
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null }
}, na = {
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 }
}, aa = {
  ...na,
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 }
}, la = {
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null }
}, ra = {
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null }
}, $n = {
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null }
}, sa = {
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  ...ra
}, Dn = {
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 }
}, oa = {
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: { type: Boolean, default: !1 },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  }
}, ia = {
  ...aa,
  ...sa,
  ...Dn,
  ...$n,
  ...oa,
  ...bn,
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  monthYearComponent: { type: Object, default: null },
  timePickerComponent: { type: Object, default: null },
  actionRowComponent: { type: Object, default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleportCenter: { type: Boolean, default: !1 }
}, Rl = {
  ...la,
  ...wn,
  ...ia,
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  teleport: { type: [String, Object], default: "body" },
  altPosition: { type: [Boolean, Function], default: !1 },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] }
}, ua = {
  range: { type: Boolean, default: !1 },
  multiCalendars: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null }
}, da = {
  ...Dn,
  ...ua,
  vertical: { type: Boolean, default: !1 },
  month: { type: Number, default: 0 },
  year: { type: Number, default: 0 },
  instance: { type: Number, default: 1 }
}, Vl = ["aria-label", "aria-disabled", "aria-readonly"], Bl = {
  key: 1,
  class: "dp__input_wrap"
}, Ol = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], Nl = {
  key: 2,
  class: "dp__input_icon"
}, Il = {
  key: 4,
  class: "dp__clear_icon"
}, Yl = {
  compatConfig: { MODE: 3 }
}, El = /* @__PURE__ */ Oe({
  ...Yl,
  __name: "DatepickerInput",
  props: {
    ...la,
    ...wn,
    ...bn,
    inputValue: { type: String, default: "" },
    inline: { type: Boolean, default: !1 },
    isMenuOpen: { type: Boolean, default: !1 },
    pattern: { type: String, default: "" }
  },
  emits: [
    "clear",
    "open",
    "update:inputValue",
    "setInputDate",
    "close",
    "selectDate",
    "setEmptyDate",
    "toggle",
    "focus-prev",
    "focus",
    "blur"
  ],
  setup(e, { expose: a, emit: n }) {
    const t = e, d = N(), f = N(null), p = N(!1), v = me(Je), h = _(
      () => ({
        dp__pointer: !t.disabled && !t.readonly && !t.textInput,
        dp__disabled: t.disabled,
        dp__input_readonly: !t.textInput,
        dp__input: !0,
        dp__input_icon_pad: !t.hideInputIcon,
        dp__input_valid: t.state,
        dp__input_invalid: t.state === !1,
        dp__input_focus: p.value || t.isMenuOpen,
        dp__input_reg: !t.textInput,
        [t.inputClassName]: !!t.inputClassName
      })
    ), k = (i) => {
      var W;
      const { value: Y } = i.target, { format: ee, rangeSeparator: T } = t.textInputOptions;
      if (Y !== "") {
        if (((W = t.textInputOptions) == null ? void 0 : W.openMenu) && !t.isMenuOpen && n("open"), t.range) {
          const [Z, ae] = Y.split(`${T}`);
          if (Z && ae) {
            const q = qt(Z.trim(), ee || t.pattern), X = qt(ae.trim(), ee || t.pattern);
            d.value = q && X ? [q, X] : null;
          }
        } else
          d.value = qt(Y, ee || t.pattern);
        n("setInputDate", d.value);
      } else
        n("setInputDate", null), t.autoApply && (n("setEmptyDate"), d.value = null);
      n("update:inputValue", Y);
    }, R = () => {
      var i, Y;
      ((i = t.textInputOptions) == null ? void 0 : i.enterSubmit) && on(d.value) && t.inputValue !== "" ? (n("setInputDate", d.value, !0), d.value = null) : ((Y = t.textInputOptions) == null ? void 0 : Y.enterSubmit) && t.inputValue === "" && (d.value = null, n("clear"));
    }, V = () => {
      var i, Y;
      ((i = t.textInputOptions) == null ? void 0 : i.tabSubmit) && on(d.value) && t.inputValue !== "" ? (n("setInputDate", d.value, !0), d.value = null) : ((Y = t.textInputOptions) == null ? void 0 : Y.tabSubmit) && t.inputValue === "" && (d.value = null, n("clear"));
    }, F = () => {
      p.value = !0, n("focus");
    }, I = (i) => {
      var Y;
      i.preventDefault(), i.stopImmediatePropagation(), i.stopPropagation(), t.textInput && ((Y = t.textInputOptions) == null ? void 0 : Y.openMenu) ? t.isMenuOpen ? t.textInputOptions.enterSubmit && n("selectDate") : n("open") : t.textInput || n("toggle");
    }, U = () => {
      p.value = !1, t.isMenuOpen || n("blur"), t.autoApply && t.textInput && d.value && (n("setInputDate", d.value), n("selectDate"), d.value = null);
    }, O = () => {
      n("clear");
    }, x = (i) => {
      t.textInput || i.preventDefault();
    };
    return a({
      focusInput: () => {
        f.value && f.value.focus({ preventScroll: !0 });
      }
    }), (i, Y) => (y(), S("div", {
      onClick: I,
      "aria-label": o(v).input,
      role: "textbox",
      "aria-multiline": "false",
      "aria-disabled": i.disabled,
      "aria-readonly": i.readonly
    }, [
      i.$slots.trigger && !i.$slots["dp-input"] && !e.inline ? H(i.$slots, "trigger", { key: 0 }) : b("", !0),
      !i.$slots.trigger && (!e.inline || i.inlineWithInput) ? (y(), S("div", Bl, [
        i.$slots["dp-input"] && !i.$slots.trigger && !e.inline ? H(i.$slots, "dp-input", {
          key: 0,
          value: e.inputValue,
          onInput: k,
          onEnter: R,
          onTab: V,
          onClear: O
        }) : b("", !0),
        i.$slots["dp-input"] ? b("", !0) : (y(), S("input", {
          key: 1,
          ref_key: "inputRef",
          ref: f,
          id: i.uid ? `dp-input-${i.uid}` : void 0,
          name: i.name,
          class: fe(o(h)),
          inputmode: i.textInput ? "text" : "none",
          placeholder: i.placeholder,
          disabled: i.disabled,
          readonly: i.readonly,
          required: i.required,
          value: e.inputValue,
          autocomplete: i.autocomplete,
          onInput: k,
          onKeydown: [
            ne(I, ["enter"]),
            ne(V, ["tab"])
          ],
          onBlur: U,
          onFocus: F,
          onKeypress: x
        }, null, 42, Ol)),
        i.$slots["input-icon"] && !i.hideInputIcon ? (y(), S("span", Nl, [
          H(i.$slots, "input-icon")
        ])) : b("", !0),
        !i.$slots["input-icon"] && !i.hideInputIcon && !i.$slots["dp-input"] ? (y(), oe(o(Gt), {
          key: 3,
          class: "dp__input_icon dp__input_icons"
        })) : b("", !0),
        i.$slots["clear-icon"] && e.inputValue && i.clearable && !i.disabled && !i.readonly ? (y(), S("span", Il, [
          H(i.$slots, "clear-icon", { clear: O })
        ])) : b("", !0),
        i.clearable && !i.$slots["clear-icon"] && e.inputValue && !i.disabled && !i.readonly ? (y(), oe(o(xa), {
          key: 5,
          class: "dp__clear_icon dp__input_icons",
          onClick: Le(O, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : b("", !0)
      ])) : b("", !0)
    ], 8, Vl));
  }
}), Fl = (e) => typeof e == "object", Yn = (e, a) => a, Hl = (e) => Array.isArray(e) && e.length === 2, Kl = (e) => Array.isArray(e), Wl = (e) => typeof e == "object", Mt = (e) => Array.isArray(e), Re = (e) => Array.isArray(e), Kt = (e) => Array.isArray(e) && e.length === 2, Ll = (e, a) => a ? Array.isArray(e) : Kt(e), Ul = (e) => Array.isArray(e), Gl = (e) => typeof e == "string" || typeof e == "object" || typeof e == "number", En = (e) => typeof e == "string", de = Ut({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), en = N(null), Bt = N(!1), tn = N(!1), nn = N(!1), an = N(!1), be = N(0), he = N(0), Qe = () => {
  const e = _(() => Bt.value ? [...de.selectionGrid, de.actionRow].filter((l) => l.length) : tn.value ? [
    ...de.timePicker[0],
    ...de.timePicker[1],
    an.value ? [] : [en.value],
    de.actionRow
  ].filter((l) => l.length) : nn.value ? [...de.monthPicker, de.actionRow] : [de.monthYear, ...de.calendar, de.time, de.actionRow].filter((l) => l.length)), a = (l) => {
    be.value = l ? be.value + 1 : be.value - 1;
    let i = null;
    e.value[he.value] && (i = e.value[he.value][be.value]), i || (be.value = l ? be.value - 1 : be.value + 1);
  }, n = (l) => {
    if (he.value === 0 && !l || he.value === e.value.length && l)
      return;
    he.value = l ? he.value + 1 : he.value - 1, e.value[he.value] ? e.value[he.value] && !e.value[he.value][be.value] && be.value !== 0 && (be.value = e.value[he.value].length - 1) : he.value = l ? he.value - 1 : he.value + 1;
  }, t = (l) => {
    let i = null;
    e.value[he.value] && (i = e.value[he.value][be.value]), i ? i.focus({ preventScroll: !Bt.value }) : be.value = l ? be.value - 1 : be.value + 1;
  }, d = () => {
    a(!0), t(!0);
  }, f = () => {
    a(!1), t(!1);
  }, p = () => {
    n(!1), t(!0);
  }, v = () => {
    n(!0), t(!0);
  }, h = (l, i) => {
    de[i] = l;
  }, k = (l, i) => {
    de[i] = l;
  }, R = () => {
    be.value = 0, he.value = 0;
  };
  return {
    buildMatrix: h,
    buildMultiLevelMatrix: k,
    setTimePickerBackRef: (l) => {
      en.value = l;
    },
    setSelectionGrid: (l) => {
      Bt.value = l, R(), l || (de.selectionGrid = []);
    },
    setTimePicker: (l, i = !1) => {
      tn.value = l, an.value = i, R(), l || (de.timePicker[0] = [], de.timePicker[1] = []);
    },
    setTimePickerElements: (l, i = 0) => {
      de.timePicker[i] = l;
    },
    arrowRight: d,
    arrowLeft: f,
    arrowUp: p,
    arrowDown: v,
    clearArrowNav: () => {
      de.monthYear = [], de.calendar = [], de.time = [], de.actionRow = [], de.selectionGrid = [], de.timePicker[0] = [], de.timePicker[1] = [], Bt.value = !1, tn.value = !1, an.value = !1, nn.value = !1, R(), en.value = null;
    },
    setMonthPicker: (l) => {
      nn.value = l, R();
    }
  };
}, jl = (e, a, n) => {
  const t = new Date(JSON.parse(JSON.stringify(e))), d = [];
  for (let f = 0; f < 7; f++) {
    const p = St(t, f), v = ye(p) !== a;
    d.push({
      text: n && v ? "" : p.getDate(),
      value: p,
      current: !v
    });
  }
  return d;
}, zl = (e, a, n, t) => {
  const d = [], f = new Date(a, e), p = new Date(a, e + 1, 0), v = jn(f, { weekStartsOn: n }), h = (k) => {
    const R = jl(k, e, t);
    if (d.push({ days: R }), !d[d.length - 1].days.some((V) => ce(He(V.value), He(p)))) {
      const V = St(k, 7);
      h(V);
    }
  };
  return h(v), d;
}, Xl = (e, a = 3) => {
  const n = [];
  for (let t = 0; t < e.length; t += a)
    n.push([e[t], e[t + 1], e[t + 2]]);
  return n;
}, ql = (e, a) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((f) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(new Date(`2017-01-0${f}T00:00:00+00:00`)).slice(0, 2)), t = n.slice(0, a), d = n.slice(a + 1, n.length);
  return [n[a]].concat(...d).concat(...t);
}, Jl = (e) => {
  const a = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    a.push({ value: +n, text: `${n}` });
  return a;
}, Zl = (e, a) => {
  const n = new Intl.DateTimeFormat(e, { month: a, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((d) => {
    const f = d < 10 ? `0${d}` : d;
    return new Date(`2017-${f}-01T00:00:00+00:00`);
  }).map((d, f) => ({
    text: n.format(d),
    value: f
  }));
}, Ql = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], xl = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), er = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), tr = (e) => {
  function n(t) {
    let d = "";
    const f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", p = f.length;
    for (let v = 0; v < t; v++)
      d += f.charAt(Math.floor(Math.random() * p));
    return d + e;
  }
  return n(5);
}, ke = (e) => {
  var n;
  const a = o(e);
  return (n = a == null ? void 0 : a.$el) != null ? n : a;
}, nr = (e) => Object.assign({ type: "dot" }, e), Fn = (e) => Object.assign(
  {
    menuAppear: "dp-menu-appear",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), ar = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (a) => `Increment ${a}`,
    decrementValue: (a) => `Decrement ${a}`,
    openTpOverlay: (a) => `Open ${a} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => null
  },
  e
), ca = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, lr = { class: "dp__selection_preview" }, rr = { class: "dp__action_buttons" }, sr = ["onKeydown"], or = {
  compatConfig: { MODE: 3 }
}, ir = /* @__PURE__ */ Oe({
  ...or,
  __name: "ActionRow",
  props: {
    ...sa,
    ...$n,
    ...ra,
    ...Dn,
    ...ua,
    inline: { type: Boolean, default: !1 },
    timePicker: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    enableTimePicker: { type: Boolean, default: !0 }
  },
  emits: ["closePicker", "selectDate", "invalid-select"],
  setup(e, { emit: a }) {
    const n = e, { buildMatrix: t } = Qe(), d = me(ta), f = me(Ze), p = N(null), v = N(null);
    Ne(() => {
      f != null && f.value && t([ke(p), ke(v)], "actionRow");
    });
    const h = _(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), k = _(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: !R.value || !V.value || !h.value
    })), R = _(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : dn(n.internalModelValue, n.maxTime, n.minTime, n.maxDate, n.minDate)), V = _(() => n.monthPicker ? Tl(n.internalModelValue, n.minDate, n.maxDate) : !0), F = (O) => yt(O, n.previewFormat, d == null ? void 0 : d.value), I = _(() => !n.internalModelValue || !n.menuMount ? "" : typeof n.previewFormat == "string" ? Mt(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? n.multiCalendars > 0 ? `${F(n.internalModelValue[0])} - ${F(
      n.internalModelValue[1]
    )}` : [F(n.internalModelValue[0]), F(n.internalModelValue[1])] : n.multiDates ? n.internalModelValue.map((O) => `${F(O)}`) : n.modelAuto ? `${F(n.internalModelValue[0])}` : `${F(n.internalModelValue[0])} -` : yt(n.internalModelValue, n.previewFormat, d == null ? void 0 : d.value) : n.timePicker ? n.previewFormat(un(n.internalModelValue)) : n.monthPicker ? n.previewFormat(Ht(n.internalModelValue)) : n.previewFormat(n.internalModelValue)), U = () => {
      R.value && V.value && h.value ? a("selectDate") : a("invalid-select");
    };
    return (O, x) => (y(), S("div", {
      class: "dp__action_row",
      style: vt(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      j("div", lr, [
        O.$slots["action-preview"] ? H(O.$slots, "action-preview", {
          key: 0,
          value: O.internalModelValue
        }) : b("", !0),
        O.$slots["action-preview"] ? b("", !0) : (y(), S(ie, { key: 1 }, [
          Array.isArray(o(I)) ? b("", !0) : (y(), S(ie, { key: 0 }, [
            Fe(ge(o(I)), 1)
          ], 64)),
          Array.isArray(o(I)) ? (y(!0), S(ie, { key: 1 }, pe(o(I), (l, i) => (y(), S("div", { key: i }, ge(l), 1))), 128)) : b("", !0)
        ], 64))
      ]),
      j("div", rr, [
        O.$slots["action-select"] ? H(O.$slots, "action-select", {
          key: 0,
          value: O.internalModelValue
        }) : b("", !0),
        O.$slots["action-select"] ? b("", !0) : (y(), S(ie, { key: 1 }, [
          e.inline ? b("", !0) : (y(), S("span", {
            key: 0,
            class: "dp__action dp__cancel",
            ref_key: "cancelButtonRef",
            ref: p,
            tabindex: "0",
            onClick: x[0] || (x[0] = (l) => O.$emit("closePicker")),
            onKeydown: [
              x[1] || (x[1] = ne((l) => O.$emit("closePicker"), ["enter"])),
              x[2] || (x[2] = ne((l) => O.$emit("closePicker"), ["space"]))
            ]
          }, ge(O.cancelText), 545)),
          j("span", {
            class: fe(o(k)),
            tabindex: "0",
            onKeydown: [
              ne(U, ["enter"]),
              ne(U, ["space"])
            ],
            onClick: U,
            ref_key: "selectButtonRef",
            ref: v
          }, ge(O.selectText), 43, sr)
        ], 64))
      ])
    ], 4));
  }
}), ur = ["aria-label"], dr = {
  class: "dp__calendar_header",
  role: "row"
}, cr = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, fr = /* @__PURE__ */ j("div", { class: "dp__calendar_header_separator" }, null, -1), mr = ["aria-label"], vr = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, yr = { class: "dp__cell_inner" }, pr = ["aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseover"], hr = ["innerHTML"], gr = { key: 1 }, kr = /* @__PURE__ */ j("div", { class: "dp__arrow_bottom_tp" }, null, -1), wr = {
  compatConfig: { MODE: 3 }
}, br = /* @__PURE__ */ Oe({
  ...wr,
  __name: "Calendar",
  props: {
    ...da,
    ...oa,
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    modeHeight: { type: [Number, String], default: 255 },
    specificMode: { type: Boolean, default: !1 }
  },
  emits: ["selectDate", "setHoverDate", "handleScroll", "mount", "handleSwipe", "handleSpace"],
  setup(e, { expose: a, emit: n }) {
    const t = e, d = N(null), f = N({ bottom: "", left: "", transform: "" }), p = N([]), v = N(null), h = N(!0), k = me(jt), R = me(Je), V = me(Ze), F = N(""), I = N({ startX: 0, endX: 0, startY: 0, endY: 0 }), U = _(() => t.dayNames ? Array.isArray(t.dayNames) ? t.dayNames : t.dayNames(t.locale, +t.weekStart) : ql(t.locale, +t.weekStart)), { buildMultiLevelMatrix: O } = Qe();
    Ne(() => {
      n("mount", { cmp: "calendar", refs: p }), t.noSwipe || v.value && (v.value.addEventListener("touchstart", ae, { passive: !1 }), v.value.addEventListener("touchend", q, { passive: !1 }), v.value.addEventListener("touchmove", X, { passive: !1 })), t.monthChangeOnScroll && v.value && v.value.addEventListener("wheel", r, { passive: !1 });
    });
    const x = (m, C) => {
      if (k != null && k.value) {
        const M = He(it(new Date(), t.month, t.year));
        F.value = $e(He(it(new Date(), m, C)), M) ? k.value[t.vertical ? "vNext" : "next"] : k.value[t.vertical ? "vPrevious" : "previous"], h.value = !1, Pt(() => {
          h.value = !0;
        });
      }
    }, l = _(
      () => ({
        dp__calendar_wrap: !0,
        [t.calendarClassName]: !!t.calendarClassName
      })
    ), i = _(() => (m) => {
      const C = nr(m);
      return {
        dp__marker_dot: C.type === "dot",
        dp__marker_line: C.type === "line"
      };
    }), Y = _(() => (m) => ce(m, d.value)), ee = _(() => ({
      dp__calendar: !0,
      dp__calendar_next: t.multiCalendars > 0 && t.instance !== 0
    })), T = _(() => t.specificMode ? { height: `${t.modeHeight}px` } : null), W = (m, C, M) => {
      var P, K;
      if (n("setHoverDate", m), (K = (P = m.marker) == null ? void 0 : P.tooltip) != null && K.length) {
        const re = ke(p.value[C][M]);
        if (re) {
          const { width: le, height: g } = re.getBoundingClientRect();
          f.value = {
            bottom: `${g}px`,
            left: `${le / 2}px`,
            transform: "translateX(-50%)"
          }, d.value = m.value;
        }
      }
    }, Z = () => {
      d.value = null;
    }, ae = (m) => {
      I.value.startX = m.changedTouches[0].screenX, I.value.startY = m.changedTouches[0].screenY;
    }, q = (m) => {
      I.value.endX = m.changedTouches[0].screenX, I.value.endY = m.changedTouches[0].screenY, $();
    }, X = (m) => {
      m.preventDefault();
    }, $ = () => {
      const m = t.vertical ? "Y" : "X";
      Math.abs(I.value[`start${m}`] - I.value[`end${m}`]) > 10 && n("handleSwipe", I.value[`start${m}`] > I.value[`end${m}`] ? "right" : "left");
    }, G = (m, C, M) => {
      m && (Array.isArray(p.value[C]) ? p.value[C][M] = m : p.value[C] = [m]), V != null && V.value && O(p.value, "calendar");
    }, r = (m) => {
      t.monthChangeOnScroll && (m.preventDefault(), n("handleScroll", m));
    };
    return a({ triggerTransition: x }), (m, C) => (y(), S("div", {
      class: fe(o(ee))
    }, [
      j("div", {
        style: vt(o(T))
      }, [
        e.specificMode ? b("", !0) : (y(), S("div", {
          key: 0,
          ref_key: "calendarWrapRef",
          ref: v,
          class: fe(o(l)),
          role: "grid",
          "aria-label": o(R).calendarWrap
        }, [
          j("div", dr, [
            m.weekNumbers ? (y(), S("div", cr, ge(m.weekNumName), 1)) : b("", !0),
            (y(!0), S(ie, null, pe(o(U), (M, P) => (y(), S("div", {
              class: "dp__calendar_header_item",
              role: "gridcell",
              key: P
            }, [
              m.$slots["calendar-header"] ? H(m.$slots, "calendar-header", {
                key: 0,
                day: M,
                index: P
              }) : b("", !0),
              m.$slots["calendar-header"] ? b("", !0) : (y(), S(ie, { key: 1 }, [
                Fe(ge(M), 1)
              ], 64))
            ]))), 128))
          ]),
          fr,
          qe(ht, {
            name: F.value,
            css: !!o(k)
          }, {
            default: se(() => [
              h.value ? (y(), S("div", {
                key: 0,
                class: "dp__calendar",
                role: "grid",
                "aria-label": o(R).calendarDays
              }, [
                (y(!0), S(ie, null, pe(e.mappedDates, (M, P) => (y(), S("div", {
                  class: "dp__calendar_row",
                  role: "row",
                  key: P
                }, [
                  m.weekNumbers ? (y(), S("div", vr, [
                    j("div", yr, ge(e.getWeekNum(M.days)), 1)
                  ])) : b("", !0),
                  (y(!0), S(ie, null, pe(M.days, (K, re) => {
                    var le, g;
                    return y(), S("div", {
                      role: "gridcell",
                      class: "dp__calendar_item",
                      ref_for: !0,
                      ref: (D) => G(D, P, re),
                      key: re + P,
                      "aria-selected": K.classData.dp__active_date || K.classData.dp__range_start || K.classData.dp__range_start,
                      "aria-disabled": K.classData.dp__cell_disabled,
                      "aria-label": (g = (le = o(R)).day) == null ? void 0 : g.call(le, K),
                      tabindex: "0",
                      onClick: Le((D) => m.$emit("selectDate", K), ["stop", "prevent"]),
                      onKeydown: [
                        ne((D) => m.$emit("selectDate", K), ["enter"]),
                        ne((D) => m.$emit("handleSpace", K), ["space"])
                      ],
                      onMouseover: (D) => W(K, P, re),
                      onMouseleave: Z
                    }, [
                      j("div", {
                        class: fe(["dp__cell_inner", K.classData])
                      }, [
                        m.$slots.day ? H(m.$slots, "day", {
                          key: 0,
                          day: +K.text,
                          date: K.value
                        }) : b("", !0),
                        m.$slots.day ? b("", !0) : (y(), S(ie, { key: 1 }, [
                          Fe(ge(K.text), 1)
                        ], 64)),
                        K.marker ? (y(), S("div", {
                          key: 2,
                          class: fe(o(i)(K.marker)),
                          style: vt(K.marker.color ? { backgroundColor: K.marker.color } : {})
                        }, null, 6)) : b("", !0),
                        o(Y)(K.value) ? (y(), S("div", {
                          key: 3,
                          class: "dp__marker_tooltip",
                          style: vt(f.value)
                        }, [
                          j("div", {
                            class: "dp__tooltip_content",
                            onClick: C[0] || (C[0] = Le(() => {
                            }, ["stop"]))
                          }, [
                            (y(!0), S(ie, null, pe(K.marker.tooltip, (D, B) => (y(), S("div", {
                              key: B,
                              class: "dp__tooltip_text"
                            }, [
                              m.$slots["marker-tooltip"] ? H(m.$slots, "marker-tooltip", {
                                key: 0,
                                tooltop: D,
                                day: K.value
                              }) : b("", !0),
                              m.$slots["marker-tooltip"] ? b("", !0) : (y(), S(ie, { key: 1 }, [
                                j("div", {
                                  class: "dp__tooltip_mark",
                                  style: vt(D.color ? { backgroundColor: D.color } : {})
                                }, null, 4),
                                D.html ? (y(), S("div", {
                                  key: 0,
                                  innerHTML: D.html
                                }, null, 8, hr)) : (y(), S("div", gr, ge(D.text), 1))
                              ], 64))
                            ]))), 128)),
                            kr
                          ])
                        ], 4)) : b("", !0)
                      ], 2)
                    ], 40, pr);
                  }), 128))
                ]))), 128))
              ], 8, mr)) : b("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ], 10, ur))
      ], 4)
    ], 2));
  }
}), $r = ["aria-label", "aria-disabled"], Dr = {
  compatConfig: { MODE: 3 }
}, ln = /* @__PURE__ */ Oe({
  ...Dr,
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "setRef"],
  setup(e, { emit: a }) {
    const n = N(null);
    return Ne(() => a("setRef", n)), (t, d) => (y(), S("div", {
      class: "dp__month_year_col_nav",
      onClick: d[0] || (d[0] = (f) => t.$emit("activate")),
      onKeydown: [
        d[1] || (d[1] = ne((f) => t.$emit("activate"), ["enter"])),
        d[2] || (d[2] = ne((f) => t.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: n
    }, [
      j("div", {
        class: fe(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        H(t.$slots, "default")
      ], 2)
    ], 40, $r));
  }
});
var Wt = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Wt || {});
const Mr = ["onKeydown"], Sr = { class: "dp__selection_grid_header" }, Cr = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], Ar = ["aria-label", "onKeydown"], Pr = {
  compatConfig: { MODE: 3 }
}, At = /* @__PURE__ */ Oe({
  ...Pr,
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null }
  },
  emits: ["update:modelValue", "selected", "toggle", "reset-flow"],
  setup(e, { expose: a, emit: n }) {
    const t = e, d = N(!1), f = N(null), p = N(null), v = N([]), h = me(gn, !1), k = me(ea, N(!1)), R = me(Je), V = me(Ze), F = N(), I = N(), U = me(kn), { setSelectionGrid: O, buildMultiLevelMatrix: x, setMonthPicker: l } = Qe();
    Ca(() => {
      f.value = null;
    }), Ne(() => {
      Pt().then(() => X()), Y(), i(!0);
    }), mn(() => i(!1));
    const i = (M) => {
      var P;
      V != null && V.value && ((P = t.headerRefs) != null && P.length ? l(M) : O(M));
    }, Y = () => {
      const M = ke(p);
      M && (k.value || M.focus({ preventScroll: !0 }), d.value = M.clientHeight < M.scrollHeight);
    }, ee = _(
      () => ({
        dp__overlay: !0
      })
    ), T = _(() => ({
      dp__overlay_col: !0
    })), W = _(() => t.items.map((M) => M.filter((P) => P).map((P) => {
      var le, g, D;
      const K = t.disabledValues.some((B) => B === P.value) || q(P.value), re = (le = t.multiModelValue) != null && le.length ? (g = t.multiModelValue) == null ? void 0 : g.some(
        (B) => ce(
          B,
          st(
            t.monthPicker ? Ft(new Date(), P.value) : new Date(),
            t.monthPicker ? t.year : P.value
          )
        )
      ) : t.skipActive ? !1 : P.value === t.modelValue;
      return {
        ...P,
        className: {
          dp__overlay_cell_active: re,
          dp__overlay_cell: !re,
          dp__overlay_cell_disabled: K,
          dp__overlay_cell_active_disabled: K && re,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (D = t.multiModelValue) != null && D.length ? G(P.value) : !1
        }
      };
    }))), Z = _(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: d.value,
        dp__button_bottom: h
      })
    ), ae = _(() => {
      var M, P;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((M = t.items) == null ? void 0 : M.length) <= 6,
        dp__container_block: ((P = t.items) == null ? void 0 : P.length) > 6
      };
    }), q = (M) => {
      const P = t.maxValue || t.maxValue === 0, K = t.minValue || t.minValue === 0;
      return !P && !K ? !1 : P && K ? +M > +t.maxValue || +M < +t.minValue : P ? +M > +t.maxValue : K ? +M < +t.minValue : !1;
    }, X = () => {
      const M = ke(f);
      if (M) {
        const P = ke(p);
        P && (P.scrollTop = M.offsetTop - P.offsetTop - (P.getBoundingClientRect().height / 2 - M.getBoundingClientRect().height));
      }
    }, $ = (M) => {
      !t.disabledValues.some((P) => P === M) && !q(M) && (n("update:modelValue", M), n("selected"));
    }, G = (M) => {
      const P = t.monthPicker ? t.year : M;
      return Zn(
        t.multiModelValue,
        st(
          t.monthPicker ? Ft(new Date(), F.value || 0) : new Date(),
          t.monthPicker ? P : F.value || P
        ),
        st(t.monthPicker ? Ft(new Date(), M) : new Date(), P)
      );
    }, r = () => {
      n("toggle"), n("reset-flow");
    }, m = () => {
      t.escClose && r();
    }, C = (M, P, K, re) => {
      var le, g;
      if (M && (P.value === +t.modelValue && !t.disabledValues.includes(P.value) && (f.value = M), V != null && V.value)) {
        Array.isArray(v.value[K]) ? v.value[K][re] = M : v.value[K] = [M];
        const D = (le = t.headerRefs) != null && le.length ? [t.headerRefs].concat(v.value) : v.value.concat([t.skipButtonRef ? [] : [I.value]]);
        x(D, (g = t.headerRefs) != null && g.length ? "monthPicker" : "selectionGrid");
      }
    };
    return a({ focusGrid: Y }), (M, P) => (y(), S("div", {
      ref_key: "gridWrapRef",
      ref: p,
      class: fe(o(ee)),
      role: "dialog",
      tabindex: "0",
      onKeydown: ne(m, ["esc"])
    }, [
      j("div", {
        class: fe(o(ae)),
        role: "grid"
      }, [
        j("div", Sr, [
          H(M.$slots, "header")
        ]),
        (y(!0), S(ie, null, pe(o(W), (K, re) => (y(), S("div", {
          class: "dp__overlay_row",
          key: o(tr)(re),
          role: "row"
        }, [
          (y(!0), S(ie, null, pe(K, (le, g) => (y(), S("div", {
            role: "gridcell",
            class: fe(o(T)),
            key: le.value,
            "aria-selected": le.value === e.modelValue && !e.disabledValues.includes(le.value),
            "aria-disabled": le.className.dp__overlay_cell_disabled,
            ref_for: !0,
            ref: (D) => C(D, le, re, g),
            tabindex: "0",
            onClick: (D) => $(le.value),
            onKeydown: [
              ne((D) => $(le.value), ["enter"]),
              ne((D) => $(le.value), ["space"])
            ],
            onMouseover: (D) => F.value = le.value
          }, [
            j("div", {
              class: fe(le.className)
            }, [
              M.$slots.item ? H(M.$slots, "item", {
                key: 0,
                item: le
              }) : b("", !0),
              M.$slots.item ? b("", !0) : (y(), S(ie, { key: 1 }, [
                Fe(ge(le.text), 1)
              ], 64))
            ], 2)
          ], 42, Cr))), 128))
        ]))), 128)),
        M.$slots["button-icon"] ? Nt((y(), S("div", {
          key: 0,
          role: "button",
          "aria-label": o(R).toggleOverlay,
          class: fe(o(Z)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: I,
          onClick: r,
          onKeydown: ne(r, ["enter"])
        }, [
          H(M.$slots, "button-icon")
        ], 42, Ar)), [
          [It, !o(U)(e.type)]
        ]) : b("", !0)
      ], 2)
    ], 42, Mr));
  }
}), zt = () => {
  const e = me(jt);
  return { transitionName: _(() => (n) => e != null && e.value ? n ? e.value.open : e.value.close : ""), showTransition: !!(e != null && e.value) };
}, Tr = ["aria-label"], _r = {
  compatConfig: { MODE: 3 }
}, Hn = /* @__PURE__ */ Oe({
  ..._r,
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null }
  },
  emits: ["update:model-value", "toggle", "setRef"],
  setup(e, { emit: a }) {
    const { transitionName: n, showTransition: t } = zt(), d = N(null);
    return Ne(() => a("setRef", d)), (f, p) => (y(), S(ie, null, [
      j("div", {
        class: "dp__month_year_select",
        onClick: p[0] || (p[0] = (v) => f.$emit("toggle")),
        onKeydown: [
          p[1] || (p[1] = ne((v) => f.$emit("toggle"), ["enter"])),
          p[2] || (p[2] = ne((v) => f.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: d
      }, [
        H(f.$slots, "default")
      ], 40, Tr),
      qe(ht, {
        name: o(n)(e.showSelectionGrid),
        css: o(t)
      }, {
        default: se(() => [
          e.showSelectionGrid ? (y(), oe(At, Ae({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose,
            type: e.type
          }, {
            "header-refs": [],
            "onUpdate:modelValue": p[3] || (p[3] = (v) => f.$emit("update:model-value", v)),
            onToggle: p[4] || (p[4] = (v) => f.$emit("toggle"))
          }), Pe({
            "button-icon": se(() => [
              f.$slots["calendar-icon"] ? H(f.$slots, "calendar-icon", { key: 0 }) : b("", !0),
              f.$slots["calendar-icon"] ? b("", !0) : (y(), oe(o(Gt), { key: 1 }))
            ]),
            _: 2
          }, [
            f.$slots[e.slotName] ? {
              name: "item",
              fn: se(({ item: v }) => [
                H(f.$slots, e.slotName, { item: v })
              ]),
              key: "0"
            } : void 0
          ]), 1040)) : b("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Lt = (e, a, n) => [De(new Date(e), { date: 1 }), De(new Date(), { month: a, year: n, date: 1 })], cn = (e, a, n) => we(...Lt(e, a, n)) || ce(...Lt(e, a, n)), fn = (e, a, n) => $e(...Lt(e, a, n)) || ce(...Lt(e, a, n)), fa = (e, a, n, t, d, f) => {
  let p = !1;
  return f ? e && a ? (a && d && fn(a, n, t) && (p = !0), e && !d && cn(e, n, t) && (p = !0)) : (e && cn(e, n, t) || a && fn(a, n, t)) && (p = !0) : p = !0, p;
}, Rr = (e, a) => {
  const n = (v, h) => {
    let k = v;
    return e.filters.months.includes(ye(k)) ? (k = h ? ot(v, 1) : Ct(v, 1), n(k, h)) : k;
  }, t = (v, h) => {
    let k = v;
    return e.filters.years.includes(ue(k)) ? (k = h ? Na(v, 1) : Ia(v, 1), t(k, h)) : k;
  }, d = (v) => {
    const h = De(new Date(), { month: e.month, year: e.year });
    let k = v ? ot(h, 1) : Ct(h, 1), R = ye(k), V = ue(k);
    e.filters.months.includes(R) && (k = n(k, v), R = ye(k), V = ue(k)), e.filters.years.includes(V) && (k = t(k, v), V = ue(k)), fa(e.minDate, e.maxDate, R, V, v, e.preventMinMaxNavigation) && f(R, V);
  }, f = (v, h) => {
    a("update-month-year", { month: v, year: h });
  }, p = _(() => (v) => {
    if (!e.preventMinMaxNavigation || v && !e.maxDate || !v && !e.minDate)
      return !1;
    const h = De(new Date(), { month: e.month, year: e.year }), k = v ? ot(h, 1) : Ct(h, 1), R = [ye(k), ue(k)];
    return v ? !fn(e.maxDate, ...R) : !cn(e.minDate, ...R);
  });
  return { handleMonthYearChange: d, isDisabled: p };
}, Vr = { class: "dp__month_year_row" }, Br = { class: "dp__month_picker_header" }, Or = ["aria-label"], Nr = ["aria-label", "onKeydown"], Ir = ["aria-label"], Yr = {
  compatConfig: { MODE: 3 }
}, Er = /* @__PURE__ */ Oe({
  ...Yr,
  __name: "MonthYearPicker",
  props: {
    ...da,
    ...$n,
    preventMinMaxNavigation: { type: Boolean, default: !1 },
    reverseYears: { type: Boolean, default: !1 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    filters: { type: Object, default: () => ({}) },
    multiCalendarsSolo: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 }
  },
  emits: ["update-month-year", "monthYearSelect", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: a, emit: n }) {
    const t = e, { transitionName: d, showTransition: f } = zt(), { buildMatrix: p } = Qe(), v = N(!1), h = N(!1), k = N([null, null, null, null]), R = N(null), V = N(null), F = N(null), I = me(Je), U = me(Ze), { handleMonthYearChange: O, isDisabled: x } = Rr(t, n);
    Ne(() => {
      n("mount");
    });
    const l = (g) => ({
      get: () => t[g],
      set: (D) => {
        const B = g === "month" ? "year" : "month";
        n("update-month-year", { [g]: D, [B]: t[B] }), n("monthYearSelect", g === "year"), g === "month" ? M(!0) : P(!0);
      }
    }), i = _(l("month")), Y = _(l("year")), ee = _(() => (g) => {
      const D = g === "month";
      return {
        showSelectionGrid: (D ? v : h).value,
        items: (D ? G : r).value,
        disabledValues: t.filters[D ? "months" : "years"],
        minValue: (D ? Z : T).value,
        maxValue: (D ? ae : W).value,
        headerRefs: D && t.monthPicker ? [R.value, V.value, F.value] : [],
        escClose: t.escClose
      };
    }), T = _(() => t.minDate ? ue(new Date(t.minDate)) : null), W = _(() => t.maxDate ? ue(new Date(t.maxDate)) : null), Z = _(() => {
      if (t.minDate && T.value) {
        if (T.value > t.year)
          return 12;
        if (T.value === t.year)
          return ye(new Date(t.minDate));
      }
      return null;
    }), ae = _(() => t.maxDate && W.value ? W.value < t.year ? -1 : W.value === t.year ? ye(new Date(t.maxDate)) : null : null), q = _(() => t.range && t.internalModelValue && (t.monthPicker || t.yearPicker) ? t.internalModelValue : []), X = (g, D = !1) => {
      const B = [];
      for (let Te = 0; Te < g.length; Te += 3) {
        const Ie = [g[Te], g[Te + 1], g[Te + 2]];
        B.push(D ? Ie.reverse() : Ie);
      }
      return D ? B.reverse() : B;
    }, $ = _(() => {
      const g = t.months.find((D) => D.value === t.month);
      return g || { text: "", value: 0 };
    }), G = _(() => X(t.months)), r = _(() => X(t.years, t.reverseYears)), m = _(() => t.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === 0 : !0), C = _(() => t.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === t.multiCalendars - 1 : !0), M = (g = !1) => {
      K(g), v.value = !v.value, v.value || n("overlay-closed");
    }, P = (g = !1) => {
      K(g), h.value = !h.value, h.value || n("overlay-closed");
    }, K = (g) => {
      g || n("reset-flow");
    }, re = (g = !1) => {
      n("update-month-year", {
        year: g ? t.year + 1 : t.year - 1,
        month: t.month,
        fromNav: !0
      });
    }, le = (g, D) => {
      U != null && U.value && (k.value[D] = ke(g), p(k.value, "monthYear"));
    };
    return a({
      toggleMonthPicker: M,
      toggleYearPicker: P
    }), (g, D) => (y(), S("div", Vr, [
      !g.monthPicker && !e.yearPicker ? (y(), S(ie, { key: 0 }, [
        o(m) && !g.vertical ? (y(), oe(ln, {
          key: 0,
          "aria-label": o(I).prevMonth,
          disabled: o(x)(!1),
          onActivate: D[0] || (D[0] = (B) => o(O)(!1)),
          onSetRef: D[1] || (D[1] = (B) => le(B, 0))
        }, {
          default: se(() => [
            g.$slots["arrow-left"] ? H(g.$slots, "arrow-left", { key: 0 }) : b("", !0),
            g.$slots["arrow-left"] ? b("", !0) : (y(), oe(o(Rn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : b("", !0),
        qe(Hn, Ae({
          "aria-label": o(I).openMonthsOverlay,
          "slot-name": "month-overlay",
          modelValue: o(i),
          "onUpdate:modelValue": D[2] || (D[2] = (B) => at(i) ? i.value = B : null)
        }, o(ee)("month"), {
          onToggle: M,
          onSetRef: D[3] || (D[3] = (B) => le(B, 1)),
          type: "month"
        }), Pe({
          default: se(() => [
            g.$slots.month ? H(g.$slots, "month", ze(Ae({ key: 0 }, o($)))) : b("", !0),
            g.$slots.month ? b("", !0) : (y(), S(ie, { key: 1 }, [
              Fe(ge(o($).text), 1)
            ], 64))
          ]),
          _: 2
        }, [
          g.$slots["calendar-icon"] ? {
            name: "calendar-icon",
            fn: se(() => [
              H(g.$slots, "calendar-icon")
            ]),
            key: "0"
          } : void 0,
          g.$slots["month-overlay"] ? {
            name: "month-overlay",
            fn: se(({ item: B }) => [
              H(g.$slots, "month-overlay", {
                text: B.text,
                value: B.value
              })
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["aria-label", "modelValue"]),
        qe(Hn, Ae({
          "aria-label": o(I).openYearsOverlay,
          "slot-name": "year-overlay",
          modelValue: o(Y),
          "onUpdate:modelValue": D[4] || (D[4] = (B) => at(Y) ? Y.value = B : null)
        }, o(ee)("year"), {
          onToggle: P,
          onSetRef: D[5] || (D[5] = (B) => le(B, 2)),
          type: "year"
        }), Pe({
          default: se(() => [
            g.$slots.year ? H(g.$slots, "year", {
              key: 0,
              year: g.year
            }) : b("", !0),
            g.$slots.year ? b("", !0) : (y(), S(ie, { key: 1 }, [
              Fe(ge(g.year), 1)
            ], 64))
          ]),
          _: 2
        }, [
          g.$slots["calendar-icon"] ? {
            name: "calendar-icon",
            fn: se(() => [
              H(g.$slots, "calendar-icon")
            ]),
            key: "0"
          } : void 0,
          g.$slots["year-overlay"] ? {
            name: "year-overlay",
            fn: se(({ item: B }) => [
              H(g.$slots, "year-overlay", {
                text: B.text,
                value: B.value
              })
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["aria-label", "modelValue"]),
        o(m) && g.vertical ? (y(), oe(ln, {
          key: 1,
          "aria-label": o(I).prevMonth,
          disabled: o(x)(!1),
          onActivate: D[6] || (D[6] = (B) => o(O)(!1))
        }, {
          default: se(() => [
            g.$slots["arrow-up"] ? H(g.$slots, "arrow-up", { key: 0 }) : b("", !0),
            g.$slots["arrow-up"] ? b("", !0) : (y(), oe(o(Xn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : b("", !0),
        o(C) ? (y(), oe(ln, {
          key: 2,
          disabled: o(x)(!0),
          "aria-label": o(I).nextMonth,
          onActivate: D[7] || (D[7] = (B) => o(O)(!0)),
          ref: "rightIcon",
          onSetRef: D[8] || (D[8] = (B) => le(B, 3))
        }, {
          default: se(() => [
            g.$slots[g.vertical ? "arrow-down" : "arrow-right"] ? H(g.$slots, g.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : b("", !0),
            g.$slots[g.vertical ? "arrow-down" : "arrow-right"] ? b("", !0) : (y(), oe(Yt(g.vertical ? o(qn) : o(Vn)), { key: 1 }))
          ]),
          _: 3
        }, 8, ["disabled", "aria-label"])) : b("", !0)
      ], 64)) : b("", !0),
      g.monthPicker ? (y(), oe(At, Ae({ key: 1 }, o(ee)("month"), {
        "skip-active": t.range,
        year: g.year,
        "multi-model-value": o(q),
        "month-picker": "",
        modelValue: o(i),
        "onUpdate:modelValue": D[15] || (D[15] = (B) => at(i) ? i.value = B : null),
        onToggle: M,
        onSelected: D[16] || (D[16] = (B) => g.$emit("overlay-closed"))
      }), Pe({
        header: se(() => [
          j("div", Br, [
            j("div", {
              class: "dp__month_year_col_nav",
              tabindex: "0",
              ref_key: "mpPrevIconRef",
              ref: R,
              onClick: D[9] || (D[9] = (B) => re(!1)),
              onKeydown: D[10] || (D[10] = ne((B) => re(!1), ["enter"]))
            }, [
              j("div", {
                class: "dp__inner_nav",
                role: "button",
                "aria-label": o(I).prevMonth
              }, [
                g.$slots["arrow-left"] ? H(g.$slots, "arrow-left", { key: 0 }) : b("", !0),
                g.$slots["arrow-left"] ? b("", !0) : (y(), oe(o(Rn), { key: 1 }))
              ], 8, Or)
            ], 544),
            j("div", {
              class: "dp__pointer",
              role: "button",
              ref_key: "mpYearButtonRef",
              ref: V,
              "aria-label": o(I).openYearsOverlay,
              tabindex: "0",
              onClick: P,
              onKeydown: ne(P, ["enter"])
            }, [
              g.$slots.year ? H(g.$slots, "year", {
                key: 0,
                year: g.year
              }) : b("", !0),
              g.$slots.year ? b("", !0) : (y(), S(ie, { key: 1 }, [
                Fe(ge(g.year), 1)
              ], 64))
            ], 40, Nr),
            j("div", {
              class: "dp__month_year_col_nav",
              tabindex: "0",
              ref_key: "mpNextIconRef",
              ref: F,
              onClick: D[11] || (D[11] = (B) => re(!0)),
              onKeydown: D[12] || (D[12] = ne((B) => re(!0), ["enter"]))
            }, [
              j("div", {
                class: "dp__inner_nav",
                role: "button",
                "aria-label": o(I).nextMonth
              }, [
                g.$slots["arrow-right"] ? H(g.$slots, "arrow-right", { key: 0 }) : b("", !0),
                g.$slots["arrow-right"] ? b("", !0) : (y(), oe(o(Vn), { key: 1 }))
              ], 8, Ir)
            ], 544)
          ]),
          qe(ht, {
            name: o(d)(h.value),
            css: o(f)
          }, {
            default: se(() => [
              h.value ? (y(), oe(At, Ae({ key: 0 }, o(ee)("year"), {
                modelValue: o(Y),
                "onUpdate:modelValue": D[13] || (D[13] = (B) => at(Y) ? Y.value = B : null),
                onToggle: P,
                onSelected: D[14] || (D[14] = (B) => g.$emit("overlay-closed"))
              }), Pe({
                "button-icon": se(() => [
                  g.$slots["calendar-icon"] ? H(g.$slots, "calendar-icon", { key: 0 }) : b("", !0),
                  g.$slots["calendar-icon"] ? b("", !0) : (y(), oe(o(Gt), { key: 1 }))
                ]),
                _: 2
              }, [
                g.$slots["year-overlay"] ? {
                  name: "item",
                  fn: se(({ item: B }) => [
                    H(g.$slots, "year-overlay", {
                      text: B.text,
                      value: B.value
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1040, ["modelValue"])) : b("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 2
      }, [
        g.$slots["month-overlay"] ? {
          name: "item",
          fn: se(({ item: B }) => [
            H(g.$slots, "month-overlay", {
              text: B.text,
              value: B.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : b("", !0),
      e.yearPicker ? (y(), oe(At, Ae({ key: 2 }, o(ee)("year"), {
        modelValue: o(Y),
        "onUpdate:modelValue": D[17] || (D[17] = (B) => at(Y) ? Y.value = B : null),
        "multi-model-value": o(q),
        "skip-active": t.range,
        "skip-button-ref": "",
        "year-picker": "",
        onToggle: P,
        onSelected: D[18] || (D[18] = (B) => g.$emit("overlay-closed"))
      }), Pe({ _: 2 }, [
        g.$slots["year-overlay"] ? {
          name: "item",
          fn: se(({ item: B }) => [
            H(g.$slots, "year-overlay", {
              text: B.text,
              value: B.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : b("", !0)
    ]));
  }
}), Fr = {
  key: 0,
  class: "dp__time_input"
}, Hr = ["aria-label", "onKeydown", "onClick"], Kr = ["aria-label", "onKeydown", "onClick"], Wr = ["aria-label", "onKeydown", "onClick"], Lr = { key: 0 }, Ur = ["aria-label", "onKeydown"], Gr = {
  compatConfig: { MODE: 3 }
}, jr = /* @__PURE__ */ Oe({
  ...Gr,
  __name: "TimeInput",
  props: {
    ...na,
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    filters: { type: Object, default: () => ({}) },
    disabled: { type: Boolean, default: !1 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    escClose: { type: Boolean, default: !0 }
  },
  emits: [
    "setHours",
    "setMinutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed"
  ],
  setup(e, { expose: a, emit: n }) {
    const t = e, d = Ut({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), f = N("AM"), p = N(null), v = me(Je), h = me(Ze), k = N([]), { transitionName: R, showTransition: V } = zt(), { setTimePickerElements: F, setTimePickerBackRef: I } = Qe();
    Ne(() => {
      n("mounted");
    });
    const U = _(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !t.enableSeconds && t.is24,
        dp__time_col_reg_with_button: !t.enableSeconds && !t.is24,
        dp__time_col_sec: t.enableSeconds && t.is24,
        dp__time_col_sec_with_button: t.enableSeconds && !t.is24
      })
    ), O = _(() => {
      const $ = [{ type: "hours" }, "separator", { type: "minutes" }];
      return t.enableSeconds ? $.concat(["separator", { type: "seconds" }]) : $;
    }), x = _(() => O.value.filter(($) => typeof $ != "string")), l = _(() => ($) => {
      if ($ === "hours") {
        const G = W(t.hours);
        return { text: G < 10 ? `0${G}` : `${G}`, value: G };
      }
      return { text: t[$] < 10 ? `0${t[$]}` : `${t[$]}`, value: t[$] };
    }), i = ($) => {
      const G = $ === "hours" ? t.is24 ? 24 : 12 : 60, r = +t[`${$}GridIncrement`], m = $ === "hours" && !t.is24 ? r : 0, C = [];
      for (let M = m; M < G; M += r)
        C.push({ value: M, text: M < 10 ? `0${M}` : `${M}` });
      return $ === "hours" && !t.is24 && C.push({ value: 0, text: "12" }), Xl(C);
    }, Y = ($) => t[`no${$[0].toUpperCase() + $.slice(1)}Overlay`], ee = ($) => {
      Y($) || (d[$] = !d[$], d[$] || n("overlay-closed"));
    }, T = ($, G = !0) => {
      const r = $ === "hours" ? Ve : $ === "minutes" ? Be : Xe, m = G ? Al : Pl;
      n(`update:${$}`, r(m({ [$]: +t[$] }, { [$]: +t[`${$}Increment`] })));
    }, W = ($) => t.is24 ? $ : ($ >= 12 ? f.value = "PM" : f.value = "AM", Ql($)), Z = () => {
      f.value === "PM" ? (f.value = "AM", n("update:hours", t.hours - 12)) : (f.value = "PM", n("update:hours", t.hours + 12));
    }, ae = ($) => {
      d[$] = !0;
    }, q = ($, G, r) => {
      if ($ && (h == null ? void 0 : h.value)) {
        Array.isArray(k.value[G]) ? k.value[G][r] = $ : k.value[G] = [$];
        const m = k.value.reduce(
          (C, M) => M.map((P, K) => [...C[K] || [], M[K]]),
          []
        );
        I(t.closeTimePickerBtn), p.value && (m[1] = m[1].concat(p.value)), F(m, t.order);
      }
    }, X = ($, G) => $ === "hours" && !t.is24 ? n(`update:${$}`, f.value === "PM" ? G + 12 : G) : n(`update:${$}`, G);
    return a({ openChildCmp: ae }), ($, G) => e.disabled ? b("", !0) : (y(), S("div", Fr, [
      (y(!0), S(ie, null, pe(o(O), (r, m) => (y(), S("div", {
        key: m,
        class: fe(o(U))
      }, [
        r === "separator" ? (y(), S(ie, { key: 0 }, [
          Fe(" : ")
        ], 64)) : (y(), S(ie, { key: 1 }, [
          j("div", {
            class: "dp__inc_dec_button",
            role: "button",
            "aria-label": o(v).incrementValue(r.type),
            tabindex: "0",
            onKeydown: [
              ne((C) => T(r.type), ["enter"]),
              ne((C) => T(r.type), ["space"])
            ],
            onClick: (C) => T(r.type),
            ref_for: !0,
            ref: (C) => q(C, m, 0)
          }, [
            $.$slots["arrow-up"] ? H($.$slots, "arrow-up", { key: 0 }) : b("", !0),
            $.$slots["arrow-up"] ? b("", !0) : (y(), oe(o(Xn), { key: 1 }))
          ], 40, Hr),
          j("div", {
            role: "button",
            "aria-label": o(v).openTpOverlay(r.type),
            class: fe(Y(r.type) ? "" : "dp__time_display"),
            tabindex: "0",
            onKeydown: [
              ne((C) => ee(r.type), ["enter"]),
              ne((C) => ee(r.type), ["space"])
            ],
            onClick: (C) => ee(r.type),
            ref_for: !0,
            ref: (C) => q(C, m, 1)
          }, [
            $.$slots[r.type] ? H($.$slots, r.type, {
              key: 0,
              text: o(l)(r.type).text,
              value: o(l)(r.type).value
            }) : b("", !0),
            $.$slots[r.type] ? b("", !0) : (y(), S(ie, { key: 1 }, [
              Fe(ge(o(l)(r.type).text), 1)
            ], 64))
          ], 42, Kr),
          j("div", {
            class: "dp__inc_dec_button",
            role: "button",
            "aria-label": o(v).decrementValue(r.type),
            tabindex: "0",
            onKeydown: [
              ne((C) => T(r.type, !1), ["enter"]),
              ne((C) => T(r.type, !1), ["space"])
            ],
            onClick: (C) => T(r.type, !1),
            ref_for: !0,
            ref: (C) => q(C, m, 2)
          }, [
            $.$slots["arrow-down"] ? H($.$slots, "arrow-down", { key: 0 }) : b("", !0),
            $.$slots["arrow-down"] ? b("", !0) : (y(), oe(o(qn), { key: 1 }))
          ], 40, Wr)
        ], 64))
      ], 2))), 128)),
      $.is24 ? b("", !0) : (y(), S("div", Lr, [
        $.$slots["am-pm-button"] ? H($.$slots, "am-pm-button", {
          key: 0,
          toggle: Z,
          value: f.value
        }) : b("", !0),
        $.$slots["am-pm-button"] ? b("", !0) : (y(), S("button", {
          key: 1,
          ref_key: "amPmButton",
          ref: p,
          type: "button",
          class: "dp__pm_am_button",
          role: "button",
          "aria-label": o(v).amPmButton,
          tabindex: "0",
          onClick: Z,
          onKeydown: [
            ne(Le(Z, ["prevent"]), ["enter"]),
            ne(Le(Z, ["prevent"]), ["space"])
          ]
        }, ge(f.value), 41, Ur))
      ])),
      (y(!0), S(ie, null, pe(o(x), (r, m) => (y(), oe(ht, {
        key: m,
        name: o(R)(d[r.type]),
        css: o(V)
      }, {
        default: se(() => [
          d[r.type] ? (y(), oe(At, {
            key: 0,
            items: i(r.type),
            "disabled-values": e.filters.times[r.type],
            "esc-close": e.escClose,
            "onUpdate:modelValue": (C) => X(r.type, C),
            onSelected: (C) => ee(r.type),
            onToggle: (C) => ee(r.type),
            onResetFlow: G[0] || (G[0] = (C) => $.$emit("reset-flow")),
            type: r.type
          }, Pe({
            "button-icon": se(() => [
              $.$slots["clock-icon"] ? H($.$slots, "clock-icon", { key: 0 }) : b("", !0),
              $.$slots["clock-icon"] ? b("", !0) : (y(), oe(o(zn), { key: 1 }))
            ]),
            _: 2
          }, [
            $.$slots[`${r.type}-overlay`] ? {
              name: "item",
              fn: se(({ item: C }) => [
                H($.$slots, `${r.type}-overlay`, {
                  text: C.text,
                  value: C.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["items", "disabled-values", "esc-close", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : b("", !0)
        ]),
        _: 2
      }, 1032, ["name", "css"]))), 128))
    ]));
  }
}), mt = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["calendar", "month-year"] },
  { name: "hours-overlay", use: ["calendar", "time"] },
  { name: "minutes-overlay", use: ["calendar", "time"] },
  { name: "seconds-overlay", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-select", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "now-button", use: [] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] }
], zr = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Xr = {
  all: () => mt,
  monthYear: () => mt.filter((e) => e.use.includes("month-year")),
  input: () => zr,
  timePicker: () => mt.filter((e) => e.use.includes("time")),
  action: () => mt.filter((e) => e.use.includes("action")),
  calendar: () => mt.filter((e) => e.use.includes("calendar")),
  menu: () => mt.filter((e) => e.use.includes("menu"))
}, rt = (e, a, n) => {
  const t = [];
  return Xr[a]().forEach((d) => {
    e[d.name] && t.push(d.name);
  }), n && n.length && n.forEach((d) => {
    d.slot && t.push(d.slot);
  }), t;
}, qr = ["aria-label"], Jr = { class: "dp__overlay_container dp__container_flex" }, Zr = {
  key: 1,
  class: "dp__overlay_row"
}, Qr = ["aria-label"], xr = {
  compatConfig: { MODE: 3 }
}, es = /* @__PURE__ */ Oe({
  ...xr,
  __name: "TimePicker",
  props: {
    ...aa,
    range: { type: Boolean, default: !1 },
    filters: { type: Object, default: () => ({}) },
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    customProps: { type: Object, default: null },
    modelAuto: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    escClose: { type: Boolean, default: !0 }
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-closed"
  ],
  setup(e, { expose: a, emit: n }) {
    const t = e, d = vn(), f = N(null), p = N(null), v = me(gn, !1), h = N([]), k = N(null), R = me(Je), V = me(Ze), F = me(kn), { transitionName: I, showTransition: U } = zt(), { buildMatrix: O, setTimePicker: x } = Qe();
    Ne(() => {
      n("mount"), !t.timePicker && (V == null ? void 0 : V.value) ? O([ke(f.value)], "time") : x(!0, t.timePicker);
    });
    const l = _(() => t.range && t.modelAuto ? ca(t.internalModelValue) : !0), i = N(!1), Y = (r) => ({
      hours: Array.isArray(t.hours) ? t.hours[r] : t.hours,
      minutes: Array.isArray(t.minutes) ? t.minutes[r] : t.minutes,
      seconds: Array.isArray(t.seconds) ? t.seconds[r] : t.seconds
    }), ee = _(() => {
      const r = [];
      if (t.range)
        for (let m = 0; m < 2; m++)
          r.push(Y(m));
      else
        r.push(Y(0));
      return r;
    }), T = (r, m = !1, C = "") => {
      m || n("reset-flow"), i.value = r, V != null && V.value && (x(r), r || n("overlay-closed")), Pt(() => {
        C !== "" && h.value[0] && h.value[0].openChildCmp(C);
      });
    }, W = _(() => ({
      dp__button: !0,
      dp__button_bottom: v
    })), Z = rt(d, "timePicker"), ae = (r, m, C) => t.range ? m === 0 ? [r, ee.value[1][C]] : [ee.value[0][C], r] : r, q = (r) => {
      n("update:hours", r);
    }, X = (r) => {
      n("update:minutes", r);
    }, $ = (r) => {
      n("update:seconds", r);
    }, G = () => {
      k.value && (V == null ? void 0 : V.value) && k.value.focus({ preventScroll: !0 });
    };
    return a({ toggleTimePicker: T }), (r, m) => (y(), S("div", null, [
      r.timePicker ? b("", !0) : Nt((y(), S("div", {
        key: 0,
        class: fe(o(W)),
        role: "button",
        "aria-label": o(R).openTimePicker,
        tabindex: "0",
        ref_key: "openTimePickerBtn",
        ref: f,
        onKeydown: [
          m[0] || (m[0] = ne((C) => T(!0), ["enter"])),
          m[1] || (m[1] = ne((C) => T(!0), ["space"]))
        ],
        onClick: m[2] || (m[2] = (C) => T(!0))
      }, [
        r.$slots["clock-icon"] ? H(r.$slots, "clock-icon", { key: 0 }) : b("", !0),
        r.$slots["clock-icon"] ? b("", !0) : (y(), oe(o(zn), { key: 1 }))
      ], 42, qr)), [
        [It, !o(F)("time")]
      ]),
      qe(ht, {
        name: o(I)(i.value),
        css: o(U)
      }, {
        default: se(() => [
          i.value || r.timePicker ? (y(), S("div", {
            key: 0,
            class: "dp__overlay",
            ref_key: "overlayRef",
            ref: k,
            tabindex: "0"
          }, [
            j("div", Jr, [
              r.$slots["time-picker-overlay"] ? H(r.$slots, "time-picker-overlay", {
                key: 0,
                range: e.range,
                hours: e.hours,
                minutes: e.minutes,
                seconds: e.seconds,
                setHours: q,
                setMinutes: X,
                setSeconds: $
              }) : b("", !0),
              r.$slots["time-picker-overlay"] ? b("", !0) : (y(), S("div", Zr, [
                (y(!0), S(ie, null, pe(o(ee), (C, M) => Nt((y(), oe(jr, Ae({
                  key: M,
                  disabled: M === 0 ? r.fixedStart : r.fixedEnd,
                  hours: C.hours,
                  minutes: C.minutes,
                  seconds: C.seconds,
                  filters: e.filters,
                  ref_for: !0,
                  ref_key: "timeInputRefs",
                  ref: h
                }, {
                  is24: r.is24,
                  hoursGridIncrement: r.hoursGridIncrement,
                  minutesGridIncrement: r.minutesGridIncrement,
                  secondsGridIncrement: r.secondsGridIncrement,
                  hoursIncrement: r.hoursIncrement,
                  minutesIncrement: r.minutesIncrement,
                  secondsIncrement: r.secondsIncrement,
                  filters: e.filters,
                  noHoursOverlay: r.noHoursOverlay,
                  noMinutesOverlay: r.noMinutesOverlay,
                  noSecondsOverlay: r.noSecondsOverlay,
                  enableSeconds: r.enableSeconds,
                  closeTimePickerBtn: p.value,
                  escClose: e.escClose,
                  order: M
                }, {
                  "onUpdate:hours": (P) => q(ae(P, M, "hours")),
                  "onUpdate:minutes": (P) => X(ae(P, M, "minutes")),
                  "onUpdate:seconds": (P) => $(ae(P, M, "seconds")),
                  onMounted: G,
                  onOverlayClosed: G
                }), Pe({ _: 2 }, [
                  pe(o(Z), (P, K) => ({
                    name: P,
                    fn: se((re) => [
                      H(r.$slots, P, ze(lt(re)))
                    ])
                  }))
                ]), 1040, ["disabled", "hours", "minutes", "seconds", "filters", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                  [It, M === 0 ? !0 : o(l)]
                ])), 128))
              ])),
              r.timePicker ? b("", !0) : Nt((y(), S("div", {
                key: 2,
                ref_key: "closeTimePickerBtn",
                ref: p,
                class: fe(o(W)),
                role: "button",
                "aria-label": o(R).closeTimePicker,
                tabindex: "0",
                onKeydown: [
                  m[3] || (m[3] = ne((C) => T(!1), ["enter"])),
                  m[4] || (m[4] = ne((C) => T(!1), ["space"]))
                ],
                onClick: m[5] || (m[5] = (C) => T(!1))
              }, [
                r.$slots["calendar-icon"] ? H(r.$slots, "calendar-icon", { key: 0 }) : b("", !0),
                r.$slots["calendar-icon"] ? b("", !0) : (y(), oe(o(Gt), { key: 1 }))
              ], 42, Qr)), [
                [It, !o(F)("time")]
              ])
            ])
          ], 512)) : b("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ]));
  }
}), ts = (e, a, n, t) => {
  const d = N(new Date()), f = N(), p = N([{ month: ye(new Date()), year: ue(new Date()) }]), v = N(
    e.range ? [Ve(new Date()), Ve(new Date())] : Ve(new Date())
  ), h = N(
    e.range ? [Be(new Date()), Be(new Date())] : Be(new Date())
  ), k = N(e.range ? [0, 0] : 0);
  pt(
    p,
    () => {
      setTimeout(() => {
        e.openOnTop && a("dpOpen");
      }, 0);
    },
    { deep: !0 }
  ), Ne(() => {
    q(!0), l.value || (e.startDate && (p.value[0].month = ye(new Date(e.startDate)), p.value[0].year = ue(new Date(e.startDate)), e.multiCalendars && D(0)), e.startTime && x());
  });
  const R = _(
    () => (s) => p.value[s] ? p.value[s].month : 0
  ), V = _(
    () => (s) => p.value[s] ? p.value[s].year : 0
  ), F = (s, w, A) => {
    p.value[s].month = w, p.value[s].year = A;
  }, I = (s, w) => p.value[s].month = w, U = (s, w) => p.value[s].year = w, O = (s = !0) => e.enableSeconds ? Array.isArray(k.value) ? s ? k.value[0] : k.value[1] : k.value : 0, x = () => {
    e.startTime && (Ul(e.startTime) ? (v.value = [+e.startTime[0].hours, +e.startTime[1].hours], h.value = [+e.startTime[0].minutes, +e.startTime[1].minutes], e.enableSeconds && (k.value = [+e.startTime[0].seconds, +e.startTime[1].seconds])) : (v.value = +e.startTime.hours, h.value = +e.startTime.minutes, e.enableSeconds && (k.value = +e.startTime.seconds)));
  }, l = _({
    get: () => e.internalModelValue,
    set: (s) => {
      !e.readonly && !e.disabled && a("update:internalModelValue", s);
    }
  });
  pt(l, () => q());
  const i = (s) => {
    const { validate: w } = xn(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      e.filters,
      e.disabledWeekDays,
      e.yearRange
    );
    return !w(s);
  }, Y = (s) => !l.value || e.hideOffsetDates && !s.current ? !1 : e.range ? e.modelAuto && Array.isArray(l.value) ? ce(s.value, l.value[0] ? l.value[0] : d.value) : !1 : e.multiDates && Array.isArray(l.value) ? l.value.some((w) => ce(w, s.value)) : ce(s.value, l.value ? l.value : d.value), ee = (s) => Zn(l.value, f.value, s.value), T = (s, w = !1) => {
    if ((!e.multiCalendars || !e.multiStatic || w) && (I(0, ye(s)), U(0, ue(s))), e.multiCalendars)
      for (let A = 1; A <= e.multiCalendars; A++) {
        const J = De(new Date(), { month: R.value(A - 1), year: V.value(A - 1) }), Se = Gn(J, { months: 1 });
        p.value[A] = { month: ye(Se), year: ue(Se) };
      }
  }, W = () => {
    if (Array.isArray(l.value) && l.value.length === 2) {
      const s = new Date(l.value[1] ? l.value[1] : ot(l.value[0], 1)), [w, A] = [ye(l.value[0]), ue(l.value[0])], [J, Se] = [ye(l.value[1]), ue(l.value[1])];
      (w !== J || w === J && A !== Se) && e.multiCalendarsSolo && (I(1, ye(s)), U(1, ue(s)));
    }
  }, Z = (s) => {
    T(s), v.value = Ve(s), h.value = Be(s), k.value = Xe(s);
  }, ae = () => Array.isArray(l.value) && l.value.length ? l.value[l.value.length - 1] : null, q = (s = !1) => {
    if (l.value)
      if (Mt(l.value)) {
        if (l.value.length === 2 && !e.multiDates)
          T(l.value[0], s), v.value = [
            Ve(l.value[0]),
            l.value[1] ? Ve(l.value[1]) : Ve(new Date())
          ], h.value = [
            Be(l.value[0]),
            l.value[1] ? Be(l.value[1]) : Be(new Date())
          ], k.value = [
            Xe(l.value[0]),
            l.value[1] ? Xe(l.value[1]) : Xe(new Date())
          ];
        else if (Mt(l.value) && e.multiDates) {
          const w = l.value[l.value.length - 1];
          w && Z(w);
        }
        e.multiCalendars && e.multiCalendarsSolo && W();
      } else
        Z(l.value);
    else
      e.timePicker ? (x(), e.range ? Re(v.value) && Re(h.value) && (l.value = [
        Ce(new Date(), v.value[0], h.value[0], O()),
        Ce(new Date(), v.value[1], h.value[1], O(!1))
      ]) : l.value = Ce(
        new Date(),
        v.value,
        h.value,
        O()
      )) : e.monthPicker && !e.range ? l.value = it(new Date(), R.value(0), V.value(0)) : e.multiCalendars ? T(new Date()) : e.yearPicker && !e.range && (l.value = new Date());
  }, X = (s) => {
    const w = ye(new Date(s)), A = ue(new Date(s));
    if (I(0, w), U(0, A), e.multiCalendars > 0)
      for (let J = 1; J < e.multiCalendars; J++) {
        const Se = Cl(
          De(new Date(s), { year: R.value(J - 1), month: V.value(J - 1) })
        );
        I(J, Se.month), U(J, Se.year);
      }
  }, $ = (s) => {
    if (l.value && Array.isArray(l.value))
      if (l.value.some((w) => ce(s, w))) {
        const w = l.value.filter((A) => !ce(A, s));
        l.value = w.length ? w : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > l.value.length || !e.multiDatesLimit) && l.value.push(s);
    else
      l.value = [s];
  }, G = (s) => {
    if (Array.isArray(l.value) && l.value[0]) {
      const w = Ea(s, l.value[0]), A = $e(l.value[0], s) ? s : l.value[0], J = $e(s, l.value[0]) ? s : l.value[0], et = _n({ start: A, end: J }).filter((ct) => i(ct)).length, _e = Math.abs(w < 0 ? w + 1 : w - 1) - et;
      if (e.minRange && e.maxRange)
        return _e >= +e.minRange && _e <= +e.maxRange;
      if (e.minRange)
        return _e >= +e.minRange;
      if (e.maxRange)
        return _e <= +e.maxRange;
    }
    return !0;
  }, r = (s) => Array.isArray(l.value) && l.value.length === 2 ? e.fixedStart && ($e(s, l.value[0]) || ce(s, l.value[0])) ? [l.value[0], s] : e.fixedEnd && (we(s, l.value[1]) || ce(s, l.value[1])) ? [s, l.value[1]] : l.value : [], m = () => {
    e.autoApply && a("autoApply");
  }, C = (s) => !_n({ start: s[0], end: s[1] }).some((A) => i(A)), M = (s, w = !1) => {
    if (!i(s.value) && !(!s.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return l.value = Vt(new Date(s.value), +e.weekStart), m();
      if (!e.range && !Re(v.value) && !Re(h.value)) {
        const A = Ce(new Date(s.value), v.value, h.value, O());
        e.multiDates ? $(A) : l.value = A, n(), m();
      } else if (Re(v.value) && Re(h.value) && !e.multiDates) {
        let A = l.value ? l.value.slice() : [];
        if (A.length === 2 && !(e.fixedStart || e.fixedEnd) && (A = []), e.autoRange) {
          const J = [new Date(s.value), St(new Date(s.value), +e.autoRange)];
          C(J) && (w && X(s.value), A = J);
        } else
          e.fixedStart || e.fixedEnd ? A = r(new Date(s.value)) : A[0] ? G(new Date(s.value)) && (we(new Date(s.value), new Date(A[0])) ? A.unshift(new Date(s.value)) : A[1] = new Date(s.value)) : A[0] = new Date(s.value);
        A.length && (A[0] && !A[1] ? A[0] = Ce(A[0], v.value[0], h.value[0], O()) : (A[0] = Ce(A[0], v.value[0], h.value[0], O()), A[1] = Ce(A[1], v.value[1], h.value[1], O(!1)), n()), l.value = A, A[0] && A[1] && e.autoApply && a("autoApply"));
      }
    }
  }, P = (s) => {
    const w = s.find((A) => A.current);
    return w ? Ya(w.value) : "";
  }, K = (s) => {
    !s.current && e.hideOffsetDates || (f.value = s.value);
  }, re = (s) => {
    if (e.autoRange || e.weekPicker) {
      if (f.value) {
        if (e.hideOffsetDates && !s.current)
          return !1;
        const w = St(f.value, +e.autoRange), A = Vt(new Date(f.value), +e.weekStart);
        return e.weekPicker ? ce(A[1], new Date(s.value)) : ce(w, new Date(s.value));
      }
      return !1;
    }
    return !1;
  }, le = (s) => {
    if (e.autoRange || e.weekPicker) {
      if (f.value) {
        const w = St(f.value, +e.autoRange);
        if (e.hideOffsetDates && !s.current)
          return !1;
        const A = Vt(new Date(f.value), +e.weekStart);
        return e.weekPicker ? $e(s.value, A[0]) && we(s.value, A[1]) : $e(s.value, f.value) && we(s.value, w);
      }
      return !1;
    }
    return !1;
  }, g = (s) => {
    if (e.autoRange || e.weekPicker) {
      if (f.value) {
        if (e.hideOffsetDates && !s.current)
          return !1;
        const w = Vt(new Date(f.value), +e.weekStart);
        return e.weekPicker ? ce(w[0], s.value) : ce(f.value, s.value);
      }
      return !1;
    }
    return !1;
  }, D = (s) => {
    for (let w = s - 1; w >= 0; w--) {
      const A = Ct(De(new Date(), { month: R.value(w + 1), year: V.value(w + 1) }), 1);
      F(w, ye(A), ue(A));
    }
    for (let w = s + 1; w <= e.multiCalendars - 1; w++) {
      const A = ot(De(new Date(), { month: R.value(w - 1), year: V.value(w - 1) }), 1);
      F(w, ye(A), ue(A));
    }
  }, B = (s) => it(new Date(), R.value(s), V.value(s)), Te = (s, w) => {
    const A = e.monthPicker ? R.value(s) !== w.month || !w.fromNav : V.value(s) !== w.year;
    if (I(s, w.month), U(s, w.year), e.multiCalendars && !e.multiCalendarsSolo && D(s), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (A) {
          let J = l.value ? l.value.slice() : [];
          J.length === 2 && J[1] !== null && (J = []), J.length ? we(B(s), J[0]) ? J.unshift(B(s)) : J[1] = B(s) : J = [B(s)], l.value = J;
        }
      } else
        l.value = B(s);
    a("updateMonthYear", { instance: s, month: w.month, year: w.year }), Tt(e.multiCalendarsSolo ? s : void 0);
  }, Ie = (s) => Ce(s, v.value, h.value, O()), Ue = (s) => {
    Mt(s) && Mt(l.value) && Re(v.value) && Re(h.value) ? (s[0] && l.value[0] && (l.value[0] = Ce(s[0], v.value[0], h.value[0], O())), s[1] && l.value[1] && (l.value[1] = Ce(
      s[1],
      v.value[1],
      h.value[1],
      O(!1)
    ))) : e.multiDates && Array.isArray(l.value) ? l.value[l.value.length - 1] = Ie(s) : !e.range && !Kt(s) && (l.value = Ie(s)), a("timeUpdate");
  }, Ke = (s, w = !0, A = !1) => {
    const J = w ? s : v.value, Se = !w && !A ? s : h.value, et = A ? s : k.value;
    if (e.range && Kt(l.value) && Re(J) && Re(Se) && Re(et) && !e.disableTimeRangeValidation) {
      const _e = (je) => Ce(l.value[je], J[je], Se[je], et[je]), ct = (je) => yn(l.value[je], 0);
      if (ce(l.value[0], l.value[1]) && (pn(_e(0), ct(1)) || hn(_e(1), ct(0))))
        return;
    }
    if (v.value = J, h.value = Se, k.value = et, l.value)
      if (e.multiDates) {
        const _e = ae();
        _e && Ue(_e);
      } else
        Ue(l.value);
    else
      e.timePicker && Ue(e.range ? [new Date(), new Date()] : new Date());
    n();
  }, Ye = () => {
    f.value = null;
  }, gt = (s) => Yn(l.value, e.range) && l.value[0] && f.value ? s ? $e(f.value, l.value[0]) : we(f.value, l.value[0]) : !0, We = (s, w = !0) => (e.range || e.weekPicker) && Kt(l.value) ? e.hideOffsetDates && !s.current ? !1 : ce(new Date(s.value), l.value[w ? 0 : 1]) : e.range ? ce(
    new Date(s.value),
    l.value && Array.isArray(l.value) ? w ? l.value[0] || null : l.value[1] : null
  ) && (w ? !we(
    f.value || null,
    Array.isArray(l.value) ? l.value[0] : null
  ) : !0) || ce(s.value, Array.isArray(l.value) ? l.value[0] : null) && gt(w) : !1, Me = (s, w) => Array.isArray(e.internalModelValue) && e.internalModelValue.length || e.weekPicker ? !1 : !s && !Y(w) && !(!w.current && e.hideOffsetDates) && (e.range ? !We(w) && !We(w, !1) : !0), kt = (s, w, A) => Array.isArray(e.internalModelValue) && e.internalModelValue[0] && e.internalModelValue.length === 1 ? s ? !1 : A ? $e(e.internalModelValue[0], w.value) : we(e.internalModelValue[0], w.value) : !1, wt = async (s = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await Pt();
      const w = e.monthPicker ? s : !1;
      e.range ? a("autoApply", w || !l.value || l.value.length === 1) : a("autoApply", w);
    }
    n();
  }, Ge = (s, w) => {
    const A = De(new Date(), { month: R.value(w), year: V.value(w) }), J = s < 0 ? ot(A, 1) : Ct(A, 1);
    fa(
      e.minDate,
      e.maxDate,
      ye(J),
      ue(J),
      s < 0,
      e.preventMinMaxNavigation
    ) && (F(w, ye(J), ue(J)), e.multiCalendars && !e.multiCalendarsSolo && D(w), Tt());
  }, dt = (s, w) => {
    e.monthChangeOnScroll && Ge(e.monthChangeOnScroll !== "inverse" ? -s.deltaY : s.deltaY, w);
  }, c = (s, w, A = !1) => {
    e.monthChangeOnArrows && e.vertical === A && te(s, w);
  }, te = (s, w) => {
    Ge(s === "right" ? -1 : 1, w);
  }, ve = (s) => e.markers.find((w) => ce(Ee(s.value), Ee(w.date))), bt = () => {
    e.range ? Yn(l.value, e.range) && (l.value && l.value[0] ? l.value = we(new Date(), l.value[0]) ? [new Date(), l.value[0]] : [l.value[0], new Date()] : l.value = [new Date()]) : a("update:internalModelValue", new Date()), e.autoApply && a("selectDate");
  }, xe = (s, w) => {
    w || s.length && s.length <= 2 && e.range && (l.value = s.map((A) => new Date(A)), e.autoApply && a("selectDate"));
  }, Tt = (s) => {
    s || s === 0 ? t.value[s].triggerTransition(R.value(s), V.value(s)) : t.value.forEach((w, A) => w.triggerTransition(R.value(A), V.value(A)));
  };
  return {
    today: d,
    hours: v,
    minutes: h,
    seconds: k,
    month: R,
    year: V,
    monthYearSelect: wt,
    isDisabled: i,
    updateTime: Ke,
    setHoverDate: K,
    getWeekNum: P,
    selectDate: M,
    rangeActive: ee,
    isActiveDate: Y,
    updateMonthYear: Te,
    isHoverRangeEnd: re,
    isAutoRangeInBetween: le,
    isAutoRangeStart: g,
    clearHoverDate: Ye,
    rangeActiveStartEnd: We,
    handleScroll: dt,
    getMarker: ve,
    handleArrow: c,
    handleSwipe: te,
    selectCurrentDate: bt,
    isHoverDate: Me,
    isHoverDateStartEnd: kt,
    presetDateRange: xe
  };
}, Ot = Ut({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), ma = () => ({
  setMenuFocused: (t) => {
    Ot.menuFocused = t;
  },
  getStore: () => Ot,
  setShiftKey: (t) => {
    Ot.shiftKeyInMenu !== t && (Ot.shiftKeyInMenu = t);
  }
}), ns = ["id", "aria-label", "onKeydown"], as = {
  key: 0,
  class: "dp__sidebar_left"
}, ls = {
  key: 1,
  class: "dp__preset_ranges"
}, rs = ["onClick"], ss = {
  key: 2,
  class: "dp__sidebar_right"
}, os = {
  key: 3,
  class: "dp__now_wrap"
}, is = {
  compatConfig: { MODE: 3 }
}, us = /* @__PURE__ */ Oe({
  ...is,
  __name: "DatepickerMenu",
  props: {
    ...ia,
    ...bn,
    ...wn,
    internalModelValue: { type: [Date, Array], default: null },
    multiCalendars: { type: Number, default: 0 },
    openOnTop: { type: Boolean, default: !1 }
  },
  emits: [
    "update:internalModelValue",
    "closePicker",
    "selectDate",
    "dpOpen",
    "autoApply",
    "timeUpdate",
    "flow-step",
    "updateMonthYear",
    "invalid-select"
  ],
  setup(e, { emit: a }) {
    const n = e, t = vn(), d = N(null), f = Ut({
      timePicker: !!(!n.enableTimePicker || n.timePicker || n.monthPicker),
      monthYearInput: !!n.timePicker,
      calendar: !1
    }), p = N([]), v = N([]), h = N(null), k = N(null), R = N(0), V = N(!1), F = N(0), I = me(jt), U = me(Je), O = me(Ze), { setMenuFocused: x, setShiftKey: l, getStore: i } = ma();
    Ne(() => {
      var L;
      V.value = !0, !((L = n.presetRanges) != null && L.length) && !t["left-sidebar"] && !t["right-sidebar"] && J();
      const u = ke(k);
      if (u && !n.textInput && !n.inline && (x(!0), Z()), u) {
        const E = (z) => {
          !n.monthYearComponent && !n.timePickerComponent && z.preventDefault(), z.stopImmediatePropagation(), z.stopPropagation();
        };
        u.addEventListener("pointerdown", E), u.addEventListener("mousedown", E);
      }
      document.addEventListener("resize", J);
    }), mn(() => {
      document.removeEventListener("resize", J);
    });
    const { arrowRight: Y, arrowLeft: ee, arrowDown: T, arrowUp: W } = Qe(), Z = () => {
      const u = ke(k);
      u && u.focus({ preventScroll: !0 });
    }, ae = () => {
      var u;
      ((u = n.flow) == null ? void 0 : u.length) && F.value !== -1 && (F.value += 1, a("flow-step", F.value), Mn());
    }, q = () => {
      F.value = -1;
    }, {
      updateTime: X,
      updateMonthYear: $,
      today: G,
      month: r,
      year: m,
      hours: C,
      minutes: M,
      seconds: P,
      isDisabled: K,
      isActiveDate: re,
      selectDate: le,
      getWeekNum: g,
      setHoverDate: D,
      isHoverRangeEnd: B,
      isAutoRangeInBetween: Te,
      isAutoRangeStart: Ie,
      rangeActive: Ue,
      clearHoverDate: Ke,
      rangeActiveStartEnd: Ye,
      monthYearSelect: gt,
      handleScroll: We,
      handleArrow: Me,
      handleSwipe: kt,
      getMarker: wt,
      selectCurrentDate: Ge,
      isHoverDateStartEnd: dt,
      isHoverDate: c,
      presetDateRange: te
    } = ts(n, a, ae, v), ve = rt(t, "calendar"), bt = rt(t, "action"), xe = rt(t, "timePicker"), Tt = rt(t, "monthYear"), s = _(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), w = _(() => Jl(n.yearRange)), A = _(() => Zl(n.locale, n.monthNameFormat)), J = () => {
      const u = ke(d);
      u && (R.value = u.getBoundingClientRect().width);
    }, Se = _(
      () => (u) => zl(
        r.value(u),
        m.value(u),
        +n.weekStart,
        n.hideOffsetDates
      )
    ), et = _(
      () => n.multiCalendars > 0 && n.range ? [...Array(n.multiCalendars).keys()] : [0]
    ), _e = _(
      () => (u) => u === 1
    ), ct = _(() => n.monthPicker || n.timePicker || n.yearPicker), je = _(
      () => ({
        dp__flex_display: n.multiCalendars > 0
      })
    ), ya = _(() => ({
      dp__instance_calendar: n.multiCalendars > 0
    })), pa = _(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly
    })), ha = _(
      () => (u) => ba(Se, u)
    ), ga = _(() => ({
      locale: n.locale,
      weekNumName: n.weekNumName,
      weekStart: n.weekStart,
      weekNumbers: n.weekNumbers,
      customProps: n.customProps,
      calendarClassName: n.calendarClassName,
      specificMode: ct.value,
      getWeekNum: g,
      multiCalendars: n.multiCalendars,
      modeHeight: n.modeHeight,
      internalModelValue: n.internalModelValue,
      noSwipe: n.noSwipe,
      vertical: n.vertical,
      dayNames: n.dayNames,
      monthChangeOnScroll: n.monthChangeOnScroll
    })), ka = _(
      () => ({
        dp__menu: !0,
        dp__menu_index: !n.inline,
        dp__relative: n.inline,
        [n.menuClassName]: !!n.menuClassName
      })
    ), wa = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, $t = () => n.modelAuto ? ca(n.internalModelValue) : !0, ba = (u, L) => u.value(L).map((E) => ({
      ...E,
      days: E.days.map((z) => {
        const Q = K(z.value), Dt = c(Q, z), tt = n.range ? n.modelAuto ? wa() && re(z) : !1 : re(z), Sn = n.highlight ? Qn(z.value, n.highlight) : !1, Cn = Q && n.highlightDisabledDays == !1, An = n.highlightWeekDays && n.highlightWeekDays.includes(z.value.getDay()), Pn = (n.range || n.weekPicker) && (n.multiCalendars > 0 ? z.current : !0) && !Q && $t() && !(!z.current && n.hideOffsetDates) && !re(z) ? Ue(z) : !1;
        return z.marker = wt(z), z.classData = {
          dp__cell_offset: !z.current,
          dp__pointer: !Q && !(!z.current && n.hideOffsetDates),
          dp__active_date: tt,
          dp__date_hover: Dt,
          dp__date_hover_start: dt(Dt, z, !0),
          dp__date_hover_end: dt(Dt, z, !1),
          dp__range_between: Pn && !n.weekPicker,
          dp__range_between_week: Pn && n.weekPicker,
          dp__today: !n.noToday && ce(z.value, G.value) && z.current,
          dp__cell_disabled: Q,
          dp__cell_auto_range: Te(z),
          dp__cell_auto_range_start: Ie(z),
          dp__cell_auto_range_end: B(z),
          dp__range_start: n.multiCalendars > 0 ? z.current && Ye(z) && $t() : Ye(z) && $t(),
          dp__range_end: n.multiCalendars > 0 ? z.current && Ye(z, !1) && $t() : Ye(z, !1) && $t(),
          [n.calendarCellClassName]: !!n.calendarCellClassName,
          dp__cell_highlight: !Cn && (Sn || An) && !tt,
          dp__cell_highlight_active: !Cn && (Sn || An) && tt,
          [n.dayClass ? n.dayClass(z.value) : ""]: !0
        }, z;
      })
    })), $a = (u) => {
      u.stopPropagation(), u.preventDefault(), u.stopImmediatePropagation();
    }, Da = () => {
      n.escClose && a("closePicker");
    }, Ma = (u, L = !1) => {
      le(u, L), n.spaceConfirm && a("selectDate");
    }, Xt = (u) => {
      var L;
      (L = n.flow) != null && L.length && (f[u] = !0, Object.keys(f).filter((E) => !f[E]).length || Mn());
    }, Mn = () => {
      n.flow[F.value] === "month" && p.value[0] && p.value[0].toggleMonthPicker(!0), n.flow[F.value] === "year" && p.value && p.value[0].toggleYearPicker(!0), n.flow[F.value] === "calendar" && h.value && h.value.toggleTimePicker(!1, !0), n.flow[F.value] === "time" && h.value && h.value.toggleTimePicker(!0, !0);
      const u = n.flow[F.value];
      (u === "hours" || u === "minutes" || u === "seconds") && h.value && h.value.toggleTimePicker(!0, !0, u);
    }, _t = (u) => {
      if (O != null && O.value) {
        if (u === "up")
          return W();
        if (u === "down")
          return T();
        if (u === "left")
          return ee();
        if (u === "right")
          return Y();
      } else
        u === "left" || u === "up" ? Me("left", 0, u === "up") : Me("right", 0, u === "down");
    }, Sa = (u) => {
      l(u.shiftKey), !n.disableMonthYearSelect && u.code === "Tab" && u.target.classList.contains("dp__menu") && i().shiftKeyInMenu && (u.preventDefault(), u.stopImmediatePropagation(), a("closePicker"));
    };
    return (u, L) => (y(), oe(ht, {
      appear: "",
      name: o(I).menuAppear,
      mode: "out-in",
      css: !!o(I)
    }, {
      default: se(() => [
        j("div", {
          id: u.uid ? `dp-menu-${u.uid}` : void 0,
          tabindex: "0",
          ref_key: "dpMenuRef",
          ref: k,
          role: "dialog",
          "aria-label": o(U).menu,
          class: fe(o(ka)),
          onMouseleave: L[12] || (L[12] = (...E) => o(Ke) && o(Ke)(...E)),
          onClick: $a,
          onKeydown: [
            ne(Da, ["esc"]),
            L[13] || (L[13] = ne(Le((E) => _t("left"), ["prevent"]), ["left"])),
            L[14] || (L[14] = ne(Le((E) => _t("up"), ["prevent"]), ["up"])),
            L[15] || (L[15] = ne(Le((E) => _t("down"), ["prevent"]), ["down"])),
            L[16] || (L[16] = ne(Le((E) => _t("right"), ["prevent"]), ["right"])),
            Sa
          ]
        }, [
          (u.disabled || u.readonly) && u.inline ? (y(), S("div", {
            key: 0,
            class: fe(o(pa))
          }, null, 2)) : b("", !0),
          !u.inline && !u.teleportCenter ? (y(), S("div", {
            key: 1,
            class: fe(o(s))
          }, null, 2)) : b("", !0),
          j("div", {
            class: fe({
              dp__menu_content_wrapper: u.presetRanges.length || !!u.$slots["left-sidebar"] || !!u.$slots["right-sidebar"]
            })
          }, [
            u.$slots["left-sidebar"] ? (y(), S("div", as, [
              H(u.$slots, "left-sidebar")
            ])) : b("", !0),
            u.presetRanges.length ? (y(), S("div", ls, [
              (y(!0), S(ie, null, pe(u.presetRanges, (E, z) => (y(), S("div", {
                key: z,
                style: vt(E.style || {}),
                class: "dp__preset_range",
                onClick: (Q) => o(te)(E.range, !!E.slot)
              }, [
                E.slot ? H(u.$slots, E.slot, {
                  key: 0,
                  presetDateRange: o(te),
                  label: E.label,
                  range: E.range
                }) : (y(), S(ie, { key: 1 }, [
                  Fe(ge(E.label), 1)
                ], 64))
              ], 12, rs))), 128))
            ])) : b("", !0),
            j("div", {
              class: "dp__instance_calendar",
              ref_key: "calendarWrapperRef",
              ref: d,
              role: "document"
            }, [
              j("div", {
                class: fe(o(je))
              }, [
                (y(!0), S(ie, null, pe(o(et), (E, z) => (y(), S("div", {
                  key: E,
                  class: fe(o(ya))
                }, [
                  !u.disableMonthYearSelect && !u.timePicker ? (y(), oe(Yt(u.monthYearComponent ? u.monthYearComponent : Er), Ae({
                    key: 0,
                    ref_for: !0,
                    ref: (Q) => {
                      Q && (p.value[z] = Q);
                    }
                  }, {
                    months: o(A),
                    years: o(w),
                    filters: u.filters,
                    monthPicker: u.monthPicker,
                    month: o(r)(E),
                    year: o(m)(E),
                    customProps: u.customProps,
                    multiCalendars: e.multiCalendars,
                    multiCalendarsSolo: u.multiCalendarsSolo,
                    instance: E,
                    minDate: u.minDate,
                    maxDate: u.maxDate,
                    preventMinMaxNavigation: u.preventMinMaxNavigation,
                    internalModelValue: e.internalModelValue,
                    range: u.range,
                    reverseYears: u.reverseYears,
                    vertical: u.vertical,
                    yearPicker: u.yearPicker,
                    escClose: u.escClose
                  }, {
                    onMount: L[0] || (L[0] = (Q) => Xt("monthYearInput")),
                    onResetFlow: q,
                    onUpdateMonthYear: (Q) => o($)(E, Q),
                    onMonthYearSelect: o(gt),
                    onOverlayClosed: Z
                  }), Pe({ _: 2 }, [
                    pe(o(Tt), (Q, Dt) => ({
                      name: Q,
                      fn: se((tt) => [
                        H(u.$slots, Q, ze(lt(tt)))
                      ])
                    }))
                  ]), 1040, ["onUpdateMonthYear", "onMonthYearSelect"])) : b("", !0),
                  qe(br, Ae({
                    ref_for: !0,
                    ref: (Q) => {
                      Q && (v.value[z] = Q);
                    }
                  }, o(ga), {
                    "flow-step": F.value,
                    "onUpdate:flow-step": L[1] || (L[1] = (Q) => F.value = Q),
                    instance: E,
                    "mapped-dates": o(ha)(E),
                    month: o(r)(E),
                    year: o(m)(E),
                    onSelectDate: (Q) => o(le)(Q, !o(_e)(E)),
                    onHandleSpace: (Q) => Ma(Q, !o(_e)(E)),
                    onSetHoverDate: L[2] || (L[2] = (Q) => o(D)(Q)),
                    onHandleScroll: (Q) => o(We)(Q, E),
                    onHandleSwipe: (Q) => o(kt)(Q, E),
                    onMount: L[3] || (L[3] = (Q) => Xt("calendar")),
                    onResetFlow: q
                  }), Pe({ _: 2 }, [
                    pe(o(ve), (Q, Dt) => ({
                      name: Q,
                      fn: se((tt) => [
                        H(u.$slots, Q, ze(lt({ ...tt })))
                      ])
                    }))
                  ]), 1040, ["flow-step", "instance", "mapped-dates", "month", "year", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                ], 2))), 128))
              ], 2),
              j("div", null, [
                u.enableTimePicker && !u.monthPicker && !u.weekPicker ? (y(), oe(Yt(u.timePickerComponent ? u.timePickerComponent : es), Ae({
                  key: 0,
                  ref_key: "timePickerRef",
                  ref: h
                }, {
                  is24: u.is24,
                  hoursIncrement: u.hoursIncrement,
                  minutesIncrement: u.minutesIncrement,
                  hoursGridIncrement: u.hoursGridIncrement,
                  secondsIncrement: u.secondsIncrement,
                  minutesGridIncrement: u.minutesGridIncrement,
                  secondsGridIncrement: u.secondsGridIncrement,
                  noHoursOverlay: u.noHoursOverlay,
                  noMinutesOverlay: u.noMinutesOverlay,
                  noSecondsOverlay: u.noSecondsOverlay,
                  range: u.range,
                  filters: u.filters,
                  timePicker: u.timePicker,
                  hours: o(C),
                  minutes: o(M),
                  seconds: o(P),
                  customProps: u.customProps,
                  enableSeconds: u.enableSeconds,
                  fixedStart: u.fixedStart,
                  fixedEnd: u.fixedEnd,
                  modelAuto: u.modelAuto,
                  internalModelValue: e.internalModelValue,
                  escClose: u.escClose
                }, {
                  onMount: L[4] || (L[4] = (E) => Xt("timePicker")),
                  "onUpdate:hours": L[5] || (L[5] = (E) => o(X)(E)),
                  "onUpdate:minutes": L[6] || (L[6] = (E) => o(X)(E, !1)),
                  "onUpdate:seconds": L[7] || (L[7] = (E) => o(X)(E, !1, !0)),
                  onResetFlow: q,
                  onOverlayClosed: Z
                }), Pe({ _: 2 }, [
                  pe(o(xe), (E, z) => ({
                    name: E,
                    fn: se((Q) => [
                      H(u.$slots, E, ze(lt(Q)))
                    ])
                  }))
                ]), 1040)) : b("", !0)
              ])
            ], 512),
            u.$slots["right-sidebar"] ? (y(), S("div", ss, [
              H(u.$slots, "right-sidebar")
            ])) : b("", !0),
            u.showNowButton ? (y(), S("div", os, [
              u.$slots["now-button"] ? H(u.$slots, "now-button", {
                key: 0,
                selectCurrentDate: o(Ge)
              }) : b("", !0),
              u.$slots["now-button"] ? b("", !0) : (y(), S("button", {
                key: 1,
                type: "button",
                role: "button",
                class: "dp__now_button",
                onClick: L[8] || (L[8] = (...E) => o(Ge) && o(Ge)(...E))
              }, ge(u.nowButtonLabel), 1))
            ])) : b("", !0)
          ], 2),
          !u.autoApply || u.keepActionRow ? (y(), oe(Yt(u.actionRowComponent ? u.actionRowComponent : ir), Ae({ key: 2 }, {
            calendarWidth: R.value,
            selectText: u.selectText,
            cancelText: u.cancelText,
            internalModelValue: e.internalModelValue,
            range: u.range,
            previewFormat: u.previewFormat,
            inline: u.inline,
            monthPicker: u.monthPicker,
            timePicker: u.timePicker,
            customProps: u.customProps,
            multiCalendars: e.multiCalendars,
            menuMount: V.value,
            maxTime: u.maxTime,
            minTime: u.minTime,
            enableTimePicker: u.enableTimePicker,
            minDate: u.minDate,
            maxDate: u.maxDate,
            multiDates: u.multiDates,
            modelAuto: u.modelAuto,
            partialRange: u.partialRange,
            ignoreTimeValidation: u.ignoreTimeValidation
          }, {
            onClosePicker: L[9] || (L[9] = (E) => u.$emit("closePicker")),
            onSelectDate: L[10] || (L[10] = (E) => u.$emit("selectDate")),
            onInvalidSelect: L[11] || (L[11] = (E) => u.$emit("invalid-select"))
          }), Pe({ _: 2 }, [
            pe(o(bt), (E, z) => ({
              name: E,
              fn: se((Q) => [
                H(u.$slots, E, ze(lt({ ...Q })))
              ])
            }))
          ]), 1040)) : b("", !0)
        ], 42, ns)
      ]),
      _: 3
    }, 8, ["name", "css"]));
  }
}), ds = (e, a, n, t, d, f, p, v, h, k, R, V, F, I, U, O, x) => {
  const l = N(""), i = N();
  pt(i, () => {
    x("internalModelChange", i.value);
  });
  const Y = (r) => [ae(r[0]), r[1] ? ae(r[1]) : null], ee = (r) => {
    let m = null;
    r ? a ? Hl(r) && "hours" in r[0] && "minutes" in r[0] ? m = [
      Ce(null, +r[0].hours, +r[0].minutes, +r[0].seconds),
      Ce(null, +r[1].hours, +r[1].minutes, +r[1].seconds)
    ] : Fl(r) && (m = Ce(null, +r.hours, +r.minutes, +r.seconds)) : n ? Kl(r) && "month" in r[0] && "year" in r[0] ? (m = [it(null, +r[0].month, +r[0].year)], r[1] ? m[1] = it(null, +r[1].month, +r[1].year) : !r[1] && d && (m[1] = null)) : Wl(r) && "month" in r && "year" in r && (m = it(null, +r.month, +r.year)) : F ? Array.isArray(r) ? m = [
      st(new Date(), r[0]),
      !r[1] && d ? null : st(new Date(), r[1])
    ] : m = st(new Date(), r) : k && Array.isArray(r) ? m = r.map((C) => ae(C)) : V && Array.isArray(r) ? m = [new Date(r[0]), new Date(r[1])] : t ? O ? Array.isArray(r) ? m = Y(r) : m = [ae(r), null] : Ll(r, d) && (m = Y(r)) : Gl(r) && (m = ae(r)) : m = null, on(m) ? (i.value = m, W()) : (i.value = null, l.value = "");
  }, T = () => Jn(
    e,
    f,
    v,
    n,
    a,
    V,
    F,
    p
  ), W = () => {
    if (!i.value)
      l.value = "";
    else if (!e || typeof e == "string") {
      const r = T();
      Array.isArray(i.value) && k ? l.value = i.value.map((m) => yt(m, r, h == null ? void 0 : h.value)).join("; ") : l.value = yt(
        i.value,
        r,
        h == null ? void 0 : h.value,
        I == null ? void 0 : I.rangeSeparator,
        O
      );
    } else
      a ? l.value = e(un(i.value)) : n ? l.value = e(Nn(i.value)) : l.value = e(i.value);
  }, Z = () => i.value ? t ? d ? i.value.length >= 1 : i.value.length === 2 : !!i.value : !1, ae = (r) => {
    if (R) {
      const m = new Date(r);
      return R === "preserve" ? new Date(m.getTime() + m.getTimezoneOffset() * 6e4) : m;
    }
    return U ? U === "date" || U === "timestamp" ? new Date(r) : U === "format" && (typeof e == "string" || !e) ? sn(r, T(), new Date()) : sn(r, U, new Date()) : new Date(r);
  }, q = (r) => U ? U === "timestamp" ? +r : U === "format" && (typeof e == "string" || !e) ? yt(r, T(), h == null ? void 0 : h.value, I == null ? void 0 : I.rangeSeparator) : yt(r, U, h == null ? void 0 : h.value, I == null ? void 0 : I.rangeSeparator) : r, X = (r) => {
    x("update:modelValue", r);
  }, $ = () => [
    q(i.value[0]),
    i.value[1] ? q(i.value[1]) : null
  ];
  return {
    parseExternalModelValue: ee,
    formatInputValue: W,
    internalModelValue: i,
    inputValue: l,
    emitModelValue: () => {
      if (n)
        X(Nn(i.value));
      else if (a)
        X(un(i.value));
      else if (V)
        X(i.value);
      else if (F)
        X(
          Array.isArray(i.value) ? [
            ue(i.value[0]),
            i.value[1] ? ue(i.value[1]) : null
          ] : ue(i.value)
        );
      else {
        if (i.value && t && d && i.value.length === 1 && i.value.push(null), R) {
          let r;
          if (Array.isArray(i.value)) {
            const m = (C) => C && xt(C, R === "preserve");
            O ? r = i.value[1] ? i.value.map(m) : xt(i.value[0], R === "preserve") : r = i.value.map(m);
          } else
            r = xt(i.value, R === "preserve");
          return X(r);
        }
        Array.isArray(i.value) && !k ? X(
          O ? i.value[1] ? $() : q(i.value[0]) : $()
        ) : Array.isArray(i.value) && k ? X(i.value.map((r) => q(r))) : X(q(i.value));
      }
      W();
    },
    checkBeforeEmit: Z
  };
}, cs = (e, a, n, t, d, f, p, v, h) => {
  const k = N({
    top: "0",
    left: "0",
    transform: "none"
  }), R = N(!1), V = 390;
  pt(v, () => {
    Y();
  });
  const F = (T) => {
    const W = T.getBoundingClientRect();
    return {
      left: W.left + window.scrollX,
      top: W.top + window.scrollY
    };
  }, I = (T) => {
    const W = T.getBoundingClientRect();
    let Z = 0, ae = 0;
    for (; T && !isNaN(T.offsetLeft) && !isNaN(T.offsetTop); )
      Z += T.offsetLeft - T.scrollLeft, ae = W.top + T.scrollTop, T = T.offsetParent;
    return { top: ae, left: Z };
  }, U = (T, W) => {
    k.value.left = `${T + W}px`, k.value.transform = "translateX(-100%)";
  }, O = (T) => {
    k.value.left = `${T}px`, k.value.transform = "translateX(0)";
  }, x = (T, W) => {
    e === Wt.left && O(T), e === Wt.right && U(T, W), e === Wt.center && (k.value.left = `${T + W / 2}px`, k.value.transform = "translateX(-50%)");
  }, l = () => {
    const T = ke(d);
    if (T) {
      const W = window.innerHeight, { top: Z, left: ae } = a ? I(T) : F(T), { width: q, top: X, height: $ } = T.getBoundingClientRect(), G = W - X - $;
      k.value.top = X > G ? `${Z - V}px` : `${Z}px`, x(ae, q);
    }
  }, i = () => {
    k.value.left = "50%", k.value.top = "50%", k.value.transform = "translate(-50%, -50%)", k.value.position = "fixed";
  }, Y = (T = !0) => {
    if (!f) {
      if (v.value)
        return i();
      const W = ke(d);
      if (a && typeof a != "boolean")
        k.value = a(W);
      else if (W) {
        const { width: Z, height: ae } = W.getBoundingClientRect(), { top: q, left: X } = a ? I(W) : F(W);
        k.value.top = `${ae + q + +p}px`, x(X, Z), T && n && ee();
      }
    }
  }, ee = () => {
    const T = ke(d);
    if (T && n && !f) {
      const { height: W, top: Z, width: ae } = T.getBoundingClientRect(), { top: q, left: X } = a ? I(T) : F(T), G = window.innerHeight - Z - W, r = ke(t);
      if (r) {
        const { height: m, left: C, right: M } = r.getBoundingClientRect(), P = m + W;
        P > Z && P > G ? Z < G ? (Y(!1), R.value = !1) : (k.value.top = `${q - m - +p}px`, R.value = !0) : P > G ? (k.value.top = `${q - m - +p}px`, R.value = !0) : (Y(!1), R.value = !1), C < 0 ? O(X) : M > document.documentElement.clientWidth && U(X, ae);
      }
    }
    h("recalculatePosition");
  };
  return { openOnTop: R, menuPosition: k, setMenuPosition: Y, setInitialPosition: l, recalculatePosition: ee };
}, fs = typeof window < "u" ? window : void 0, rn = () => {
}, ms = (e) => Aa() ? (Pa(e), !0) : !1, vs = (e, a, n, t) => {
  if (!e)
    return rn;
  let d = rn;
  const f = pt(
    () => o(e),
    (v) => {
      d(), v && (v.addEventListener(a, n, t), d = () => {
        v.removeEventListener(a, n, t), d = rn;
      });
    },
    { immediate: !0, flush: "post" }
  ), p = () => {
    f(), d();
  };
  return ms(p), p;
}, ys = (e, a, n, t = {}) => {
  const { window: d = fs, event: f = "pointerdown" } = t;
  return d ? vs(d, f, (v) => {
    const h = ke(e), k = ke(a);
    !h || !k || h === v.target || v.composedPath().includes(h) || v.composedPath().includes(k) || n(v);
  }, { passive: !0 }) : void 0;
}, ps = {
  compatConfig: { MODE: 3 }
}, hs = /* @__PURE__ */ Oe({
  ...ps,
  __name: "VueDatePicker",
  props: {
    ...Rl
  },
  emits: [
    "update:modelValue",
    "textSubmit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internalModelChange",
    "recalculatePosition",
    "flow-step",
    "updateMonthYear",
    "invalid-select"
  ],
  setup(e, { expose: a, emit: n }) {
    const t = e, d = vn(), f = N(!1), p = Rt(t, "modelValue"), v = N(null), h = N(null), k = Rt(t, "teleportCenter");
    nt(gn, t.autoApply);
    const R = _(() => t.formatLocale);
    nt(ta, R), nt(ea, Rt(t, "textInput")), nt(Ze, Rt(t, "arrowNavigation")), Ne(() => {
      ee(t.modelValue), t.inline || (window.addEventListener("scroll", D), window.addEventListener("resize", B)), t.inline && (f.value = !0);
    }), mn(() => {
      t.inline || (window.removeEventListener("scroll", D), window.removeEventListener("resize", B));
    });
    const V = rt(d, "all", t.presetRanges), F = rt(d, "input");
    pt(
      p,
      () => {
        ee(p.value);
      },
      { deep: !0 }
    );
    const { openOnTop: I, menuPosition: U, setMenuPosition: O, recalculatePosition: x, setInitialPosition: l } = cs(
      t.position,
      t.altPosition,
      t.autoPosition,
      v,
      h,
      t.inline,
      t.offset,
      k,
      n
    ), {
      internalModelValue: i,
      inputValue: Y,
      parseExternalModelValue: ee,
      emitModelValue: T,
      checkBeforeEmit: W,
      formatInputValue: Z
    } = ds(
      t.format,
      t.timePicker,
      t.monthPicker,
      t.range,
      t.partialRange,
      t.is24,
      t.enableTimePicker,
      t.enableSeconds,
      R,
      t.multiDates,
      t.utc,
      t.weekPicker,
      t.yearPicker,
      t.textInputOptions,
      t.modelType,
      t.modelAuto,
      n
    ), { clearArrowNav: ae } = Qe(), { setMenuFocused: q, setShiftKey: X } = ma(), $ = _(
      () => ({
        dp__main: !0,
        dp__theme_dark: t.dark,
        dp__theme_light: !t.dark,
        dp__flex_display: t.inline,
        dp__flex_display_with_input: t.inlineWithInput
      })
    ), G = _(() => En(t.format) ? t.format : Jn(
      null,
      t.is24,
      t.enableSeconds,
      t.monthPicker,
      t.timePicker,
      t.weekPicker,
      t.yearPicker,
      t.enableTimePicker
    )), r = _(() => t.previewFormat ? t.previewFormat : En(G.value) ? G.value : t.format), m = _(() => typeof t.transitions == "boolean" ? t.transitions ? Fn({}) : !1 : Fn(t.transitions));
    nt(jt, m);
    const C = _(() => (c) => {
      var te;
      return (te = t.hideNavigation) == null ? void 0 : te.includes(c);
    });
    nt(kn, C);
    const M = _(() => t.dark ? "dp__theme_dark" : "dp__theme_light"), P = _(() => Object.assign(xl(), t.textInputOptions)), K = _(() => ar(t.ariaLabels));
    nt(Je, K);
    const re = _(() => er(t.filters)), le = _(() => {
      const c = (te) => {
        const ve = {
          hours: Ve(new Date()),
          minutes: Be(new Date()),
          seconds: Xe(new Date())
        };
        return Object.assign(ve, te);
      };
      return t.range ? t.startTime && Array.isArray(t.startTime) ? [c(t.startTime[0]), c(t.startTime[1])] : null : t.startTime && !Array.isArray(t.startTime) ? c(t.startTime) : null;
    }), g = _(() => t.multiCalendars === null ? 0 : typeof t.multiCalendars == "boolean" ? t.multiCalendars ? 2 : 0 : +t.multiCalendars >= 2 ? +t.multiCalendars : 2), D = () => {
      f.value && (t.closeOnScroll ? Me() : t.autoPosition ? O() : window.removeEventListener("scroll", D));
    }, B = () => {
      f.value && O();
    }, Te = () => {
      !t.disabled && !t.readonly && (l(), f.value = !0, Pt().then(() => {
        O(), f.value && n("open");
      }), f.value || We(), ee(t.modelValue));
    }, Ie = () => {
      Y.value = "", We(), n("update:modelValue", null), n("cleared"), Me();
    }, Ue = () => {
      const { validate: c } = xn(
        t.minDate,
        t.maxDate,
        t.disabledDates,
        t.allowedDates,
        re.value,
        t.disabledWeekDays,
        t.yearRange
      ), te = i.value;
      return !te || !Array.isArray(te) && c(te) ? !0 : Array.isArray(te) ? te.length === 2 && c(te[0]) && c(te[1]) ? !0 : !!c(te[0]) : !1;
    }, Ke = () => {
      W() && Ue() ? (T(), Me()) : n("invalid-select", i.value);
    }, Ye = (c) => {
      T(), t.closeOnAutoApply && !c && Me();
    }, gt = (c = !1) => {
      t.autoApply && (!t.enableTimePicker || t.monthPicker || t.yearPicker || t.ignoreTimeValidation ? !0 : dn(i.value, t.maxTime, t.minTime, t.maxDate, t.minDate)) && Ue() && (t.range && Array.isArray(i.value) ? (t.partialRange || i.value.length === 2) && Ye(c) : Ye(c));
    }, We = () => {
      i.value = null;
    }, Me = () => {
      t.inline || (f.value && (f.value = !1, q(!1), X(!1), ae(), n("closed"), l(), Y.value && ee(p.value)), We(), h.value && h.value.focusInput());
    }, kt = (c, te) => {
      if (!c) {
        i.value = null;
        return;
      }
      i.value = c, te && (Ke(), n("textSubmit"));
    }, wt = () => {
      t.autoApply && dn(i.value, t.maxTime, t.minTime, t.maxDate, t.minDate) && T();
    }, Ge = () => f.value ? Me() : Te(), dt = (c) => {
      i.value = c;
    };
    return ys(v, h, Me), a({
      closeMenu: Me,
      selectDate: Ke,
      clearValue: Ie,
      openMenu: Te,
      onScroll: D,
      formatInputValue: Z,
      updateInternalModelValue: dt
    }), (c, te) => (y(), S("div", {
      class: fe(o($))
    }, [
      qe(El, Ae({
        ref_key: "inputRef",
        ref: h
      }, {
        placeholder: c.placeholder,
        hideInputIcon: c.hideInputIcon,
        readonly: c.readonly,
        disabled: c.disabled,
        inputClassName: c.inputClassName,
        clearable: c.clearable,
        state: c.state,
        inline: c.inline,
        inlineWithInput: c.inlineWithInput,
        textInput: c.textInput,
        textInputOptions: o(P),
        range: c.range,
        isMenuOpen: f.value,
        pattern: o(G),
        autoApply: c.autoApply,
        uid: c.uid,
        required: c.required,
        name: c.name,
        autocomplete: c.autocomplete
      }, {
        "input-value": o(Y),
        "onUpdate:input-value": te[0] || (te[0] = (ve) => at(Y) ? Y.value = ve : null),
        onClear: Ie,
        onOpen: Te,
        onSetInputDate: kt,
        onSetEmptyDate: o(T),
        onSelectDate: Ke,
        onToggle: Ge,
        onClose: Me,
        onFocus: te[1] || (te[1] = (ve) => c.$emit("focus")),
        onBlur: te[2] || (te[2] = (ve) => c.$emit("blur"))
      }), Pe({ _: 2 }, [
        pe(o(F), (ve, bt) => ({
          name: ve,
          fn: se((xe) => [
            H(c.$slots, ve, ze(lt(xe)))
          ])
        }))
      ]), 1040, ["input-value", "onSetEmptyDate"]),
      f.value ? (y(), oe(Ta, {
        key: 0,
        to: c.teleport,
        disabled: c.inline
      }, [
        f.value ? (y(), oe(us, Ae({
          key: 0,
          ref_key: "dpMenuRef",
          ref: v,
          class: o(M),
          style: o(U)
        }, {
          weekNumbers: c.weekNumbers,
          weekStart: c.weekStart,
          disableMonthYearSelect: c.disableMonthYearSelect,
          menuClassName: c.menuClassName,
          calendarClassName: c.calendarClassName,
          yearRange: c.yearRange,
          range: c.range,
          multiCalendars: o(g),
          multiCalendarsSolo: c.multiCalendarsSolo,
          multiStatic: c.multiStatic,
          calendarCellClassName: c.calendarCellClassName,
          enableTimePicker: c.enableTimePicker,
          is24: c.is24,
          hoursIncrement: c.hoursIncrement,
          minutesIncrement: c.minutesIncrement,
          hoursGridIncrement: c.hoursGridIncrement,
          minutesGridIncrement: c.minutesGridIncrement,
          minDate: c.minDate,
          maxDate: c.maxDate,
          autoApply: c.autoApply,
          selectText: c.selectText,
          cancelText: c.cancelText,
          previewFormat: o(r),
          locale: c.locale,
          weekNumName: c.weekNumName,
          disabledDates: c.disabledDates,
          filters: o(re),
          minTime: c.minTime,
          maxTime: c.maxTime,
          inline: c.inline,
          openOnTop: o(I),
          monthPicker: c.monthPicker,
          timePicker: c.timePicker,
          monthNameFormat: c.monthNameFormat,
          startDate: c.startDate,
          startTime: o(le),
          monthYearComponent: c.monthYearComponent,
          timePickerComponent: c.timePickerComponent,
          actionRowComponent: c.actionRowComponent,
          customProps: c.customProps,
          hideOffsetDates: c.hideOffsetDates,
          autoRange: c.autoRange,
          noToday: c.noToday,
          noHoursOverlay: c.noHoursOverlay,
          noMinutesOverlay: c.noMinutesOverlay,
          disabledWeekDays: c.disabledWeekDays,
          allowedDates: c.allowedDates,
          showNowButton: c.showNowButton,
          nowButtonLabel: c.nowButtonLabel,
          monthChangeOnScroll: c.monthChangeOnScroll,
          markers: c.markers,
          uid: c.uid,
          modeHeight: c.modeHeight,
          enableSeconds: c.enableSeconds,
          secondsIncrement: c.secondsIncrement,
          secondsGridIncrement: c.secondsGridIncrement,
          noSecondsOverlay: c.noSecondsOverlay,
          escClose: c.escClose,
          spaceConfirm: c.spaceConfirm,
          monthChangeOnArrows: c.monthChangeOnArrows,
          textInput: c.textInput,
          disabled: c.disabled,
          readonly: c.readonly,
          multiDates: c.multiDates,
          presetRanges: c.presetRanges,
          flow: c.flow,
          preventMinMaxNavigation: c.preventMinMaxNavigation,
          minRange: c.minRange,
          maxRange: c.maxRange,
          fixedStart: c.fixedStart,
          fixedEnd: c.fixedEnd,
          multiDatesLimit: c.multiDatesLimit,
          reverseYears: c.reverseYears,
          keepActionRow: c.keepActionRow,
          weekPicker: c.weekPicker,
          noSwipe: c.noSwipe,
          vertical: c.vertical,
          arrowNavigation: c.arrowNavigation,
          yearPicker: c.yearPicker,
          disableTimeRangeValidation: c.disableTimeRangeValidation,
          dayNames: c.dayNames,
          modelAuto: c.modelAuto,
          highlight: c.highlight,
          highlightWeekDays: c.highlightWeekDays,
          highlightDisabledDays: c.highlightDisabledDays,
          partialRange: c.partialRange,
          teleportCenter: c.teleportCenter,
          ignoreTimeValidation: c.ignoreTimeValidation,
          dayClass: c.dayClass
        }, {
          internalModelValue: o(i),
          "onUpdate:internalModelValue": te[3] || (te[3] = (ve) => at(i) ? i.value = ve : null),
          onClosePicker: Me,
          onSelectDate: Ke,
          onDpOpen: o(x),
          onAutoApply: gt,
          onTimeUpdate: wt,
          onFlowStep: te[4] || (te[4] = (ve) => c.$emit("flow-step", ve)),
          onUpdateMonthYear: te[5] || (te[5] = (ve) => c.$emit("updateMonthYear", ve)),
          onInvalidSelect: te[6] || (te[6] = (ve) => c.$emit("invalid-select", o(i)))
        }), Pe({ _: 2 }, [
          pe(o(V), (ve, bt) => ({
            name: ve,
            fn: se((xe) => [
              H(c.$slots, ve, ze(lt({ ...xe })))
            ])
          }))
        ]), 1040, ["class", "style", "internalModelValue", "onDpOpen"])) : b("", !0)
      ], 8, ["to", "disabled"])) : b("", !0)
    ], 2));
  }
}), va = /* @__PURE__ */ (() => {
  const e = hs;
  return e.install = (a) => {
    a.component("Vue3DatePicker", e);
  }, e;
})(), gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: va
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(gs).forEach(([e, a]) => {
  e !== "default" && (va[e] = a);
});
export {
  va as default
};
