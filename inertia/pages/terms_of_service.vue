<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { tuyau } from '~/core/providers/tuyau'
</script>

<template>
  <Head title="Terms of service" />

  <header>
    <h1>Terms of service</h1>
  </header>

  <main>
    <section>
      <h2>Company Information</h2>
      <p>
        All services are provided by <strong>Mynte Studio</strong>, a company registered in Dubai,
        UAE (<Link :href="tuyau.$url('legal_disclaimer.render')">see Legal Disclaimer</Link> for
        full company details).
      </p>
      <p>Contact: <a href="mailto:hello@mynte.studio">hello@mynte.studio</a> | +33 7 43 62 44 01</p>
    </section>

    <section>
      <h2>Services Provided</h2>
      <p>
        Mynte Studio offers web design, development, maintenance, and digital consultancy services.
      </p>
      <ul>
        <li>All services are described in the project proposal or quotation.</li>
        <li>
          Any additional work outside the initial scope will require written approval and may incur
          extra charges.
        </li>
      </ul>
    </section>

    <section>
      <h2>Acceptance of Terms</h2>
      <p>
        By placing an order, signing a proposal, or engaging our services, the client agrees to
        these Terms of Service.
      </p>
      <p>
        Contracts may be formalized via email confirmation, signed quotation, or other written
        agreement.
      </p>
    </section>

    <section>
      <h2>Pricing and Payment</h2>
      <ul>
        <li>
          Prices are indicated in the quotation provided and are valid for the period specified.
        </li>
        <li>Payments are accepted via bank transfer or credit card unless otherwise agreed.</li>
        <li>Payment terms: 50% upfront, 50% upon delivery (or as specified in the quotation).</li>
        <li>
          Late payments may incur a 1.5% monthly penalty or the maximum allowed by applicable law.
        </li>
      </ul>
    </section>

    <section>
      <h2>Duration and Termination</h2>
      <p>Service duration is specified in the contract or quotation.</p>
      <p>
        Either party may terminate the contract with written notice in case of breach or
        non-performance.
      </p>
      <p>Termination does not exempt the client from paying for services already performed.</p>
    </section>

    <section>
      <h2>Responsibilities and Liability</h2>
      <ul>
        <li>Mynte Studio will perform services with professional diligence.</li>
        <li>
          The client must provide accurate information, materials, and access necessary for the
          project.
        </li>
        <li>
          The agency is not liable for damages resulting from incorrect or incomplete information
          supplied by the client.
        </li>
        <li>Liability is limited to the total fees paid for the service.</li>
      </ul>
    </section>

    <section>
      <h2>Intellectual Property</h2>
      <ul>
        <li>
          All work delivered remains the property of Mynte Studio until full payment is received.
        </li>
        <li>
          Upon full payment, rights of use are transferred to the client for the intended purpose.
        </li>
        <li>
          Any reuse, modification, or distribution beyond the agreed scope requires written
          permission.
        </li>
      </ul>
    </section>

    <section>
      <h2>Confidentiality</h2>
      <p>
        Both parties agree to maintain confidentiality regarding sensitive or private information
        specifically designated as confidential during the project. However, this does not restrict
        Mynte Studio from publicly sharing general processes, project methodologies, tutorials, live
        sessions, or code intended to be open-source. Any disclosure of client-sensitive material
        will require prior written consent.
      </p>
    </section>

    <section>
      <h2>Applicable Law and Dispute Resolution</h2>
      <p>
        UAE law governs the services provided. For clients located in the EU, EU law may apply to
        contractual relations.
      </p>
      <p>
        Disputes will be resolved in the competent courts of the UAE or EU depending on client
        location and agreement.
      </p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>
        For any questions regarding these Terms of Service or a specific project, contact:
        <a href="mailto:hello@mynte.studio">hello@mynte.studio</a> | +33 7 43 62 44 01
      </p>
    </section>
  </main>
</template>
