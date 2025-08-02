'use client';

  import { useEffect } from 'react';
  import { useRouter } from 'next/navigation';

  export default function Dashboard() {
    const router = useRouter();
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    useEffect(() => {
      if (!token) {
        router.push('/login');
      }
    }, [token, router]);

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
      </div>
    );
  }