import { EmailCheckerHowWork } from "@/types";

export const HowEmailCheckerWork: EmailCheckerHowWork[] = [
  {
    title: "Check syntax",
    icon: "syntaxCheck",
    description:
      "The syntax check checks whether the structure of the email address is correct according to RFC 5322 and RFC 5321. The first part of the address may consist of up to 64 characters, the second part of the address may consist of up to 253 characters. The first part may consist of Latin letters, numbers, and some special characters. The second part must be a valid domain.",
  },
  {
    title: "Check mail server",
    icon: "mailServer",
    description:
      "In the second step we determine the MX records for the domain. Only if the domain has a mail server entry, an email can be delivered.",
  },
  {
    title: "Check connection",
    icon: "checkConnection",
    description:
      "In the third step we simulate the sending of an email and try to establish a connection to the mail server via SMTP. No actual email is sent. Only if the mail server is reachable, an email can be delivered.",
  },
  {
    title: "Check Catch-All",
    icon: "catchAll",
    description:
      "If a connection to the mail server is possible, we check if the mail server accepts a connection for any email. Only if this is not the case, we can say with certainty whether the email address is valid.",
  },
];
