// Define the Question type
export type Question = {
    id: number;
    topic: string;
    question: string;
    correctAnswer: string;
  };
  
  export const questions: Question[] = [
    {
      id: 1,
      topic: "Bond Valuation",
      question: "Why does CAPM typically not perform well when valuing bonds?",
      correctAnswer: "Because bonds are influenced by multiple systematic risk factors such as default risk, liquidity, and maturity, which CAPM does not adequately capture."
    },
    {
      id: 2,
      topic: "Bond Valuation",
      question: "What must occur for a bondholder to actually realize the yield to maturity?",
      correctAnswer: "Hold the bond to maturity, reinvest coupons at the yield to maturity, experience no default, and market yields remain unchanged."
    },
    {
      id: 3,
      topic: "Bond Pricing",
      question: "Why do bond prices approach par value as they near maturity?",
      correctAnswer: "As maturity approaches, the present value of the final principal repayment dominates, causing bond prices to move toward par."
    },
    {
      id: 4,
      topic: "Bond Pricing",
      question: "What conditions create a premium bond?",
      correctAnswer: "A bond becomes a premium bond when its coupon rate exceeds the current yield to maturity."
    },
    {
      id: 5,
      topic: "Bond Pricing",
      question: "What conditions create a discount bond?",
      correctAnswer: "A bond becomes a discount bond when its coupon rate is below the current yield to maturity."
    },
    {
      id: 6,
      topic: "Bond Risk",
      question: "Why are bonds considered lower risk than equities?",
      correctAnswer: "Bonds have contractually defined payments, making cash flows more predictable compared to uncertain equity dividends."
    },
    {
      id: 7,
      topic: "Stocks",
      question: "What is the core challenge of valuing equities versus bonds?",
      correctAnswer: "Equity valuation involves estimating uncertain residual cash flows and discretionary dividend payments."
    },
    {
      id: 8,
      topic: "Stocks",
      question: "How does the Gordon Growth Model differ from a simple perpetuity model?",
      correctAnswer: "The Gordon Growth Model assumes dividends grow at a constant rate indefinitely, while a simple perpetuity assumes no growth."
    },
    {
      id: 9,
      topic: "Stocks",
      question: "In equity valuation, what two yields compose the expected return?",
      correctAnswer: "Dividend yield and capital gains yield."
    },
    {
      id: 10,
      topic: "Stocks",
      question: "When is a stock market considered efficient?",
      correctAnswer: "When prices consistently reflect available information and move toward equilibrium levels."
    },
    {
      id: 11,
      topic: "Stocks",
      question: "What does Present Value of Growth Opportunities (PVGO) measure?",
      correctAnswer: "PVGO measures the value added by future investment opportunities above the value of existing assets."
    },
    {
      id: 12,
      topic: "Options",
      question: "What creates the intrinsic value of a call option?",
      correctAnswer: "The intrinsic value of a call option is the current asset price minus the strike price, or zero if negative."
    },
    {
      id: 13,
      topic: "Options",
      question: "Why do options typically have positive time value?",
      correctAnswer: "Time value reflects the possibility that the intrinsic value of the option will increase before expiration."
    },
    {
      id: 14,
      topic: "Options",
      question: "What does the hedge ratio represent in the binomial model?",
      correctAnswer: "The hedge ratio indicates how many options must be written to offset risk in the underlying asset."
    },
    {
      id: 15,
      topic: "Options",
      question: "Which model extends the binomial option pricing model to continuous time?",
      correctAnswer: "The Black-Scholes Option Pricing Model."
    },
    {
      id: 16,
      topic: "Options",
      question: "How does volatility influence option prices according to the Black-Scholes model?",
      correctAnswer: "Higher volatility increases option prices because it raises the likelihood of favorable price movements."
    },
    {
      id: 17,
      topic: "Futures",
      question: "What differentiates futures contracts from forward contracts regarding market structure?",
      correctAnswer: "Futures are standardized and exchange-traded with daily marking-to-market, while forwards are customized private agreements."
    },
    {
      id: 18,
      topic: "Futures",
      question: "How does marking-to-market affect futures contracts daily?",
      correctAnswer: "Marking-to-market involves settling daily gains or losses, adjusting margin accounts based on contract price changes."
    },
    {
      id: 19,
      topic: "Futures",
      question: "According to Expectations Theory, how should futures prices be set?",
      correctAnswer: "Futures prices should equal the expected future spot price adjusted for risk-free growth and asset-specific cash flows or costs."
    },
    {
      id: 20,
      topic: "Futures",
      question: "What effect do storage costs have on futures pricing?",
      correctAnswer: "Storage costs increase futures prices, reflecting the cost of holding the underlying asset until delivery."
    },
    {
      id: 21,
      topic: "Bond Valuation",
      question: "What does the yield to maturity (YTM) represent?",
      correctAnswer: "YTM is the discount rate at which the present value of all bond payments equals the bond’s current market price."
      },
      {
        id: 22,
        topic: "Bond Pricing",
        question: "Why does reinvestment risk affect actual returns on bonds?",
        correctAnswer: "Reinvestment risk occurs because future coupon payments may have to be reinvested at different interest rates, affecting actual realized yield."
      },
      {
        id: 23,
        topic: "Bond Risk",
        question: "How do maturity and coupon rate impact a bond’s interest rate sensitivity?",
        correctAnswer: "Longer maturity increases sensitivity, while higher coupon rates reduce sensitivity due to quicker reinvestment of cash flows."
      },
      {
        id: 24,
        topic: "Bond Pricing",
        question: "Why is a bond with a coupon rate higher than the yield sold at a premium?",
        correctAnswer: "Investors pay extra to secure higher coupon payments compared to the current market yield."
      },
      {
        id: 25,
        topic: "Bond Pricing",
        question: "What happens to premium bond prices as they approach maturity?",
        correctAnswer: "Premium bond prices gradually decline toward par value as maturity approaches."
      },
      {
        id: 26,
        topic: "Bond Valuation",
        question: "What makes CAPM inadequate for determining bond yields?",
        correctAnswer: "CAPM does not sufficiently account for default risk, liquidity risk, and maturity risk premiums relevant to bonds."
      },
      {
        id: 27,
        topic: "Bond Valuation",
        question: "Why do investors require an inflation premium on bonds?",
        correctAnswer: "Investors require compensation to offset the anticipated erosion of purchasing power due to inflation."
      },
      {
        id: 28,
        topic: "Stock Valuation",
        question: "How does the Gordon Growth Model account for growth in dividends?",
        correctAnswer: "It assumes dividends will grow at a constant rate indefinitely, reflected in the formula D1/(r-g)."
      },
      {
        id: 29,
        topic: "Stock Valuation",
        question: "When is the stock market considered efficient according to the Gordon Growth Model?",
        correctAnswer: "When dividend yield plus growth rate equals the required return (from CAPM) on average for all stocks."
      },
      {
        id: 30,
        topic: "Stock Valuation",
        question: "What does the retention ratio represent in equity valuation?",
        correctAnswer: "The retention ratio (b) represents the proportion of earnings reinvested in the firm rather than paid as dividends."
      },
      {
        id: 31,
        topic: "Stock Valuation",
        question: "What is the present value of growth opportunities (PVGO)?",
        correctAnswer: "PVGO measures additional stock value arising from expected profitable reinvestments beyond current operations."
      },
      {
        id: 32,
        topic: "Stock Valuation",
        question: "Why might stock prices decrease when firms reinvest earnings at low ROI?",
        correctAnswer: "Reinvesting at returns below required shareholder return destroys value, lowering the stock price."
      },
      {
        id: 33,
        topic: "Options",
        question: "What is intrinsic value for a put option?",
        correctAnswer: "Intrinsic value for a put option equals the maximum of zero or strike price minus spot price (X - S)."
      },
      {
        id: 34,
        topic: "Options",
        question: "Why does an option have positive time value even when its intrinsic value is zero?",
        correctAnswer: "Positive time value reflects potential future favorable price movements before expiration."
      },
      {
        id: 35,
        topic: "Options",
        question: "In the binomial model, what does the hedge ratio represent?",
        correctAnswer: "The hedge ratio shows how many options are required to create a risk-free portfolio with the underlying asset."
      },
      {
        id: 36,
        topic: "Options",
        question: "What does Black-Scholes assume about asset prices?",
        correctAnswer: "Black-Scholes assumes asset prices follow a continuous random walk with constant volatility."
      },
      {
        id: 37,
        topic: "Options",
        question: "How does increased volatility affect option premiums under Black-Scholes?",
        correctAnswer: "Higher volatility increases option premiums by raising the probability of profitable exercise."
      },
      {
        id: 38,
        topic: "Futures",
        question: "What distinguishes futures contracts from forward contracts?",
        correctAnswer: "Futures contracts are standardized, exchange-traded, and marked-to-market daily, unlike customized forwards."
      },
      {
        id: 39,
        topic: "Futures",
        question: "Why are most futures contracts offset before maturity?",
        correctAnswer: "Traders offset positions to avoid physical delivery and to realize gains or losses immediately."
      },
      {
        id: 40,
        topic: "Futures",
        question: "What does marking-to-market achieve in futures markets?",
        correctAnswer: "Marking-to-market ensures daily settlement of gains and losses, reducing counterparty risk."
      },
      {
        id: 41,
        topic: "Futures",
        question: "How do storage costs impact futures prices?",
        correctAnswer: "Storage costs raise futures prices due to the expense of holding the underlying asset."
      },
      {
        id: 42,
        topic: "Futures",
        question: "What role does the risk premium play in futures pricing?",
        correctAnswer: "The risk premium compensates traders for assuming price uncertainty related to hedgers' positions."
      },
      {
        id: 43,
        topic: "Futures",
        question: "What does the Expectations Theory suggest about futures prices?",
        correctAnswer: "Expectations Theory suggests futures prices equal the expected future spot prices adjusted for risk-free rates and storage or yield costs."
      },
      {
        id: 44,
        topic: "Bond Risk",
        question: "How does liquidity risk affect bond yields?",
        correctAnswer: "Lower market liquidity requires higher yields to compensate investors for potential difficulty in selling quickly."
      },
      {
        id: 45,
        topic: "Bond Risk",
        question: "What factor primarily drives the default risk premium?",
        correctAnswer: "The borrower's likelihood and ability to meet contractual payment obligations."
      },
      {
        id: 46,
        topic: "Options",
        question: "How does the length of time until expiration influence option pricing?",
        correctAnswer: "Longer expiration periods increase option prices due to more opportunities for profitable price movements."
      },
      {
        id: 47,
        topic: "Options",
        question: "Why might an American option be valued differently than a European option?",
        correctAnswer: "An American option can be exercised anytime before expiration, providing greater flexibility and potentially higher value."
      },
      {
        id: 48,
        topic: "Stocks",
        question: "What is the primary difficulty of predicting stock dividends?",
        correctAnswer: "Stock dividends are discretionary and can vary greatly based on management decisions and profitability."
      },
      {
        id: 49,
        topic: "Stocks",
        question: "What does a high capital gains yield indicate?",
        correctAnswer: "It indicates significant expected growth in dividends and share price due to profitable investment opportunities."
      },
      {
        id: 50,
        topic: "Futures",
        question: "Why do hedgers typically enter futures markets?",
        correctAnswer: "Hedgers enter futures markets to lock in prices and protect against adverse movements in underlying asset prices."
      }
];
  