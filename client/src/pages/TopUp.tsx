// NoveLand TopUp Page
import { toast } from 'sonner';

const PACKAGES = [
  { coins: 10, price: 10, bonus: 0 },
  { coins: 30, price: 30, bonus: 0 },
  { coins: 50, price: 50, bonus: 5 },
  { coins: 100, price: 100, bonus: 15 },
  { coins: 200, price: 200, bonus: 40 },
  { coins: 500, price: 500, bonus: 125 },
];

export default function TopUp() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>
          <i className="fa-solid fa-coins" style={{ color: '#ffd650', marginRight: '0.75rem' }}></i>
          เติมเหรียญ
        </h1>
        <p style={{ opacity: 0.6, marginBottom: '2rem' }}>เลือกแพ็กเกจที่ต้องการ</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 14rem), 1fr))',
          gap: '1rem',
          maxWidth: '60rem',
        }}>
          {PACKAGES.map(pkg => (
            <div
              key={pkg.coins}
              style={{
                background: 'var(--secondary)',
                border: '1px solid var(--border)',
                borderRadius: '1.25rem',
                padding: '1.5rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
                position: 'relative',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#405fff';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(64,95,255,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => toast.info('ฟีเจอร์เติมเงินกำลังพัฒนา')}
            >
              {pkg.bonus > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '-0.75rem',
                  right: '1rem',
                  background: '#db4040',
                  color: 'white',
                  padding: '0.2rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                }}>
                  +{pkg.bonus} โบนัส
                </div>
              )}
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                <i className="fa-solid fa-coins" style={{ color: '#ffd650' }}></i>
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.25rem' }}>
                {pkg.coins + pkg.bonus} เหรียญ
              </div>
              {pkg.bonus > 0 && (
                <div style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.5rem' }}>
                  ({pkg.coins} + {pkg.bonus} โบนัส)
                </div>
              )}
              <div style={{
                background: '#405fff',
                color: 'white',
                borderRadius: '0.75rem',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                fontWeight: '600',
                marginTop: '0.75rem',
              }}>
                ฿{pkg.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
