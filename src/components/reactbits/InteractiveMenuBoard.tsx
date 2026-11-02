import React, { useState, useRef } from 'react';
import type { MenuItem } from '../../data/donBallenon';

interface InteractiveMenuBoardProps {
  items: MenuItem[];
  whatsappBaseUrl: string;
}

type CategoryFilter = 'all' | 'chopear' | 'crudo' | 'barra' | 'plancha';

const CATEGORIES: { id: CategoryFilter; label: string; countNote: string }[] = [
  { id: 'all', label: 'Toda la Carta', countNote: '9 especialidades' },
  { id: 'chopear', label: 'Pa’ Chopear', countNote: 'Entradas calientes' },
  { id: 'crudo', label: 'Aguachiles & Ceviches', countNote: 'Barra fría' },
  { id: 'barra', label: 'La Ballena & Batangas', countNote: 'Cerveza y tragos' },
  { id: 'plancha', label: 'De la Plancha', countNote: 'Tacos de muelle' },
];

function parsePrice(priceStr: string): number {
  const num = parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
  return Number.isNaN(num) ? 0 : num;
}

/**
 * React Bits Spotlight + Interactive Comanda Ledger:
 * Avoids generic card grids and nested cards by structuring the menu as a live coastal dispatch board
 * where guests filter courses, experience a warm Pacífico spotlight cursor effect,
 * and build a real "Ronda en Mesa" estimate to share on WhatsApp.
 */
