export type Question = {
  id: number;
  topic: string;
  question: string;
  correctAnswer: string;
};

// Questions organized by topic
const bondQuestions: Question[] = [
  {
    id: 1,
    topic: "Bond Pricing",
    question: "Why are bond prices inversely related to interest rates? How does this affect long-term vs. short-term bond investors during rising rates?",
    correctAnswer: "Bond prices fall when interest rates rise because existing bonds become less attractive than new ones. Long-term bonds are more affected due to greater duration and interest rate sensitivity."
  },
  {
    id: 2,
    topic: "Bond Valuation",
    question: "What are the limitations of CAPM in estimating bond yields, and why is a multivariate model preferred?",
    correctAnswer: "CAPM ignores bond-specific risks like interest rate, maturity, and liquidity risk. A multivariate model includes these premiums, providing a more accurate yield estimate."
  },
  {
    id: 3,
    topic: "Bond Valuation",
    question: "Compare a premium bond to a discount bond in terms of coupon, price, and YTM. How does maturity affect valuation?",
    correctAnswer: "Premium bonds have higher coupons than the market yield and trade above par; discount bonds have lower coupons and trade below par. Longer maturities increase sensitivity to interest rate changes."
  },
  {
    id: 4,
    topic: "Bond Pricing",
    question: "Why do bonds with the same maturity but different coupons respond differently to interest rate changes?",
    correctAnswer: "Lower-coupon bonds have more of their value in the distant future, making them more sensitive to interest rate changes than higher-coupon bonds."
  },
  {
    id: 5,
    topic: "Bond Valuation",
    question: "How do maturity and liquidity premiums affect bond yields, and how do they differ between corporate and Treasury bonds?",
    correctAnswer: "Longer maturities and less liquid bonds require higher yields. Corporate bonds have higher maturity and liquidity premiums than Treasuries due to greater risk and lower marketability."
  }
];

const stockQuestions: Question[] = [
  {
    id: 16,
    topic: "Stocks",
    question: "Why are stocks considered riskier than bonds and how is this reflected in their required return?",
    correctAnswer: "Stocks offer residual claims and uncertain dividends, while bonds provide fixed payments. This uncertainty increases risk, so stocks require a higher return to compensate."
  },
  {
    id: 17,
    topic: "Stocks",
    question: "What are the implications of management discretion in dividend payments?",
    correctAnswer: "Dividends are not guaranteed and depend on management's judgment, affecting investor confidence and valuation based on expected future payouts."
  },
  {
    id: 18,
    topic: "Stocks",
    question: "Compare no-growth, constant growth, and variable growth dividend models. When is each appropriate?",
    correctAnswer: "No-growth: For firms with stable, unchanging dividends (e.g., utilities). Constant growth: Firms with predictable long-term growth. Variable growth: Firms with temporary high growth transitioning to stable growth."
  },
  {
    id: 19,
    topic: "Stocks",
    question: "Why does the Gordon Growth Model break down when required return ≈ or < dividend growth rate?",
    correctAnswer: "The denominator (r - g) approaches zero or becomes negative, inflating or invalidating the price, making the model unreliable."
  },
  {
    id: 20,
    topic: "Stocks",
    question: "What is PVGO, and how does a negative PVGO affect reinvestment decisions?",
    correctAnswer: "PVGO = Value of growth opportunities. A negative PVGO means reinvestment destroys value, so paying dividends may be better for shareholders."
  }
];

const futuresQuestions: Question[] = [
  {
    id: 31,
    topic: "Futures",
    question: "Differentiate between futures and forward contracts. Why might a firm prefer futures?",
    correctAnswer: "Futures: Standardized, exchange-traded, low counterparty risk due to clearinghouse. Forwards: Customized, OTC, higher counterparty risk. Firms prefer futures for liquidity, lower risk, and ease of offsetting."
  },
  {
    id: 32,
    topic: "Futures",
    question: "Explain marking-to-market and its impact. What's the role of margin accounts?",
    correctAnswer: "Daily gains/losses are settled, adjusting margin accounts. Protects against default by ensuring positions are funded daily."
  },
  {
    id: 33,
    topic: "Futures",
    question: "Why do futures prices reflect expected future spot price adjusted for risk-free rate and yield/storage costs?",
    correctAnswer: "To prevent arbitrage. The adjustment accounts for time value of money and carrying/storage benefits or costs."
  },
  {
    id: 34,
    topic: "Futures",
    question: "When can futures price be lower than spot? Example?",
    correctAnswer: "If yield (e.g., bond coupon) exceeds risk-free rate. Example: Dividend-paying bonds → futures price < spot."
  },
  {
    id: 35,
    topic: "Futures",
    question: "Difference between hedging and speculation with futures? Example?",
    correctAnswer: "Hedging: Reduce risk (e.g., farmer sells wheat futures). Speculation: Profit from price movement (e.g., trader buys oil futures expecting rise)."
  }
];

// Export all questions combined
export const questions: Question[] = [
  ...bondQuestions,
  ...stockQuestions,
  ...futuresQuestions
];

// Export questions by topic for easier filtering
export const questionsByTopic = {
  bonds: bondQuestions,
  stocks: stockQuestions,
  futures: futuresQuestions
}; 