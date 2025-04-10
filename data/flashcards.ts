export type Flashcard = {
  id: number;
  subject: string;
  front: string;
  back: string;
};

export const flashcards: Flashcard[] = [
  {
    id: 1,
    subject: "Capital Budgeting",
    front: "What is Capital Budgeting?",
    back: "Decisions related to long-term fixed asset investment impacting long-term firm value and resource allocation."
  },
  {
    id: 2,
    subject: "NPV",
    front: "What is Net Present Value (NPV)?",
    back: "Present value of cash inflows minus present value of cash outflows. Accept if NPV > 0."
  },
  {
    id: 3,
    subject: "NPV",
    front: "What is the NPV Formula?",
    back: "NPV = Σ CFₜ / (1 + r)ᵗ"
  },
  {
    id: 4,
    subject: "IRR",
    front: "What is Internal Rate of Return (IRR)?",
    back: "Discount rate that makes NPV = 0; accept project if IRR > hurdle rate."
  },
  {
    id: 5,
    subject: "IRR",
    front: "How do you calculate IRR in Excel?",
    back: "=IRR(range)"
  },
  {
    id: 6,
    subject: "MIRR",
    front: "What is Modified Internal Rate of Return (MIRR)?",
    back: "Adjusted IRR assuming reinvestment at WACC, resolving IRR reinvestment assumption issue."
  },
  {
    id: 7,
    subject: "Capital Budgeting",
    front: "How do you handle unequal project lives?",
    back: "Use Replacement Chain or Equivalent Annual Annuity (EAA) methods."
  },
  {
    id: 8,
    subject: "Capital Budgeting",
    front: "What is the Replacement Chain Method?",
    back: "Extend shorter project life to match the longest by assuming project repetition."
  },
  {
    id: 9,
    subject: "Capital Budgeting",
    front: "What is Equivalent Annual Annuity (EAA)?",
    back: "Annual annuity amount equivalent to project's NPV, for comparing projects with unequal lives."
  },
  {
    id: 10,
    subject: "Cash Flow Analysis",
    front: "What are Incremental Cash Flows?",
    back: "Relevant cash flows directly resulting from accepting a project; exclude sunk costs."
  },
  {
    id: 11,
    subject: "Cash Flow Analysis",
    front: "Define Opportunity Cost.",
    back: "Potential benefit lost by choosing one alternative over another."
  },
  {
    id: 12,
    subject: "Depreciation",
    front: "What is MACRS?",
    back: "Modified Accelerated Cost Recovery System, depreciation method for tax purposes."
  },
  {
    id: 13,
    subject: "Cash Flow Analysis",
    front: "What does Cash Flow at Year 0 include?",
    back: "Cost of asset plus change in Net Working Capital (NWC)."
  },
  {
    id: 14,
    subject: "Cash Flow Analysis",
    front: "What is the Operating Cash Flow Formula?",
    back: "(ΔSales – ΔOperating Costs – ΔDepreciation)(1-tax rate) + ΔDepreciation"
  },
  {
    id: 15,
    subject: "Cash Flow Analysis",
    front: "What is included in the Final Year Cash Flow?",
    back: "Operating cash flow + NWC recovery + [(Salvage – Book value)(1 – tax rate) + Book value]."
  },
  {
    id: 16,
    subject: "WACC",
    front: "Define Weighted Average Cost of Capital (WACC).",
    back: "Average rate firms pay to finance assets through debt and equity."
  },
  {
    id: 17,
    subject: "WACC",
    front: "WACC Formula?",
    back: "WACC = wᵈrᵈ(1-t) + wˢ*rˢ"
  },
  {
    id: 18,
    subject: "WACC",
    front: "How do you calculate Equity Cost of Capital?",
    back: "CAPM: rˢ = r_f + β(r_m - r_f) or Dividend Growth Model: rˢ = D₁/P₀ + g"
  },
  {
    id: 19,
    subject: "WACC",
    front: "What is an Equity Breakpoint?",
    back: "Retained Earnings divided by Equity Proportion (wˢ)."
  },
  {
    id: 20,
    subject: "Valuation",
    front: "How do you value a firm?",
    back: "Sum all future discounted free cash flows (FCF) at WACC."
  },
  {
    id: 21,
    subject: "Valuation",
    front: "Market-Based Valuation Formula?",
    back: "Value = Market Value of Debt + Market Value of Equity."
  },
  {
    id: 22,
    subject: "Valuation",
    front: "Explain the Option Pricing Approach to Valuation.",
    back: "Equity viewed as a call option on firm assets; increased asset risk raises equity value, influencing creditor-owner dynamics."
  },
  {
    id: 23,
    subject: "WACC",
    front: "What are Flotation Costs?",
    back: "Costs paid to investment banks when issuing new stock, increasing the cost of equity."
  }
];