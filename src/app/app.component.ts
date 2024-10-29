import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itineraryData = [
    {
      day: "Day 1",
      title: "Arrival in Srinagar",
      description: [
        "Welcome to Srinagar! Upon arrival at Sheikh ul-Alam International Airport, meet our representative who will assist you with the transfer to your houseboat.",
        "Evening free for leisure activities. You can explore the local market or enjoy a shikara ride on Dal Lake (optional)."
      ],
      meals: ["Dinner"]
    },
    {
      day: "Day 2",
      title: "Srinagar Local Sightseeing",
      description: [
        "After breakfast, proceed for local sightseeing covering Mughal Gardens, Nishat Bagh, Shalimar Bagh, and Chashme Shahi.",
        "Visit the famous Dal Lake and enjoy shopping at the local floating market.",
        "Return to houseboat for overnight stay."
      ],
      meals: ["Breakfast", "Dinner"]
    },
    {
      day: "Day 3",
      title: "Srinagar - Gulmarg",
      description: [
        "Post breakfast, drive to Gulmarg, known as the 'Meadow of Flowers'.",
        "Enjoy Gondola ride (optional) and visit Khilanmarg.",
        "Evening free for leisure activities."
      ],
      meals: ["Breakfast", "Dinner"]
    }
  ];

  galleryImages = [
    { src: "/assets/images/dal-lake.jpg", alt: "Dal Lake", title: "Dal Lake, Srinagar" },
    { src: "/assets/images/gulmarg.jpg", alt: "Gulmarg", title: "Gulmarg Snow Resort" },
    { src: "/assets/images/mughal-gardens.jpg", alt: "Mughal Gardens", title: "Nishat Bagh" },
    { src: "/assets/images/pahalgam.jpg", alt: "Pahalgam", title: "Pahalgam Valley" }
  ];

  packageDetails = {
    included: [
      "Airport/Railway Station Transfers",
      "Accommodation in listed hotels",
      "Daily breakfast and dinner",
      "All sightseeing as per itinerary",
      "All transfers in private vehicle",
      "All applicable taxes"
    ],
    excluded: [
      "Airfare or train fare",
      "Personal expenses",
      "Optional activities",
      "Lunch",
      "Travel insurance",
      "Additional services"
    ],
    hotels: [
      {
        name: "Houseboat Palace",
        location: "Dal Lake, Srinagar",
        rating: 4
      },
      {
        name: "Hotel Highland Park",
        location: "Gulmarg",
        rating: 5
      },
      {
        name: "Royal Pahalgam",
        location: "Pahalgam",
        rating: 4
      }
    ]
  };
}