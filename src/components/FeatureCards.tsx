import FeatureCard from '@/components/FeatureCard';
import iconSupervisor from '@/assets/images/icon-supervisor.svg';
import iconTeamBuilder from '@/assets/images/icon-team-builder.svg';
import iconKarma from '@/assets/images/icon-karma.svg';
import iconCalculator from '@/assets/images/icon-calculator.svg';

function FeatureCards() {
  return (
    <main className='flex gap-8 items-center w-[90vw] mx-auto max-w-7xl flex-col xl:flex-row'>
      {/* First Column */}
      <section className='self-center'>
        <FeatureCard
          title='Supervisor'
          text='Monitors activity to identify project roadblocks'
          icon={iconSupervisor}
          topLine='border-accent'
        />
      </section>

      {/* Second Column  */}
      <section className='flex flex-col gap-y-8'>
        <FeatureCard
          title='Team Builder'
          text='Scans our talent network to create the optimal team for your project'
          icon={iconTeamBuilder}
          topLine='border-destructive'
        />
        <FeatureCard
          title='Karma'
          text='Regularly evaluates our talent to ensure quality'
          icon={iconKarma}
          topLine='border-secondary-foreground'
        />
      </section>

      {/* Third Column */}
      <section className='self-center'>
        <FeatureCard
          title='Calculator'
          text='Uses data from past projects to provide better delivery estimates'
          icon={iconCalculator}
          topLine='border-accent-foreground'
        />
      </section>
    </main>
  );
}

export default FeatureCards;
