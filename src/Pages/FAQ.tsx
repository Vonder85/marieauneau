import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const theme = { fontFamily: "BillySignature" };
const useStyles = makeStyles({
  root: {
    width: "60%",
    fontFamily: theme.fontFamily,
    fontSize: "1em",
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
  },
  title: {},
  question: {
    color: "rgb(209, 157, 142)",
  },
  liens: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  },
});

export const FAQ = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Détecte la taille de l'écran mobile
  const themeQueries = useTheme();
  const smScreen = useMediaQuery(themeQueries.breakpoints.down("sm"));

  return (
    <div
      className={`${classes.root}`}
      style={{ width: `${smScreen && "80%"}` }}
    >
      <h2 className={classes.title}>Prendre rendez-vous</h2>
      <h3 className={classes.question}>Où vous retrouver ?</h3>
      Je pratique tous les dimanches à l’appartement chez June en plein centre
      de Nantes à deux pas de la place Graslin.
      <br />
      <h3 className={classes.question}>Comment prendre rendez-vous ?</h3>
      Il vous suffit de me contacter par email à <b>auneau.m@gmail.com</b> ou
      via mon{" "}
      <Link to="/Contact" className={classes.liens}>
        formulaire de contact
      </Link>{" "}
      ou bien encore par téléphone au <b>0629382455</b> en me laissant vos
      coordonnées, en m’indiquant le soin de votre choix et vos disponibilités.
      <br />
      <h2 className={classes.title}>Les prestations Marie Auneau Facialiste</h2>
      <h3 className={classes.question}>Quel soin me conseillez-vous ?</h3>
      Décrire les soins + Si vous hésitez encore n’hésitez pas à me dire dans
      votre message en me précisant les bienfaits que vous recherchez, je
      pourrais alors vous conseiller au mieux. <br />
      <h3 className={classes.question}>
        {" "}
        Quel est le prix de vos prestations ?{" "}
      </h3>
      Les massages varient de 70€ à 95€, vous retrouverez tous les tarifs sur la
      carte de soins. (lien web)
      <br />
      <h3 className={classes.question}>
        Pourquoi y-a-t-il des différences de prix et de temps de prestation ?
      </h3>
      Chaque massage a sa particularité. Le prix dépend autant de la complexité
      du massage que du matériel nécessaire à la pratique.
      <h3 className={classes.question}>
        Combien de fois par an pour maximiser l’efficacité ?
      </h3>
      L’avantage avec le massage c’est qu’il n’y a pas de limite du nombre de
      massage à ne pas dépasser. Pour le Kobi-do sur un visage plus avancé, plus
      marqué je conseille une cure de un soin par semaine sur un mois et ensuite
      un massage tous les mois pour entretenir les résultats. Bien-sûr l’auto
      massage chez soi est également à privilégier. Le détox au changement de
      saison permet de relancer le corps, le détox est un drainage lymphatique
      et l a lymphe étant le transporteur des déchets cellulaires ce soin permet
      de repartir de zéro. Il est aussi très efficace sur les poches et les
      cernes, il peut donc être privilégié plus régulièrement. <br />
      <h3 className={classes.question}>Qu’est ce qu’une facialiste ? </h3>La
      facialiste est une professionnelle de la beauté. Elle a suivi des
      formations spécifiques pour accompagner au bien vieillir de votre peau.
      Par son expertise et ses connaissances approfondies de techniques de
      massage, de la peau, des morphotypes des visages, elle personnalise et
      adapte ces traitement aux besoins spécifiques de chaque personne. La
      facialiste aide les femmes à mieux aborder les signes du temps, un
      accompagnement vers le bien vieillir avec des techniques non invasives.
      Mon objectif en tant que facialiste est par le massage d’aider votre peau,
      la détoxiquer, lisser, sculpter, lifter, tonifier, défroisser et illuminer
      votre visage. <br />
      <h3 className={classes.question}>Quels sont les outils utilisés ?</h3>
      Le Gua sha est un instrument venu de la médecine chinoise, je travaille
      avec une version en quartz rose, il est alors la continuité de ma main et
      me permet de travailler la ride en profondeur, mais aussi les muscles très
      tendus. Travaillé chaud il permet une détente complète du corps et des
      tensions musculaires, travaillé froid il favorise l’action drainante. Les
      champignons et les cuillères sont eux aussi travaillés en quartz rose.
      Tout comme le gua sha, je travaille en alternance de chaud et de froid
      pour relancer l’action du drainage et détendre les tensions faciales. Le
      ridoki est un petit rouleau à picot utilisé lors du Kobi-do. Il permet une
      action drainante après l’ensemble des gestes liftants de ce massage. En le
      travaillant en quadrillage sur les rides cela permet de booster la
      production de collagène afin de repulper les rides.
      <br />
      <h3 className={classes.question}>
        Les massages guasha, kobi do, stretching et détox sont ils eux aussi
        relaxants ?
      </h3>{" "}
      L’ensemble des massages ont pour but de vous relaxer. Je travaille sur
      votre visage pour permettre une détente du corps et de l’esprit. Le détox
      et le gua sha sont très relaxant grâce au travail de la pierre chaude, le
      kobido et le stretching quant à eux sont plus dynamique et tout en
      favorisant la relaxation ils apporteront à votre visage un effet lifting
      100% naturel ! <br />
      <h3 className={classes.question}>
        Les produits utilisés sont ils naturels / bio / vegan ?
      </h3>
      L’huile utilisée pour le massage est une formule 100% d’origine naturelle,
      végétale et bio. C’est une synergie de 4 Huiles végétales bio certifiées
      AB et Ecocert. Elle convient aux femmes enceintes et à celles qui
      allaitent.
      <br />
      <h3 className={classes.question}>
        {" "}
        Une tenue est elle à favoriser pour se faire masser ?
      </h3>{" "}
      Je conseille une tenue ample pour votre confort, cependant si vous venez
      avant ou après un événement vous pourrez sans problème vous mettre à
      l’aise avant de vous installer. <br />
      <h3 className={classes.question}>Dois-je venir démaquillée ? </h3>
      Il n’y a pas d’obligation, j’effectuerai dans tous les cas un démaquillage
      à l’huile afin de travailler sur une peau propre.
      <br />
      <h3 className={classes.question}>
        Quelle est la différence avec un soin du visage traditionnel ?{" "}
      </h3>
      Un soin du visage traditionnel comporte plusieurs étapes essentiellement
      basées sur l’application de produits. Typiquement : démaquillage,
      nettoyage, extraction, gommage, masque et pose de crème. C’est alors le
      soin qui agit sur l’épiderme. Lors d’un massage du visage je vais par une
      gestuelle précise travailler en fonction du massage le muscle, la lymphe,
      la peau (épiderme, derme et hypoderme). Selon moi la gestuelle est
      primordiale pour redonner aux visages sa capacité à se drainer, à produire
      les fibres nécessaire tel que le collagène ou l’élastine. L’application de
      produit ne devrait être qu’un soutien de cette démarche.
      <br />
      <h3 className={classes.question}>
        {" "}
        J’ai une peau très sensible et fragile, pouvez vous adapter le massage ?
      </h3>{" "}
      J’adapte bien-sûr le massage en fonction de chacune de mes clientes. Si
      votre peau est sensible je serais extrêmement vigilante si vous choisissez
      le stretching facial, c’est en effet avec ce soin qu’elle sera mise à
      l’épreuve. Lors des autres massages j’adapte la puissance de ma main, les
      yeux toujours sur votre visage je modifie les gestes en fonction de la
      réaction en direct de votre peau. <br />
      <h3 className={classes.question}>
        Quels sont les bénéfices à court et moyen terme ?
      </h3>{" "}
      En sortant de votre massage votre peau sera lumineuse et votre esprit
      détendu. Chaque massage aura sa spécificité, un peau drainée ou des
      muscles du visage oxygénés n’auront pas le même rendu sur la peau pourtant
      celle la sera lumineuse dans les deux cas. Le stretching vous donnera un
      visage plus détendu et des rides repulpée. Le kobi-do quant à lui vous
      permettra d’avoir un visage lifté. A chacun ses bénéfices. Sur le moyen
      terme plus vous effectuerez les massages chez vous en auto massage ou avec
      moi plus les résultats seront présents et dureront dans le temps.
      <br />
      <h3 className={classes.question}>
        {" "}
        Sous combien de temps voit on les résultats sur les signes de l’âge ?
      </h3>{" "}
      Nombreux sont les paramètres à prendre en compte pour les signes de l’âge
      : style de vie, alimentation, consommation d’alcool, cigarette, activité
      sportive sont autant de facteurs qui vont jouer sur la santé et l’aspect
      de votre peau. Ainsi une peau déjà marquée (rides ou ridules) sera à la
      recherche de deux types de résultats: atténuer les rides et ridules déjà
      présentes et limiter l’apparition de nouvelles rides. Une ride formée
      depuis longtemps ne disparaîtra pas complètement via un massage, il n’est
      donc pas possible de donner une garantie de résultats cependant vous
      verrez la différence après chaque séance ! Je peux également vous donner
      des conseils pour que vous continuiez, à la maison, à bénéficier des
      effets du massage. <br />
      <h3 className={classes.question}>
        Massez-vous également les hommes ?
      </h3>{" "}
      En réflexion
      <h2 className={classes.title}>Contre-indications et cas spécifiques</h2>
      <h3 className={classes.question}>
        Quels sont les contre indications pour ce type de massage ?
      </h3>
      Chaque fiche massage présente les contre indications spécifiques,
      cependant pour l’ensemble des massages les injections de moins de 3
      semaines, la pose de fil tenseur (cranté ou non) et la présence de fièvre
      sont totalement contre indiqués. Pour toute maladie importante je vous
      demanderai de venir avec un accord écrit de votre médecin. La rosacé n’est
      pas une contre indication mais une précaution à prendre. En effet si vous
      avez une période avec une rosacé plus prononcée je n’insisterais pas. Mais
      si celle ci est localisée je peux tout de même vous recevoir et masser les
      zones du visage qui ne sont pas ou moins touchées. Je déconseille de venir
      après une intervention dentaire pour la simple raison que les douleurs
      dentaires sont persistantes et souvent l’anxiété que je vous fasse mal
      vous empêche de lâcher prise et de profiter au mieux de votre massage.
      <br />
      <h3 className={classes.question}>
        Les produits que vous utilisez sont ils adaptés aux peaux grasses et
        sèches ?
      </h3>{" "}
      J’utilise une huiler de démaquillage à la composition très simple, l’huile
      de massage est une huile neutre, un vrai bonheur pour les peaux sèches
      tout au long du massage, elle est retiré avec un oshibori humide afin de
      ne laisser aucune trace pour les peaux grasses. J’applique ensuite une
      crème hydratante adapté à tous les types de peau . Je propose également à
      mes clientes une crème solaire, il est en effet recommandé de porter un
      indice solaire tous les jours et ce toute l’année. Les rayons lumineux
      sont la première cause du vieillissement cutanée. <br />
      <h3 className={classes.question}>
        Ces soins sont-ils conseillés lorsque l’on a de la rosacée ?
      </h3>
      Aucun massage n’est à proscrire pour la rosacée, j’adapterai simplement
      mon protocole en fonction de l’importance de votre rosacée et de sa
      localisation. N’hésitez pas à m’en parler en début de séance afin que j’y
      porte une attention toute particulière. <br />
      <h3 className={classes.question}>
        Ces massages sont sont-ils compatibles avec une peau réactive ?
      </h3>
      Une peau réactive n’est pas du tout une contre-indication pour bénéficier
      d’un massage. En fonction du choix de la prestation une peau réactive peut
      être plus ou moins rouge, si cela vous gêne pour reprendre la suite de
      votre journée j’adapte mon massage, n’hésitez pas m’en faire part en
      amont, je serais heureuse d’adapter au mieux ma prestation à vos besoins.{" "}
      <br />
      <h3 className={classes.question}>
        Ces massages peuvent il améliorer / aider l’acné ou sont-ils à proscrire
        ?{" "}
      </h3>
      Tout dépend du type d’acné. Les massages peuvent être bénéfiques pour
      l’acné, en effet le massage détox par exemple va permettre d’aider la peau
      à éliminer ses déchets. Cependant pour un acné inflammé, microkystique,
      qui est généralement douloureux, le massage n’est pas conseillé car plus
      désagréable. Si la zone inflammée est localisée je l’éviterais au mieux,
      n’hésitez pas à me signaler tout inconfort avant ou durant la prestation.
      Si votre acné n’est pas douloureuse je ne peux que vous conseiller de
      venir, en effet le massage va vous permettre de retrouver une peau plus
      lumineuse et si votre acné joue sur votre confiance, une peau repeuplée et
      lumineuse vous donnera un petit coup de boost.
      <br />
      <h3 className={classes.question}>
        {" "}
        Puis je me faire masser si je suis enceinte ?{" "}
      </h3>
      Comme pour toute prestation lorsque vous êtes enceinte il est nécessaire
      de demander l’avis de votre docteur ou sage-femme. Cela dépend également
      de votre terme et de votre situation particulière. Les messages du visage
      nécessitent d’être allongé sur le dos ce qui n’est pas toujours
      confortable et recommandé durant la grossesse. N’hésitez pas à me
      contacter afin que nous discutions d’un protocole adapté.
      <h2 className={classes.title}> Offres et bons cadeaux</h2>
      <h3 className={classes.question}>
        Proposez-vous des offres pour découvrir votre prestation ?
      </h3>
      Je propose -30% pour le premier massage. Cela vous permet de découvrir à
      petit prix un nouveau type de massage. Il suffit de me préciser lors de
      votre réservation que vous venez pour la première fois et vous
      bénéficierez de ce tarif découverte. <br />
      <h3 className={classes.question}>Offrez-vous des cartes cadeau ? </h3>Je
      propose des bons cadeaux en ligne ou envoi postale. Le règlement se fait
      via un lien envoyé par sms ou par mail. Si vous passez chez June où je
      pratique vous pouvez également faire faire un bon cadeau chez eux. Le
      règlement se fait alors en espèce directement là bas.
    </div>
  );
};
