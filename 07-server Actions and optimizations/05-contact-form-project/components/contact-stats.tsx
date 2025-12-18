import { getContactStats } from "@/actions";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ContactStats = async () => {
  const stats = await getContactStats();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">
            Total Contacts: {stats.totalContacts}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalContacts}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">
            New Contacts: {stats.newContacts}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.newContacts}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">
            Read Contacts: {stats.readContacts}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.readContacts}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">
            Replied Contacts: {stats.repliedContacts}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.repliedContacts}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactStats;
