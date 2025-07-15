export function FormatDate({ date }) {
  return <div>{date.toLocaleDateString()}</div>;
}

export function Message({ text, important }) {
  return (
    <div>
      {important ? "Pesan Penting:" : "Pesan Biasa:"}
      {text}
    </div>
  );
}

export function MessageWithChildren({ children, important = false }) {
  return (
    <>
      {important ? "Pesan Penting:" : "Pesan Biasa:"}
      {children}
    </>
  );
}
