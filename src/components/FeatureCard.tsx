import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';

type FeatureCardProps = {
  title: string;
  text: string;
  icon: string;
  topLine: string;
};

function FeatureCard({ title, text, icon, topLine }: FeatureCardProps) {
  return (
    <Card className='w-80 sm:w-96 shadow-xl relative'>
      {/* Top Line */}
      <div
        className={`absolute top-0 left-0 w-full border-l-8 border-l-transparent border-t-0 border-r-8 border-r-transparent border-b-[4px] ${topLine}`}
      ></div>
      <CardHeader className='p-4 sm:p-8'>
        <CardTitle className='text-2xl text-primary mb-2'>{title}</CardTitle>
        <CardDescription className='text-primary-foreground w-72'>
          {text}
        </CardDescription>
      </CardHeader>
      <CardFooter className='p-4 sm:p-8 justify-end'>
        <img src={icon} alt={`icon${title}`} />
      </CardFooter>
    </Card>
  );
}
export default FeatureCard;
