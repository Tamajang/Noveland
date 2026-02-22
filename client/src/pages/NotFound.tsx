// NoveLand 404 Page
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '1rem',
      paddingTop: '5rem',
      textAlign: 'center',
    }}>
      <div style={{
        fontSize: '8rem',
        fontFamily: "'Fjalla One', sans-serif",
        color: '#405fff',
        lineHeight: 1,
        textShadow: '0 0 40px rgba(64,95,255,0.4)',
      }}>
        404
      </div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: '700' }}>ไม่พบหน้าที่คุณต้องการ</h1>
      <p style={{ opacity: 0.6 }}>หน้าที่คุณกำลังมองหาอาจถูกลบหรือย้ายไปแล้ว</p>
      <Link href="/">
        <button style={{
          padding: '0.6rem 2rem',
          background: '#405fff',
          border: 'none',
          borderRadius: '0.75rem',
          color: 'white',
          fontSize: '1rem',
          fontFamily: "'Kanit', sans-serif",
          cursor: 'pointer',
          marginTop: '0.5rem',
          transition: 'background 0.3s',
        }}>
          <i className="fa-solid fa-house" style={{ marginRight: '0.5rem' }}></i>
          กลับหน้าหลัก
        </button>
      </Link>
    </div>
  );
}
