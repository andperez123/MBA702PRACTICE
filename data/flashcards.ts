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
  },
  {
    id: 31,
    subject: "Bonds",
    front: "Why are long-term bonds more sensitive to interest rate changes than short-term bonds?",
    back: "Long-term bonds have higher duration, meaning their cash flows occur further in the future and are more impacted by changes in interest rates."
  },
  {
    id: 32,
    subject: "Bonds",
    front: "Why do lower-coupon bonds have greater interest rate risk than higher-coupon bonds?",
    back: "Lower-coupon bonds have more of their value in the final payment, making them more sensitive to changes in interest rates."
  },
  {
    id: 33,
    subject: "Bonds",
    front: "Why is a multivariate model preferred over CAPM for bond valuation?",
    back: "CAPM excludes bond-specific risks like maturity, liquidity, and default. A multivariate model includes these, providing more accurate yield estimates."
  },
  {
    id: 34,
    subject: "Bonds",
    front: "What is the bond pricing formula using present value?",
    back: "Price = Σ(Coupon / (1 + r)^t) + (Par Value / (1 + r)^n), where r is the market yield and t = time."
  },
  {
    id: 35,
    subject: "Bonds",
    front: "What is reinvestment risk in bonds and why does it matter?",
    back: "It’s the risk that coupons can't be reinvested at the same YTM, which can cause actual returns to fall short of YTM assumptions."
  },
  {
    id: 36,
    subject: "Bonds",
    front: "How do call and convertible provisions affect bond yields?",
    back: "Callable bonds require higher yields due to prepayment risk. Convertible bonds offer lower yields due to their upside potential."
  },
  {
    id: 37,
    subject: "Bonds",
    front: "How does the secondary market enhance bond liquidity and affect yields?",
    back: "A liquid secondary market reduces yields by making bonds easier to sell. Illiquid bonds need higher yields to attract buyers."
  },
  {
    id: 38,
    subject: "Stocks",
    front: "When is each dividend discount model appropriate: no-growth, constant growth, variable growth?",
    back: "No-growth: stable firms (utilities). Constant growth: mature firms. Variable growth: firms transitioning from high to stable growth."
  },
  {
    id: 39,
    subject: "Stocks",
    front: "Why does the Gordon Growth Model fail when r ≤ g?",
    back: "The denominator (r - g) becomes 0 or negative, causing the price to become infinite or undefined."
  },
  {
    id: 40,
    subject: "Stocks",
    front: "What is stock equilibrium and how does CAPM help achieve it?",
    back: "Equilibrium means expected return = required return. CAPM adjusts required return based on beta to reflect market risk."
  },
  {
    id: 41,
    subject: "Stocks",
    front: "What is the CAPM formula and what does it measure?",
    back: "Required Return = rf + β(rm - rf). It measures expected return based on systematic market risk."
  },
  {
    id: 42,
    subject: "Options",
    front: "What do S·N(d₁) and X·e^(-rt)·N(d₂) represent in the Black-Scholes Model?",
    back: "S·N(d₁) = PV of expected stock value; X·e^(-rt)·N(d₂) = PV of expected exercise payment."
  },
  {
    id: 43,
    subject: "Options",
    front: "Why do deep ITM and deep OTM options have low time value?",
    back: "Deep ITM options have limited additional upside; deep OTM options are unlikely to become profitable."
  },
  {
    id: 44,
    subject: "Options",
    front: "What is a covered call strategy?",
    back: "Owning the stock and selling a call option. It limits upside but provides income from the call premium."
  },
  {
    id: 45,
    subject: "Futures",
    front: "What is position offsetting in futures contracts?",
    back: "It involves entering an opposite futures position to close out an existing one, avoiding physical delivery."
  },
  {
    id: 46,
    subject: "Futures",
    front: "What is the formula for futures pricing with yield and storage costs?",
    back: "F = Spot × (1 + r + storage cost - yield)^t, adjusting for time value and carrying costs."
  },
  {
    id: 47,
    subject: "Futures",
    front: "What is symmetric vs. asymmetric hedging in derivatives?",
    back: "Futures provide symmetric hedging (lock in price). Options provide asymmetric hedging (limit downside, keep upside)."
  },
  {
    id: 48,
    subject: "Futures",
    front: "How does daily settlement in futures reduce credit risk?",
    back: "Gains and losses are settled daily via margin accounts, preventing buildup of uncollateralized losses."
  },
  {
    id: 49,
    subject: "Options",
    front: "Why does more time to maturity increase call option value?",
    back: "Longer time allows more chance for favorable price movement, increasing time value and option price."
  },
  {
    id: 50,
    subject: "Options",
    front: "Why must Black-Scholes be adjusted for American options and dividends?",
    back: "It assumes no early exercise and no payouts, which isn't valid for American or dividend-paying stocks."
  }
];