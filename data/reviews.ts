export interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  source: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Sarah M.",
    rating: 5,
    review:
      "Best local café around! The eggs benedict are amazing and the coffee is always on point. Staff are super friendly and welcoming  such a gem in Georges Hall.",
    source: "Google Review",
  },
  {
    id: "r2",
    name: "David K.",
    rating: 5,
    review:
      "Generous portions, great value and the service is brilliant. The Mediterranean breakfast board is incredible and the iced strawberry matcha is unlike anything else.",
    source: "Facebook Review",
  },
  {
    id: "r3",
    name: "Emma L.",
    rating: 5,
    review:
      "Cosy family-friendly café with a great menu. The flatbread pizzas and berry toast are beautiful. Perfect for a relaxed weekend brunch. Highly recommend!",
    source: "Facebook Review",
  },
];
