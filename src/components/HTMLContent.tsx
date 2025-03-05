"use client";

import ClientOnly from './ClientOnly';

interface HTMLContentProps {
  html: string;
  className?: string;
}

export default function HTMLContent({ html, className = "" }: HTMLContentProps) {
  // Sunucu tarafında render edilmeyecek, sadece istemci tarafında render edilecek
  return (
    <ClientOnly fallback={<span className={className}>{html.replace(/<[^>]*>/g, '')}</span>}>
      <span 
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </ClientOnly>
  );
} 