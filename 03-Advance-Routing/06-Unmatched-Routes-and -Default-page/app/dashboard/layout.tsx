export default function DashboardLayout({
  feed,stats
}: {
  feed: React.ReactNode;
  stats: React.ReactNode;
}) {
  return <div className="flex gap-20">
    <div className="flex-1">{feed}</div>
    <div className="flex-1">{stats}</div>
  </div>;
}
