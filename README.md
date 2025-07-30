# SecureSight - Incident Tracker Dashboard

A real-time incident tracking dashboard built with Next.js and Prisma. This dashboard allows you to view incidents such as "Unattended Bag" or "Fence Breach" with timestamps and locations, helping teams to monitor and respond effectively.

---

## 🚀 1. Deployment Instructions

To run this project locally or deploy it:

### Clone and Setup
```bash
git clone https://github.com/Kalavathy06/incident-tracker.git
cd incident-tracker
npm install

/components         → Reusable components like IncidentList
/pages              → Application routes
/prisma             → Prisma schema and migrations
/styles             → TailwindCSS styles

If I Had More Time…
Add authentication (role-based access for admin/users).

Implement real-time updates using WebSockets or Server-Sent Events.

Add filtering and sorting options for incidents.

Integrate with external alerting services (e.g., SMS/email notifications).

Add testing (unit + integration) with Jest and React Testing Library.

Improve error handling and form validations.


