export default function Section({ children, id }) {
  return (
    <div
      id={id}
      className="bg-[#1e293b] border-[#334155] border border-solid rounded-lg shadow-[4px_6px_rgba(0,0,0,0.1)] py-2 px-6 m-8"
    >
      {children}
    </div>
  );
}
