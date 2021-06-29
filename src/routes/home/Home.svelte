<script>
  import HookDetail from '../../components/HookDetail.svelte';
  import BlogTeaser from '../../components/BlogTeaser.svelte';
  import Clock from '../../components/Clock.svelte';
  export let data, helpers;

  export let foo;

  // add permalinks to the hook list so we can link to the posts.
  const hooks = data.hookInterface.map((hook) => ({
    ...hook,
    link: helpers.permalinks.hooks({ slug: hook.hook.toLocaleLowerCase() }),
  }));

  const p = (function (
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
  ) {
    return {
      data: [
        {
          id: g,
          generate: a,
          permalink: '\u002Fformations\u002Fgdpr',
          available: a,
          title: 'GDPR',
          subtitle: 'RGPD',
          footer: 'RGPD \u002F GDPR',
          team: e,
          preview: {
            colors: { primary: '#FFC72E', secondary: '#3E2514', logo: d },
            imgs: {
              illustration: { url: '\u002F5017\u002F1562059566-visumissiongdpr.svg', alt: 'data_team_logo' },
              logo: { url: '\u002F5017\u002F1561989754-logomissiongdpr.svg', alt: h },
              both: { url: '\u002F5017\u002F1574440102-missiongdpr.svg', alt: h },
            },
            subtitle: 'Le Règlement Général sur la Protection des Données (RGPD)',
            extra:
              '\u003Ch3\u003ESensibilisation \u003C\u002Fbr\u003E au \u003Cstrong\u003EGDPR ou RGPD\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\n',
            content:
              '\u003Cp\u003ELe RGPD (gdpr) ou la Protection des Données\u003C\u002Fp\u003E\n\n\u003Cp\u003Eet le Règlement Européen\u003C\u002Fp\u003E\n',
            hashtags: '#rgpd #gdpr #compliance #seriousgame #elearning',
          },
          themes: [
            {
              id: '2699127',
              titre: 'Introduction au RGPD ou GDPR',
              illustration: {
                url: '\u002F5017\u002F1582217832-landinggdpr01.svg',
                alt: 'Introduction au règlement européen',
              },
              generate: a,
              permalink: '\u002Fformations\u002Fgdpr\u002Freglement-europeen',
            },
            {
              id: '2700022',
              titre: 'Données personnelles et sensibles',
              illustration: { url: '\u002F5017\u002F1582217830-landinggdpr03.svg', alt: 'Données personnels' },
              generate: a,
              permalink: '\u002Fformations\u002Fgdpr\u002Fdonnees-personnelles',
            },
            {
              id: '2705265',
              titre: i,
              illustration: { url: '\u002F5017\u002F1582217819-landinggdpr05.svg', alt: i },
              generate: a,
              permalink: '\u002Fformations\u002Fgdpr\u002Ftraitement-donnees',
            },
            {
              id: '2699605',
              titre: j,
              illustration: { url: '\u002F5017\u002F1582217831-landinggdpr02.svg', alt: j },
              generate: a,
              permalink: '\u002Fformations\u002Fgdpr\u002Fprotection-donnees',
            },
            {
              id: '2705025',
              titre: k,
              illustration: { url: '\u002F5017\u002F1582217820-landinggdpr04.svg', alt: k },
              generate: a,
              permalink: '\u002Fformations\u002Fgdpr\u002Fdroits-personnes',
            },
            {
              id: '2705374',
              titre: 'Obligations légales',
              illustration: { url: '\u002F5017\u002F1582217818-landinggdpr06.svg', alt: 'Obligation Legales' },
              generate: a,
              permalink: '\u002Fformations\u002Fgdpr\u002Fobligations-legales',
            },
          ],
        },
        {
          id: '31264969',
          generate: a,
          permalink: '\u002Fformations\u002Fsecurity',
          available: a,
          title: 'SECURITY',
          subtitle: l,
          footer: l,
          team: e,
          preview: {
            colors: { primary: '#7FBBBD', secondary: '#162B45', logo: d },
            imgs: {
              illustration: { url: '\u002F5017\u002F1599573134-slidesecurity.svg', alt: b },
              logo: { url: '\u002F5017\u002F1562774075-logomissionsecurity.svg', alt: m },
              both: { url: '\u002F5017\u002F1574440127-missionsecurity.svg', alt: m },
            },
            subtitle: 'Les bonnes pratiques en matière de cybersécurité et de SSI',
            extra:
              '\u003Ch3\u003ESensibilisation \u003C\u002Fbr\u003E à la \u003Cstrong\u003Ecybersécurité\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\n',
            content:
              '\u003Cp\u003ELes Bonnes Pratiques\u003C\u002Fp\u003E\n\n\u003Cp\u003Een Matière de Cybersécurité et de SSI\u003C\u002Fp\u003E\n',
            hashtags: '#cybersécurité #sensibilisation #RSSI #seriousgame #elearning',
          },
          themes: [
            {
              id: '2705560',
              titre: n,
              illustration: { url: '\u002F5017\u002F1582217816-landingsecurity01.svg', alt: n },
              generate: a,
              permalink: '\u002Fformations\u002Fsecurity\u002Fse-proteger-des-menaces',
            },
            {
              id: '2705671',
              titre: o,
              illustration: { url: '\u002F5017\u002F1582217813-landingsecurity03.svg', alt: o },
              generate: a,
              permalink: '\u002Fformations\u002Fsecurity\u002Fmot-de-passe-fort',
            },
            {
              id: '2706154',
              titre: p,
              illustration: { url: '\u002F5017\u002F1582217811-landingsecurity05.svg', alt: p },
              generate: a,
              permalink: '\u002Fformations\u002Fsecurity\u002Fgerer-mot-de-passe',
            },
            {
              id: '2706251',
              titre: q,
              illustration: { url: '\u002F5017\u002F1582217815-landingsecurity02.svg', alt: q },
              generate: a,
              permalink: '\u002Fformations\u002Fsecurity\u002Freconnaitre-phishing',
            },
            {
              id: '2706299',
              titre: r,
              illustration: { url: '\u002F5017\u002F1582217812-landingsecurity04.svg', alt: r },
              generate: a,
              permalink: '\u002Fformations\u002Fsecurity\u002Feviter-ransomware',
            },
            {
              id: '2706391',
              titre: s,
              illustration: { url: '\u002F5017\u002F1582217809-landingsecurity06.svg', alt: s },
              generate: a,
              permalink: '\u002Fformations\u002Fsecurity\u002Fprudent-nomadisme',
            },
          ],
        },
        {
          id: '31264996',
          generate: a,
          permalink: '\u002Fformations\u002Fincorruptible',
          available: a,
          title: 'INCORRUPTIBLE',
          subtitle: 'Loi Sapin 2',
          footer: 'Anticorruption',
          team: 'GOOD',
          preview: {
            colors: { primary: '#AE76CC', secondary: '#401645', logo: d },
            imgs: {
              illustration: { url: '\u002F5017\u002F1599573883-slideincorruptible.svg', alt: b },
              logo: { url: '\u002F5017\u002F1575365837-logomissionincorruptible.svg', alt: t },
              both: { url: '\u002F5017\u002F1575368182-missionincorruptible.svg', alt: t },
            },
            subtitle: "La lutte contre la corruption et le trafic d'influence",
            extra:
              '\u003Ch3\u003ESensibilisation à la \u003Cstrong\u003Elutte\u003C\u002Fstrong\u003E   \u003C\u002Fbr\u003E  \u003Cstrong\u003Eanticorruption\u003C\u002Fstrong\u003E et la \u003Cstrong\u003Eloi Sapin 2\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\n',
            content:
              '\u003Cp\u003ELa Lutte contre la Corruption\u003C\u002Fp\u003E\n\n\u003Cp\u003Eet le Trafic d&#39;Influence\u003C\u002Fp\u003E\n',
            hashtags: '#corruption #sapin2 #compliance #seriousgame #elearning',
          },
          themes: [
            {
              id: '2706592',
              titre: u,
              illustration: { url: '\u002F5017\u002F1582217829-landinganticorruption01.svg', alt: u },
              generate: a,
              permalink: '\u002Fformations\u002Fincorruptible\u002Flutte-corruption',
            },
            {
              id: '2706705',
              titre: v,
              illustration: { url: '\u002F5017\u002F1582217827-landinganticorruption02.svg', alt: v },
              generate: a,
              permalink: '\u002Fformations\u002Fincorruptible\u002Fcadeaux-et-invitations',
            },
            {
              id: '2706805',
              titre: w,
              illustration: { url: '\u002F5017\u002F1582217826-landinganticorruption03.svg', alt: w },
              generate: a,
              permalink: '\u002Fformations\u002Fincorruptible\u002Fla-corruption',
            },
            {
              id: '2706952',
              titre: x,
              illustration: { url: '\u002F5017\u002F1582217825-landinganticorruption04.svg', alt: x },
              generate: a,
              permalink: '\u002Fformations\u002Fincorruptible\u002Fles-sanctions',
            },
            {
              id: '2707082',
              titre: y,
              illustration: { url: '\u002F5017\u002F1582217824-landinganticorruption05.svg', alt: y },
              generate: a,
              permalink: '\u002Fformations\u002Fincorruptible\u002Fles-8-piliers',
            },
            {
              id: '2707153',
              titre: z,
              illustration: { url: '\u002F5017\u002F1582217823-landinganticorruption06.svg', alt: z },
              generate: a,
              permalink: '\u002Fformations\u002Fincorruptible\u002Fprotection-du-lanceur-alerte',
            },
          ],
        },
        {
          id: '31277099',
          generate: c,
          permalink: '\u002Fdemo?product=31277099',
          available: c,
          title: f,
          subtitle: f,
          footer: f,
          team: e,
          preview: {
            colors: { primary: '#569FEF', secondary: '#1B4B77', logo: d },
            imgs: {
              illustration: { url: '\u002F5017\u002F1594804894-visumissionrse.svg', alt: b },
              logo: { url: '\u002F5017\u002F1575394130-logomissionrse.svg', alt: b },
              both: { url: '\u002F5017\u002F1594800617-missionrse.svg', alt: 'Mission RSE' },
            },
            subtitle: 'La responsabilité sociétale des entreprises',
            extra:
              '\u003Ch3\u003ESensibilisation  \u003C\u002Fbr\u003E  à \u003Cstrong\u003Ela RSE\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\n',
            content:
              '\u003Cp\u003ELa Responsabilité Sociétale\u003C\u002Fp\u003E\n\n\u003Cp\u003Edes Entreprises\u003C\u002Fp\u003E\n',
            hashtags: A,
          },
          themes: [
            {
              id: '5536294',
              titre: B,
              illustration: { url: '\u002F5017\u002F1594807239-landing-rse-m1.svg', alt: B },
              generate: b,
              permalink: '\u002Fformations\u002Frse\u002Fqu-est-ce-que-la-rse',
            },
            {
              id: '5536297',
              titre: C,
              illustration: { url: '\u002F5017\u002F1594807357-landing-rse-m2.svg', alt: C },
              generate: b,
              permalink: '\u002Fformations\u002Frse\u002Fdeveloppement-durable',
            },
            {
              id: '5536301',
              titre: D,
              illustration: { url: '\u002F5017\u002F1594807541-landing-rse-m3.svg', alt: D },
              generate: b,
              permalink: '\u002Fformations\u002Frse\u002Fdeveloppement-social',
            },
            {
              id: '5536320',
              titre: E,
              illustration: { url: '\u002F5017\u002F1594807634-landing-rse-m4.svg', alt: E },
              generate: b,
              permalink: '\u002Fformations\u002Frse\u002Fdeveloppement-environnemental',
            },
            {
              id: '5536326',
              titre: F,
              illustration: { url: '\u002F5017\u002F1594807697-landing-rse-m5.svg', alt: F },
              generate: b,
              permalink: '\u002Fformations\u002Frse\u002Fdeveloppement-economique',
            },
            {
              id: '5536327',
              titre: G,
              illustration: { url: '\u002F5017\u002F1594807745-landing-rse-m6.svg', alt: G },
              generate: b,
              permalink: '\u002Fformations\u002Frse\u002Ftous-concernes',
            },
          ],
        },
        {
          id: '31277114',
          generate: c,
          permalink: '\u002Fdemo?product=31277114',
          available: c,
          title: 'EQUALITY',
          subtitle: H,
          footer: H,
          team: e,
          preview: {
            colors: { primary: '#C98D65', secondary: '#56311D', logo: d },
            imgs: {
              illustration: { url: '\u002F5017\u002F1594999440-visumissionequality.svg', alt: 'good team' },
              logo: { url: '\u002F5017\u002F1585304702-logomissionegalite.svg', alt: 'mission equality' },
              both: { url: '\u002F5017\u002F1594809872-missionegalite.svg', alt: 'Mission EQUALITY' },
            },
            subtitle: "L'égalité professionnelle des femmes et des hommes",
            extra:
              '\u003Ch3\u003ESensibilisation à \u003Cstrong\u003El’égalité\u003C\u002Fstrong\u003E   \u003C\u002Fbr\u003E  \u003Cstrong\u003Eprofessionnelle femme-homme\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\n',
            content:
              '\u003Cp\u003EL’Égalité Professionnelle\u003C\u002Fp\u003E\n\n\u003Cp\u003EFemme-Homme\u003C\u002Fp\u003E\n',
            hashtags: A,
          },
          themes: [
            {
              id: '5343137',
              titre: I,
              illustration: { url: '\u002F5017\u002F1594285119-landing-equality-m1.svg', alt: I },
              generate: c,
              permalink: '\u002Fformations\u002Fequality\u002Fcombat-difficile',
            },
            {
              id: '5344046',
              titre: J,
              illustration: { url: '\u002F5017\u002F1594285696-landing-equality-m2.svg', alt: J },
              generate: c,
              permalink: '\u002Fformations\u002Fequality\u002Fstereotypes-prejuges',
            },
            {
              id: '5344049',
              titre: 'Les obstacles de carrière',
              illustration: { url: '\u002F5017\u002F1594285787-landing-equality-m3.svg', alt: 'Obstacles de carrière' },
              generate: c,
              permalink: '\u002Fformations\u002Fequality\u002Fobstacles-de-carriere',
            },
            {
              id: '5344051',
              titre: K,
              illustration: { url: '\u002F5017\u002F1594285875-landing-equality-m4.svg', alt: K },
              generate: c,
              permalink: '\u002Fformations\u002Fequality\u002Fsolutions',
            },
            {
              id: '5344052',
              titre: L,
              illustration: { url: '\u002F5017\u002F1594285930-landing-equality-m5.svg', alt: L },
              generate: c,
              permalink: '\u002Fformations\u002Fequality\u002Fsexisme',
            },
            {
              id: '5344053',
              titre: M,
              illustration: { url: '\u002F5017\u002F1594797510-landing-equality-m6.svg', alt: M },
              generate: c,
              permalink: '\u002Fformations\u002Fequality\u002Fdemain',
            },
          ],
        },
      ],
      id: g,
    };
  })(
    true,
    null,
    false,
    '#000000',
    'DATA',
    'RSE',
    '31223260',
    'Mission GDPR',
    'Traitement des données',
    'Principes de protection des données',
    'Droits des personnes',
    'Cybersécurité',
    'Mission Security',
    'Se protéger des menaces',
    'Concevoir un mot de passe fort',
    'Gérer ses mots de passe',
    'Reconnaître le phishing',
    'Éviter le ransomware',
    'Être prudent avec le nomadisme',
    'Mission Incorruptible',
    'La lutte contre la corruption',
    'Cadeaux et invitations',
    'La corruption',
    'Les sanctions',
    'Les 8 piliers',
    "La protection du lanceur d'alerte",
    '',
    "Qu'est-ce que la RSE ?",
    'Le développement durable',
    'Le développement social',
    'Le développement environnemental',
    'Le développement économique',
    'Tous concernés !',
    'Égalité Professionnelle',
    'Un combat difficile',
    'Stéréotypes et préjugés',
    'Les solutions',
    'Le sexisme',
    'Et demain ?',
  );
