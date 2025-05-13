import React from 'react';

export const Privacy = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Politique de Confidentialité</h1>
        
        <div className="prose max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. Collecte des informations</h2>
            <p className="mb-4">
              Nous collectons les informations suivantes lorsque vous utilisez notre site web :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Adresse postale pour les interventions</li>
              <li>Type de service demandé</li>
              <li>Informations concernant votre installation</li>
            </ul>
            <p className="mb-4">
              Ces informations sont nécessaires pour vous fournir nos services de plomberie et de remplacement de chauffe-eau.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. Utilisation des informations</h2>
            <p className="mb-4">
              Les informations collectées sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Répondre à vos demandes de devis</li>
              <li>Planifier les interventions</li>
              <li>Assurer le suivi des travaux</li>
              <li>Vous contacter en cas de nécessité</li>
              <li>Améliorer nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">3. Protection des données</h2>
            <p className="mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisée.
            </p>
            <p className="mb-4">
              Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles sont collectées et traitées, et ne sont en aucun cas vendues à des tiers.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">4. Vos droits</h2>
            <p className="mb-4">
              Conformément à la législation en vigueur, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="mb-4">
              Pour exercer ces droits, vous pouvez nous contacter par email à allo@allocumulus.fr ou par courrier à notre adresse postale.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">5. Cookies</h2>
            <p className="mb-4">
              Notre site utilise uniquement des cookies techniques essentiels au fonctionnement du site. Ces cookies ne collectent aucune donnée personnelle et ne sont pas utilisés à des fins de traçage ou de publicité.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">6. Modifications</h2>
            <p className="mb-4">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur le site. Nous vous encourageons à consulter régulièrement cette page pour rester informé des éventuelles mises à jour.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">7. Contact</h2>
            <p className="mb-4">
              Pour toute question concernant notre politique de confidentialité, vous pouvez nous contacter :<br /><br />
              ALLO CUMULUS<br />
              RUE CONVENTIONNEL F SALICETTI RESIDENCE LIVRELLI<br />
              20000 AJACCIO<br />
              Email : allo@allocumulus.fr<br />
              Téléphone : 06.79.41.09.67
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};