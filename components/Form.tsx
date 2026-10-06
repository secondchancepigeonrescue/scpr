// Form pieces shared by the contact, adoption application and contract pages.
// The forms post straight to Formspree, so they work on the static site.

const input =
  "box-border w-full rounded border border-line bg-page p-3 font-body text-[16px] text-ink [color-scheme:light] transition-colors duration-200 focus:border-accent focus:outline-2 focus:outline-offset-1 focus:outline-accent dark:bg-surface-soft dark:[color-scheme:dark]";

export function Form({ action, children }: { action: string; children: React.ReactNode }) {
  return (
    <form action={action} method="POST" className="mt-9 max-w-[600px]">
      {children}
    </form>
  );
}

type FieldProps = {
  name: string;
  label: React.ReactNode;
  /** "textarea" (default), "email" or "date" */
  type?: "textarea" | "email" | "date";
  rows?: number;
};

export function Field({ name, label, type = "textarea", rows = 1 }: FieldProps) {
  return (
    <div className="mb-[22px]">
      <label htmlFor={name} className="mb-2 block text-[14px] font-bold tracking-[1px]">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea name={name} id={name} rows={rows} required className={`${input} resize-y`} />
      ) : (
        <input type={type} name={name} id={name} required className={input} />
      )}
    </div>
  );
}
