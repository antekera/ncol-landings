import { PLAN_PERIOD_LABELS } from "@/data/advertising";
import type { AdvertisingFormat, PlanMonths } from "@/data/advertising";

const PLAN_PARAM_BY_MONTHS: Record<PlanMonths, string> = {
  1: "1m",
  3: "3m",
  6: "6m",
};

export type PlanPricing = {
  monthly: number;
  total: number;
  savingsPercent: number;
};

export function getPlanMonths(value: string | null): PlanMonths {
  if (value === "1m") return 1;
  if (value === "6m") return 6;
  return 3;
}

export function getPlanParam(months: PlanMonths) {
  return PLAN_PARAM_BY_MONTHS[months];
}

export function getPlanPricing(
  format: AdvertisingFormat,
  months: PlanMonths,
): PlanPricing {
  const monthly = format.prices[months];
  const total = monthly * months;
  const savingsPercent = Math.floor(
    ((format.prices[1] - monthly) / format.prices[1]) * 100,
  );

  return { monthly, total, savingsPercent };
}

export function formatUsd(value: number) {
  return `USD ${new Intl.NumberFormat("es-VE", {
    maximumFractionDigits: 0,
  }).format(value)}`;
}

export function formatVisits(value: number) {
  return new Intl.NumberFormat("es-VE", {
    maximumFractionDigits: 0,
  }).format(value);
}

export function getPlanLabel(months: PlanMonths) {
  return `Plan ${PLAN_PERIOD_LABELS[months]}`;
}
