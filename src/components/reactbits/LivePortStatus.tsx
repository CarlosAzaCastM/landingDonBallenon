import React, { useEffect, useState } from 'react';

interface LivePortStatusProps {
  mapsUrl: string;
  phoneRaw: string;
}

export default function LivePortStatus({ mapsUrl, phoneRaw }: LivePortStatusProps) {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    label: string;
    detail: string;
    todayMusic: string;
  }>({
    isOpen: true,
    label: 'PUERTO ABIERTO HOY · 12:00 PM A 1:00 AM',
    detail: 'Av. Las Américas #206 · Cocina de mar y barra sirviendo al fresco',
    todayMusic: 'Ambiente costero, DJ y música en vivo de jueves a domingo',
  });

  useEffect(() => {
    try {
      const now = new Date();
      const mxTimeStr = now.toLocaleString('en-US', {
        timeZone: 'America/Mexico_City',
      });
      const mxDate = new Date(mxTimeStr);
      const day = mxDate.getDay();
      const hour = mxDate.getHours();

      const isLateNightOpen = day !== 1 && hour === 0;
      const isDaytimeOpen = hour >= 12 && hour <= 23;
      const isOpen = isDaytimeOpen || isLateNightOpen;

      const musicByDay: Record<number, string> = {
        0: 'Hoy Domingo: Sazón levanta-muertos, acústico costero y caldito de camarón',
        1: 'Hoy Lunes: Barra de puerto abierta y Ballenas Pacífico al punto de nieve',
        2: 'Hoy Martes: Tardeada soleada con Coquitas Batangas y marisco fresco',
        3: 'Hoy Miércoles: Media semana de aguachiles bravos y tarros escarchados',
        4: 'Hoy Jueves: DJ Set Tropical y arranque de fin de semana en terraza',
        5: 'Hoy Viernes: Salsa en vivo y grupo norteño en tarima desde la tarde',
        6: 'Hoy Sábado: Música en vivo, ambiente de malecón y cortesía en espera',
      };

      const closingText = day === 0 ? '12:00 AM' : '01:00 AM';

      setStatus({
        isOpen,
        label: isOpen
          ? `ABIERTO AHORA EN TERRAZA · CIERRA A LAS ${closingText}`
          : 'COCINA PREPARANDO PUERTO · ABRE HOY 12:00 PM',
        detail: isOpen
          ? 'Mesas disponibles al aire libre en Av. Las Américas #206'
          : 'Planea tu llegada hoy a partir del mediodía en Av. Las Américas #206',
        todayMusic: musicByDay[day] || musicByDay[5],
      });
    } catch {
      // Keep default SSR state
    }
  }, []);

  return (
    <div
      role="region"
      aria-label="Estado actual del restaurante en tiempo real"
      className="w-full rounded-2xl border-2 border-[var(--seam-strong)] bg-[var(--bg-sand-elevated)] p-5 sm:p-6 shadow-[var(--shadow-coastal)]"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-[var(--seam-light)]">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={`inline-block h-3.5 w-3.5 rounded-full border border-[var(--seam-strong)] ${
              status.isOpen ? 'bg-[#1E6B38]' : 'bg-[var(--bg-pacifico)]'
            }`}
          />
          <span className="tabular-nums text-xs sm:text-sm font-bold tracking-wide text-[var(--ink-navy)]">
            {status.label}
          </span>
        </div>
        <span className="tabular-nums text-xs font-bold px-3 py-1.5 rounded-lg bg-[var(--bg-pacifico)] text-[var(--ink-navy)] self-start sm:self-auto">
          Ticket prom. $200 – $500 MXN
        </span>
      </div>

      <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm sm:text-base font-bold text-[var(--ink-navy)]">
            {status.detail}
          </p>
          <p className="text-xs sm:text-sm text-[var(--ink-navy-muted)]">
            {status.todayMusic}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 rounded-xl bg-[var(--bg-navy)] text-[var(--bg-pacifico)] font-bold text-xs sm:text-sm hover:bg-[var(--bg-navy-elevated)] transition-colors"
          >
            Abrir Mapa
          </a>
          <a
            href={`tel:${phoneRaw}`}
            className="inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 rounded-xl bg-[var(--bg-sand-deep)] text-[var(--ink-navy)] font-bold text-xs sm:text-sm hover:bg-[var(--bg-pacifico)] transition-colors tabular-nums"
          >
            Llamar: 449 546 0406
          </a>
        </div>
      </div>
    </div>
  );
}
