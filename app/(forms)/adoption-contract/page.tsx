import type { Metadata } from "next";
import { buttonClass } from "@/components/Button";
import { Field, Form } from "@/components/Form";
import { AccentHeading, Section, SplitLayout, TextColumn } from "@/components/Layout";
import { FORMS } from "@/lib/site";

export const metadata: Metadata = { title: "Adoption Contract" };

export default function AdoptionContractPage() {
  return (
    <Section>
      <SplitLayout>
        <TextColumn className="[&>ol>li]:mb-6">
          <div className="mb-12 italic">
            <p>
              View the full PDF of{" "}
              <a href="/SCPR%20Adoption%20Contract.pdf" download>
                SCPR&apos;s Adoption Contract
              </a>
              .
            </p>
            <p>
              By submitting this contract, you certify that all information provided is true and accurate to the best of your
              knowledge. You understand that this information may be retained as part of Second Chance Pigeon Rescue&apos;s adoption
              records. Application responses are recorded as submitted by the adopter and may be transcribed into internal adoption
              records for documentation purposes. SCPR is not a 501(c)(3) nonprofit organization, and therefore, the Adoption Donation
              is not tax-deductible.
            </p>
            <p>
              Fields to be filled manually by SCPR in the adoption contract are listed as [TERM]. For example:
              <br />
              <span className="not-italic">
                I, [FULL NAME], (hereinafter referred to as “Adopter”) = I, John Doe, (hereinafter referred to as “Adopter”).
              </span>
            </p>
          </div>

          <AccentHeading>Second Chance Pigeon Rescue</AccentHeading>
          <h3>Adoption Contract</h3>

          <p>
            I, ___[FULL NAME]___, (hereinafter referred to as “Adopter”) attest to the facts stated in the submitted Adoption
            Application and agree to the terms of the Second Chance Pigeon Rescue Adoption Contract (hereinafter referred to as
            “Adoption Contract”). Hereinafter, Adopter&apos;s address is referred to as “Adopter&apos;s Location.”
          </p>
          <p>__[FULL NAME]__ __[PHONE #]__ __[ADDRESS]__</p>
          <p className="mt-10">
            The following terms and conditions constitute a legal contract for the adoption of the pigeon(s) referred to above between
            Marilynn Walz, operating under the name “Second Chance Pigeon Rescue” (hereinafter referred to as “SCPR”) and Adopter. These
            terms and conditions are entered into and agreed upon by both parties, and they acknowledge the legal worth of this contract
            as of:
          </p>
          <p>___[SIGNED DATE]___</p>
          <p className="mt-10">Adopter consents to adopt the following pigeon(s) (hereinafter referred to as “Bird(s)”) from SCPR:</p>
          <p className="mb-10">
            __[BIRD ONE NAME]__ __[BIRD ONE RESCUE ID]__
            <br />
            __[BIRD TWO NAME]__ __[BIRD TWO RESCUE ID]__
          </p>

          <ol>
            <li>SCPR and Adopter agree to the adoption of the Bird(s) outlined in this contract with Adopter at Adopter&apos;s Location.</li>
            <li>
              Adopter agrees to submit post-adoption follow-up reports for the Bird(s), which are separately communicated through
              electronic communication to Adopter for completion at 1 day, 1 week, and 1 month post-adoption, each due within 24 hours of
              request.
            </li>
            <li>
              Adopter agrees that if, for any reason, Adopter is unable to keep the Bird(s), Adopter will contact and notify SCPR of the
              inability to keep the Bird(s) in their care, and the Bird(s) will either be:
              <ol type="a">
                <li>Returned to SCPR via shipping at the expense of the Adopter, unless otherwise communicated, or</li>
                <li>Returned to SCPR via pick up at the expense of SCPR and Adopter, or</li>
                <li>Rehomed to another individual with SCPR&apos;s approval.</li>
              </ol>
            </li>
            <li>
              SCPR may request a suggested donation for the Bird(s) (the “Adoption Donation”), which may be communicated in writing or
              electronically. The Adoption Donation helps offset costs expended by SCPR for health, nutrition, enrichment, housing, and
              veterinary care provided while the Bird(s) were in SCPR’s care. The Adoption Donation is voluntary and is not required for
              adoption approval. If provided, payment may be made via cash or Cash App at or before the time of transfer of the Bird(s) to
              Adopter. Any Adoption Donation made is non-refundable unless otherwise stated in writing.
            </li>
            <li>
              Adopter agrees to provide a caring and healthy home to the Bird(s) in accordance with this Adoption Contract. Adopter
              further agrees to the following care requirements:
              <ul>
                <li>The Bird(s) must not be raced, free flown, abandoned, dumped, released, experimented on, or used in any other harmful activity.</li>
                <li>The Bird(s) must not reproduce or be placed in a breeding situation.</li>
                <li>The Bird(s) must be housed in a safe and secure enclosure, including protection from escape, injury, predators, or other hazards.</li>
                <li>The Bird(s) must be provided a proper diet approved by SCPR, or otherwise recommended by a licensed avian veterinarian.</li>
                <li>
                  The Bird(s) must receive prompt veterinary care from a licensed avian veterinarian in the event of illness, injury,
                  abnormal behavior, or signs of distress that warrant a veterinary visit.
                </li>
                <li>The Bird(s) must remain in a smoke-free environment.</li>
                <li>The Bird(s) must not be subjected to neglect, intentional harm, improper handling, or abuse.</li>
                <li>
                  The Bird(s) must not be subjected to any conditions or care practices that are known to be harmful or that are not
                  approved by SCPR or a licensed avian veterinarian.
                </li>
              </ul>
            </li>
            <li>
              Adopter shall allow SCPR to inspect the Adopter&apos;s Location with 24 hours&apos; notice, in person or via video call,
              to determine whether Adopter is complying with all terms and conditions of this Adoption Contract, including providing an
              acceptable environment for the Bird(s). If SCPR determines that Adopter is not complying with this Adoption Contract or that
              continued placement of the Bird(s) is not in the best interests of the Bird(s), SCPR may terminate this Adoption Contract.
              Upon termination, Adopter agrees to immediately return the Bird(s) to SCPR by one of the following methods, at
              Adopter&apos;s expense:
              <ol type="a">
                <li>Return the Bird(s) to SCPR via shipping, or</li>
                <li>Allow SCPR to arrange pick-up of the Bird(s).</li>
              </ol>
            </li>
            <li>Any changes in Adopter&apos;s contact information must be made available to SCPR within 30 days.</li>
            <li>Adopter shall provide any information concerning the care and status of the Bird(s) to SCPR when requested.</li>
            <li>
              Adopter shall never sell, lease, loan, gift, or otherwise transfer (collectively “transfer”) the Bird(s) in any way without
              prior approval of SCPR. If Adopter transfers the Bird(s) without express prior written or electronic approval of SCPR, SCPR
              will terminate the Adoption Contract and will remove the Bird(s) at the expense of Adopter.
            </li>
            <li>
              Adopter understands that the Bird(s) may have or may develop a different personality or different habits than initially
              communicated upon arrival at the Adopter&apos;s Location.
            </li>
            <li>
              Adopter and their family members shall release and discharge SCPR and all other persons or entities liable or claimed to
              be liable for any and all actions, claims, or complaints from damages, losses, and expenses sustained, or alleged to have
              been sustained, of any kind or nature whatsoever arising out of or relating to Adopter&apos;s keeping of the Bird(s), except
              to the extent caused by the gross negligence or intentional misconduct of SCPR.
            </li>
            <li>
              SCPR makes no representations, warranties, or guarantees and assumes no liability for the health, age, sex, temperament,
              behavior, or condition of the Bird(s). Adopter agrees to take the Bird(s) “AS IS” without any warranties.
            </li>
            <li>Adopter agrees to be responsible for all required and subsequent veterinary care for the Bird(s).</li>
            <li>
              The failure of SCPR to insist upon strict performance by Adopter of any provisions of this Adoption Contract shall not be
              deemed a waiver of any subsequent breach or default in any provisions of this Adoption Contract.
            </li>
            <li>Should the Bird(s) die, Adopter shall provide immediate (within 12 hours) notice to SCPR.</li>
            <li>If any provision of this Adoption Contract is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</li>
            <li>This Adoption Contract constitutes the entire agreement between the parties and supersedes all prior discussions or agreements.</li>
          </ol>

          <p>
            By signing below, in writing or electronically, Adopter signifies they have read, understand, and agree to the terms of the
            submitted Adoption Contract and affirms that the responses in the Adoption Application are accurate and complete. Adopter
            understands and agrees to the terms of this Adoption Contract.
          </p>

          <Form action={FORMS.adoptionContract}>
            <Field name="fullname" label="Full Name" />
            <Field name="signature" label="Sign Below (Print Full Name)" />
            <Field name="date" label="Date" type="date" />
            <button type="submit" className={buttonClass()}>
              Submit Adoption Contract
            </button>
          </Form>
        </TextColumn>
      </SplitLayout>
    </Section>
  );
}
