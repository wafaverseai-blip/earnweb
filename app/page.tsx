import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Earn ₹1 for every 30‑second ad you watch
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Advertisers get real human views for just ₹2 each.
        Start earning today!
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/signup" className="btn-primary">
          Get Started
        </Link>
        <Link href="/login" className="bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition">
          Login
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="text-3xl mb-2">👀</div>
          <h3 className="text-xl font-semibold mb-2">Watch Ads</h3>
          <p className="text-gray-600">Spend 30 seconds, earn ₹1 instantly added to your wallet.</p>
        </div>
        <div className="card">
          <div className="text-3xl mb-2">💰</div>
          <h3 className="text-xl font-semibold mb-2">Withdraw Earnings</h3>
          <p className="text-gray-600">Transfer to your UPI account when you reach ₹100.</p>
        </div>
        <div className="card">
          <div className="text-3xl mb-2">📈</div>
          <h3 className="text-xl font-semibold mb-2">Advertise</h3>
          <p className="text-gray-600">Reach real people. ₹2 per view. Minimum budget ₹100.</p>
        </div>
      </div>
    </div>
  );
}
