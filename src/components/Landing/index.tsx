import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "@theme/Heading";

import publications from "@site/src/data/publications.json";
import partners from "@site/src/data/partners.json";

import styles from "./styles.module.css";

type PaperAction = {
  label: string;
  href: string;
};

type Publication = {
  image: string;
  meta: string;
  title: string;
  abstract: string;
  actions: PaperAction[];
};

type Partner = {
  name: string;
  logo: string;
  href: string;
};

type UseCard = {
  label: string;
  description: string;
  linkLabel: string;
  href: string;
  Svg: ReactNode;
};

const useCards: UseCard[] = [
  {
    label: "01",
    description: "Set up your environment in one command.",
    linkLabel: "Installation guide",
    href: "https://areal-project.github.io/AReaL/en/tutorial/installation.html",
    Svg: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" fill="none">
        <defs>
          <linearGradient id="termBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#f4f6fb" />
          </linearGradient>
        </defs>
        <rect
          x="55"
          y="80"
          width="290"
          height="140"
          rx="10"
          fill="url(#termBg)"
          stroke="rgba(15,16,18,0.14)"
        />
        <circle cx="74" cy="100" r="4" fill="#ff5f57" />
        <circle cx="88" cy="100" r="4" fill="#febc2e" />
        <circle cx="102" cy="100" r="4" fill="#28c840" />
        <line x1="55" y1="118" x2="345" y2="118" stroke="rgba(15,16,18,0.08)" />
        <text
          x="72"
          y="162"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fontSize="15"
          fill="#3a3d44"
        >
          $ uv sync --extra cuda
        </text>
        <path
          d="M300 156 l 8 9 l 18 -18"
          stroke="#14a66f"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="72"
          y="182"
          width="8"
          height="14"
          fill="#3a3d44"
          opacity="0.6"
        />
      </svg>
    ),
  },
  {
    label: "02",
    description: "Mix leading algorithms with popular backends.",
    linkLabel: "Supported stack",
    href: "https://github.com/areal-project/AReaL#-supported-features",
    Svg: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
          d="M140 94 C 200 94 200 154 260 154"
          stroke="#c8dcff"
          strokeWidth="1.4"
        />
        <path
          d="M140 154 C 200 154 200 94 260 94"
          stroke="#c8dcff"
          strokeWidth="1.4"
        />
        <path
          d="M140 154 C 200 154 200 214 260 214"
          stroke="#c8dcff"
          strokeWidth="1.4"
        />
        <path
          d="M140 214 C 200 214 200 154 260 154"
          stroke="#c8dcff"
          strokeWidth="1.4"
        />
        <g
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="13"
          fill="#0f1012"
        >
          <rect
            x="52"
            y="80"
            width="88"
            height="28"
            rx="14"
            fill="#eaf3ff"
            stroke="#b7d3ff"
          />
          <text x="96" y="99" textAnchor="middle">
            GRPO
          </text>
          <rect
            x="52"
            y="140"
            width="88"
            height="28"
            rx="14"
            fill="#eaf3ff"
            stroke="#b7d3ff"
          />
          <text x="96" y="159" textAnchor="middle">
            PPO
          </text>
          <rect
            x="52"
            y="200"
            width="88"
            height="28"
            rx="14"
            fill="#eaf3ff"
            stroke="#b7d3ff"
          />
          <text x="96" y="219" textAnchor="middle">
            DAPO
          </text>
          <rect
            x="260"
            y="80"
            width="88"
            height="28"
            rx="14"
            fill="#e7f8ee"
            stroke="#b6e2c8"
          />
          <text x="304" y="99" textAnchor="middle">
            Megatron
          </text>
          <rect
            x="260"
            y="140"
            width="88"
            height="28"
            rx="14"
            fill="#e7f8ee"
            stroke="#b6e2c8"
          />
          <text x="304" y="159" textAnchor="middle">
            FSDP
          </text>
          <rect
            x="260"
            y="200"
            width="88"
            height="28"
            rx="14"
            fill="#e7f8ee"
            stroke="#b6e2c8"
          />
          <text x="304" y="219" textAnchor="middle">
            SGLang
          </text>
        </g>
        <g
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="9"
          fill="#8b8f97"
          letterSpacing="0.06em"
        >
          <text x="96" y="60" textAnchor="middle">
            ALGORITHMS
          </text>
          <text x="304" y="60" textAnchor="middle">
            BACKENDS
          </text>
        </g>
      </svg>
    ),
  },
  {
    label: "03",
    description: "Start from a ready-to-run agentic RL example — like Hermes.",
    linkLabel: "Browse examples",
    href: "https://github.com/areal-project/AReaL/tree/main/examples/hermes",
    Svg: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect
          x="46"
          y="56"
          width="308"
          height="188"
          rx="12"
          fill="#ffffff"
          stroke="rgba(15,16,18,0.12)"
        />
        <g fontFamily="ui-sans-serif, system-ui, sans-serif">
          <text x="66" y="86" fontSize="14" fontWeight="600" fill="#0f1012">
            Hermes
          </text>
          <text
            x="66"
            y="102"
            fontSize="10"
            fill="#8b8f97"
            letterSpacing="0.04em"
          >
            ONLINE RL LOOP · EXAMPLE
          </text>
          <rect
            x="290"
            y="72"
            width="52"
            height="20"
            rx="10"
            fill="#e7f8ee"
            stroke="#b6e2c8"
          />
          <text
            x="316"
            y="86"
            fontSize="10"
            fill="#14a66f"
            textAnchor="middle"
            fontWeight="600"
          >
            RUN
          </text>
        </g>
        <g
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="11"
          fill="#0f1012"
        >
          <rect
            x="60"
            y="124"
            width="76"
            height="30"
            rx="8"
            fill="#eaf3ff"
            stroke="#b7d3ff"
          />
          <text x="98" y="144" textAnchor="middle">
            Rollout
          </text>
          <path d="M138 139 h 12" stroke="#b7d3ff" strokeWidth="1.4" />
          <path
            d="M148 135 l 6 4 l -6 4"
            stroke="#b7d3ff"
            strokeWidth="1.4"
            fill="none"
          />
          <rect
            x="156"
            y="124"
            width="76"
            height="30"
            rx="8"
            fill="#faf1e6"
            stroke="#e9cfa5"
          />
          <text x="194" y="144" textAnchor="middle">
            Reward
          </text>
          <path d="M234 139 h 12" stroke="#e9cfa5" strokeWidth="1.4" />
          <path
            d="M244 135 l 6 4 l -6 4"
            stroke="#e9cfa5"
            strokeWidth="1.4"
            fill="none"
          />
          <rect
            x="252"
            y="124"
            width="88"
            height="30"
            rx="8"
            fill="#e7f8ee"
            stroke="#b6e2c8"
          />
          <text x="296" y="144" textAnchor="middle">
            Train
          </text>
        </g>
        <g>
          <line
            x1="66"
            y1="216"
            x2="334"
            y2="216"
            stroke="rgba(15,16,18,0.10)"
            strokeWidth="1"
          />
          <line
            x1="66"
            y1="176"
            x2="66"
            y2="216"
            stroke="rgba(15,16,18,0.10)"
            strokeWidth="1"
          />
          <path
            d="M66 212 Q 130 205 178 190 T 334 172"
            stroke="#14a66f"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
    ),
  },
];

