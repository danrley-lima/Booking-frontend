export function mapScoreToRating(score: number): string {
  if (score >= 9.5) {
    return "Excelente";
  } else if (score >= 8.5) {
    return "Muito boa";
  } else if (score >= 7.5) {
    return "Boa";
  } else if (score >= 6.5) {
    return "Regular";
  } else if (score >= 5.5) {
    return "Satisfatória";
  } else if (score >= 4.5) {
    return "Insatisfatória";
  } else if (score >= 3.5) {
    return "Ruim";
  } else if (score >= 2.5) {
    return "Muito ruim";
  } else if (score >= 1.5) {
    return "Péssima";
  } else {
    return "Terrível";
  }
}
