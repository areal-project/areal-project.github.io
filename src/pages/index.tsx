import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Landing from "@site/src/components/Landing";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="AReaL is open research infrastructure for asynchronous reinforcement learning and agentic post-training."
    >
      <main>
        <Landing />
      </main>
    </Layout>
  );
}
