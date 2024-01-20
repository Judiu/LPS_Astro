import BentoItem from './BentoItem';

export const Bento = () => {
    return(
        <section
            className={'*:w-full max-w-[1400px] grid grid-cols-10 auto-rows-[35rem] gap-4 mx-auto p-20'}
        >
            <BentoItem title="Ferroscan"/>
            <BentoItem title="Licencias"/>
            <BentoItem title="Patologias"/>
            <BentoItem title="Arquitectura"/>
        </section>
    )
}


