export default function IncidentPlayer() {
  return (
    <div className="flex-1 p-4">
      <img src="/vault.jpg" alt="Vault Camera" className="rounded-lg" />
      <div className="flex mt-2 gap-2">
        <img src="/thumb1.jpg" className="w-20 h-12 object-cover" />
        <img src="/thumb2.jpg" className="w-20 h-12 object-cover" />
      </div>
    </div>
  );
}
