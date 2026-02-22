// NoveLand Wallet Page
import { Link } from 'wouter';

export default function Wallet() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem' }}>
          <i className="fa-solid fa-wallet" style={{ color: '#405fff', marginRight: '0.75rem' }}></i>
          กระเป๋าสตางค์
        </h1>

        {/* Balance card */}
        <div style={{
          background: 'linear-gradient(135deg, #405fff, #2b42be)',
          borderRadius: '1.5rem',
          padding: '2rem',
          marginBottom: '2rem',
          color: 'white',
          maxWidth: '30rem',
        }}>
          <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.5rem' }}>ยอดเหรียญ</div>
          <div style={{ fontSize: '3rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fa-solid fa-coins" style={{ color: '#ffd650', fontSize: '2rem' }}></i>
            0
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Link href="/topup" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: '0.75rem',
                padding: '0.5rem 1.5rem',
                color: 'white',
                fontFamily: "'Kanit', sans-serif",
                cursor: 'pointer',
                fontSize: '0.95rem',
              }}>
                <i className="fa-solid fa-plus" style={{ marginRight: '0.5rem' }}></i>
                เติมเหรียญ
              </button>
            </Link>
          </div>
        </div>

        {/* Transaction history */}
        <div style={{ opacity: 0.5, textAlign: 'center', padding: '2rem' }}>
          <i className="fa-solid fa-receipt" style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'block' }}></i>
          <div>ยังไม่มีประวัติการทำรายการ</div>
        </div>
      </div>
    </div>
  );
}
