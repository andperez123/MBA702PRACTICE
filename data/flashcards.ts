export type Flashcard = {
  id: number;
  subject: string;
  front: string;
  back: string;
};

export const flashcards: Flashcard[] = [
  // Week 1: Financial Markets and Instruments
  {
    id: 1,
    subject: "Bonds",
    front: "What is Yield to Maturity (YTM)?",
    back: "The discount rate that equates the bond's price to the present value of its future coupon and principal payments."
  },
  {
    id: 2,
    subject: "Bonds",
    front: "What determines if a bond trades at a premium, discount, or par?",
    back: "Premium: Coupon rate > YTM\nDiscount: Coupon rate < YTM\nPar: Coupon rate = YTM"
  },
  {
    id: 3,
    subject: "Bonds",
    front: "What four conditions must hold true for a bondholder to actually earn the Yield to Maturity?",
    back: "1. Hold the bond until maturity\n2. Reinvest coupons at YTM\n3. No default occurs\n4. Market yields remain constant"
  },
  {
    id: 4,
    subject: "Bonds",
    front: "What are the four components of bond yields in the multivariate model?",
    back: "Risk-free rate (rf), Default Risk Premium (DRP), Maturity Risk Premium (MRP), Liquidity Premium (LP)"
  },
  // Week 2: Stocks and Equity Markets
  {
    id: 5,
    subject: "Stocks",
    front: "What is the Gordon Growth Model?",
    back: "A valuation model that calculates stock price assuming dividends grow at a constant rate: \nPrice = D₁ / (r - g)"
  },
  {
    id: 6,
    subject: "Stocks",
    front: "What two components make up the expected return in stock valuation?",
    back: "Dividend Yield (DY) and Capital Gains Yield (CGY). Expected Return = DY + CGY"
  },
  {
    id: 7,
    subject: "Stocks",
    front: "What is non-constant (variable) growth in dividends?",
    back: "Dividends grow at varying rates initially, then stabilize at a constant growth rate; valuation involves multiple stages of discounting."
  },
  {
    id: 8,
    subject: "Stocks",
    front: "What is PVGO (Present Value of Growth Opportunities)?",
    back: "The additional value from reinvesting earnings into projects exceeding investors' required returns, calculated as stock price minus value of assets in place."
  },
  // Week 3: Options and Derivatives
  {
    id: 9,
    subject: "Options",
    front: "What is intrinsic value of an option?",
    back: "The immediate exercise value: \nCall = max(S - X, 0), Put = max(X - S, 0)"
  },
  {
    id: 10,
    subject: "Options",
    front: "What is time value in options?",
    back: "The additional premium above intrinsic value, reflecting the possibility the option will increase in value before expiration."
  },
  {
    id: 11,
    subject: "Options",
    front: "What is the Black-Scholes Option Pricing Model used for?",
    back: "Valuing European call options using current asset price, strike price, volatility, risk-free rate, and time to expiration."
  },
  {
    id: 12,
    subject: "Options",
    front: "What factors increase the value of a call option?",
    back: "Higher underlying asset price, lower strike price, longer time to expiration, higher volatility, and higher interest rates."
  },
  // Week 4: Futures and Forward Contracts
  {
    id: 13,
    subject: "Futures",
    front: "What distinguishes futures contracts from forward contracts?",
    back: "Futures contracts are standardized, traded on exchanges, marked-to-market daily, and require margin accounts. Forwards are customized private agreements."
  },
  {
    id: 14,
    subject: "Futures",
    front: "What is 'marking to market' in futures trading?",
    back: "Daily settlement process adjusting margin accounts based on changes in the futures price."
  },
  {
    id: 15,
    subject: "Futures",
    front: "What is the Expectations Theory of Futures Pricing?",
    back: "Theory stating futures price equals the expected future spot price, adjusted for the risk-free rate and storage costs or yields."
  },
  {
    id: 16,
    subject: "Futures",
    front: "What is hedging with futures contracts?",
    back: "Using futures contracts to offset risk by locking in prices for future transactions, thus reducing exposure to price fluctuations."
  },
  // Additional Bond Topics
  {
    id: 17,
    subject: "Bonds",
    front: "What is maturity risk premium (MRP)?",
    back: "An additional return required by investors to compensate for interest rate risk due to longer maturities."
  },
  {
    id: 18,
    subject: "Bonds",
    front: "How does liquidity premium (LP) affect bond yields?",
    back: "Less liquid bonds require higher yields as compensation for lower ease of trading in secondary markets."
  },
  // Additional Stock Topics
  {
    id: 19,
    subject: "Stocks",
    front: "What assumption does the perpetuity model make for dividends?",
    back: "Dividends remain constant indefinitely, never changing over time."
  },
  {
    id: 20,
    subject: "Stocks",
    front: "What is the dividend yield (DY)?",
    back: "The next expected dividend divided by the current stock price: DY = D₁ / P₀."
  },
  // Additional Options Topics
  {
    id: 21,
    subject: "Options",
    front: "What is capital gains yield (CGY)?",
    back: "The expected annual price appreciation of a stock, typically equal to the dividend growth rate (g)."
  },
  {
    id: 22,
    subject: "Options",
    front: "How does a retention ratio (b) influence stock valuation?",
    back: "Higher retention (b) increases growth potential (g) if reinvested earnings earn returns above investors' required returns."
  },
  {
    id: 23,
    subject: "Options",
    front: "What determines if reinvesting earnings increases or decreases stock value?",
    back: "Reinvestment increases stock value if ROI > investors' required return; decreases value otherwise."
  },
  {
    id: 24,
    subject: "Options",
    front: "What does the hedge ratio (h) represent in options valuation?",
    back: "The number of option contracts needed to offset price risk of holding the underlying asset."
  },
  {
    id: 25,
    subject: "Options",
    front: "How does volatility affect option prices?",
    back: "Higher volatility increases option value due to greater potential for large price movements."
  },
  {
    id: 26,
    subject: "Options",
    front: "What are European vs American options?",
    back: "European options can only be exercised at expiration; American options can be exercised anytime before expiration."
  },
  {
    id: 27,
    subject: "Options",
    front: "What is a call option?",
    back: "An option giving the holder the right, but not obligation, to buy an asset at a specified strike price."
  },
  {
    id: 28,
    subject: "Options",
    front: "What is a put option?",
    back: "An option giving the holder the right, but not obligation, to sell an asset at a specified strike price."
  },
  // Additional Futures Topics
  {
    id: 29,
    subject: "Futures",
    front: "What happens to a futures contract at the end of each trading day?",
    back: "It is marked-to-market, and gains/losses are settled daily through margin accounts."
  },
  {
    id: 30,
    subject: "Futures",
    front: "How do storage costs affect futures pricing?",
    back: "Higher storage costs increase futures prices due to the additional expense of holding the asset."
  }
];