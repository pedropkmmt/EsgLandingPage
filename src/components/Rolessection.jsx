import { UserPlus, KeyRound, Building2, UserCheck, Bell, Briefcase } from "lucide-react";

const FLOW = [
  {
    icon: UserPlus,
    title: "Add users",
    body: "Admins add team members, colleagues and external consultants to the platform.",
  },
  {
    icon: KeyRound,
    title: "Assign roles",
    body: "Each user gets a role that decides what they can set up, enter, submit, review or approve.",
  },
  {
    icon: Building2,
    title: "Scope to companies",
    body: "Users see only the companies they're authorised for, and can switch between them from the header.",
  },
  {
    icon: UserCheck,
    title: "Assign reviewers",
    body: "Admins give selected users the Reviewer role, then assign them to materiality assessments and reports.",
  },
];

const ROLES = [
  {
    name: "Platform Administrator",
    body: "Creates and oversees company workspaces across the platform, assigns reviewer roles and has visibility across all company assessments.",
  },
  {
    name: "Company Administrator",
    body: "Owns setup for their company: profile, reporting configuration, sites and custom fields. Edits masterfile fields, changes profile status, submits assessments, configures disclosure thresholds and assigns reviewers.",
  },
  {
    name: "ESG Manager",
    body: "Contributes to setup, boundaries and structure, captures data, selects and justifies material topics (same rights as the Company Administrator there), and is the primary author of the ESG report.",
  },
  {
    name: "Reviewer",
    body: "Approves or rejects materiality assessments with mandatory comments, decides on Double Materiality overrides, and comments on report paragraphs, returning reports to draft when needed.",
  },
];

const CONTROLS = [
  "Only admins create companies, edit company configuration, create custom fields and change profile status.",
  "Approving without the Reviewer role is blocked with a permission error.",
  "Unlocking a prior reporting year for editing needs a separate override permission.",
  "The user who creates a company becomes its Company Admin.",
  "Reviewers are notified in-platform on submission, and authors on approval, rejection or return to draft.",
  "Audit logs can't be edited or deleted by end users.",
];

export default function Rolessection() {
  return (
    <section id="team" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
      <div className="max-w-2xl">
        <p className="font-['IBM_Plex_Mono',monospace] text-xs font-medium text-emerald-700 mb-3">
          USERS AND ROLES
        </p>
        <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[#002B28] text-3xl sm:text-4xl tracking-tight">
          The right people, with the right access.
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          ESG reporting involves HR, HSE, finance, the company secretary and outside reviewers. User
          management lets admins add people, give each a role and appoint reviewers, so every submission has
          a named owner and every approval a named approver.
        </p>
      </div>

      <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none">
        {FLOW.map(({ icon: Icon, title, body }, idx) => (
          <li key={title} className="bg-white border border-[#E9F1EC] rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex w-10 h-10 rounded-xl bg-[#E9F1EC] items-center justify-center">
                <Icon className="w-5 h-5 text-[#0B3F37]" strokeWidth={2} />
              </span>
              <span className="font-['IBM_Plex_Mono',monospace] text-xs text-slate-400">0{idx + 1}</span>
            </div>
            <h3 className="mt-4 font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-base">{title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-5 grid md:grid-cols-2 gap-5">
        {ROLES.map((r) => (
          <article key={r.name} className="bg-white border border-[#E9F1EC] rounded-2xl p-6 sm:p-7">
            <h3 className="font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-lg">{r.name}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{r.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-5 grid lg:grid-cols-2 gap-5">
        <article className="bg-[#002B28] rounded-2xl p-6 sm:p-7">
          <span className="inline-flex w-10 h-10 rounded-xl bg-emerald-400/10 items-center justify-center">
            <Briefcase className="w-5 h-5 text-emerald-300" strokeWidth={2} />
          </span>
          <h3 className="mt-4 font-['Space_Grotesk',sans-serif] font-semibold text-white text-lg">
            Built for practices and their clients
          </h3>
          <p className="mt-2 text-sm text-emerald-50/70 leading-relaxed">
            In the practice view, consultants add and manage client companies beneath them, and can report
            on a client's behalf. In the client view, a company manages only its own workspace and can add
            its practice as a consultant. Direct self-service and consultant-managed reporting both work
            on the same structure.
          </p>
        </article>
        <article className="bg-white border border-[#E9F1EC] rounded-2xl p-6 sm:p-7">
          <span className="inline-flex w-10 h-10 rounded-xl bg-[#E9F1EC] items-center justify-center">
            <Bell className="w-5 h-5 text-[#0B3F37]" strokeWidth={2} />
          </span>
          <h3 className="mt-4 font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-lg">
            Controls that hold up under review
          </h3>
          <ul className="mt-3 space-y-2 list-none">
            {CONTROLS.map((c) => (
              <li key={c} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                <span className="mt-2 w-1 h-1 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}