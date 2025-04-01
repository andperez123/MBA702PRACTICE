export type Question = {
    id: number;
    topic: string;
    question: string;
    correctAnswer: string;
  };
  
  export const questions: Question[] = [
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
    },
    {
      id: 6,
      topic: "Bond Valuation",
      question: "Why is reinvestment risk important when using YTM? What assumptions must hold for YTM to be accurate?",
      correctAnswer: "YTM assumes coupons are reinvested at the same rate. If reinvestment rates differ, actual returns will deviate. The bond must also be held to maturity with no defaults."
    },
    {
      id: 7,
      topic: "Bond Valuation",
      question: "How do special provisions affect bond yields? Give examples of issuer- and investor-favorable provisions.",
      correctAnswer: "Call options (issuer-favorable) raise required yield due to prepayment risk. Convertibility (investor-favorable) lowers yield due to added upside."
    },
    {
      id: 8,
      topic: "Bond Valuation",
      question: "Why are bond cash flows more predictable than stocks, and how does this influence investor strategy?",
      correctAnswer: "Bond payments are contractually defined, unlike variable stock dividends. This makes bonds attractive to risk-averse investors seeking stable income."
    },
    {
      id: 9,
      topic: "Bond Valuation",
      question: "How does the secondary bond market enhance liquidity, and how does liquidity affect bond pricing and yields?",
      correctAnswer: "Active markets let investors buy/sell easily, reducing required yield. Illiquid bonds demand higher yields to compensate for trading difficulty."
    },
    {
      id: 10,
      topic: "Bond Valuation",
      question: "How does rising inflation affect bond yields and the risk-free rate?",
      correctAnswer: "It increases the risk-free rate and overall bond yields as investors demand more return to offset reduced purchasing power."
    },
    {
      id: 11,
      topic: "Bond Pricing",
      question: "A 5-year bond with a $1,000 par value and 7% annual coupon has a market yield of 6%. What is its price?",
      correctAnswer: "PV = 70 × 4.2124 + 1000 × 0.7473 = 294.87 + 747.30 = $1,042.17"
    },
    {
      id: 12,
      topic: "Bond Valuation",
      question: "A 10-year, 9% bond priced at $1,085 has a $1,000 face value. What is the approximate YTM?",
      correctAnswer: "Approximate YTM ≈ (90 + (1000 - 1085)/10) / ((1000 + 1085)/2) = (90 - 8.5) / 1042.5 ≈ 7.82%"
    },
    {
      id: 13,
      topic: "Bond Valuation",
      question: "Bond A (10-year, 5%, $950), Bond B (10-year, 5%, $1,050). Which has the higher YTM?",
      correctAnswer: "Bond A, because it’s priced below par, implying a YTM above 5%."
    },
    {
      id: 14,
      topic: "Bond Pricing",
      question: "Calculate the price of a 20-year bond with 8% coupon and 6% required yield.",
      correctAnswer: "PV = 80 × 11.4699 + 1000 × 0.3118 = 917.59 + 311.80 = $1,229.39"
    },
    {
      id: 15,
      topic: "Bond Valuation",
      question: "Given rf = 3%, DRP = 1.5%, MRP = 1.2%, LP = 0.8%, what is the required yield? What if it’s a government bond?",
      correctAnswer: "Required yield = 3 + 1.5 + 1.2 + 0.8 = 6.5%. For a government bond with no DRP and low LP: ~4.4%."
    },
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
        correctAnswer: "Dividends are not guaranteed and depend on management’s judgment, affecting investor confidence and valuation based on expected future payouts."
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
      },
      {
        id: 21,
        topic: "Stocks",
        question: "What does stock equilibrium mean in an efficient market? How does CAPM ensure this?",
        correctAnswer: "In equilibrium, expected return = required return. CAPM aligns risk (via beta) with expected return, guiding price adjustments."
      },
      {
        id: 22,
        topic: "Stocks",
        question: "How do payout and retention ratios influence a firm’s growth rate?",
        correctAnswer: "Growth = ROI × retention ratio (b). High retention boosts growth if ROI > required return, increasing valuation."
      },
      {
        id: 23,
        topic: "Stocks",
        question: "Why can a firm with high ROI and low payout still offer high returns?",
        correctAnswer: "Reinvested earnings generate strong internal returns, increasing future dividends and long-term stock value."
      },
      {
        id: 24,
        topic: "Stocks",
        question: "What role does beta play in stock valuation via CAPM?",
        correctAnswer: "Beta measures market risk. Higher beta → higher required return → lower present value (if dividends unchanged)."
      },
      {
        id: 25,
        topic: "Stocks",
        question: "How does reinvestment in projects with ROI < required return impact shareholders?",
        correctAnswer: "It reduces firm value and shareholder wealth. Management should return funds instead of pursuing low-return projects."
      },
      {
        id: 26,
        topic: "Stocks",
        question: "CAPM required return with β = 1.5, rf = 3%, rm = 11%:",
        correctAnswer: "r = 3% + 1.5(11% - 3%) = 15%"
      },
      {
        id: 27,
        topic: "Stocks",
        question: "No-growth model: D = $4, r = 16%. What is the price?",
        correctAnswer: "P = 4 / 0.16 = $25.00"
      },
      {
        id: 28,
        topic: "Stocks",
        question: "Gordon Growth Model: D₁ = $2.50, g = 6%, r = 11%. What is the stock price?",
        correctAnswer: "P = 2.50 / (0.11 - 0.06) = $50.00"
      },
      {
        id: 29,
        topic: "Stocks",
        question: "D = $2.80, P = $35, g = 4%. What are the dividend yield and expected return?",
        correctAnswer: "Dividend Yield = 2.80 / 35 = 8%. Expected Return = 8% + 4% = 12%"
      },
      {
        id: 30,
        topic: "Stocks",
        question: "Variable Growth Model: D1 = D2 = $2, D3 = $2.10, g = 5%, r = 10%. What is the stock price?",
        correctAnswer: "PV(D1) = 1.818, PV(D2) = 1.653, PV(P2) = 34.71. Total = 1.818 + 1.653 + 34.71 = $38.18"
      },
      {
        id: 31,
        topic: "Futures",
        question: "Differentiate between futures and forward contracts. Why might a firm prefer futures?",
        correctAnswer: "Futures: Standardized, exchange-traded, low counterparty risk due to clearinghouse. Forwards: Customized, OTC, higher counterparty risk. Firms prefer futures for liquidity, lower risk, and ease of offsetting."
      },
      {
        id: 32,
        topic: "Futures",
        question: "Explain marking-to-market and its impact. What’s the role of margin accounts?",
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
      },
      {
        id: 36,
        topic: "Futures",
        question: "Compare symmetric hedging with futures vs. asymmetric hedging with options on futures.",
        correctAnswer: "Futures: Lock in price, but no upside potential. Options: Costly but limit downside while preserving upside."
      },
      {
        id: 37,
        topic: "Futures",
        question: "How do storage costs and yield affect futures pricing for commodities vs. financial assets?",
        correctAnswer: "Commodities: Higher storage = higher futures price. Financial assets: Higher yield = lower futures price."
      },
      {
        id: 38,
        topic: "Futures",
        question: "What does a risk premium in futures price imply? What affects it?",
        correctAnswer: "Indicates compensation for bearing risk. Influenced by hedging pressure: more sellers = higher premium."
      },
      {
        id: 39,
        topic: "Futures",
        question: "Why are most futures closed before delivery? What is position offsetting?",
        correctAnswer: "Physical delivery is rare. Offsetting: Entering opposite position to close contract."
      },
      {
        id: 40,
        topic: "Futures",
        question: "How does daily settlement reduce credit risk in futures markets?",
        correctAnswer: "Losses are realized and settled daily, reducing cumulative exposure and potential default risk."
      },
      {
        id: 41,
        topic: "Futures",
        question: "Futures price of a Treasury bond: P = $100, yield = 1.5%, r = 2.5%, t = 1. What is the futures price?",
        correctAnswer: "F = 100 × (1 + 0.025 - 0.015) = 101.00"
      },
      {
        id: 42,
        topic: "Futures",
        question: "Oil futures: Spot = $70, storage = 2%, r = 3%, t = 0.5. What is the futures price?",
        correctAnswer: "F = 70 × (1 + 0.03 + 0.02)^0.5 ≈ 70 × 1.0247 = 71.73"
      },
      {
        id: 43,
        topic: "Futures",
        question: "Commodity futures: Spot = $60, storage = 4%, r = 1.5%, t = 1. What is the futures price?",
        correctAnswer: "F = 60 × (1 + 0.015 + 0.04) = 60 × 1.055 = 63.30"
      },
      {
        id: 44,
        topic: "Futures",
        question: "Bond futures: P = $80, yield = 2%, r = 3.5%, t = 1. What is the futures price?",
        correctAnswer: "F = 80 × (1 + 0.035 - 0.02) = 80 × 1.015 = 81.20"
      },
      {
        id: 45,
        topic: "Futures",
        question: "Futures drop from $100 to $98, long 5 contracts, 100 units each. What is the total loss and margin impact?",
        correctAnswer: "Loss per unit = $2. Total loss = 2 × 5 × 100 = $1,000. Margin account is debited $1,000."
      },
      {
        id: 46,
        topic: "Options",
        question: "What’s the difference between intrinsic and time value in an option? Why might an option with zero intrinsic value still have value?",
        correctAnswer: "Intrinsic value = immediate exercise benefit (S − X for calls). Time value = premium above intrinsic, based on potential future gain. Even if intrinsic = 0, time value > 0 due to volatility and time until expiration."
      },
      {
        id: 47,
        topic: "Options",
        question: "Compare European and American options. When is the flexibility of American options valuable?",
        correctAnswer: "European: exercised only at expiration. American: can be exercised anytime. Flexibility is valuable when early exercise is optimal, like with dividend-paying stocks."
      },
      {
        id: 48,
        topic: "Options",
        question: "How does volatility affect call option time value and price? Why is it key in Black-Scholes?",
        correctAnswer: "Higher volatility increases the chance of favorable price swings, raising time value and overall option price. Black-Scholes heavily depends on volatility to model price uncertainty."
      },
      {
        id: 49,
        topic: "Options",
        question: "What is the hedge ratio in the Binomial Model, and how does it replicate option payoffs?",
        correctAnswer: "Hedge ratio = change in option value / change in stock value. It determines how many shares to hold per option to create a riskless position."
      },
      {
        id: 50,
        topic: "Options",
        question: "Interpret the terms S·N(d₁) and X·e⁻ʳᵗ·N(d₂) in the Black-Scholes formula.",
        correctAnswer: "S·N(d₁): PV of expected asset value if option is exercised. X·e⁻ʳᵗ·N(d₂): PV of expected payment if option is exercised. Their difference gives the option’s theoretical value."
      },
      {
        id: 51,
        topic: "Options",
        question: "Why do call options increase in value with more time to maturity? Any exceptions?",
        correctAnswer: "More time = greater chance of becoming profitable. Exception: very deep in-the-money American options may be exercised early, limiting time value."
      },
      {
        id: 52,
        topic: "Options",
        question: "How does the risk-free rate affect European call option value in Black-Scholes?",
        correctAnswer: "Higher rates reduce PV of the strike, increasing call value. Intuitively, delaying payment of strike becomes cheaper."
      },
      {
        id: 53,
        topic: "Options",
        question: "Why doesn’t Black-Scholes apply to American options or dividend-paying stocks without changes?",
        correctAnswer: "BSM assumes no early exercise or payouts. American options and dividends violate this, requiring adjustments."
      },
      {
        id: 54,
        topic: "Options",
        question: "Why do deep ITM and OTM options have low time value?",
        correctAnswer: "Deep ITM: already profitable, limited upside. Deep OTM: unlikely to become profitable. ATM options have highest uncertainty and time value."
      },
      {
        id: 55,
        topic: "Options",
        question: "What is a covered call strategy? What’s the risk/return profile?",
        correctAnswer: "Own the stock + write a call. Limited upside (due to call), some downside protection (premium), but risk if stock drops significantly."
      },
      {
        id: 56,
        topic: "Options",
        question: "Black-Scholes: S = $100, X = $105, r = 4%, σ = 25%, t = 1. What is the call option value?",
        correctAnswer: "d₁ ≈ -0.076, d₂ ≈ -0.326, N(d₁) ≈ 0.470, N(d₂) ≈ 0.372. C ≈ 6.27"
      },
      {
        id: 57,
        topic: "Options",
        question: "Binomial Model: S = 100, up = 120, down = 90, X = 110, r = 10%. What is the call price?",
        correctAnswer: "Call payoff: up = 10, down = 0. Hedge ratio h = 3. Value = (100 - 3c) = 90 / 1.10 = 81.82 → c = 6.06"
      },
      {
        id: 58,
        topic: "Options",
        question: "S = 75, X = 72, Price = 6.53. What are the intrinsic and time value of the call?",
        correctAnswer: "Intrinsic = 3, Time value = 6.53 - 3 = 3.53. Indicates potential for further gain due to volatility and time."
      },
      {
        id: 59,
        topic: "Options",
        question: "Hedge ratio: S_high = 130, S_low = 100, C_high = 20, C_low = 0. What is the hedge ratio?",
        correctAnswer: "h = (20 - 0) / (130 - 100) = 0.67. Buy 0.67 shares for each call written to hedge."
      },
      {
        id: 60,
        topic: "Options",
        question: "Black-Scholes: S = 50, X = 48, r = 5%, t = 0.5, σ = 30%. What is the call value?",
        correctAnswer: "d₁ ≈ 0.530, d₂ ≈ 0.317, N(d₁) ≈ 0.702, N(d₂) ≈ 0.624. C ≈ 5.15"
      }
  ];
