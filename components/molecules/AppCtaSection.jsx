import AppButton from '../atomics/AppButton';

const AppCtaSection = () => (
    <section className="py-20 border-b border-light-gray">
      <div className="text-center">
        <h2 className="dark:text-white text-4xl lg:text-5xl font-bold text-black">
          CONTACTEZ-MOI
        </h2>
        <p className="text-xs md:text-sm text-gray max-w-[260px] md:max-w-xs mx-auto mt-2">
          Si je peux vous aider en quoi que ce soit,
          ma boîte de réception et mes médias sociaux sont
          toujours ouverts pour vous, n'hésitez pas à me contacter.
        </p>
        <AppButton title="Contactez-moi.." href="/contact" color="orange" />
      </div>
    </section>
  );

export default AppCtaSection;