</script>

<style>
  .banner {
    padding: 1rem 2rem;
    background: #eee;
    border-radius: 2rem;
    margin-bottom: 1rem;
  }
  .entries {
    display: grid;
    grid-template-columns: 1fr;
    margin: 3rem 0;
  }

  @media (min-width: 768px) {
    .entries {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 3rem 0;
    }
    :global(.entries .entry) {
      margin-right: 1rem;
    }
  }

  :global(.entry) {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background: white;
  }
  .about {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .hydrate {
      display: grid;
      grid-template-columns: 80% 20%;
    }
  }

  .hooks {
    display: grid;
    grid-template-columns: 100%;
  }

  @media (min-width: 768px) {
    .hooks {
      grid-template-columns: 50% 50%;
    }
  }
</style>

<svelte:head>
  <title>Elder.js Template: Home</title>
  <meta name="description" content="Elder.js Starter Template: It's A Tutorial Too!" />
  <link href="/" rel="canonical" />
</svelte:head>

{#if data.testingHooks}
  <div class="banner">
    <p>Testing hooks worked</p>
    {#if data.cpus}
      <p>If you use Elder.js to build your site, it will span all {data.cpus.length} cpus listed below:</p>
      <ol>
        {#each data.cpus as cpu}
          <li>{cpu.model}</li>
        {/each}
      </ol>
    {/if}
  </div>
{/if}

<div class="banner">
  <h1>Hello World: Welcome to Elder.js!</h1>
  <p>Woot! You've got Elder.js installed. This template is designed to show you the ropes of how things work.</p>

  <p>
    We've tried to make this site a bit of a tutorial, but be sure to check out the full <a
      href="https://elderguide.com/tech/elderjs/">Elder.js docs.</a>
  </p>

  <p>
    Enjoy playing around with Elder.js and, if you hit a snag with the template, open a <a
      href="https://github.com/Elderjs/template/issues">GitHub issue.</a>
  </p>
</div>

<div class="blog">
  <div class="entries">
    {#each data.markdown.blog as blog}
      <BlogTeaser {blog} {helpers} />
    {/each}
  </div>
</div>

<div class="about">
  <h2>About This Template</h2>
  <p>
    This example project is made up of 5 routes; you can find them by looking within the <span class="code"
      >./src/routes/</span> folder. They are:
  </p>

  <ul>
    <li><a href={helpers.permalinks.simple({ slug: 'simple' })}>Simple</a> - A barebones route.</li>
    <li>Home - The page you are on.</li>
    <li>
      Blog - Linked from above, but you can also see a blog post by checking out: <a
        href={helpers.permalinks.blog({ slug: 'getting-started' })}>'Getting Started'</a> .
    </li>
    <li>
      Hooks - These are how you customize Elder.js. Details are below, and we've used the <span class="code"
        >hookInterface</span> to build out dedicated pages for each hook as well.
    </li>
    <li>
      An SSR route which only works when Elder.js is in SSR mode. (<span class="code">npm run dev</span> or
      <span class="code">npm run serve</span>)
    </li>
  </ul>

  <p>
    The goal in showing off these 3 routes is to give you enough of an example to see how a site is built with Elder.js
    (but one that isn't too complex to overwhelm you).
  </p>
  <h3>Development Environment:</h3>
  <p>
    If you ran <span class="code">npm start</span> to see this page this is the same as
    <span class="code">npm run dev</span> which will:
  </p>
  <ol>
    <li>
      Spawn a dev server on the port defined in your <span class="code">.env</span>. (Pro-tip: add
      <span class="code">.env</span> to your .gitignore now)
    </li>
    <li>It will reload that dev server when changes are detected including rebundling your Svelte templates.</li>
  </ol>

  <h3>Other NPM commands</h3>
  <ol>
    <li>
      <code>npm run build</code>: will statically generate this same site so that it can be deployed with a static site
      host such as Netlify, Cloudflare Pages, Vercel, or S3.
    </li>
    <li>
      <code>npm run serve</code>: will start the server in production SSR mode which can be used with cluster mode or
      PM2 to host Elder.js in a SSR fashion.
    </li>
  </ol>
</div>

<div class="hydrate">
  <div class="left">
    <h2>Partial Hydration:</h2>
    <p>Svelte.js shines at bringing interactivity to otherwise static websites.</p>
    <p>
      By default, Elder.js statically renders Svelte components, only mounting them in the browser when it encounters a
      Svelte component which includes the
      <!-- Note: the actual prop is 'hydrate-client={}' but Svelte doesn't render empty objects-->
      <code>hydrate-client={JSON.stringify({})}</code> prop.
    </p>
    <p>
      This means that if a page doesn't need dynamic JS it will have 0KB of JS code resulting in faster loading, lighter
      weight websites.
    </p>
    <p>
      The <a href="https://svelte.dev/examples#clock">clock</a> on this page is an example of a component that has been hydrated
      on the client.
    </p>
    <p>This approach makes it easy to build SEO friendly websites, with Svelte for interactivity when needed.</p>
    <p>
      By default all hydrated components are lazy loaded with an intersection observer, but you can have full control
      over how hydration is handled via <a href="https://elderguide.com/tech/elderjs/#hydration-options"
        >several different hydration options</a
      >.
    </p>
  </div>
  <div class="right">
    <Clock hydrate-client={{ willThisBreak: '""}{))((èé', p }} />
  </div>
</div>

<h2>The Elder.js Hook Interface</h2>

<p>
  Once you've digested the guides above and understand how to handle client hydration, we encourage you to explore the
  hook interface below.
</p>
<p>
  Hooks are the primary way to customize Elder.js and the list below outlines exactly what each hook can be used for.
</p>
<div />
<img
  src="https://elderguide.com/images/elderjs-hook-lifecycle-v13.png"
  alt="Elder.js hook Lifecycle v1.3"
  style="max-width:100%; margin:1rem 0;" />

<div class="hooks">
  {#each hooks as hook, i}
    <HookDetail {hook} {i} hookEntityDefinitions={data.hookEntityDefinitions} />
  {/each}
</div>