function Hero(): ReactNode {
  const flowImg = useBaseUrl("img/areal/areal-flow-fig1.svg");
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <div className={styles.container}>
        <Heading as="h1" className={styles.heroHeadline}>
          What&apos;s AReaL
        </Heading>
        <p className={styles.heroSub}>
          A reinforcement learning (RL) infrastructure designed to bridge
          foundation model training with modern agent-based applications.
        </p>
        <p className="font-small text-lg text-gray-700 dark:text-gray-300">
          We are part of the{" "}
          <a
            href="https://landscape.pytorch.org/?item=training--distributed--areal"
            target="_blank"
            rel="noopener noreferrer"
          >
            PyTorch Foundation Landscape Project
          </a>
          .
        </p>
        <div
          className={styles.heroVisual}
          role="img"
          aria-label="AReaL asynchronous agentic RL loop"
        >
          <img src={flowImg} alt="AReaL asynchronous agentic RL loop" />
        </div>
      </div>
    </section>
  );
}

function UseSection(): ReactNode {
  return (
    <section className={styles.section} id="use">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Get running in minutes.
          </Heading>
        </div>
        <div className={styles.cardGrid}>
          {useCards.map((card) => (
            <Link key={card.label} className={styles.card} href={card.href}>
              <div className={styles.cardVisual} aria-hidden="true">
                {card.Svg}
              </div>
              <span className={styles.cardLabel}>{card.label}</span>
              <p className={styles.cardDesc}>{card.description}</p>
              <span className={styles.cardLink}>
                {card.linkLabel} <span className={styles.arrow}>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchSection(): ReactNode {
  return (
    <section className={styles.section} id="research">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Research Publications
          </Heading>
        </div>
        <div className={styles.paperList}>
          {(publications as Publication[]).map((paper) => (
            <article key={paper.title} className={styles.paper}>
              <div className={styles.paperVisual}>
                <img src={useBaseUrl(paper.image)} alt={paper.title} />
              </div>
              <div className={styles.paperBody}>
                <span className={styles.paperMeta}>{paper.meta}</span>
                <Heading as="h3" className={styles.paperTitle}>
                  {paper.title}
                </Heading>
                <p className={styles.paperAbstract}>{paper.abstract}</p>
                <div className={styles.paperActions}>
                  {paper.actions.map((action) => (
                    <Link
                      key={action.label}
                      className={styles.paperBtn}
                      href={action.href}
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection(): ReactNode {
  return (
    <section className={styles.section} id="partners">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Partner
          </Heading>
        </div>
        <div className={styles.partnersGrid}>
          {(partners as Partner[]).map((partner) => (
            <Link
              key={partner.name}
              className={styles.partnerTile}
              href={partner.href}
            >
              <img src={useBaseUrl(partner.logo)} alt={partner.name} />
              <span>{partner.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Landing(): ReactNode {
  return (
    <div className={styles.landing}>
      <Hero />
      <UseSection />
      <ResearchSection />
      <PartnersSection />
    </div>
  );
}
