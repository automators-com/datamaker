import sha256 from "crypto-js/sha256";
import { prisma } from "../../../lib/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Getting email and password from body
    const { first_name, last_name, email, password, organization, org_id } =
      req.body;

    // Validate
    if (!email || !email.includes("@") || !password) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }

    // Check existing
    const checkExistingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    // Send error response if duplicate user is found
    if (checkExistingUser) {
      res.status(422).json({ message: "User already exists" });
      return;
    }

    let checkExistingOrg;
    if (org_id) {
      // Check existing
      checkExistingOrg = await prisma.organization.findUnique({
        where: { id: org_id },
      });
    } else {
      checkExistingOrg = await prisma.organization.findFirst({
        where: {
          name: organization.toLowerCase(),
        },
      });
    }

    // Hash password and create user
    const hashed_pwd = sha256(password).toString();

    // Check if organization exists
    let org;
    let invite;
    let isOwner = false;
    if (!checkExistingOrg) {
      // If it does not exist create a new organization
      org = await prisma.organization.create({
        data: {
          name: organization.toLowerCase(),
        },
      });
      isOwner = true;
    } else {
      // If it does exist, check for active invite
      org = await prisma.organization.findFirst({
        where: {
          name: checkExistingOrg.name,
        },
      });

      invite = await prisma.invite.findFirst({
        where: {
          email: email.toLowerCase(),
          org_id: org.id,
          expiry: {
            gt: new Date(),
          },
        },
      });

      if (!invite) {
        res.status(422).json({ message: "No active invite found" });
        return;
      }
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        first_name: first_name.toLowerCase(),
        last_name: last_name.toLowerCase(),
        email: email.toLowerCase(),
        password: hashed_pwd,
      },
    });

    // Assign user to organization
    const userOrg = await prisma.userOrganization.create({
      data: {
        start_date: invite ? invite.start_date : new Date(),
        end_date: invite?.end_date || null,
        consultancy_percentage: invite?.consultancy_percentage || 100,
        relation: invite?.relation || null,
        country: null,
        rate: invite ? invite.rate : null,
        show_in_planning: invite?.show_in_planning || true,
        team_lead_id: invite?.team_lead_id || null,
        is_team_lead: invite?.is_team_lead || false,
        role: isOwner ? `owner` : invite ? invite.role : "user",
        User: {
          connect: {
            id: user.id,
          },
        },
        Organization: {
          connect: {
            id: org.id,
          },
        },
      },
    });

    // Send success response
    res.status(201).json({ message: "User created", data: userOrg });
  } else {
    res.status(500).json({ message: "Route not valid", data: null });
  }
}
