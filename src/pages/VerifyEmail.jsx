import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { HiOutlineMail } from 'react-icons/hi';

function VerifyEmail() {
  const { currentUser, resendVerification } = useAuth();
  const navigate = useNavigate();
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // redirect if not logged in
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  // check every 3 sec if email got verified
  useEffect(() => {
    const interval = setInterval(async () => {
      if (currentUser) {
        await currentUser.reload();
        if (currentUser.emailVerified) {
          toast.success('Email verified! Welcome aboard!');
          navigate('/dashboard');
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentUser, navigate]);

  const handleResend = async () => {
    try {
      await resendVerification();
      toast.success('Verification email sent!');
      setResendDisabled(true);
      setCountdown(60);
    } catch (error) {
      toast.error('Failed to send email. Try again later.');
    }
  };

  // countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setResendDisabled(false);
    }
  }, [countdown]);

  return (
    <div className="min-h-screen bg-lightbg flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center animate-fadeInUp">
        
        <div className="w-20 h-20 bg-capsule rounded-full flex items-center justify-center mx-auto mb-6">
          <HiOutlineMail className="text-primary" size={40} />
        </div>

        <h1 className="font-manrope font-extrabold text-2xl text-dark mb-3">
          Verify Your Email
        </h1>
        
        <p className="font-inter text-gray text-sm mb-2">
          We've sent a verification link to:
        </p>
        
        <p className="font-inter font-semibold text-dark text-base mb-6">
          {currentUser?.email}
        </p>

        <p className="font-inter text-gray text-sm mb-8">
          Click the link in your email to verify your account. 
          This page will automatically redirect once verified.
        </p>

        <div className="flex justify-center gap-3 mb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-10 h-12 bg-inputbg border border-border rounded-lg animate-pulse-slow"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        <button
          onClick={handleResend}
          disabled={resendDisabled}
          className="w-full h-12 bg-primary text-white font-manrope font-bold text-base rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {countdown > 0 ? `Resend in ${countdown}s` : 'Resend Verification Email'}
        </button>

        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p className="font-inter text-sm text-gray">Waiting for verification...</p>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
