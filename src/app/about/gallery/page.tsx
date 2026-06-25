"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Play, Camera, Film, Grid } from "lucide-react";
import styles from "./gallery.module.css";

type Category = "All" | "Photos" | "Videos";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const mediaItems = [
    {
      id: "v1",
      type: "Videos",
      title: "Sustainable Irrigation Setup",
      duration: "3:45",
      category: "Farming Tech",
      image: "/images/machinery_operations_1779118784139.png",
    },
    {
      id: "v2",
      type: "Videos",
      title: "Organic Fertilizer Production",
      duration: "5:20",
      category: "Soil Health",
      image: "/images/production_consultancy_1779118393249.png",
    },
    {
      id: "v3",
      type: "Videos",
      title: "Harvest Season Highlights",
      duration: "2:15",
      category: "Community",
      image: "/images/about-farmers.png",
    },
    {
      id: "p1",
      type: "Photos",
      title: "Cabbage Farming Rows",
      category: "Crops",
      aspect: "square",
      image: "/images/agro_ecology_1779118707372.png",
    },
    {
      id: "p2",
      type: "Photos",
      title: "Soil Analysis Testing",
      category: "Research",
      aspect: "portrait",
      image: "/images/soil_management_1779118410388.png",
    },
    {
      id: "p3",
      type: "Photos",
      title: "Crowdfarm Partner Event",
      category: "Events",
      aspect: "landscape",
      image: "/images/partner_hero.png",
    },
    {
      id: "p4",
      type: "Photos",
      title: "Irrigation Drip System",
      category: "Tech",
      aspect: "landscape",
      image: "/images/farm_system_management_1779118365872.png",
    },
    {
      id: "p5",
      type: "Photos",
      title: "Fresh Harvest Prep",
      category: "Harvest",
      aspect: "square",
      image: "/images/farm_trainings_1779118593151.png",
    },
    {
      id: "p6",
      type: "Photos",
      title: "Partner Training Session",
      category: "Education",
      aspect: "portrait",
      image: "/images/financial_literacy_1779118571197.png",
    },
  ];

  const filteredItems = mediaItems.filter(
    (item) => activeTab === "All" || item.type === activeTab
  );

  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Link href="/about" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to About
          </Link>
          <span className={styles.tag}>Gallery</span>
          <h1 className={styles.title}>A Glimpse Into Zedjah</h1>
          <p className={styles.subtitle}>
            Explore the vibrant life on our farms. From modern irrigation systems to thriving crops and partner events, see how we grow.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container section">
        {/* Navigation Tabs */}
        <div className={styles.tabContainer}>
          <button
            onClick={() => setActiveTab("All")}
            className={`${styles.tabBtn} ${activeTab === "All" ? styles.activeTab : ""}`}
          >
            <Grid size={16} /> All Media
          </button>
          <button
            onClick={() => setActiveTab("Photos")}
            className={`${styles.tabBtn} ${activeTab === "Photos" ? styles.activeTab : ""}`}
          >
            <Camera size={16} /> Photos
          </button>
          <button
            onClick={() => setActiveTab("Videos")}
            className={`${styles.tabBtn} ${activeTab === "Videos" ? styles.activeTab : ""}`}
          >
            <Film size={16} /> Videos
          </button>
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.card} ${item.type === "Photos" ? styles[item.aspect || "square"] : styles.videoCard} animate-fade-in`}
            >
              <div className={styles.mediaWrapper} style={{ position: "relative" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                  priority={item.id.includes("1")}
                />
                <div className={styles.overlay}>
                  <span className={styles.category}>{item.category}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  {item.type === "Videos" && (
                    <span className={styles.duration}>{item.duration}</span>
                  )}
                </div>

                {item.type === "Videos" && (
                  <div className={styles.playButton}>
                    <Play fill="currentColor" size={20} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
