'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TrendingUp, TrendingDown, Eye, EyeOff } from 'lucide-react';

interface ChartData {
  time: string;
  price: number;
  volume: number;
}

interface Order {
  id: string;
  type: 'BUY' | 'SELL';
  orderType: 'MARKET' | 'LIMIT';
  amount: number;
  price: number;
  timestamp: string;
}

const generateChartData = (): ChartData[] => {
  const data: ChartData[] = [];
  let basePrice = 42000;
  
  for (let i = 0; i < 24; i++) {
    const variation = (Math.random() - 0.5) * 1000;
    basePrice += variation;
    data.push({
      time: `${i}:00`,
      price: Math.max(basePrice, 40000),
      volume: Math.floor(Math.random() * 10000) + 5000,
    });
  }
  return data;
};

const cryptoAssets = [
  { symbol: 'BTC/USD', name: 'Bitcoin', price: 42250.50, change: 2.45, icon: '₿' },
  { symbol: 'ETH/USD', name: 'Ethereum', price: 2245.80, change: -1.23, icon: 'Ξ' },
  { symbol: 'BNB/USD', name: 'Binance Coin', price: 612.30, change: 3.12, icon: '⬢' },
  { symbol: 'XRP/USD', name: 'Ripple', price: 2.45, change: -0.87, icon: '✕' },
];

