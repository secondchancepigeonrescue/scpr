import type { Metadata } from "next";
import { buttonClass } from "@/components/Button";
import { Field, Form } from "@/components/Form";
import { AccentHeading, Section, SplitLayout, TextColumn } from "@/components/Layout";
import { FORMS } from "@/lib/site";

export const metadata: Metadata = { title: "Adoption Application" };

type Question = { name: string; label: React.ReactNode; rows?: number; type?: "date" };

// The application, section by section. "name" is the field name Formspree receives.
const sections: { title: string; questions: Question[] }[] = [
  {
    title: "Applicant Information",
    questions: [
      { name: "name", label: "First & Last Name (as listed on legal ID)" },
      { name: "address", label: "Address (Street Address (and Unit #), City, State, Zip Code)" },
      { name: "email", label: "Email" },
      { name: "phone", label: "Phone #" },
      { name: "over18", label: "Are you 18 or older? [Yes/No]" },
      { name: "dob", label: "Date of Birth", type: "date" },
    ],
  },
  {
    title: "Residence",
    questions: [
      { name: "rentown", label: "Do you rent or own your residence? [Rent/Own]" },
      { name: "landlordperm", label: "If you rent, do you have permission from your landlord to own a pigeon? [Yes/No/N/A]" },
      { name: "landlordinfo", label: "If you rent, enter your landlord's contact information below. (Enter N/A if you own.)" },
      { name: "residence", label: "List the names, ages, and relationships of all residents in your home.", rows: 3 },
      { name: "otherpets", label: "Do you have other pets in the home? If so, list their names and breeds/species.", rows: 3 },
    ],
  },
  {
    title: "Questions",
    questions: [
      { name: "caretaker", label: "Who will be the primary caretaker?" },
      { name: "whyadopt", label: "Why do you want to adopt a pigeon? What are your expectations?", rows: 3 },
      { name: "prevbirdown", label: "Have you ever owned a bird before? If so, what species, how many, and for how long?", rows: 3 },
      { name: "rehomedprev", label: "Have you ever rehomed a pet before? If so, what pet(s) and why?", rows: 3 },
      {
        name: "timeperday",
        label:
          "How much time will you be able to spend with your pigeon each day? How many days a week can you provide safe free roam time outside the cage in your home, and for how long?",
        rows: 2,
      },
      {
        name: "smoke",
        label: "Does anyone in your household smoke? If so, will you be able to provide a smoke-free home for your pigeon?",
      },
      {
        name: "toxicfumes",
        label: (
          <>
            The following items are toxic to birds, including but not limited to PTFE/Teflon cookware, aerosol sprays, spray-on
            deodorant, candles (including those labelled bird-safe), incense, perfumes, body sprays, and plug-in air fresheners.
            <br />
            <br />
            Will you be able to accommodate your bird, which may mean not using these items in its room or anywhere in your home?
            [Yes/No]
          </>
        ),
      },
      {
        name: "lifespan",
        label:
          "Pigeons may live anywhere from 10-15 years, with some reaching upwards of 20 years. Can you provide a safe and stable home for that length of time? [Yes/No]",
      },
      {
        name: "diet",
        label:
          "Pigeons are granivores that require a diet of seed within a specific macronutrient range, supplemented with soluble grit and vitamin supplements. Are you able to provide this for your pigeon? [Yes/No]",
      },
      { name: "noflyrace", label: "SCPR's birds cannot be free flown, raced, or bred. Do you agree to these terms? [Yes/No]" },
      {
        name: "updates",
        label:
          "SCPR requires updates at 1 day, 1 week, and 1 month after adoption, each within 24 hours of our request. Do you agree to update SCPR accordingly? [Yes/No]",
      },
    ],
  },
  {
    title: "Enclosure",
    questions: [
      { name: "enclosure", label: "Please describe your pigeon's enclosure in detail, including where it will be located in your home." },
      {
        name: "enclosurescreen",
        label:
          "Upon reviewing your application, SCPR will request multiple photos of your bird's enclosure. Applications are considered incomplete until these photos are provided. Do you agree to this? [Yes/No]",
      },
    ],
  },
  {
    title: "Finishing Up",
    questions: [
      { name: "birdinterest", label: "Do you have a particular pigeon in mind to adopt?" },
      {
        name: "vetcontact",
        label: (
          <>
            Please provide the name and phone number of your veterinarian or vet clinic. You can find avian veterinarians near you on{" "}
            <a href="https://www.aav.org/search/" target="_blank" className="underline underline-offset-3">
              AAV Find-A-Vet
            </a>
            .
          </>
        ),
      },
    ],
  },
];

export default function AdoptionApplicationPage() {
  return (
    <Section>
      <SplitLayout>
        <TextColumn>
          <AccentHeading>Second Chance Pigeon Rescue</AccentHeading>
          <h3>Adoption Application</h3>
          <p>
            Thank you for choosing to adopt a pigeon from Second Chance Pigeon Rescue! As a reminder, minors (under the age of 18 years
            old) are not allowed to fill out adoption applications. If you are a minor, please have a legal parent or guardian fill out
            this application with their information.
          </p>
          <p>
            By submitting this application, you certify that all information provided is true and accurate to the best of your
            knowledge. You understand that this information will be used to evaluate adoption suitability and may be retained as part
            of Second Chance Pigeon Rescue&apos;s adoption records. Providing false or misleading information may result in denial of
            adoption or removal of placement eligibility. Submitting this application is not confirmation of acceptance.
          </p>
          <p>
            Expressing interest in a pigeon does not guarantee you will be matched with that bird. Second Chance Pigeon Rescue matches
            potential adopters with our available pigeons and does not operate on a first-come, first-served basis.
          </p>

          <Form action={FORMS.adoptionApplication}>
            {sections.map((section, i) => (
              <div key={section.title} className={i > 0 ? "mt-10" : ""}>
                <h3>{section.title}</h3>
                {section.questions.map((q) => (
                  <Field key={q.name} name={q.name} label={q.label} rows={q.rows} type={q.type} />
                ))}
              </div>
            ))}
            <button type="submit" className={buttonClass()}>
              Submit Adoption Application
            </button>
          </Form>
        </TextColumn>
      </SplitLayout>
    </Section>
  );
}
