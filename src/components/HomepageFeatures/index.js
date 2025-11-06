import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/luke-skywalker-lightsaber-svgrepo-com.svg').default,
    description: (
      <>
        Docusaurus es un tipus de páginas interessant per a programar
        el que tuvuigues, diferent a qualsevol altra coneguda
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/lightsaber-svgrepo-com.svg').default,
    description: (
      <>
        Docusaurus vorem si acabe de entendre-ho
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/angry-birds-2-svgrepo-com.svg').default,
    description: (
      <>
        Facebook es una xarxa social unpoc ambigüa.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
