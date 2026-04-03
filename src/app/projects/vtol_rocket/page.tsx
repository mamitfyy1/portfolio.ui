import Image from "next/image";

import styles from "./page.module.css";

export default function VtolRocketPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Project Detail</p>

          <h1 className={styles.title}>
            VTOL Rocket System
            <br />
            3D Design
          </h1>

          <p className={styles.description}>
            This project is a 3D mechanical design study I developed 
            while I was a member of the Graviton FoF team. I worked 
            on the structural and mechanical design side of a vertical
            landing rocket system; focusing on the overall mechanical
            concept of layout, component positioning, and assembly.
          </p>

          <div className={styles.badges}>
            <span className={styles.badge}>Mechanical Design</span>
            <span className={styles.badge}>Teknofest Team Project</span>
            <span className={styles.badge}>3D Modeling</span>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroGlow} />
          <div className={styles.imageCard}>
           <Image
  src="/asset/backgroundImages/text-bg.png"
  alt="VTOL Rocket 3D Design"
  width={1200}
  height={800}
  className={styles.heroImage}
/>
          </div>
        </div>
      </section>

      <section className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <p className={styles.infoLabel}>Project Type</p>
          <h3 className={styles.infoValue}>VTOL Rocket System</h3>
        </div>

        <div className={styles.infoCard}>
          <p className={styles.infoLabel}>Team</p>
          <h3 className={styles.infoValue}>Graviton FoF Team</h3>
        </div>

        <div className={styles.infoCard}>
          <p className={styles.infoLabel}>My Role</p>
          <h3 className={styles.infoValue}>Mechanical Designer</h3>
        </div>

        <div className={styles.infoCard}>
          <p className={styles.infoLabel}>Focus</p>
          <h3 className={styles.infoValue}>Structure & Layout</h3>
        </div>
      </section>

      <section className={styles.contentGrid}>
        <div className={styles.contentCard}>
          <h2 className={styles.sectionTitle}>About the Design</h2>

          <p className={styles.paragraph}>
            This design was created as part of a VTOL rocket system concept
            during my time in a Teknofest team. The main goal of the work was to
            develop a clean, functional, and mechanically reasonable structure
            that could support the main system components.
          </p>

          <p className={styles.paragraph}>
            While working on the model, I focused on the arrangement of the
            structural members, the placement of the central tank, and the
            overall balance of the assembly. I also considered the visual and
            practical relationship between components to create a more organized
            and realistic design.
          </p>

          <p className={styles.paragraph}>
            This project helped me improve my understanding of mechanical
            thinking, structural layout, and design communication inside a team
            environment.
          </p>
        </div>

        <div className={styles.contentCard}>
          <h2 className={styles.sectionTitle}>Engineering Approach</h2>

          <ul className={styles.list}>
            <li>Focused on a clear structural frame to support the central system.</li>
            <li>Considered component placement and overall mechanical symmetry.</li>
            <li>Balanced concept readability with a clean visual organization.</li>
            <li>Tried to build a model that communicates the system clearly.</li>
            <li>Gained experience in a real team-based aerospace project environment.</li>
          </ul>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>Design Gallery</h2>

        <div className={styles.galleryGrid}>
          <div className={styles.galleryCard}>
            <Image
  src="/asset/backgroundImages/text-bg1.png"
  alt="VTOL Rocket 3D Design"
  width={1200}
  height={800}
  className={styles.heroImage}
/>
          </div>

          <div className={styles.galleryCard}>
           <Image
  src="/asset/backgroundImages/text-bg2.png"
  alt="VTOL Rocket 3D Design"
  width={1200}
  height={800}
  className={styles.heroImage}
/>
          </div>
        </div>
      </section>

      <section className={styles.bottomGrid}>
        <div className={styles.contentCard}>
          <h2 className={styles.sectionTitle}>Tools & Skills Used</h2>

          <div className={styles.badges}>
            <span className={styles.badge}>Solidworks</span>
            <span className={styles.badge}>Mechanical Thinking</span>
            <span className={styles.badge}>Structural Layout</span>
            <span className={styles.badge}>Team Collaboration</span>
            <span className={styles.badge}>Concept Development</span>
          </div>
        </div>

        <div className={styles.contentCard}>
          <h2 className={styles.sectionTitle}>What I Learned</h2>

          <p className={styles.paragraph}>
            This project improved my perspective on mechanical design in a team
            environment. It allowed me to practice design thinking, improve my
            3D modeling workflow, and better understand how a concept can be
            translated into a more structured engineering model.
          </p>
        </div>
      </section>
    </main>
  );
}