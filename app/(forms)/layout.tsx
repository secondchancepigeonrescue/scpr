// The adoption application and contract open in their own tab,
// with just the logo at the top instead of the menu and footer.
export default function FormsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pb-20">
      <div className="wrap mt-[30px] flex justify-center">
        <img src="/sitepics/scprlogo.png" alt="Second Chance Pigeon Rescue logo" className="size-40 object-contain" />
      </div>
      {children}
    </main>
  );
}
