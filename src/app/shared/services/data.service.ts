import { Injectable } from '@angular/core';
import { Annonce } from 'src/app/models/annonce';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  listAnnonces: Annonce[]=[
    
    {
      id:1,
      titre: "Appartement moderne 2 pièces au centre-ville",
      description: "Cet appartement lumineux de 50 m² offre un salon spacieux, une chambre séparée, une cuisine équipée, et une salle de bain avec baignoire. Situé à proximité des commerces et des transports en commun. Parfait pour un jeune couple ou un professionnel.",
      typeBien: "Appartement",
      prix: 1200, // en euros par mois
      adresse: "25 Rue de la République",
      surface: 50, // en m²
      image: "https://www.resabo.com/cr.fwk/images/hotels/Hotel-8761-20220623-120944.jpeg"
    },
    {
      id:2,
      titre:"Bureau de 100 m² en centre d'affaires",
      description: "Bénéficiez d'un espace de travail moderne au cœur du quartier d'affaires. Ce bureau de 100 m² offre des postes de travail modulables, une salle de réunion, et un accès à une connexion internet haut débit. Idéal pour une PME ou une start-up.",
      typeBien: "Bureau",
      prix: 2500,
      adresse: "10 Avenue des Champs-Élysées",
      surface: 100, // en m²
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqyqn0S2PNj5ZWoyFfBjdhWPNMRasyLsHpQ&s"
    },
    {
      id:3,
      titre: "Terrain constructible de 2000 m² avec vue sur la mer",
      description: "Terrain plat et viabilisé de 2000 m², idéal pour un projet de construction résidentielle. Situé à seulement 10 minutes des plages, avec une vue imprenable sur la mer Méditerranée.",
      typeBien: "Terrain",
      prix: 150000, // en euros
      adresse: "25 Rue de la République",
      surface: 50, // en m²
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqthret4y_f6w66Vfi3ngRrUEoJRd3f2EmBg&s"
    },
    {
      id:4,
      titre: "Local commercial de 80 m² en plein centre-ville",
      description: "Local commercial de 80 m² en rez-de-chaussée avec grande vitrine, situé dans une rue passante. Parfait pour une boutique ou un salon de coiffure. Bonne visibilité et accès facile.",
      typeBien: "Local commercial",
      prix: 220000, // en euros
      adresse: "45 Boulevard Haussmann",
      surface: 80, // en m²
      image: "https://www.geolocaux.com/photos/800x510/10028_63785500854663365310028_1.jpg"
    },
    {
      id:5,
      titre: "Villa de luxe avec piscine et vue sur mer",
      description: "Magnifique villa moderne de 300 m², située sur les hauteurs avec une vue imprenable sur la Méditerranée. 5 chambres, 4 salles de bains, cuisine ouverte, salon spacieux avec baies vitrées, piscine à débordement et jardin paysager de 1500 m².",
      typeBien: "Maison",
      prix: 1500000, // en euros
      adresse:"Chemin des Collines",
      surface: 300, // en m
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD80N4ZVtuVh4hkjzjHXlyPZvjs4HAQOE4lA&s"
    },
    {
      id:6,
      titre: "Terrain agricole de 5000 m² en pleine nature",
      description: "Terrain agricole plat et fertile de 5000 m², parfait pour des projets agricoles ou d'éco-tourisme. Situé en pleine campagne, à 30 minutes de la ville, avec accès à l'eau et électricité.",
      typeBien: "Terrain",
      prix: 80000, // en euros
      adresse: "Route de la Ferme",
      surface: 5000, // en m²
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mL7xj4_PJ-e3zZQl9qYkob2RgISROPUhwQ&s"
    },
    {
      id:7,
      titre: "Bureaux de 200 m² en plein centre d'affaires",
      description: "Bureaux modernes et lumineux dans un immeuble de standing au cœur du quartier d'affaires. 200 m² avec plusieurs espaces de travail, une salle de réunion, et une kitchenette. Parking inclus.",
      typeBien: "Bureau",
      prix: 4500, // en euros par mois
      adresse: "12 Rue de la Bourse",
      surface: 200, // en m²
      image: "https://www.menzili.tn/upload/photos/2023/01/13/10/11/a3t2nq6682.jpg"
    },
    {
      id:8,
        titre: "Local commercial de 100 m² en centre-ville",
        description: "Local de 100 m² avec une grande vitrine donnant sur une rue très passante. Idéal pour une boutique de vêtements ou une épicerie. Très bon emplacement proche des transports en commun.",
        typeBien: "Local commercial",
        prix: 300_000, // en euros
        adresse: "Rue des Halles",
        surface: 100 , // en m²
        image: "https://fi-dari.tn/uploads/1697455941773blob"
    },
  ]


  constructor() { }
}
