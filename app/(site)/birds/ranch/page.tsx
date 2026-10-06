import type { Metadata } from "next";
import { BirdProfile } from "@/components/Birds";
import { getBird } from "@/lib/birds";

const bird = getBird("ranch");

export const metadata: Metadata = { title: bird.name };

export default function RanchPage() {
  return (
    <BirdProfile bird={bird} status="Available">
      <p>
        Meet this adorable, sweet baby, Ranch! He was rescued by a member of the public and given to use soon after, and raised here
        at SCPR with the help of a foster pair! He&apos;s assumed to be born around the first week of August based on his development
        at the time.
      </p>
      <p>
        Since then, Ranch has been raised as an indoor bird and is ready to find his forever home! He&apos;s weaned completely from
        crop milk and eats mostly Mazuri Checkers Pelleted at the moment, though he can easily be switched onto an all-seed diet.
      </p>
      <ul>
        <li>
          Although he was raised in captivity and handled consistently, that doesn&apos;t guarantee he&apos;ll be sweet or
          affectionate. Personality is something we won&apos;t know until he reaches maturity, and that can change from
          person-to-person.
        </li>
        <li>Assumed male; not DNA sexed!</li>
      </ul>
    </BirdProfile>
  );
}
