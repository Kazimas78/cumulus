import React from 'react';

export const Legal = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Mentions Légales</h1>
        
        <div className="prose max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. Informations légales</h2>
            <p className="mb-4">
              Raison sociale :MONSIEUR SEBASTIEN CANAVAGGIO ALLOCUMULUS<br />
              Forme juridique : Entreprise individuelle<br />
              Siège social : RUE CONVENTIONNEL F SALICETTI RESIDENCE LIVRELLI, 20000 AJACCIO<br />
SIRET : 79454609300012<br />
TVA Intracommunautaire : FR61794546093<br />
              Téléphone : 06.79.41.09.67<br />
              Email : allo@allocumulus.fr
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. Hébergement</h2>
            <p className="mb-4">
              LWS (www.lws.fr - Ligne Web Services)<br />
              SAS au capital de 500 000 Euros<br />
              10, RUE PENTHIEVRE<br />
              75008 PARIS<br />
              FRANCE<br /><br />
RCS Paris B 851 993 683 00024 - APE 6311Z<br />
TVA intra: FR21 851 993 683<br />
SIRET 85199368300024<br /><br />
              Directeur de la publication : Nicolas Depredurand<br />
              Président : Nicolas Depredurand<br />
              Directeur général : Nicolas Depredurand<br /><br />
              LWS - Ligne Web Services SAS est une filiale de la société Groupe LWS, société au capital de 1 000 000 d'Euros immatriculée au RCS de Epinal sous le numéro 450 453 881 2, rue Jules Ferry, 88190 Golbey.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">3. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">4. Protection des données personnelles</h2>
            <p className="mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Ces droits peuvent être exercés en nous contactant à l'adresse suivante : allo@allocumulus.fr
            </p>
            <p className="mb-4">
              Les informations recueillies sur ce site sont utilisées uniquement dans le cadre de votre demande de devis ou de contact et ne sont en aucun cas communiquées à des tiers.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">5. Cookies</h2>
            <p className="mb-4">
              Ce site n'utilise pas de cookies de traçage. Seuls des cookies techniques nécessaires au fonctionnement du site peuvent être déposés.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">6. Responsabilité</h2>
            <p className="mb-4">
              Les informations contenues sur ce site sont aussi précises que possible et mises à jour régulièrement. Toutefois, elles peuvent contenir des inexactitudes ou des omissions. ALLO CUMULUS ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès à ce site ou de l'utilisation de son contenu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};