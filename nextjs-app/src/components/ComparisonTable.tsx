"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { staggerChildren } from "@/lib/animations";

type CellValue = string | boolean | null | number;

interface ComparisonColumn {
  key: string;
  label: string;
  highlight?: boolean;
  color?: string;
}

interface ComparisonRow {
  feature: string;
  values: Record<string, CellValue>;
}

interface ComparisonTableProps {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  caption?: string;
}

function CellDisplay({ value }: { value: CellValue }) {
  if (value === true)
    return <Check className="w-5 h-5 text-[#10B981] mx-auto" />;
  if (value === false)
    return <X className="w-5 h-5 text-[#EF4444] mx-auto" />;
  if (value === null)
    return <Minus className="w-4 h-4 text-[#6B7280] mx-auto" />;
  if (typeof value === "number") {
    return (
      <span className="font-semibold text-[#1F2937]">{value}/5</span>
    );
  }
  return <span className="text-sm text-[#1F2937]">{value}</span>;
}

export default function ComparisonTable({
  columns,
  rows,
  caption,
}: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[#E8ECF1]">
      <table className="w-full text-sm" role="table">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="border-b border-[#E8ECF1]">
            <th className="text-left p-4 font-semibold text-[#6B7280] bg-[#F7F9FC] w-40">
              Feature
            </th>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`p-4 font-semibold text-center ${
                  col.highlight
                    ? "bg-[#00B4D8]/10 text-[#00B4D8]"
                    : "bg-[#F7F9FC] text-[#1F2937]"
                }`}
              >
                {col.label}
                {col.highlight && (
                  <span className="ml-2 text-xs bg-[#00B4D8] text-white rounded-full px-2 py-0.5">
                    Recommended
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <motion.tbody
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {rows.map((row, i) => (
            <motion.tr
              key={row.feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`border-b border-[#E8ECF1] last:border-0 ${
                i % 2 === 0 ? "bg-white" : "bg-[#F7F9FC]/50"
              }`}
            >
              <td className="p-4 font-medium text-[#1F2937]">{row.feature}</td>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`p-4 text-center ${
                    col.highlight ? "bg-[#00B4D8]/5" : ""
                  }`}
                >
                  <CellDisplay value={row.values[col.key]} />
                </td>
              ))}
            </motion.tr>
          ))}
        </motion.tbody>
      </table>
    </div>
  );
}
