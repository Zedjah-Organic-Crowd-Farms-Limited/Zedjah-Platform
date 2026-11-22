"use client";

import { useMemo, useState } from "react";
import { ArrowRight, SlidersHorizontal, X } from "lucide-react";
import styles from "./store.module.css";

import type { ShopProduct } from "./products";

export type Facet = { key: string; label: string; count: number };

export default function ShopCatalog({
  products,
  categories,
  growers,
}: {
  products: ShopProduct[];
  categories: Facet[];
  growers: Facet[];
}) {
  const [cat, setCat] = useState<Set<string>>(new Set());
  const [grow, setGrow] = useState<Set<string>>(new Set());
  const [open, setOpen] = useState(false);

  const toggle = (set: Set<string>, key: string, apply: (s: Set<string>) => void) => {
    const next = new Set(set);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    apply(next);
  };

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (cat.size === 0 || cat.has(p.category)) &&
          (grow.size === 0 || grow.has(p.grower))
      ),
    [products, cat, grow]
  );

  const active = cat.size + grow.size;

  return (
    <div className={styles.catalog}>
      <button
        type="button"
        className={styles.filterToggle}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="shop-filters"
      >
        <SlidersHorizontal size={16} />
        Filters
        {active > 0 && <span className={styles.filterCount}>{active}</span>}
      </button>

      <aside
        id="shop-filters"
        className={`${styles.filters} ${open ? styles.filtersOpen : ""}`}
        aria-label="Filter the shelf"
      >
        <div className={styles.filterHead}>
          <h3 className={styles.filterTitle}>Filters</h3>
          {active > 0 && (
            <button
              type="button"
              className={styles.clear}
              onClick={() => {
                setCat(new Set());
                setGrow(new Set());
              }}
            >
              Clear
            </button>
          )}
          <button
            type="button"
            className={styles.filterClose}
            onClick={() => setOpen(false)}
            aria-label="Close filters"
          >
            <X size={18} />
          </button>
        </div>

        <fieldset className={styles.facet}>
          <legend className={styles.facetLegend}>Category</legend>
          {categories.map((c) => (
            <label key={c.key} className={styles.option}>
              <input
                type="checkbox"
                className={styles.check}
                checked={cat.has(c.key)}
                onChange={() => toggle(cat, c.key, setCat)}
              />
              <span className={styles.optionLabel}>{c.label}</span>
              <span className={styles.optionCount}>{c.count}</span>
            </label>
          ))}
        </fieldset>

        <fieldset className={styles.facet}>
          <legend className={styles.facetLegend}>Grower</legend>
          {growers.map((g) => (
            <label key={g.key} className={styles.option}>
              <input
                type="checkbox"
                className={styles.check}
                checked={grow.has(g.key)}
                onChange={() => toggle(grow, g.key, setGrow)}
              />
              <span className={styles.optionLabel}>{g.label}</span>
              <span className={styles.optionCount}>{g.count}</span>
            </label>
          ))}
        </fieldset>
      </aside>

      <div className={styles.results}>
        <div className={styles.resultsHead}>
          <span className={styles.resultsCount}>
            <span className="num">{filtered.length}</span> of{" "}
            <span className="num">{products.length}</span> harvests
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>No harvests match those filters this week.</p>
            <button
              type="button"
              className={styles.emptyLink}
              onClick={() => {
                setCat(new Set());
                setGrow(new Set());
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((p) => (
              <article
                key={p.id}
                className={styles.card}
                id={`product-${p.id}`}
                data-tone={p.tone}
              >
                <div className={styles.cardMedia} aria-hidden="true">
                  <span className={styles.cardMark}>{p.name}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{p.name}</h3>
                  <p className={styles.cardSubtitle}>{p.subtitle}</p>
                  <p className={styles.cardSize}>{p.size}</p>
                  <div className={styles.cardFoot}>
                    <span className={`${styles.cardPrice} num`}>{p.price}</span>
                    <a
                      href={`/store/${p.id}`}
                      className={styles.cardLink}
                      aria-label={`More details on ${p.name}`}
                    >
                      More details <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