export default function InteractiveMenuBoard({
  items,
  whatsappBaseUrl,
}: InteractiveMenuBoardProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedIds, setSelectedIds] = useState<Record<string, number>>({
    'doraditos-marlin': 1,
    'ballena-pacifico': 1,
  });
  const [spotlightPos, setSpotlightPos] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const boardRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category === activeCategory);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const toggleItemInRound = (id: string) => {
    setSelectedIds((prev) => {
      const current = prev[id] || 0;
      if (current > 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: 1 };
    });
  };

  const adjustQty = (id: string, delta: number) => {
    setSelectedIds((prev) => {
      const next = (prev[id] || 0) + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: Math.min(next, 12) };
    });
  };

  const selectedEntries = items
    .filter((item) => (selectedIds[item.id] || 0) > 0)
    .map((item) => ({
      item,
      qty: selectedIds[item.id],
      subtotal: parsePrice(item.price) * selectedIds[item.id],
    }));

  const totalRound = selectedEntries.reduce((acc, curr) => acc + curr.subtotal, 0);
  const totalItemsCount = selectedEntries.reduce((acc, curr) => acc + curr.qty, 0);

  const buildWhatsAppShareUrl = () => {
    if (selectedEntries.length === 0) return whatsappBaseUrl;
    const lines = selectedEntries.map(
      (entry) => `- ${entry.qty}x ${entry.item.name} (${entry.item.price})`
    );
    const message = `¡Hola Don Ballenón Américas! Queremos caer hoy a la terraza. Armamos esta ronda en su web:\n${lines.join(
      '\n'
    )}\nTotal estimado: $${totalRound} MXN. ¿Nos confirman horario y disponibilidad?`;
    return `https://wa.me/524495460406?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Strip — Minimum 44x44px touch targets */}
      <div
        role="tablist"
        aria-label="Filtrar especialidades por tiempo de cocina y barra"
        className="flex flex-wrap gap-3 p-3 rounded-2xl bg-[var(--bg-navy)] border-2 border-[var(--seam-strong)]"
      >
        {CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[46px] px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 cursor-pointer ${
                isSelected
                  ? 'bg-[var(--bg-pacifico)] text-[var(--ink-navy)]'
                  : 'bg-transparent text-[var(--ink-on-navy)] hover:bg-[var(--bg-navy-elevated)]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-xs px-2.5 py-1 rounded-md tabular-nums ${
                  isSelected
                    ? 'bg-[var(--bg-navy)] text-[var(--bg-pacifico)]'
                    : 'bg-[var(--bg-navy-elevated)] text-[var(--ink-on-navy-muted)]'
                }`}
              >
                {cat.countNote}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Split Layout: Coastal Dispatch Ledger + Live Table Round Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 8 Cols: React Bits Spotlight Menu Board */}
        <div
          ref={boardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setSpotlightPos((prev) => ({ ...prev, active: false }))}
          className="lg:col-span-8 relative rounded-2xl border-2 border-[var(--seam-strong)] bg-[var(--bg-sand-elevated)] overflow-hidden shadow-[var(--shadow-coastal)]"
        >
          {/* React Bits Spotlight Overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: spotlightPos.active ? 1 : 0,
              background: `radial-gradient(520px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(245, 184, 0, 0.22), transparent 45%)`,
            }}
          />

          <div className="divide-y-2 divide-[var(--seam-strong)] relative z-10">
            {filteredItems.map((dish) => {
              const qty = selectedIds[dish.id] || 0;
              const isAdded = qty > 0;

              return (
                <article
                  key={dish.id}
                  className={`p-6 sm:p-8 transition-colors ${
                    isAdded ? 'bg-[#FFF8DB]' : 'hover:bg-[var(--bg-sand)]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--ink-navy)]">
                        {dish.name}
                      </h3>
                      {dish.badge && (
                        <span className="inline-block text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-md bg-[var(--bg-pacifico)] text-[var(--ink-navy)]">
                          {dish.badge}
                        </span>
                      )}
                    </div>
                    <span className="tabular-nums text-lg sm:text-xl font-extrabold text-[var(--ink-navy)] bg-[var(--bg-pacifico)] px-3.5 py-1 rounded-lg self-start sm:self-auto shrink-0">
                      {dish.price}
                    </span>
                  </div>

                  <p className="mt-3 max-w-[58ch] text-sm sm:text-base text-[var(--ink-navy-muted)] leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[var(--seam-light)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold text-[var(--ink-navy-muted)]">
                      <span className="px-3 py-1.5 rounded-md bg-[var(--bg-sand-deep)] text-[var(--ink-navy)]">
                        Picor: {dish.spiceLevel}
                      </span>
                      <span className="px-3 py-1.5 rounded-md bg-[var(--bg-sand)] text-[var(--ink-navy-muted)]">
                        {dish.dietaryNote}
                      </span>
                      <span className="text-[var(--ink-navy)] underline decoration-[var(--bg-pacifico)] decoration-2 px-1 py-1">
                        {dish.pairing}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 self-start sm:self-auto shrink-0">
                      {isAdded ? (
                        <div className="inline-flex items-center rounded-xl bg-[var(--bg-navy)] text-[var(--bg-pacifico)] p-1">
                          <button
                            type="button"
                            onClick={() => adjustQty(dish.id, -1)}
                            aria-label={`Quitar una orden de ${dish.name}`}
                            className="min-w-[44px] min-h-[44px] flex items-center justify-center font-extrabold text-base hover:bg-[var(--bg-navy-elevated)] rounded-lg cursor-pointer"
                          >
                            −
                          </button>
                          <span
                            aria-live="polite"
                            className="px-3.5 tabular-nums font-extrabold text-sm text-[var(--ink-on-navy)]"
                          >
                            {qty} en ronda
                          </span>
                          <button
                            type="button"
                            onClick={() => adjustQty(dish.id, 1)}
                            aria-label={`Agregar otra orden de ${dish.name}`}
                            className="min-w-[44px] min-h-[44px] flex items-center justify-center font-extrabold text-base hover:bg-[var(--bg-navy-elevated)] rounded-lg cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => toggleItemInRound(dish.id)}
                          className="min-h-[44px] px-4 py-2.5 rounded-xl border-2 border-[var(--seam-strong)] bg-[var(--bg-pacifico)] hover:bg-[var(--bg-pacifico-bright)] text-[var(--ink-navy)] font-extrabold text-xs sm:text-sm transition-colors cursor-pointer"
                        >
                          + Sumar a mi ronda
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Right 4 Cols: Live Comanda / Table Round Builder (Flattened inner hierarchy, no nested cards) */}
        <aside
          aria-label="Simulador de comanda y ronda en mesa"
          className="lg:col-span-4 rounded-2xl border-2 border-[var(--seam-strong)] bg-[var(--bg-navy)] text-[var(--ink-on-navy)] p-6 sm:p-7 shadow-[var(--shadow-coastal-lg)] lg:sticky lg:top-24"
        >
          <div className="pb-4 border-b-2 border-[var(--seam-on-navy)] flex items-center justify-between gap-3">
            <h3 className="text-2xl font-extrabold text-[var(--bg-pacifico)]">
              Tu Comanda de Mesa
            </h3>
            <span className="tabular-nums text-xs font-bold px-3 py-1.5 rounded-md bg-[var(--bg-navy-elevated)] text-[var(--ink-on-navy-muted)]">
              {totalItemsCount} {totalItemsCount === 1 ? 'ítem' : 'ítems'}
            </span>
          </div>

          <p className="mt-4 text-sm text-[var(--ink-on-navy-muted)]">
            Calcula tu antojo antes de llegar a Av. Las Américas #206 o mándaselo al grupo de amigos por WhatsApp.
          </p>

          {selectedEntries.length === 0 ? (
            <div className="my-6 py-6 border-y border-dashed border-[var(--seam-on-navy)] text-center space-y-2">
              <p className="text-sm font-bold text-[var(--ink-on-navy)]">
                Tu hielera está vacía por ahora
              </p>
              <p className="text-xs text-[var(--ink-on-navy-muted)]">
                Selecciona "+ Sumar a mi ronda" en cualquier platillo o bebida de la carta para armar el plan.
              </p>
            </div>
          ) : (
            <ul className="my-5 divide-y divide-[var(--seam-on-navy)] space-y-3">
              {selectedEntries.map(({ item, qty, subtotal }) => (
                <li key={item.id} className="pt-3 first:pt-0 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-[var(--ink-on-navy)]">
                      <span className="tabular-nums text-[var(--bg-pacifico)] mr-1.5">
                        {qty}x
                      </span>
                      {item.name}
                    </p>
                    <p className="text-xs text-[var(--ink-on-navy-muted)] mt-0.5">
                      {item.categoryLabel}
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="tabular-nums text-sm font-extrabold text-[var(--bg-pacifico)]">
                      ${subtotal}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleItemInRound(item.id)}
                      aria-label={`Eliminar ${item.name} de la comanda`}
                      className="min-w-[44px] min-h-[44px] rounded-lg bg-[var(--bg-navy-elevated)] text-[var(--ink-on-navy-muted)] hover:text-[var(--bg-pacifico)] flex items-center justify-center cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="pt-5 border-t-2 border-[var(--seam-on-navy)] space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-bold text-[var(--ink-on-navy-muted)]">
                Total estimado en mesa
              </span>
              <span className="tabular-nums text-2xl font-extrabold text-[var(--bg-pacifico)]">
                ${totalRound} MXN
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={buildWhatsAppShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[var(--bg-pacifico)] hover:bg-[var(--bg-pacifico-bright)] text-[var(--ink-navy)] font-extrabold text-sm text-center flex items-center justify-center gap-2 transition-colors"
              >
                <span>Mandar Comanda por WhatsApp</span>
              </a>

              {selectedEntries.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSelectedIds({})}
                  className="w-full min-h-[44px] px-3 py-2.5 rounded-xl bg-[var(--bg-navy-elevated)] hover:bg-[#19447A] text-[var(--ink-on-navy-muted)] font-bold text-xs text-center transition-colors cursor-pointer"
                >
                  Limpiar selección
                </button>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
