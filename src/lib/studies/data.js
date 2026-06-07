export const fetchCards = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studies`);
  const data = await res.json();
  return data || [];
};

export const fetchCardsRoom = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`);
  const data = await res.json();
  return data || [];
};