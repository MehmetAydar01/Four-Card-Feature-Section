import FeatureCard from '@/components/FeatureCard';

function FeatureCards() {
  return (
    <main>
      {/* First Column */}
      <section>
        <FeatureCard />
      </section>

      {/* Second Column  */}
      <section>
        <FeatureCard />
        <FeatureCard />
      </section>

      {/* Third Column */}
      <section>
        <FeatureCard />
      </section>
    </main>
  );
}

export default FeatureCards;
