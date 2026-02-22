// NoveLand Login/Register Modal
// Dark modal with login and register tabs, matching landnovel.com design

import { useState } from 'react';
import { toast } from 'sonner';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [registerForm, setRegisterForm] = useState({
    username: '', password: '', confirmPassword: '',
    firstname: '', lastname: '', email: '', phone: '',
  });

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info('ฟีเจอร์เข้าสู่ระบบกำลังพัฒนา');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      toast.error('รหัสผ่านไม่ตรงกัน');
      return;
    }
    toast.info('ฟีเจอร์สมัครสมาชิกกำลังพัฒนา');
  };

  return (
    <div className="ln-modal-overlay" onClick={onClose}>
      <div
        style={{
          background: 'rgb(19, 19, 19)',
          width: '90%',
          maxWidth: '60rem',
          height: 'auto',
          maxHeight: '90vh',
          display: 'flex',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 0 30px rgba(0,0,0,0.7)',
          position: 'relative',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '1rem',
            fontSize: '1.5rem',
            color: 'white',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          ×
        </button>

        {/* Left form area */}
        <div style={{
          width: '65%',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* Tab switcher */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <button
              onClick={() => setTab('login')}
              style={{
                background: 'none',
                border: 'none',
                color: tab === 'login' ? '#405fff' : 'rgba(255,255,255,0.5)',
                fontSize: '1.2rem',
                fontFamily: "'Kanit', sans-serif",
                cursor: 'pointer',
                borderBottom: tab === 'login' ? '2px solid #405fff' : '2px solid transparent',
                paddingBottom: '0.25rem',
                transition: 'all 0.3s',
              }}
            >
              เข้าสู่ระบบ
            </button>
            <button
              onClick={() => setTab('register')}
              style={{
                background: 'none',
                border: 'none',
                color: tab === 'register' ? '#405fff' : 'rgba(255,255,255,0.5)',
                fontSize: '1.2rem',
                fontFamily: "'Kanit', sans-serif",
                cursor: 'pointer',
                borderBottom: tab === 'register' ? '2px solid #405fff' : '2px solid transparent',
                paddingBottom: '0.25rem',
                transition: 'all 0.3s',
              }}
            >
              สมัครสมาชิก
            </button>
          </div>

          {tab === 'login' ? (
            <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: '22rem' }}>
              <FormInput
                label="ผู้ใช้งาน"
                type="text"
                value={loginForm.username}
                onChange={v => setLoginForm(f => ({ ...f, username: v }))}
                placeholder="กรุณากรอกชื่อผู้ใช้"
              />
              <FormInput
                label="รหัสผ่าน"
                type="password"
                value={loginForm.password}
                onChange={v => setLoginForm(f => ({ ...f, password: v }))}
                placeholder="กรุณากรอกรหัสผ่าน"
              />
              <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>
                  ฉันจำรหัสไม่ได้
                </a>
              </div>
              <button type="submit" style={{
                width: '100%',
                padding: '0.6rem',
                background: '#405fff',
                border: 'none',
                borderRadius: '0.75rem',
                color: 'white',
                fontSize: '1rem',
                fontFamily: "'Kanit', sans-serif",
                cursor: 'pointer',
                marginBottom: '0.75rem',
                transition: 'background 0.3s',
              }}>
                เข้าสู่ระบบ
              </button>
              <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                ยังไม่มีบัญชี?{' '}
                <button
                  type="button"
                  onClick={() => setTab('register')}
                  style={{ background: 'none', border: 'none', color: '#405fff', cursor: 'pointer', fontFamily: "'Kanit', sans-serif" }}
                >
                  สมัครสมาชิก
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegister} style={{ width: '100%', maxWidth: '22rem', overflowY: 'auto', maxHeight: '60vh' }}>
              <FormInput label="ผู้ใช้งาน" type="text" value={registerForm.username}
                onChange={v => setRegisterForm(f => ({ ...f, username: v }))}
                placeholder="a-z, A-Z, 0-9 เท่านั้น" />
              <FormInput label="รหัสผ่าน" type="password" value={registerForm.password}
                onChange={v => setRegisterForm(f => ({ ...f, password: v }))}
                placeholder="มากกว่า 5 ตัวอักษร" />
              <FormInput label="ยืนยันรหัสผ่าน" type="password" value={registerForm.confirmPassword}
                onChange={v => setRegisterForm(f => ({ ...f, confirmPassword: v }))}
                placeholder="มากกว่า 5 ตัวอักษร" />
              <FormInput label="ชื่อ" type="text" value={registerForm.firstname}
                onChange={v => setRegisterForm(f => ({ ...f, firstname: v }))} />
              <FormInput label="นามสกุล" type="text" value={registerForm.lastname}
                onChange={v => setRegisterForm(f => ({ ...f, lastname: v }))} />
              <FormInput label="อีเมล์" type="email" value={registerForm.email}
                onChange={v => setRegisterForm(f => ({ ...f, email: v }))} />
              <FormInput label="เบอร์มือถือ" type="tel" value={registerForm.phone}
                onChange={v => setRegisterForm(f => ({ ...f, phone: v }))}
                placeholder="0-9 เท่านั้น" />
              <button type="submit" style={{
                width: '100%',
                padding: '0.6rem',
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
                สมัครสมาชิก
              </button>
            </form>
          )}
        </div>

        {/* Right banner area */}
        <div style={{
          width: '35%',
          background: `linear-gradient(0deg, rgb(19,19,19) 0%, rgba(0,0,0,0.5) 50%, rgb(19,19,19) 100%), url(https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          <span style={{
            fontFamily: "'Sriracha', cursive",
            fontSize: '2.5rem',
            fontWeight: '700',
            background: 'linear-gradient(120deg, #8196ff 0%, #405fff 50%, #2b42be 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center',
          }}>
            NoveLand
          </span>
          <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', fontSize: '0.9rem', padding: '0 1rem' }}>
            อ่านนิยายออนไลน์ฟรี<br />อัปเดตทุกวัน
          </p>
        </div>
      </div>
    </div>
  );
}

function FormInput({
  label, type, value, onChange, placeholder
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div style={{
      border: '2px solid rgba(255,255,255,0.2)',
      borderRadius: '1rem',
      position: 'relative',
      marginBottom: '0.75rem',
      padding: '0.75rem 1rem 0.5rem',
    }}>
      <label style={{
        display: 'block',
        fontSize: '0.75rem',
        color: 'rgba(255,255,255,0.5)',
        marginBottom: '0.15rem',
      }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'white',
          width: '100%',
          fontSize: '0.95rem',
          fontFamily: "'Kanit', sans-serif",
        }}
      />
    </div>
  );
}
