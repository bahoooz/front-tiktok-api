export function formatDate(dateString: string) {
  const d = new Date(dateString);

  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const hour = d.getHours().toString().padStart(2, "0");
  const minute = d.getMinutes().toString().padStart(2, "0");

  const formattedHour = `${hour}h${minute}`;

  const now = new Date();

  // On normalise les dates à minuit pour comparer correctement
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const otherDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());

  const diffDays = Math.floor(
    (today.getTime() - otherDay.getTime()) / (1000 * 60 * 60 * 24)
  );

  // ───────────────
  // 🔥 CAS SPÉCIAUX
  // ───────────────
  if (diffDays === 0) {
    return `aujourd’hui à ${formattedHour}`;
  }

  if (diffDays === 1) {
    return `hier à ${formattedHour}`;
  }

  // Sinon → format classique
  return `${day}/${month} à ${formattedHour}`;
}
