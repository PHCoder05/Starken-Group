'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function IndustriesRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to products page
    router.replace('/products');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Products...</p>
      </div>
    </div>
  );
} 