export default function TradingDemo() {
  const [chartData, setChartData] = useState<ChartData[]>(generateChartData());
  const [selectedAsset, setSelectedAsset] = useState(cryptoAssets[0]);
  const [orderType, setOrderType] = useState<'MARKET' | 'LIMIT'>('MARKET');
  const [tradeType, setTradeType] = useState<'BUY' | 'SELL'>('BUY');
  const [amount, setAmount] = useState('1.5');
  const [limitPrice, setLimitPrice] = useState('42000');
  const [orders, setOrders] = useState<Order[]>([]);
  const [balance, setBalance] = useState(50000);
  const [showBalance, setShowBalance] = useState(true);

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const newData = [...prev.slice(1)];
        const lastPrice = prev[prev.length - 1].price;
        const variation = (Math.random() - 0.5) * 500;
        newData.push({
          time: new Date().getHours() + ':00',
          price: Math.max(lastPrice + variation, 40000),
          volume: Math.floor(Math.random() * 10000) + 5000,
        });
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePlaceOrder = () => {
    const orderPrice = orderType === 'MARKET' ? selectedAsset.price : parseFloat(limitPrice);
    const totalCost = parseFloat(amount) * orderPrice;

    if (tradeType === 'BUY' && totalCost > balance) {
      alert('Insufficient balance');
      return;
    }

    const newOrder: Order = {
      id: `ORD-${Date.now()}`,
      type: tradeType,
      orderType: orderType,
      amount: parseFloat(amount),
      price: orderPrice,
      timestamp: new Date().toLocaleTimeString(),
    };

    setOrders([newOrder, ...orders]);
    
    if (tradeType === 'BUY') {
      setBalance(prev => prev - totalCost);
    } else {
      setBalance(prev => prev + totalCost);
    }

    setAmount('');
    setLimitPrice('');
  };

  const currentPrice = chartData[chartData.length - 1]?.price || selectedAsset.price;
  const estimatedTotal = (parseFloat(amount) || 0) * (orderType === 'MARKET' ? currentPrice : parseFloat(limitPrice) || currentPrice);

  return (
    <div className="w-full bg-gradient-to-br from-background via-secondary/30 to-background rounded-2xl border border-border/50 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border/50 p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Virtual Trading Demo</h2>
          <p className="text-muted-foreground">Experience live trading with realistic market data</p>
        </div>
      </div>

      {/* Main Trading Area */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Asset Selector */}
            <div className="flex flex-wrap gap-2">
              {cryptoAssets.map((asset) => (
                <button
                  key={asset.symbol}
                  onClick={() => setSelectedAsset(asset)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedAsset.symbol === asset.symbol
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  {asset.symbol}
                </button>
              ))}
            </div>

            {/* Price Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{selectedAsset.name}</h3>
                  <p className="text-muted-foreground">{selectedAsset.symbol}</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold">${currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  <p className={`flex items-center justify-end gap-1 text-lg font-semibold ${selectedAsset.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {selectedAsset.change >= 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                    {selectedAsset.change >= 0 ? '+' : ''}{selectedAsset.change}%
                  </p>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-card border border-border/30 rounded-xl p-4">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="time" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" domain={['dataMin - 1000', 'dataMax + 1000']} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                    }}
                    formatter={(value) => `$${(value as number).toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
                  />
                  <Area type="monotone" dataKey="price" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorPrice)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Order Book */}
            <div className="grid grid-cols-2 gap-4">
              {/* Sell Orders */}
              <div className="bg-card border border-border/30 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Sell Orders</h4>
                <div className="space-y-2">
                  {[42500, 42750, 43000, 43250, 43500].map((price, i) => (
                    <div key={i} className="flex justify-between items-center p-2 bg-secondary/50 rounded hover:bg-secondary/70 cursor-pointer transition">
                      <span className="text-foreground">${price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground">{(Math.random() * 5).toFixed(2)} BTC</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buy Orders */}
              <div className="bg-card border border-border/30 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Buy Orders</h4>
                <div className="space-y-2">
                  {[41500, 41250, 41000, 40750, 40500].map((price, i) => (
                    <div key={i} className="flex justify-between items-center p-2 bg-secondary/50 rounded hover:bg-secondary/70 cursor-pointer transition">
                      <span className="text-foreground">${price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground">{(Math.random() * 5).toFixed(2)} BTC</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trading Panel */}
          <div className="space-y-4">
            {/* Account Balance */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground font-semibold">Account Balance</span>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-3xl font-bold">
                {showBalance ? `$${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '••••'}
              </p>
            </div>

            {/* Trade Type Selection */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-muted-foreground">Trade Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTradeType('BUY')}
                  className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                    tradeType === 'BUY'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  BUY
                </button>
                <button
                  onClick={() => setTradeType('SELL')}
                  className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                    tradeType === 'SELL'
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/50'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  SELL
                </button>
              </div>
            </div>

            {/* Order Type Selection */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-muted-foreground">Order Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setOrderType('MARKET')}
                  className={`py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                    orderType === 'MARKET'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  Market
                </button>
                <button
                  onClick={() => setOrderType('LIMIT')}
                  className={`py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                    orderType === 'LIMIT'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  Limit
                </button>
              </div>
            </div>

            {/* Amount Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground">Amount ({selectedAsset.symbol.split('/')[0]})</label>
              <Input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-secondary border-border/50 text-foreground"
              />
            </div>

            {/* Limit Price Input */}
            {orderType === 'LIMIT' && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted-foreground">Limit Price (USD)</label>
                <Input
                  type="number"
                  placeholder={selectedAsset.price.toString()}
                  value={limitPrice}
                  onChange={(e) => setLimitPrice(e.target.value)}
                  className="bg-secondary border-border/50 text-foreground"
                />
              </div>
            )}

            {/* Order Summary */}
            <div className="bg-secondary/50 border border-border/30 rounded-lg p-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Price</span>
                <span className="font-semibold">${(orderType === 'MARKET' ? currentPrice : parseFloat(limitPrice) || currentPrice).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total</span>
                <span className="font-semibold">${estimatedTotal.toFixed(2)}</span>
              </div>
              <div className="border-t border-border/30 pt-2 flex justify-between text-sm font-semibold">
                <span>Est. Profit/Loss</span>
                <span className={estimatedTotal >= 0 ? 'text-green-500' : 'text-red-500'}>
                  {estimatedTotal >= 0 ? '+' : ''}{estimatedTotal.toFixed(2)} USDT
                </span>
              </div>
            </div>

            {/* Place Order Button */}
            <Button
              onClick={handlePlaceOrder}
              className={`w-full py-6 text-lg font-bold rounded-lg transition-all ${
                tradeType === 'BUY'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/50'
                  : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/50'
              }`}
            >
              Place {tradeType} Order
            </Button>
          </div>
        </div>

        {/* Recent Orders */}
        {orders.length > 0 && (
          <div className="mt-8 bg-card border border-border/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border/30">
                  <tr>
                    <th className="text-left py-2 text-muted-foreground font-semibold">Order ID</th>
                    <th className="text-left py-2 text-muted-foreground font-semibold">Type</th>
                    <th className="text-left py-2 text-muted-foreground font-semibold">Order Type</th>
                    <th className="text-left py-2 text-muted-foreground font-semibold">Amount</th>
                    <th className="text-left py-2 text-muted-foreground font-semibold">Price</th>
                    <th className="text-left py-2 text-muted-foreground font-semibold">Total</th>
                    <th className="text-left py-2 text-muted-foreground font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b border-border/20 hover:bg-secondary/50 transition">
                      <td className="py-3 text-foreground">{order.id}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          order.type === 'BUY' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {order.type}
                        </span>
                      </td>
                      <td className="py-3">{order.orderType}</td>
                      <td className="py-3">{order.amount.toFixed(4)}</td>
                      <td className="py-3">${order.price.toFixed(2)}</td>
                      <td className="py-3">${(order.amount * order.price).toFixed(2)}</td>
                      <td className="py-3 text-muted-foreground">{order.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
